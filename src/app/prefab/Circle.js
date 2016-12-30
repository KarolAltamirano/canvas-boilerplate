export default class Circle {
    constructor(ctx) {
        this.ctx = ctx;
        this.radius = 100;
    }

    // eslint-disable-next-line
    update() { }

    draw(x, y, progress) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, this.radius, 0, (2 * Math.PI) * progress, false);
        this.ctx.lineWidth = 6;
        this.ctx.strokeStyle = '#000099';
        this.ctx.stroke();
    }
}
