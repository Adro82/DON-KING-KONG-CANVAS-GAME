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
        this.gravity = 0.6;
        this.canMoveUpDown = true
        this.imageInstance = new Image()
        this.imageInstance.src = './images/marioright.png'
        this.imageInstance.frames = 3
        this.imageInstance.framesIndex = 0

        this.init()
        this.setEventListeners()
        this.canMoveRight = false
        this.canMoveLeft = false

    }

    init() {
        this.draw()
        this.move()
    }

    draw(framesCounter) {
        this.ctx.drawImage(this.imageInstance, (this.imageInstance.width / this.imageInstance.frames) * this.imageInstance.framesIndex, 0, this.imageInstance.width / this.imageInstance.frames, this.imageInstance.height, this.marioPos.x, this.marioPos.y, this.marioSize.w, this.marioSize.h)
        this.animate(framesCounter)
    }

    animate(framesCounter) {
        if (framesCounter % 4 == 0) {
            this.imageInstance.framesIndex++
        }

        if (this.imageInstance.framesIndex >= this.imageInstance.frames) {
            this.imageInstance.framesIndex = 0
        }
    }

    move() {
        if (this.gravityActive) {
            this.marioVel.y += this.gravity
            this.marioPos.y += this.marioVel.y
        }
    }
    moveUp() {
        if (this.canMoveUpDown) { this.marioPos.y -= 15 }
    }
    moveDown() {
        if (this.canMoveUpDown) { this.marioPos.y += 15 }
    }
    moveRight() {
        if (this.marioPos.x < this.canvasSize.w - this.marioSize.w) { this.marioPos.x += 10 }
    }
    moveLeft() {
        if (this.marioPos.x > 10) { this.marioPos.x -= 10 }
    }

    setEventListeners() {

        document.onkeydown = evt => {
            if (evt.key === 'ArrowLeft' && this.marioPos.x) this.canMoveLeft = true
            if (evt.key === 'ArrowRight' && this.marioPos.x) this.canMoveRight = true
            if (evt.key === 'ArrowUp' && this.marioPos.y > 1) { this.moveUp() }
            if (evt.key === 'ArrowDown' && this.marioPos.y < 620) { this.moveDown() }
        }

        document.onkeyup = evt => {
            if (evt.key === 'ArrowLeft' && this.marioPos.x) this.canMoveLeft = false
            if (evt.key === 'ArrowRight' && this.marioPos.x) this.canMoveRight = false
        }

    }
}
