class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    equals(point) {
        return this.x == point.x && this.y == point.y;
    }

    draw(ctx, size = 8, color = "black") {
        const rad = size;
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(this.x, this.y, rad, 0, Math.PI * 2);
        ctx.fill();
    }
}
