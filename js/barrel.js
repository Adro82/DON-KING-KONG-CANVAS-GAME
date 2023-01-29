class barrel {

    constructor(ctx, canvasSize) {
        //, barrelWidth, barrelHeight, barrelX, barrelY
        this.ctx = ctx
        this.canvasSize = canvasSize

        this.barrelSize = {w: 50,h: 50}
        // { w: 500, h: 50 }
        this.barrelPosition = {x: 0,y: 0}
        // { x: 100, y: 100 }
        //this.barrelVelocity = {x: 5, y:1}
        //this.barrelPhysics = { gravity: .1}
        
        this.init()

    }

    init() {
        this.draw()
        this.move()
        //this.generateBarrelRandom()
       // this.positionRandom()
        //this.ctx.fillRect(400, 10, 20, 20)
    }

    draw() {
        this.ctx.fillStyle = 'pink'
        this.ctx.fillRect(this.barrelPosition.x, this.barrelPosition.y, this.barrelSize.w, this.barrelSize.h)
    }

    move() {
        this.barrelPosition.y += 5
    }
    // generateBarrelRandom(min, max) {
    //     return Math.floor(Math.random() * (max - min +1)) + min
    //     }
    //     positionRandom() {
    //         this.position.x = this.generateBarrelRandom 
    // }
 }