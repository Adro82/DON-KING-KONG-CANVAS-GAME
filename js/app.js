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
    framesCounter: 0,
    platforms: [],
    stairs: [],
    barrels: [],
    timer: 1,

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
            new Platform(this.ctx, this.canvasSize, 500, 10, 200, 40),
            new Platform(this.ctx, this.canvasSize, 550, 20, 320, 150),
            new Platform(this.ctx, this.canvasSize, 300, 20, 80, 250),
            new Platform(this.ctx, this.canvasSize, 500, 20, 150, 400),
            new Platform(this.ctx, this.canvasSize, 400, 20, 500, 500),
            new Platform(this.ctx, this.canvasSize, 1000, 50, 0, 650),
        ),
            this.stairs.push(
                new Stairs(this.ctx, this.canvasSize, 20, 130, 750, 520),
                new Stairs(this.ctx, this.canvasSize, 20, 80, 530, 420),
                new Stairs(this.ctx, this.canvasSize, 20, 130, 230, 270),
                new Stairs(this.ctx, this.canvasSize, 20, 80, 350, 170),
                new Stairs(this.ctx, this.canvasSize, 20, 100, 550, 50),
            ),
            this.mario = new Mario(this.ctx, this.canvasSize, 15, 80, 10, 620, this.marioRight, this.marioLeft, this.marioUp, this.marioDown)
        console.log('plataforma')

        this.barrels.push(new Barrel(this.ctx, this.canvasSize),)
        this.barrels = []

        console.log(Barrel)
    },
    start() {
        this.reset()
        setInterval(() => {
            this.framesCounter > 300 ? this.framesCounter = 0 : this.framesCounter++
            this.clearAll()
            this.drawAll()
            this.generateBarrel()
            this.clearBarrel()

            this.isColission() ? this.gameOver() : null

        }, 100)
    },

    drawAll() {
        this.drawBackground()
        this.platforms.forEach(Platform => Platform.draw())
        this.stairs.forEach(Stairs => Stairs.draw())
        this.mario.draw()
        this.mario.move()
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
            this.barrels.push(new Barrel(this.ctx, this.canvasSize),)
        }
    },

    clearBarrel() {
        this.barrels = this.barrels.filter(Barrel => Barrel.barrelPos.x > 0)
    },

    isColission() {

        return this.barrels.some(barrel => {
            return (
                this.mario.marioPos.x < barrel.barrelPos.x + barrel.barrelSize.w &&
                this.mario.marioPos.x + this.mario.marioSize.w > barrel.barrelPos.x &&
                this.mario.marioPos.y < barrel.barrelPos.y + barrel.barrelSize.h &&
                this.mario.marioSize.h + this.mario.marioPos.y > barrel.barrelPos.y
            )
        })

    },

    gameOver() {

        clearInterval(this.interval)

    },
}