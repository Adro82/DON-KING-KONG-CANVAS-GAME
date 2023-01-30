class Platform {

    constructor(ctx, canvasSize, platformWidth, platformHeight, platformX, platformY) {
        this.ctx = ctx
        this.canvasSize = canvasSize

        this.platformSize = {w: platformWidth, h: platformHeight}
        this.platformPos = {x: platformX, y: platformY}
        this.init()

    }

    init() {
        this.draw()
    }

    draw() {
        this.ctx.fillStyle = 'lightgrey'
        this.ctx.fillRect(this.platformPos.x, this.platformPos.y, this.platformSize.w, this.platformSize.h)
    }


}