class Barrel {

    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.barrelSize = { w: 30, h: 30 }
        this.barrelPos = {
            x: Math.random() * (this.canvasSize.w - this.barrelSize.w * 2) + this.barrelSize.w,
            y: 0 - this.barrelSize.h
        }
        this.init()
    }

    init() {
        this.draw()
    }

    draw() {
        this.imageInstance = new Image()
        this.imageInstance.src = './images/barrel.png'
        this.ctx.drawImage(this.imageInstance, this.barrelPos.x, this.barrelPos.y, this.barrelSize.w, this.barrelSize.h)
    }

    move() {
        this.barrelPos.y += 20
    }
}