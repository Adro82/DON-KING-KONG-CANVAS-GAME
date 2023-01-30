class mario {
    constructor(ctx, canvasSize, marioWidth, marioHeight, marioX, marioY, marioRight, marioLeft, marioUp, marioDown) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        // this.marioRight = marioRight
        // this.marioLeft = marioLeft
        // this.marioUp = marioUp
        // this.marioDown = marioDown
        this.marioSize = {
            w: marioWidth,
            h: marioHeight
        }
        this.marioPos = {
            x: marioX,
            y: marioY
        }
        this.marioVel = { x: 0, y: 0 }
        this.gravity = 0.1;
        this.init()
        this.setEventListeners()

    }

    init() {
        this.draw()
        this.move()
        // this.checkHitBox()
    }

    draw() {
        this.imageInstance = new Image()
        this.imageInstance.src = './images/car.png'
        this.ctx.drawImage(this.imageInstance, this.marioPos.x, this.marioPos.y, this.marioSize.w, this.marioSize.h)
        // this.ctx.fillStyle = 'pink'
        // this.ctx.fillRect(this.marioPos.x, this.marioPos.y, this.marioSize.w, this.marioSize.h)
    }

    move() {
        this.marioPos.x += this.marioVel.x
        this.marioPos.y += this.marioVel.y

        this.marioVel.y += this.gravity

        if (this.marioPos.y > this.canvasSize.h - this.marioSize.h) {
            this.marioVel.y = 0
        }

        if (this.marioPos.x >= this.canvasSize.w - this.marioSize.w) {
            this.marioVel.x = 0
        }
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
    }
    // checkHitBox(element, level) {
    //     console.log ('estoy en la funcion')
    //     switch (element) {
    //         case this.platform:
    //             const platform = element[level].map((e) =>{
    //                 if (
    //                     this.position.x < e.platformPos.x + e.platformSize.w &&
    //                     this.position.x + this.marioSize.w > e.platformPos.x &&
    //                     this.position.y < e.platformPos.y + e.platformSize.h &&
    //                     this.position.y + this.marioSize.h > e.platformPos.y
    //                  ){
    //                     this.position.y = e.platformPos.y - this.marioSize.h +1
    //                     return true
    //                  }
    //                  else {return false}
    //             }) 
    //             return platform.some((e) => e === true);
    //         }
    // }
}
