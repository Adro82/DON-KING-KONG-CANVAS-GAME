class platform {

    constructor(ctx, canvasSize, platformWidth, platformHeight, platformX, platformY) {
        this.ctx = ctx
        this.canvasSize = canvasSize

        this.platformSize = {
            w: platformWidth,
            h: platformHeight
        }
        // { w: 500, h: 50 }
        this.platformPos = {
            x: platformX,
            y: platformY
        }
        // { x: 100, y: 100 }
        this.init()

    }

    init() {
        this.draw()
        //this.ctx.fillRect(400, 10, 20, 20)
    }

    draw() {
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.platformPos.x, this.platformPos.y, this.platformSize.w, this.platformSize.h)
    }


}