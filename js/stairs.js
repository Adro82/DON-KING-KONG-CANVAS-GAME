class stairs {

    constructor(ctx, canvasSize, stairsWidth, stairsHeight, stairsX, stairsY) {
        this.ctx = ctx
        this.canvasSize = canvasSize

        this.stairsSize = {
            w: stairsWidth,
            h: stairsHeight
        }
        // { w: 500, h: 50 }
        this.stairsPos = {
            x: stairsX,
            y: stairsY
        }
        // { x: 100, y: 100 }
        this.init()

    }

    init() {
        this.draw()
        //this.ctx.fillRect(400, 10, 20, 20)
    }

    draw() {
        this.ctx.fillStyle = 'blue'
        this.ctx.fillRect(this.stairsPos.x, this.stairsPos.y, this.stairsSize.w, this.stairsSize.h)
    }


}