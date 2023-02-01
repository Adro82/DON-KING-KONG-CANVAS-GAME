class Platform {

    constructor(ctx, canvasSize, platformWidth, platformHeight, platformX, platformY) {
        this.ctx = ctx
        this.canvasSize = canvasSize

        this.platformSize = { w: platformWidth, h: platformHeight }
        this.platformPos = { x: platformX, y: platformY }
        this.init()

    }

    init() {
        this.draw()
    }

    draw() {
        this.imageInstance = new Image()
        this.imageInstance.src = './images/platform.png'
        this.ctx.drawImage(this.imageInstance, this.platformPos.x, this.platformPos.y, this.platformSize.w, this.platformSize.h)
        // this.ctx.fillStyle = 'lightgrey'
        // this.ctx.fillRect(this.platformPos.x, this.platformPos.y, this.platformSize.w, this.platformSize.h)
    }


}