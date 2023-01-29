class mario {

    // constructor(ctx, canvasSize, marioSize, marioPos, marioRight, marioLeft, marioUp, marioDown) {
    //     this.ctx = ctx
    //     this.canvasSize = canvasSize
    //     {w: undefined, y:undefined}
    //     this.marioSize = marioSize
    //     // {w:100, h:100}
    //     // this.marioSpeed = marioSpeed
    //     this.marioRight = marioRight
    //     this.marioLeft = marioLeft
    //     this.marioUp = marioUp
    //     this.marioDown = marioDown
    //     this.marioPos = marioPos
    //     // {x: 0, y: 600}

    //     this.init()

    //     }

    //     init(){
    //         this.draw()
    //         this.move()
    //     }

    //     move(){
    //         if (this.marioLeft && this.marioPos.x > 0) {
    //             this.marioPos.x - 5
    //         }
    //         if (this.marioRight && (this.marioPos.x + this.marioSize.w) < this.canvasSize.w) {
    //             this.marioPos.x += 5
    //         }

    //         // this.marioPos.x += this.marioSpeed
    //         // this.marioPos.y += this.marioSpeed
    //     }

    //     draw() {
    //         this.imageInstance = new Image()
    //         this.imageInstance.src = './images.car.png'
    //         // this.move()
    //         this.ctx.drawImage(this.imageInstance, this.marioPos.x, this.marioPos.y, this.marioSize.w, this.marioSize.h)
    //     }

    constructor(ctx, canvasSize, marioWidth, marioHeight, marioX, marioY, marioRight, marioLeft, marioUp, marioDown) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.marioRight = marioRight
        this.marioLeft = marioLeft
        this.marioUp = marioUp
        this.marioDown = marioDown

        this.marioSize = {
            w: marioWidth,
            h: marioHeight
        }
        // { w: 500, h: 50 }
        this.marioPos = {
            x: marioX,
            y: marioY
        }

        this.marioSpeed = 10

        // { x: 100, y: 100 }
        this.init()
        this.setEventListeners()

    }

    init() {
        this.draw()
        this.move()
        //this.ctx.fillRect(400, 10, 20, 20)
    }

    draw() {
        this.imageInstance = new Image()
        this.imageInstance.src = './images/car.png'
        this.ctx.drawImage(this.imageInstance, this.marioPos.x, this.marioPos.y, this.marioSize.w, this.marioSize.h)
        // this.ctx.fillStyle = 'pink'
        // this.ctx.fillRect(this.marioPos.x, this.marioPos.y, this.marioSize.w, this.marioSize.h)
    }

    move (){
        this.marioPos.y += 10
        this.marioPos.y -= 10
        this.marioPos.x += 10
        this.marioPos.x -= 10
    }
    setEventListeners() {

        // document.onkeydown = evt => {
        //     if (evt.key === 'ArrowRigth') this.marioRight = true
        //     if (evt.key === 'ArrowLeft') this.marioLeft = true
        //     if (evt.key === 'ArrowUp') this.marioUp = true
        //     if (evt.key === 'ArrowDown') this.marioDown = true
        // }

        // document.onkeyup = evt => {
        //     if (evt.key === 'ArrowRigth') this.marioRight = false
        //     if (evt.key === 'ArrowLeft') this.marioLeft = false
        //     if (evt.key === 'ArrowUp') this.marioUp = false
        //     if (evt.key === 'ArrowDown') this.marioDown = false
        //     console.log(this.setEventListeners)
        // }

        document.onkeydown = evt => {
            if (evt.key === 'ArrowLeft' && this.marioPos.x > 0) this.marioPos.x -= 10
            if (evt.key === 'ArrowRight' && this.marioPos.x < 850) this.marioPos.x += 10
            if (evt.key === 'ArrowUp' && this.marioPos.y > 0) this.marioPos.y -= 10
            if (evt.key === 'ArrowDown' && this.marioPos.y < 570) this.marioPos.y += 10
        }
        // document.onkeydown = evt =>{
        //     if (evt.key === 'Arrowleft' && (this.marioPos.x + this.marioSize.w) > this.canvasSize.w) this.marioPos.x -= 5
        //     //if (this.marioLeft && this.marioPos.x > 0) this.marioPos.x -= 5
        //     if (evt.key === 'ArrowRigth' && (this.marioPos.x + this.marioSize.w) < this.canvasSize.w) this.marioPos.x += 5
        //     //if (this.marioUp && this.marioPos.y > 600) this.marioPos.y -= 5
        //     if (evt.key === 'ArrowUp' && (this.marioPos.y + this.marioSize.h) < this.canvasSize.h) this.marioPos.y -= 5
        //     if (evt.key === 'ArrowDown' && (this.marioPos.y + this.marioSize.h) < this.canvasSize.h) this.marioPos.y += 5
        // }
        //&& this.carPosition.x < 200 && this.carPosition.x > 100
    }
}

