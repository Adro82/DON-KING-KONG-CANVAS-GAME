class LiveCounter{

    constructor(ctx, canvasSize, liveWidth, liveHeight, liveX, liveY) {
        this.ctx = ctx
        this.canvasSize = canvasSize

        this.liveSize = { w: liveWidth, h: liveHeight }
        this.livePos = { x: liveX, y: liveY }
        this.init()

    }

    init() {
        this.draw()
    }

    draw() {

        this.imageInstance = new Image()
        this.imageInstance.src = './images/heart.png'
        this.ctx.drawImage(this.imageInstance, this.livePos.x, this.livePos.y, this.liveSize.w, this.liveSize.h)
        // this.ctx.fillStyle = 'red'
        // this.ctx.fillRect(this.livePos.x, this.livePos.y, this.liveSize.w, this.liveSize.h)
    }


}