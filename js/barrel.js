class barrel {

    constructor(ctx, canvasSize) {
        //, barrelWidth, barrelHeight, barrelX, barrelY
        this.ctx = ctx
        this.canvasSize = canvasSize

        this.barrelSize = { w: 30, h: 30 }
        // { w: 500, h: 50 }
        this.barrelPosition = {
            x: Math.random() * (this.canvasSize.w - this.barrelSize.w * 2) + this.barrelSize.w,
            y: 0 - this.barrelSize.h
        }
        // { x: 100, y: 100 }
        //this.barrelVelocity = {x: 5, y:1}
        //this.barrelPhysics = { gravity: .1}

        this.init()

    }

    init() {
        this.draw()
        this.move()
        //this.generateBarrelRandom()
        //this.positionRandom()
        //this.ctx.fillRect(400, 10, 20, 20)
    }

    draw() {
        this.ctx.fillStyle = 'pink'
        this.ctx.fillRect(this.barrelPosition.x, this.barrelPosition.y, this.barrelSize.w, this.barrelSize.h)
    }

    move() {
        this.barrelPosition.y += 5
    }

    // generateBarrel() {
    //     if(this.framesCounter % 70 === 0) {
    //         this.barrel.push()
    //     }
    // }
    // generateBarrelRandom(min, max) {
    //     return Math.floor(Math.random() * (max - min)) + min
    // }
}