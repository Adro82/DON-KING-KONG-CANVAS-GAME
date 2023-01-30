class Stairs {

    constructor(ctx, canvasSize, stairsWidth, stairsHeight, stairsX, stairsY) {
        this.ctx = ctx
        this.canvasSize = canvasSize

        this.stairsSize = {w: stairsWidth,h: stairsHeight}
        this.stairsPos = {x: stairsX, y: stairsY}
        this.init()

    }

    init() {
        this.draw()
    }

    draw() {
        this.ctx.fillStyle = 'pink'
        this.ctx.fillRect(this.stairsPos.x, this.stairsPos.y, this.stairsSize.w, this.stairsSize.h)
    }
}