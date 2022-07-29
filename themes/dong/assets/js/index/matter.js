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
    // object colors & variables
    var radius = 20

    // create objects
    var dongA = Bodies.trapezoid(100, 100, 200, 200, 2, {
        chamfer: { radius: [10, 10, 10] },
    })
    var dongB = Bodies.trapezoid(100, 100, 200, 200, 2, {
        chamfer: { radius: [10, 10, 10] },
    })
    var dongC = Bodies.trapezoid(100, 100, 200, 200, 2, {
        chamfer: { radius: [10, 10, 10] },
    })

    // art & design
    var illustration = Bodies.rectangle(140, 500, 133, 40, {
        chamfer: { radius: radius },
        render: {
            sprite: {
                texture: 'https://i.imgur.com/RADmiFI.png',
                xScale: 0.5,
                yScale: 0.5,
            },
        },
    })
    var art = Bodies.rectangle(35, 460, 56, 40, {
        chamfer: { radius: radius },
        render: {
            sprite: {
                texture: 'https://i.imgur.com/NwQqeng.png',
                xScale: 0.5,
                yScale: 0.5,
            },
        },
    })
    var threeD = Bodies.rectangle(90, 460, 52, 40, {
        chamfer: { radius: radius },
        render: {
            sprite: {
                texture: 'https://i.imgur.com/ptUWXgO.png',
                xScale: 0.5,
                yScale: 0.5,
            },
        },
    })
    var graphic = Bodies.rectangle(60, 420, 105, 40, {
        chamfer: { radius: radius },
        render: {
            sprite: {
                texture: 'https://i.imgur.com/TyOmVtt.png',
                xScale: 0.5,
                yScale: 0.5,
            },
        },
    })
    var photo = Bodies.rectangle(50, 380, 86, 40, {
        chamfer: { radius: radius },
        render: {
            sprite: {
                texture: 'https://i.imgur.com/tc3MsJP.png',
                xScale: 0.5,
                yScale: 0.5,
            },
        },
    })
    // video
    var documentary = Bodies.rectangle(220, 540, 165, 40, {
        chamfer: { radius: radius },
        render: {
            sprite: {
                texture: 'https://i.imgur.com/QYNTBNr.png',
                xScale: 0.5,
                yScale: 0.5,
            },
        },
    })
    var animation = Bodies.rectangle(200, 490, 128, 40, {
        chamfer: { radius: radius },
        render: {
            sprite: {
                texture: 'https://i.imgur.com/rSnEY9Q.png',
                xScale: 0.5,
                yScale: 0.5,
            },
        },
    })
    var vintage = Bodies.rectangle(190, 440, 104, 40, {
        chamfer: { radius: radius },
        render: {
            sprite: {
                texture: 'https://i.imgur.com/5BSBvSm.png',
                xScale: 0.5,
                yScale: 0.5,
            },
        },
    })
    var short = Bodies.rectangle(170, 390, 82, 40, {
        chamfer: { radius: radius },
        render: {
            sprite: {
                texture: 'https://i.imgur.com/VEyrikN.png',
                xScale: 0.5,
                yScale: 0.5,
            },
        },
    })
    //misc
    var website = Bodies.rectangle(360, 420, 108, 40, {
        chamfer: { radius: radius },
        render: {
            sprite: {
                texture: 'https://i.imgur.com/hr9p4uV.png',
                xScale: 0.5,
                yScale: 0.5,
            },
        },
    })
    var article = Bodies.rectangle(300, 380, 92, 40, {
        chamfer: { radius: radius },
        render: {
            sprite: {
                texture: 'https://i.imgur.com/n6TV7XG.png',
                xScale: 0.5,
                yScale: 0.5,
            },
        },
    })
    var music = Bodies.rectangle(400, 360, 86, 40, {
        chamfer: { radius: radius },
        render: {
            sprite: {
                texture: 'https://i.imgur.com/dax8MwT.png',
                xScale: 0.5,
                yScale: 0.5,
            },
        },
    })
    var star = Bodies.rectangle(80, 260, 42, 40, {
        chamfer: { radius: radius },
        render: {
            sprite: {
                texture: 'https://i.imgur.com/C2qPMbB.png',
                xScale: 0.5,
                yScale: 0.5,
            },
        },
    })
    //about
    var about = Bodies.rectangle(230, 140, 87, 40, {
        chamfer: { radius: radius },
        render: {
            sprite: {
                texture: 'https://i.imgur.com/4gPcZVN.png',
                xScale: 0.5,
                yScale: 0.5,
            },
        },
    })
    var instagram = Bodies.rectangle(320, 180, 40, 40, {
        id: 'instagramBody',
        chamfer: { radius: radius },
        render: {
            sprite: {
                texture: 'https://i.imgur.com/RStSwfG.png',
                xScale: 0.5,
                yScale: 0.5,
            },
        },
        url: '{{ $.Site.Params.brandInstagram }}',
    })
    var random = Bodies.rectangle(230, 180, 112, 40, {
        chamfer: { radius: radius },
        render: {
            sprite: {
                texture: 'https://i.imgur.com/YS51eIC.png',
                xScale: 0.5,
                yScale: 0.5,
            },
        },
    })

    // Experiment
    var cucumber = Bodies.rectangle(320, 180, 167, 201, {
        id: 'instagramBody',
        chamfer: { radius: radius },
        render: {
            sprite: {
                texture: 'https://i.imgur.com/fR1Ji3m.png',
                xScale: 0.5,
                yScale: 0.5,
            },
        },
        url: '{{ if .Site.IsServer }}.{{ else }}{{ $.Site.Params.brandUrl }}{{ end }}/project/package/ufo-vegetable-farm',
    })

    // Original Shape
    // var illustration = Bodies.rectangle(70, 500, 133, 40, {render: { fillStyle: arts}, chamfer: {radius: 20}})

    // add all of the bodies to the world
    World.add(engine.world, [
        illustration,
        art,
        threeD,
        graphic,
        photo,
        documentary,
        animation,
        vintage,
        short,
        website,
        article,
        music,
        star,
        about,
        instagram,
        random,
        dongA,
        dongB,
        dongC,
        cucumber,
    ])

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
