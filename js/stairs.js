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
        this.imageInstance = new Image()
        this.imageInstance.src = './images/ladder.png'
        this.ctx.drawImage(this.imageInstance, this.stairsPos.x, this.stairsPos.y, this.stairsSize.w, this.stairsSize.h)
    }
}