export default class Canvas {
    constructor(el) {
        this.width = null;
        this.height = null;
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.objects = [];

        el.appendChild(this.canvas);

        this.resize = this.resize.bind(this);
        this.loop = this.loop.bind(this);

        window.addEventListener('resize', this.resize);
        this.resize();
    }

    resize() {
        this.scale = window.devicePixelRatio || 1;
        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.canvas.width = this.width * this.scale;
        this.canvas.height = this.height * this.scale;
        this.canvas.style.width = `${this.width}px`;
        this.canvas.style.height = `${this.height}px`;
    }

    addDisplayObject(object) {
        this.objects = [...this.objects, object];
    }

    removeDisplayObject(object) {
        const id = this.objects.indexOf(object);

        if (id > -1) {
            this.objects.splice(id, 1);
        }
    }

    ease() {
        this.easeProgress = this.easeProgress || 0;

        this.easeProgress += 0.02;

        if (this.easeProgress >= 1) {
            this.easeProgress = 1;
        }

        return this.easeProgress;
    }

    loop() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (let i = 0; i < this.objects.length; i++) {
            this.objects[i].draw(
                (this.scale * window.innerWidth) / 2,
                (this.scale * window.innerHeight) / 2,
                this.ease()
            );
        }

        requestAnimationFrame(this.loop);
    }
}
