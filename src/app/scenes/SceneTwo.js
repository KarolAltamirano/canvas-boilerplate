import Square from '../prefab/Square';

export default class SceneTwo {
    constructor(ctx) {
        this.square = new Square(ctx);
        this.squareX = 0;
        this.squareY = 0;
        this.squareProgress = 0;
    }

    update() {
        this.squareX = window.innerWidth / 2;
        this.squareY = window.innerHeight / 2;
        this.squareProgress = 1;
        this.square.update();
    }

    draw() {
        this.square.draw(this.squareX, this.squareY, this.squareProgress);
    }
}
