import Stats from 'stats.js';

export default class Canvas {
    constructor(el) {
        this.stats = new Stats();
        this.stats.showPanel(1);
        document.body.appendChild(this.stats.dom);

        this.width = null;
        this.height = null;
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.scene = null;

        el.appendChild(this.canvas);

        this.resize = this.resize.bind(this);
        this.loop = this.loop.bind(this);

        window.addEventListener('resize', this.resize);
        this.resize();
    }

    resize() {
        this.ratio = window.devicePixelRatio || 1;
        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.canvas.width = this.width * this.ratio;
        this.canvas.height = this.height * this.ratio;
        this.canvas.style.width = `${this.width}px`;
        this.canvas.style.height = `${this.height}px`;
    }

    showScene(scene) {
        if (this.scene && this.scene.destroy) {
            this.scene.destroy().then(() => {
                this.scene = scene;
                this.scene.init();
            });

            return;
        }

        this.scene = scene;
        this.scene.init();
    }

    removeScene() {
        if (!this.scene || !this.scene.destroy) {
            return;
        }

        this.scene.destroy().then(() => {
            this.scene = null;
        });
    }

    update() {
        if (!this.scene) {
            return;
        }

        this.scene.update();
    }

    draw() {
        this.ctx.save();
        this.ctx.scale(this.ratio, this.ratio);

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        if (this.scene) {
            this.scene.draw();
        }

        this.ctx.restore();
    }

    loop() {
        requestAnimationFrame(this.loop);

        this.stats.begin();
        this.update();
        this.draw();
        this.stats.end();
    }
}
