const appBarrels = {
    name: 'barrels',
    description: 'basic canvas app for Ironhack Project',
    version: '1.0.0',
    license: undefined,
    author: ' Adrian and Aldi',
    canvasTag: undefined,
    ctx: undefined,
    canvasSize: { w: 900, h: 700 },
    mario: undefined,
    framesCounter: 0,
    platform: [],
    stairs: [],
    barrel: [],
    timer: 1,
    marioPos: { x: undefined, y: undefined },
    keys: {
        LEFT: 'ArrowLeft',
        RIGHT: 'ArrowRight',
        UP: 'ArrowUp',
        DOWN: 'ArrowDown',

    },
    init() {
        this.setContext()
        this.setDimensions()
        // this.setEventListeners()
        // this.createMario()
        // this.createPlatform()
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

    // setEventListeners() {
    //     document.onkeydown = evt => {
    //         if (evt.key === this.keys.RIGHT) this.marioRight = true
    //         if (evt.key === this.keys.LEFT) this.marioLeft = true
    //         if (evt.key === this.keys.UP) this.marioUp = true
    //         if (evt.key === this.keys.DOWN) this.marioDown = true

    //         // if (evt.key === this.keys.RIGHT) this.marioRight += 10
    //         // if (evt.key === this.keys.LEFT) this.marioLeft -= 10
    //         // if (evt.key === this.keys.UP) this.marioUp += 10
    //         // if (evt.key === this.keys.DOWN) this.marioDown -= 10
    //         // console.log('arrow')
    //     }

    //     document.onkeyup = evt => {
    //         if (evt.key === this.keys.RIGHT) this.marioRight = false
    //         if (evt.key === this.keys.LEFT) this.marioLeft = false
    //         if (evt.key === this.keys.UP) this.marioUp = false
    //         if (evt.key === this.keys.DOWN) this.marioDown = false
    //         console.log(this.setEventListeners)
    //     }
    // },


    // createMario(){
    //     this.createMario.push( new mario(this.ctx, this.canvasSize))
    // },

    reset() {
        this.platform.push(
            new platform(this.ctx, this.canvasSize, 500, 10, 200, 40),
            new platform(this.ctx, this.canvasSize, 550, 20, 320, 150),
            new platform(this.ctx, this.canvasSize, 300, 20, 80, 250),
            new platform(this.ctx, this.canvasSize, 500, 20, 150, 400),
            new platform(this.ctx, this.canvasSize, 400, 20, 500, 500),
            new platform(this.ctx, this.canvasSize, 1000, 50, 0, 650),
        ),
            this.stairs.push(
                new stairs(this.ctx, this.canvasSize, 20, 130, 750, 520),
                new stairs(this.ctx, this.canvasSize, 20, 80, 530, 420),
                new stairs(this.ctx, this.canvasSize, 20, 130, 230, 270),
                new stairs(this.ctx, this.canvasSize, 20, 80, 350, 170),
                new stairs(this.ctx, this.canvasSize, 20, 100, 550, 50),
            ),
            this.mario = new mario(this.ctx, this.canvasSize, 15, 80, 10, 620, this.marioRight, this.marioLeft, this.marioUp, this.marioDown)
        console.log('plataforma')

        this.barrel.push(new barrel(this.ctx, this.canvasSize),)
        this.barrel = []

        console.log(barrel)
    },
    start() {
        this.reset()
        setInterval(() => {
            this.framesCounter > 300 ? this.framesCounter = 0 : this.framesCounter++
            this.clearAll()
            this.drawAll()
            this.generateBarrel()
            // this.clearBarrel()
        }, 100)
    },

    drawAll() {
        this.drawBackground()
        this.platform.forEach(platform => platform.draw())
        this.stairs.forEach(stairs => stairs.draw())
        this.mario.init()
        this.barrel.forEach(barrel => barrel.draw())
        this.barrel.forEach(barrel => barrel.move())
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
            this.barrel.push(new barrel(this.ctx, this.canvasSize),)
        }
    },

    clearBarrel() {
        this.barrel = this.barrel.filter(barrel => barrel.barrelPos.x > 0)
    }

}