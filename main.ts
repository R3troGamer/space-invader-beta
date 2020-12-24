
scene.setBackgroundColor(0)
effects.starField.startScreenEffect()

//variabili
let Proiettile: Sprite = null
let Alieno: Sprite = null
let Alieno2: Sprite = null
let Personaggio: Sprite = null
let punti = 0
//personaggio
Personaggio = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 7 7 . . . . . . . 
    . . . . . . . 7 7 . . . . . . . 
    . . . . . . 7 7 7 7 . . . . . . 
    . . . . . . 7 7 7 7 . . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `, SpriteKind.Player)
Personaggio.setPosition(80, 110)
controller.moveSprite(Personaggio, 100, 0)
//funzioni
function sparo () {
    Proiettile = sprites.create(img`
        . . . 7 7 . . . 
        . . 7 7 7 7 . . 
        . . 7 7 7 7 . . 
        . . 7 7 7 7 . . 
        . . 7 7 7 7 . . 
        . . 7 7 7 7 . . 
        . . . 7 7 . . . 
        . . . 7 7 . . . 
        `, SpriteKind.Projectile)
    Proiettile.setPosition(Personaggio.x, Personaggio.y)
    Proiettile.setVelocity(0, -100)
}
function CreaNemico () {
    forever(function() {
        Alieno = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 1 . . . . . . . . 1 . . . 
            . . . . 1 . . . . . . 1 . . . . 
            . . . . 1 1 1 1 1 1 1 1 . . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 f 1 1 1 1 f 1 1 1 1 . 
            . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
            . 1 . 1 1 1 1 1 1 1 1 1 1 . 1 . 
            . 1 . 1 1 1 1 1 1 1 1 1 1 . 1 . 
            . 1 . 1 1 1 1 1 1 1 1 1 1 . 1 . 
            . . . 1 . . . . . . . . 1 . . . 
            . . . . 1 1 1 . . 1 1 1 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        Alieno.setPosition(randint(0, 160), 0)
        Alieno.setVelocity(0, 30)
        pause(1000)
})
}
function CreaNemico2 () {
    forever(function() {
            Alieno2 = sprites.create(img`
        . . . 1 1 . . .
        . . 1 1 1 1 . .
        . 1 1 1 1 1 1 .
        1 1 1 1 1 1 1 1
        1 1 f 1 1 1 f 1
        1 1 1 1 1 1 1 1
        . . 1 . . 1 . .
        . 1 . 1 1 . 1 .
        1 . 1 . . 1 . 1
        . . . . . . . .
        `, SpriteKind.Enemy)
        Alieno2.setPosition(randint(0, 160), 0)
        Alieno2.setVelocity(0, 60)
        pause(1000)
    })

}
//if
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy()
    punti++
    console.log(punti)
    if (punti == 10) {
        CreaNemico2()
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    sparo()
})
if (punti == 1) {
    CreaNemico2()
}
CreaNemico()
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function(sprite: Sprite, otherSprite: Sprite) {
    game.reset()
})
