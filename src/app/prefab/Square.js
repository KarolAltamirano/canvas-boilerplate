export default class Square {
    constructor(ctx) {
        this.ctx = ctx;
        this.size = 200;
    }

    // eslint-disable-next-line
    update() { }

    draw(x, y, progress) {
        const x0 = x - (this.size / 2);
        const y0 = y - (this.size / 2);
        const x1 = x + (this.size / 2);
        const y1 = y + (this.size / 2);

        this.ctx.beginPath();

        this.ctx.lineWidth = 6;
        this.ctx.strokeStyle = '#000099';
        this.ctx.lineCap = 'square';

        this.ctx.moveTo(x0, y0);
        this.ctx.lineTo((x1 - this.size) + (this.size * progress), y0);

        this.ctx.moveTo(x1, y0);
        this.ctx.lineTo(x1, (y1 - this.size) + (this.size * progress));

        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo((x0 + this.size) - (this.size * progress), y1);

        this.ctx.moveTo(x0, y1);
        this.ctx.lineTo(x0, (y0 + this.size) - (this.size * progress));

        this.ctx.stroke();
    }
}
