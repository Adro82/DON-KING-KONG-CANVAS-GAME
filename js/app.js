const appBarrels = {
    name: 'barrels',
    description: 'Don King Kong 2D for Ironhack Project',
    version: '1.0.0',
    license: undefined,
    author: 'Adrian and Aldi',
    canvasTag: undefined,
    ctx: undefined,
    canvasSize: { w: 900, h: 700 },
    mario: undefined,
    don: undefined,
    framesCounter: 0,
    platforms: [],
    stairs: [],
    barrels: [],
    win: undefined,
    timer: 1,
    interval: undefined,

    init() {
        this.setContext()
        this.setDimensions()
        this.start()

    },
    setContext() {
        this.canvasTag = document.querySelector('canvas')
        this.ctx = this.canvasTag.getContext('2d')
        console.log(this.ctx)
    },

    setDimensions() {
        this.canvasTag.setAttribute('width', this.canvasSize.w)
        this.canvasTag.setAttribute('height', this.canvasSize.h)
    },


    reset() {
        this.platforms.push(
            new Platform(this.ctx, this.canvasSize, 500, 10, 200, 60),
            new Platform(this.ctx, this.canvasSize, 550, 20, 320, 150),
            new Platform(this.ctx, this.canvasSize, 300, 20, 80, 250),
            new Platform(this.ctx, this.canvasSize, 500, 20, 150, 400),
            new Platform(this.ctx, this.canvasSize, 400, 20, 500, 515),
            new Platform(this.ctx, this.canvasSize, 1000, 50, 0, 650),
        ),

            this.stairs.push(
                new Stairs(this.ctx, this.canvasSize, 20, 135, 750, 515),
                new Stairs(this.ctx, this.canvasSize, 20, 80, 530, 420),
                new Stairs(this.ctx, this.canvasSize, 20, 130, 230, 270),
                new Stairs(this.ctx, this.canvasSize, 20, 80, 350, 170),
                new Stairs(this.ctx, this.canvasSize, 20, 89, 550, 60),
            ),

            this.mario = new Mario(this.ctx, this.canvasSize, 15, 80, 10, 575, this.marioRight, this.marioLeft, this.marioUp, this.marioDown)
        console.log('plataforma')

        this.don = new Don(this.ctx, this.canvasSize, 15, 20, 250, 20)

        this.barrels.push(new Barrel(this.ctx, this.canvasSize))
        this.barrels = []

        this.win = new Win(this.ctx, this.canvasSize, 15, 20, 280, 20)
    },

    start() {
        this.reset()
        this.interval = setInterval(() => {
            this.framesCounter > 300 ? this.framesCounter = 0 : this.framesCounter++
            this.clearAll()
            this.drawAll()
            this.generateBarrel()
            this.clearBarrel()
            this.isColissionWithBarrel()
            this.isColissionWithStructure()
            this.isCollissionWithWin()
            this.isCollissionWithDon()

        }, 100)
    },

    drawAll() {
        this.drawBackground()
        this.platforms.forEach(Platform => Platform.draw())
        this.stairs.forEach(Stairs => Stairs.draw())
        this.mario.draw()
        this.mario.move()
        this.don.draw()
        this.don.move()
        this.win.draw()
        this.barrels.forEach(Barrel => Barrel.draw())
        this.barrels.forEach(Barrel => Barrel.move())
    },

    drawBackground() {
        this.ctx.fillStyle = 'darkgrey'
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },


    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    generateBarrel() {
        if (this.framesCounter % 70 === 0) {
            this.barrels.push(new Barrel(this.ctx, this.canvasSize))
        }
    },

    clearBarrel() {
        this.barrels = this.barrels.filter(Barrel => Barrel.barrelPos.x > 0)
    },

    isColissionWithBarrel() {

        this.barrels.forEach(barrel => {
            if (
                this.mario.marioPos.x < barrel.barrelPos.x + barrel.barrelSize.w &&
                this.mario.marioPos.x + this.mario.marioSize.w > barrel.barrelPos.x &&
                this.mario.marioPos.y < barrel.barrelPos.y + barrel.barrelSize.h &&
                this.mario.marioSize.h + this.mario.marioPos.y > barrel.barrelPos.y
            ) {
                this.gameOver()
            }

        })
    },

    isColissionWithStructure() {

        const hasCollisionedStairs = this.stairs.some(stair => {
            return (
                this.mario.marioPos.x <= stair.stairsPos.x + stair.stairsSize.w &&
                this.mario.marioPos.x + this.mario.marioSize.w >= stair.stairsPos.x &&
                this.mario.marioPos.y < stair.stairsPos.y + stair.stairsSize.h &&
                this.mario.marioSize.h + this.mario.marioPos.y > stair.stairsPos.y
            )
        })

        const collisionedPlatform = this.platforms.some(platform => {
            return (
                this.mario.marioPos.x <= platform.platformPos.x + platform.platformSize.w &&
                this.mario.marioPos.x + this.mario.marioSize.w >= platform.platformPos.x &&
                this.mario.marioPos.y < platform.platformPos.y + platform.platformSize.h &&
                this.mario.marioSize.h + this.mario.marioPos.y > platform.platformPos.y
            )
        })

        if (hasCollisionedStairs && collisionedPlatform) {
            this.mario.gravityActive = false
            this.mario.canMoveUpDown = true
        } else if (collisionedPlatform) {
            this.mario.gravityActive = false
            this.mario.canMoveUpDown = false
        } else if (hasCollisionedStairs) {
            this.mario.gravityActive = false
            this.mario.canMoveUpDown = true
        } else {
            this.mario.gravityActive = true
            this.mario.canMoveUpDown = false
        }
    },
    isCollissionWithWin() {
        if (
            this.mario.marioPos.x < this.win.winPos.x + this.win.winSize.w &&
            this.mario.marioPos.x + this.mario.marioSize.w > this.win.winPos.x &&
            this.mario.marioPos.y < this.win.winPos.y + this.win.winSize.h &&
            this.mario.marioSize.h + this.mario.marioPos.y > this.win.winPos.y
        ) {
            this.winGame()
        }
    },

    isCollissionWithDon() {
        if (
            this.mario.marioPos.x <= this.don.donPos.x + this.don.donSize.w &&
            this.mario.marioPos.x + this.mario.marioSize.w >= this.don.donPos.x &&
            this.mario.marioPos.y < this.don.donPos.y + this.don.donSize.h &&
            this.mario.marioSize.h + this.mario.marioPos.y > this.don.donPos.y
        )
            this.gameOver()
    },

    gameOver() {
        console.log('entro aquii?')
        clearInterval(this.interval)

    },


    winGame() {

        clearInterval(this.interval)
        // {return alert('YOU WIN')}
    },
}