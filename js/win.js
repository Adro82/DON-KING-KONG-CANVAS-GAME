class Win {
    constructor(ctx, canvasSize, winWidth, winHeight, winX, winY) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.winSize = {
            w: winWidth,
            h: winHeight
        }
        this.winPos = {
            x: winX,
            y: winY
        }
        this.winVel = {
            x: 0, y: 0
        }
        this.init()
    }
    init() {
        this.draw()
    }
    draw() {
        this.imageInstance = new Image()
        this.imageInstance.src = './images/winGame.png'
        this.ctx.drawImage(this.imageInstance, this.winPos.x, this.winPos.y, this.winSize.w, this.winSize.h)

    }
}