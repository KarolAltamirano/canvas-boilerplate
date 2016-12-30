import Circle from '../prefab/Circle';

export default class SceneOne {
    constructor(ctx) {
        this.circle = new Circle(ctx);
        this.circleX = 0;
        this.circleY = 0;
        this.circleProgress = 0;
    }

    update() {
        this.circleX = window.innerWidth / 2;
        this.circleY = window.innerHeight / 2;
        this.circleProgress = 1;
        this.circle.update();
    }

    draw() {
        this.circle.draw(this.circleX, this.circleY, this.circleProgress);
    }
}
