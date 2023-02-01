class Mario {
    constructor(ctx, canvasSize, marioWidth, marioHeight, marioX, marioY, lives = 3) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.marioSize = {
            w: marioWidth,
            h: marioHeight
        }
        this.marioPos = {
            x: marioX,
            y: marioY
        }
        this.lives = lives
        this.marioVel = { x: 0, y: 0 }
        this.gravityActive = true
        this.gravity = 0.4;
        this.canMoveUpDown = false
        this.init()
        this.setEventListeners()

    }

    init() {
        this.draw()
        this.move()
    }

    draw() {
        this.imageInstance = new Image()
        this.imageInstance.src = './images/car.png'
        this.ctx.drawImage(this.imageInstance, this.marioPos.x, this.marioPos.y, this.marioSize.w, this.marioSize.h)
    }

    move() {
        if (this.gravityActive) {
            this.marioVel.y += this.gravity
            this.marioPos.y += this.marioVel.y
        }
    }
    moveUp() {
        if (this.canMoveUpDown) { this.marioPos.y -= 10}
    }
    moveDown() {
        if (this.canMoveUpDown) { this.marioPos.y += 10}
    }

    setEventListeners() {

        document.onkeydown = evt => {
            if (evt.key === 'ArrowLeft' && this.marioPos.x > 0) this.marioPos.x -= 20
            if (evt.key === 'ArrowRight' && this.marioPos.x < 850) this.marioPos.x += 20
            if (evt.key === 'ArrowUp' && this.marioPos.y > 0) { this.moveUp() }
            if (evt.key === 'ArrowDown' && this.marioPos.y < 570) { this.moveDown() }
        }

    }
}
