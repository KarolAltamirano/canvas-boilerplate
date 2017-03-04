import gsap from 'gsap';
import Square from '../prefab/Square';

export default class SceneTwo {
    constructor(ctx) {
        this.square = new Square(ctx);
        this.squareX = null;
        this.squareY = null;
        this.squareProgress = null;
    }

    init() {
        this.squareProgress = 0;
        gsap.TweenMax.to(this, 0.4, { squareProgress: 1 });
    }

    destroy() {
        return new Promise((resolve) => {
            gsap.TweenMax.to(this, 0.4, { squareProgress: 0, onComplete: resolve });
        });
    }

    update() {
        this.squareX = window.innerWidth / 2;
        this.squareY = window.innerHeight / 2;
        this.square.update();
    }

    draw() {
        this.square.draw(this.squareX, this.squareY, this.squareProgress);
    }
}
