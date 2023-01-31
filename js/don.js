class Don {
    constructor(ctx, canvasSize, donWidth, donHeight, donX, donY) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.donSize = {
            w: donWidth,
            h: donHeight
        }
        this.donPos = {
            x: donX,
            y: donY
        }
        this.donVel = {
            x: 5, y: 0
        }
        this.init()
    }
    init() {
        this.draw()
    }
    draw() {
        this.imageInstance = new Image()
        this.imageInstance.src = './images/car.png'
        this.ctx.drawImage(this.imageInstance, this.donPos.x, this.donPos.y, this.donSize.w, this.donSize.h)
        this.move()
    }
    move() {
        if (this.donPos.x > 500) {
            this.donVel.x *= -1
        }
        if (this.donPos.x < 100) {
            this.donVel.x *= -1
        }
        this.donPos.x += this.donVel.x
    }
}