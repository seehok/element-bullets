namespace SpriteKind {
    export const Frigid = SpriteKind.create()
    export const Flame = SpriteKind.create()
    export const Frigid_Bullet = SpriteKind.create()
    export const Flame_Bullet = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Flame_Bullet, SpriteKind.Frigid, function (sprite, otherSprite) {
    healthbar_frigid.value += -20
    music.beamUp.play()
    sprite.destroy()
    frigidfighter_life += -1
    otherSprite.startEffect(effects.fire, 500)
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 . . . . . . . . . . 
        . . . . 2 f f f f f . . . . . . 
        . . 4 f 2 f 2 2 2 f . . . . . . 
        2 2 4 f 2 f 2 4 2 f . . . . . . 
        . . 4 f 2 f 2 2 2 f . . . . . . 
        . . . . 2 f f f f f . . . . . . 
        . . . . 2 2 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Flame_Fighter, -200, 0)
    projectile2.setKind(SpriteKind.Flame_Bullet)
    music.pewPew.play()
    pause(500)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 9 9 . . . . . 
        . . . . . 8 8 8 8 8 9 . . . . . 
        . . . . . 8 9 9 9 8 9 8 6 . . . 
        . . . . . 8 9 6 9 8 9 8 6 9 9 . 
        . . . . . 8 9 9 9 8 9 8 6 . . . 
        . . . . . 8 8 8 8 8 9 . . . . . 
        . . . . . . . . . 9 9 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Frigid_Figther, 200, 0)
    projectile.setKind(SpriteKind.Frigid_Bullet)
    music.pewPew.play()
    pause(500)
})
sprites.onOverlap(SpriteKind.Frigid_Bullet, SpriteKind.Flame, function (sprite, otherSprite) {
    healthbar_flame.value += -20
    music.sonar.play()
    sprite.destroy()
    flamefigther_life += -1
    otherSprite.startEffect(effects.blizzard, 500)
})
sprites.onOverlap(SpriteKind.Flame_Bullet, SpriteKind.Frigid_Bullet, function (sprite, otherSprite) {
    sprite.destroy(effects.fire, 50)
    otherSprite.destroy(effects.blizzard, 50)
    music.beamUp.play()
    music.sonar.play()
})
function CreatePlayers () {
    healthbar_frigid = statusbars.create(20, 4, StatusBarKind.Health)
    frigidfighter_life = 5
    healthbar_frigid.attachToSprite(Frigid_Figther)
    healthbar_frigid.value = 100
    healthbar_frigid.setColor(7, 2)
    healthbar_flame = statusbars.create(20, 4, StatusBarKind.Health)
    flamefigther_life = 5
    healthbar_flame.attachToSprite(Flame_Fighter)
    healthbar_flame.value = 100
    healthbar_flame.setColor(7, 2)
    Frigid_Figther.setPosition(0, 60)
    Flame_Fighter.setPosition(160, 60)
}
let flamefigther_life = 0
let healthbar_flame: StatusBarSprite = null
let projectile: Sprite = null
let projectile2: Sprite = null
let frigidfighter_life = 0
let healthbar_frigid: StatusBarSprite = null
let Flame_Fighter: Sprite = null
let Frigid_Figther: Sprite = null
scene.setBackgroundImage(img`
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    c777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    c777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    cc77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    cc77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    ccc7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    cccc77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777c
    ccccc77777777777777777777c777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777cc
    cccccc7777777777777777777cc77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777cc
    cccccc777777777777777777ccc7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ccc
    ccccccc7777777777777777ccccc77777777777777777cc77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ccc
    cccccccc77777777777777ccccccc7777777777777777ccc7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ccc
    cccccccc77777777777777cccccccc777777777777777ccc777777777777777777cc7777777777777777777777cc777777777777777777777777c777777777777777777777c77777777777777777cccc
    ccccccccc7777777777ccccccccccc777777777777777ccc777777777777777777ccc777777777777777777777ccc7777777777777777777777ccc7777777777777777777cc7777777777777777ccccc
    cccccccccc777777777cccccccccccc7777777777777ccccc77777777777777777cccc77777777777777777777ccccc77777777777777777777cccc77777777777777777ccc777777777777777cccccc
    cccccccccc777777777cccccccccccc7777777777777cccccc777777777777777cccccc777777777777777777ccccccc777777777777777777cccccc7777777777777777cccc77777777777777cccccc
    cccccccccc777777777ccccccccccccc77777777777ccccccc77777777777777ccccccc77777777777777777ccccccccc77777777777777777cccccc777777777777777ccccc77777777777777cccccc
    ccccccccccc77777777cccccccccccccc777777777ccccccccc777777777777ccccccccc7777777777777777cccccccccc777777777777777cccccccc7777777777777cccccc7777777777777ccccccc
    ccccccccccc7777777cccccccccccccccc7777777ccccccccccc7777777777cccccccccc777777777777777ccccccccccc777777777777777ccccccccc77777777777ccccccc77777777777ccccccccc
    cccccccccccc777777cccccccccccccccc777777cccccccccccc7777777777ccccccccccc77777777777777cccccccccccc7777777777777ccccccccccc777777777ccccccccc7777777777ccccccccc
    cccccccccccc77777ccccccccccccccccccc777ccccccccccccc777777777ccccccccccccc777777777777cccccccccccccc77777777777cccccccccccc77777777cccccccccc7777777777ccccccccc
    ccccccccccccc777ccccccccccccccccccccccccccccccccccccc77777777cccccccccccccc7777777777ccccccccccccccc77777777777ccccccccccccc777777cccccccccccc77777777cccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccc7777777ccccccccccccccc777777777cccccccccccccccccc77777777cccccccccccccc777777cccccccccccc77777777cccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccc777cccccccccccccccccc7777777cccccccccccccccccccc7777777ccccccccccccccc777cccccccccccccc7777777ccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc777777ccccccccccccccccccccc77777cccccccccccccccccccccccccccccccccc777777ccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc777cccccccccccccccccccccccc777cccccccccccccccccccccccccccccccccccc777ccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccc77777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccc777777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccc777777ccccccccccccccccc77777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccc77777777ccccccccccccccc7777777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccc77777777ccccccccccccccc7777777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccc777777777cccccccccccccc77777777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccc777777777cccccccccccccc77777777cccccccccccccccccc77777cccccccccccccccccccccccccccccccccccccccc77777cccccccccccccc
    ccccccccccccccccccccccccccccc77777ccccccccccccc777777777ccccccccccccc7777777777ccccccccccccccccc77777cccccccccccccccccccccccccccccccccccccccc777777ccccccccccccc
    ccccccccccccccccccccccccccccc777777cccccccccccc777777777ccccccccccccc7777777777ccccccccccccccccc777777ccccccccccccccccccccccccccccccccccccccc777777ccccccccccccc
    cccccccccccccccccccccccccccc7777777cccccccccccc777777777ccccccccccccc77777777777cccccccccccccccc777777cccccccccccccccc77777ccccccccccccccccc77777777cccccccccccc
    cccccccc77777ccccccccccccccc7777777cccccccccccc7777777777ccccccccccc777777777777ccccccccccccccc7777777cccccccccccccccc777777cccccccccccccccc777777777ccccccccccc
    cccccccc777777ccccccccccccc77777777cccccccccccc7777777777ccccccccccc777777777777ccccccccccccccc7777777cccccccccccccccc777777cccccccccccccccc7777777777cccccccccc
    ccccccc77777777cccccccccccc77777777ccccccccccc77777777777ccccccccccc7777777777777cccccccccccccc77777777cccccccccccccc7777777ccccccccccccccc77777777777cccccccccc
    ccccccc77777777cccccccccccc77777777ccccccccccc777777777777ccccccccc77777777777777ccccccccccccc777777777cccccccccccccc7777777ccccccccccccccc777777777777ccccccccc
    cccccc777777777ccccccccccc777777777cccccccccc7777777777777ccccccccc777777777777777cccccccccccc7777777777ccccccccccccc77777777ccccccccccccc77777777777777cccccccc
    cccccc7777777777cccccccccc7777777777ccccccccc7777777777777cccccccc7777777777777777ccccccccccc77777777777cccccccccccc777777777ccccccccccccc77777777777777cccccccc
    cccccc77777777777cccccccc77777777777ccccccccc77777777777777ccccccc77777777777777777cccccccccc77777777777cccccccccccc777777777cccccccccccc7777777777777777ccccccc
    ccccc777777777777cccccccc777777777777ccccccc777777777777777cccccc777777777777777777ccccccccc7777777777777cccccccccc77777777777ccccccccccc77777777777777777cccccc
    ccccc7777777777777ccccccc777777777777ccccccc7777777777777777ccccc7777777777777777777cccccccc7777777777777cccccccccc77777777777ccccccccccc777777777777777777ccccc
    ccccc7777777777777cccccc7777777777777cccccc777777777777777777ccc777777777777777777777cccccc77777777777777ccccccccc7777777777777ccccccccc7777777777777777777ccccc
    ccccc7777777777777ccccc77777777777777cccccc7777777777777777777cc777777777777777777777cccccc777777777777777cccccccc77777777777777cccccccc77777777777777777777cccc
    cccc77777777777777ccccc777777777777777ccccc7777777777777777777cc7777777777777777777777cccc7777777777777777ccccccc7777777777777777cccccc77777777777777777777777cc
    cccc777777777777777ccc7777777777777777cccc77777777777777777777cc7777777777777777777777ccc777777777777777777cccccc77777777777777777ccccc777777777777777777777777c
    cccc7777777777777777cc77777777777777777ccc777777777777777777777c7777777777777777777777ccc777777777777777777c7ccc777777777777777777cccc77777777777777777777777777
    ccc77777777777777777cc77777777777777777ccc777777777777777777777777777777777777777777777c7777777777777777777777777777777777777777777cc777777777777777777777777777
    ccc7777777777777777777777777777777777777c7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777c777777777777777777777777777
    ccc7777777777777777777777777777777777777c77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    ccc7999999977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777722222777777
    c777977797977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777727772777777
    c777999799977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777722272777777
    c777977799777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777727772777777
    c777977797977777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777727772227777
    c777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
let points = 0
Frigid_Figther = sprites.create(img`
    ................................
    ..........88888888..............
    ..........8ffffff8..............
    ..........8ff9f9f8..............
    ..........8ffffff8..............
    ..........888ff888..............
    ............8ff8................
    ............8ff8................
    ..........88888888......9f......
    ..........89999998......9.......
    ..........89999998.....666......
    ..........8899999888888866669...
    ..........88899998.88888666966..
    ..........89889998...66666669...
    ..........89988888888666........
    ..........8999888888866.........
    ..........89999998...66.........
    ..........88888888..............
    ..........898...898.............
    ..........898....898............
    ..........898.....898...........
    ..........898......898..........
    ..........898......898..........
    ..........898......898..........
    ..........898......898..........
    ..........898......898..........
    ..........99999....99999........
    ..........99999....99999........
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Frigid)
controller.player1.moveSprite(Frigid_Figther, 100, 100)
Flame_Fighter = sprites.create(img`
    ................................
    ................................
    ...............22222222.........
    ...............2ffffff2.........
    ...............2f2f2ff2.........
    ...............2ffffff2.........
    ...............222ff222.........
    ......f2.........2ff2...........
    .......f...22f...2ff2...........
    .4.2f..f.2224..ffffffff.........
    ..ff22222244...f222222f.........
    ..ff222224.....f222222ff........
    .4.2f..f2fffffff222222fff.......
    ........2fffffff222222ffff......
    ...............f222222f.fff.....
    ...............f222222f..ff.....
    ...............f222222f..ff.....
    ...............f222222f..ff.....
    ...............ffffffff..ff.....
    ..............f2f...f2f..ff.....
    .............f2f....f2f..ff2....
    ............f2f.....f2f..222ffff
    ...........f2f......f2f....2....
    ...........f2f......f2f.........
    ...........f2f......f2f.........
    ...........f2f......f2f.........
    ...........f2f......f2f.........
    .........22222....22222.........
    .........22222....22222.........
    ................................
    ................................
    ................................
    `, SpriteKind.Flame)
controller.player2.moveSprite(Flame_Fighter, 100, 100)
Frigid_Figther.setStayInScreen(true)
Flame_Fighter.setStayInScreen(true)
CreatePlayers()
info.player1.setScore(0)
info.player2.setScore(0)
game.onUpdate(function () {
    if (frigidfighter_life == 0) {
        info.player2.changeScoreBy(1)
        game.splash("Flame Figther wins!")
        CreatePlayers()
    }
    if (flamefigther_life == 0) {
        info.player1.changeScoreBy(1)
        game.splash("Frigid Figther wins!")
        CreatePlayers()
    }
    if (info.player1.score() == 2) {
        game.splash("Frigid Figther wins!")
        game.over(true)
    }
    if (info.player2.score() == 2) {
        game.splash("Flame Figther wins!")
        game.over(true)
    }
})
forever(function () {
    music.playMelody("E D G F B A C5 B ", 400)
    music.playMelody("C5 G F E F E F C5 ", 400)
    music.playMelody("C5 G F E F E F C5 ", 400)
    music.playMelody("C5 G B A F A C5 B ", 400)
})
