import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from './tailwind.config.js'
import Matter from 'matter-js'

const MEDIA_LG = parseInt(resolveConfig(tailwindConfig).theme.screens.lg, 10)
const WALL_THICKNESS = 160
const BODY_FONTSIZE = 16
const NAVBAR_HEIGHT =
    parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue(
            '--navbarMainHeight'
        ),
        10
    ) * BODY_FONTSIZE

const Engine = Matter.Engine,
    Render = Matter.Render,
    Events = Matter.Events,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    World = Matter.World,
    Bodies = Matter.Bodies

const engine = Engine.create(),
    world = engine.world

const myCanvas = document.getElementById('matterIndex')
const renderHeight = window.innerHeight,
    renderWidth = window.innerWidth

const render = Matter.Render.create({
    canvas: myCanvas,
    engine: engine,
    options: {
        width: renderWidth,
        height: renderHeight,
        background: 'transparent',
        wireframes: false,
        showAngleIndicator: false,
    },
})

// When Window Resize
window.addEventListener('resize', () => {
    // Change canvas size
    render.bounds.max.x = window.innerWidth
    render.bounds.max.y = window.innerHeight
    render.options.width = window.innerWidth
    render.options.height = window.innerHeight
    render.canvas.width = window.innerWidth
    render.canvas.height = window.innerHeight
    // Recreate bodies in world
    Matter.Composite.clear(engine.world)
    setWall()
    setBodies()
})

function setWall() {
    if (window.innerWidth >= MEDIA_LG) {
        const wallTop = Bodies.rectangle(
            window.innerWidth / 2 + 160,
            -80,
            window.innerWidth + 320,
            160,
            { isStatic: true }
        )
        // Bottom
        const wallBottom = Bodies.rectangle(
            0,
            window.innerHeight + WALL_THICKNESS / 2,
            window.innerWidth,
            WALL_THICKNESS,
            { render: { fillStyle: 'transparent' }, isStatic: true }
        )
        // Left
        const wallLeft = Bodies.rectangle(
            -WALL_THICKNESS / 2,
            window.innerHeight / 2,
            WALL_THICKNESS,
            window.innerHeight,
            { render: { fillStyle: 'transparent' }, isStatic: true }
        )
        // Right
        const wallRight = Bodies.rectangle(
            window.innerWidth / 2 + WALL_THICKNESS / 2,
            window.innerHeight / 2,
            WALL_THICKNESS,
            window.innerHeight,
            { render: { fillStyle: 'transparent' }, isStatic: true }
        )
        // Add Bodies
        World.add(engine.world, [wallTop, wallBottom, wallLeft, wallRight])
    }

    if (window.innerWidth < MEDIA_LG) {
        const wallTop = Bodies.rectangle(
            window.innerWidth / 2 + 160,
            -80,
            window.innerWidth + 320,
            160,
            { isStatic: true }
        )
        // Bottom
        const wallBottom = Bodies.rectangle(
            0,
            window.innerHeight + WALL_THICKNESS / 2 - NAVBAR_HEIGHT,
            window.innerWidth * 2,
            WALL_THICKNESS,
            { render: { fillStyle: 'transparent' }, isStatic: true }
        )
        // Left
        const wallLeft = Bodies.rectangle(
            -WALL_THICKNESS / 2,
            window.innerHeight / 2,
            WALL_THICKNESS,
            window.innerHeight,
            { render: { fillStyle: 'transparent' }, isStatic: true }
        )
        // Right
        const wallRight = Bodies.rectangle(
            window.innerWidth + WALL_THICKNESS / 2,
            window.innerHeight,
            WALL_THICKNESS,
            window.innerHeight * 2,
            { render: { fillStyle: 'red' }, isStatic: true }
        )
        // Add Bodies
        World.add(engine.world, [wallTop, wallBottom, wallLeft, wallRight])
    }
}
setWall()
setBodies()

function setBodies() {
    const react = Bodies.rectangle(100, 100, 200, 200, {
        render: {
            sprite: {
                texture:
                    'https://res.cloudinary.com/webdong/image/upload/v1659408295/global/react.png',
            },
        },
    })

    const vue = Bodies.rectangle(300, 100, 200, 200, {
        render: {
            sprite: {
                texture:
                    'https://res.cloudinary.com/webdong/image/upload/v1659408295/global/vue.png',
            },
        },
    })

    const working = Bodies.rectangle(500, 100, 200, 200, {
        render: {
            sprite: {
                texture:
                    'https://res.cloudinary.com/webdong/image/upload/v1659408529/global/working.png',
            },
        },
    })

    // add all of the bodies to the world
    World.add(engine.world, [react, vue, working])

    // add mouse control
    var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false,
                },
            },
        })

    World.add(world, mouseConstraint)

    // keep the mouse in sync with rendering
    render.mouse = mouse

    // Allow page scrolling in matter.js window
    mouse.element.removeEventListener('mousewheel', mouse.mousewheel)
    mouse.element.removeEventListener('DOMMouseScroll', mouse.mousewheel)

    // Detect clicks vs. drags
    let click = false

    // document.addEventListener('mousedown', () => click = true);
    // document.addEventListener('mousemove', () => click = false);
    // document.addEventListener('mouseup', () => console.log(click ? 'click' : 'drag'));

    // Create a On-Mouseup Event-Handler
    Events.on(mouseConstraint, 'mouseup', function (event) {
        var mouseConstraint = event.source
        var bodies = engine.world.bodies
        if (!mouseConstraint.bodyB) {
            var i = 0
            for (i = 0; i < bodies.length; i++) {
                var body = bodies[i]
                // Check if clicked or dragged
                if (click === true) {
                    if (
                        Matter.Bounds.contains(
                            body.bounds,
                            mouseConstraint.mouse.position
                        )
                    ) {
                        var bodyUrl = body.url
                        console.log('Body.Url >> ' + bodyUrl)
                        // Hyperlinking feature
                        if (bodyUrl != undefined) {
                            //window.location.href = bodyUrl;
                            window.open(bodyUrl, '_blank')
                            console.log('Hyperlink was opened')
                        }
                        break
                    }
                }
            }
        }
    })
}

// run the engine
Matter.Runner.run(engine)
// run the renderer
Render.run(render)
