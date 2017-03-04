import gsap from 'gsap';
import Circle from '../prefab/Circle';

export default class SceneOne {
    constructor(ctx) {
        this.circle = new Circle(ctx);
        this.circleX = null;
        this.circleY = null;
        this.circleProgress = null;
    }

    init() {
        this.circleProgress = 0;
        gsap.TweenMax.to(this, 0.4, { circleProgress: 1 });
    }

    destroy() {
        return new Promise((resolve) => {
            gsap.TweenMax.to(this, 0.4, { circleProgress: 0, onComplete: resolve });
        });
    }

    update() {
        this.circleX = window.innerWidth / 2;
        this.circleY = window.innerHeight / 2;
        this.circle.update();
    }

    draw() {
        this.circle.draw(this.circleX, this.circleY, this.circleProgress);
    }
}
