namespace SpriteKind {
    export const mineral = SpriteKind.create()
}
namespace StatusBarKind {
    export const resource = StatusBarKind.create()
}
/**
 * Stats:
 * 
 * 427 blocks
 * 
 * Time: 240 minutes
 */
/**
 * Minerals:
 * 
 * Planning on adding:
 * 
 * None
 * 
 * Completed:
 * 
 * Iron
 * 
 * Sapphire
 * 
 * Diamond
 * 
 * Coal
 * 
 * Jadeite
 * 
 * Ruby
 * 
 * Gold
 * 
 * Amber
 * 
 * Emerald
 * 
 * In progress:
 * 
 * None
 */
function ironPlace () {
    if (ironDecide == 0) {
        grid.place(iron, tiles.getTileLocation(5, 0))
    } else if (ironDecide == 1) {
        grid.place(iron, tiles.getTileLocation(4, 0))
    } else if (ironDecide == 2) {
        grid.place(iron, tiles.getTileLocation(6, 0))
    } else if (ironDecide == 3) {
        grid.place(iron, tiles.getTileLocation(5, 1))
    } else if (ironDecide == 4) {
        grid.place(iron, tiles.getTileLocation(6, 1))
    } else if (ironDecide == 5) {
        grid.place(iron, tiles.getTileLocation(4, 1))
    } else if (ironDecide == 6) {
        grid.place(iron, tiles.getTileLocation(5, 2))
    }
}
function rubyPlace () {
    if (rubyDecide == 0) {
        grid.place(ruby, tiles.getTileLocation(8, 0))
    } else if (rubyDecide == 1) {
        grid.place(ruby, tiles.getTileLocation(8, 1))
    } else if (rubyDecide == 2) {
        grid.place(ruby, tiles.getTileLocation(8, 2))
    } else if (rubyDecide == 3) {
        grid.place(ruby, tiles.getTileLocation(9, 0))
    } else if (rubyDecide == 4) {
        grid.place(ruby, tiles.getTileLocation(9, 1))
    } else if (rubyDecide == 5) {
        grid.place(ruby, tiles.getTileLocation(9, 2))
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.setBackgroundColor(1)
    tiles.setTilemap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, [myTiles.transparency16], TileScale.Sixteen))
    for (let value of sprites.allOfKind(SpriteKind.mineral)) {
        value.destroy()
    }
    setStatusBar()
})
sprites.onOverlap(SpriteKind.mineral, SpriteKind.mineral, function (sprite, otherSprite) {
    sprite.destroy()
})
function goldPlace () {
    if (goldDecide == 0) {
        grid.place(gold, tiles.getTileLocation(9, 5))
    } else if (goldDecide == 1) {
        grid.place(gold, tiles.getTileLocation(9, 6))
    } else if (goldDecide == 2) {
        grid.place(gold, tiles.getTileLocation(9, 7))
    } else if (goldDecide == 3) {
        grid.place(gold, tiles.getTileLocation(8, 7))
    } else if (goldDecide == 4) {
        grid.place(gold, tiles.getTileLocation(8, 6))
    } else if (goldDecide == 5) {
        grid.place(gold, tiles.getTileLocation(8, 5))
    }
}
info.onCountdownEnd(function () {
    doPlaceMineral = false
    grid.moveWithButtons(mySprite)
})
function sapphirePlace () {
    if (sapphireDecide == 0) {
        grid.place(sapphire, tiles.getTileLocation(11, 0))
    } else if (sapphireDecide == 1) {
        grid.place(sapphire, tiles.getTileLocation(11, 1))
    } else if (sapphireDecide == 2) {
        grid.place(sapphire, tiles.getTileLocation(12, 0))
    } else if (sapphireDecide == 3) {
        grid.place(sapphire, tiles.getTileLocation(12, 1))
    } else if (sapphireDecide == 4) {
        grid.place(sapphire, tiles.getTileLocation(12, 2))
    }
}
function coalPlace () {
    if (coalDecide == 0) {
        grid.place(coal, tiles.getTileLocation(0, 0))
    } else if (coalDecide == 1) {
        grid.place(coal, tiles.getTileLocation(1, 0))
    } else if (coalDecide == 2) {
        grid.place(coal, tiles.getTileLocation(2, 0))
    } else if (coalDecide == 3) {
        grid.place(coal, tiles.getTileLocation(0, 1))
    } else if (coalDecide == 4) {
        grid.place(coal, tiles.getTileLocation(1, 1))
    } else if (coalDecide == 5) {
        grid.place(coal, tiles.getTileLocation(2, 1))
    } else if (coalDecide == 6) {
        grid.place(coal, tiles.getTileLocation(0, 2))
    } else if (coalDecide == 7) {
        grid.place(coal, tiles.getTileLocation(1, 2))
    }
}
function place () {
    if (doPlaceMineral) {
        if (mineral2 == 0) {
            coalPlace()
        } else if (mineral2 == 1) {
            diamondPlace()
        } else if (mineral2 == 2) {
            emeraldPlace()
        } else if (mineral2 == 3) {
            goldPlace()
        } else if (mineral2 == 4) {
            ironPlace()
        } else if (mineral2 == 5) {
            rubyPlace()
        } else if (mineral2 == 6) {
            jadeitePlace()
        } else if (mineral2 == 7) {
            amberPlace()
        } else if (mineral2 == 8) {
            sapphirePlace()
        }
    }
}
function _set () {
    coalImage = img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 1 . . . . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . 1 f f f 1 1 . . . . . 
        . . . . 1 1 f f f f 1 1 . . . . 
        . . . . 1 f f f f f f 1 1 . . . 
        . . . 1 1 f f f f f f f 1 1 . . 
        . . . 1 f f f f f f f f f 1 1 . 
        . . 1 1 f f f f f f f f f f 1 . 
        . . 1 f f f f f f f f f f 1 1 . 
        . . 1 f f f f f f f f f f 1 . . 
        . . 1 f f f f f f f f f f 1 . . 
        . . 1 f f f f f f f f f f 1 . . 
        . . 1 f f f f f f f f 1 1 1 . . 
        . . 1 1 f f 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 . . . . . . . . . 
        `
    diamondImage = img`
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 9 9 9 9 9 9 1 1 . . . 
        . . 1 1 9 9 9 9 9 9 9 9 1 1 . . 
        . 1 1 9 9 9 9 9 9 9 9 9 9 1 1 . 
        . . 1 1 9 9 9 9 9 9 9 9 1 1 . . 
        . . . 1 1 9 9 9 9 9 9 1 1 . . . 
        . . . . 1 1 9 9 9 9 1 1 . . . . 
        . . . . . 1 1 9 9 1 1 . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `
    emeraldImage = img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 7 7 7 7 1 1 . . . . 
        . . . 1 1 7 7 7 7 7 7 1 1 . . . 
        . . 1 1 7 7 7 7 7 7 7 7 1 1 . . 
        . . 1 7 7 7 7 7 7 7 7 7 7 1 . . 
        . . 1 7 7 7 7 7 7 7 7 7 7 1 . . 
        . . 1 7 7 7 7 7 7 7 7 7 7 1 . . 
        . . 1 7 7 7 7 7 7 7 7 7 7 1 . . 
        . . 1 1 7 7 7 7 7 7 7 7 1 1 . . 
        . . . 1 1 7 7 7 7 7 7 1 1 . . . 
        . . . . 1 1 7 7 7 7 1 1 . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `
    goldImage = img`
        . . . . . . . . . . . . . . . . 
        . . 1 1 1 . . . . . . . . . . . 
        . 1 1 5 1 1 1 1 . . . . . . . . 
        . 1 5 5 5 5 5 1 1 1 1 . . . . . 
        . 1 5 5 5 5 5 5 5 5 5 1 1 1 . . 
        . 1 1 5 5 5 5 5 5 5 5 5 5 1 1 . 
        . . 1 1 1 1 5 5 5 5 5 5 5 5 1 . 
        . . . . . 1 1 1 1 5 5 5 5 5 1 . 
        . . . . . . . . 1 1 1 1 5 1 1 . 
        . . . . . . . . . . . 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `
    ironImage = img`
        . . . . . . . . . . . . . . . . 
        . . 1 1 1 . . . . . . . . . . . 
        . 1 1 b 1 1 1 1 . . . . . . . . 
        . 1 b b b b b 1 1 1 1 . . . . . 
        . 1 1 b b b b b b b 1 1 1 1 . . 
        . . 1 1 1 1 b b b b b b b 1 1 . 
        . . . . . 1 1 1 1 b b b b b 1 . 
        . . . . . . . . 1 1 1 1 b 1 1 . 
        . . . . . . . . . . . 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `
    jadeiteImage = img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 1 1 1 1 1 1 1 . . . . . 
        . . 1 1 6 6 6 6 6 6 1 . . . . . 
        . . 1 6 7 7 7 7 7 6 1 1 . . . . 
        . . 1 6 7 7 7 7 7 6 6 1 1 . . . 
        . . 1 6 7 7 7 7 7 7 6 6 1 . . . 
        . 1 1 6 7 7 7 7 7 6 6 6 1 . . . 
        . 1 6 6 7 7 7 7 7 7 6 1 1 . . . 
        . 1 6 6 7 7 7 7 7 6 6 1 . . . . 
        . 1 1 6 6 6 6 6 6 6 1 1 . . . . 
        . . 1 1 6 6 1 1 1 1 1 . . . . . 
        . . . 1 1 1 1 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `
    rubyImage = img`
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 2 2 2 2 2 2 1 1 . . . 
        . . 1 1 2 2 2 2 2 2 2 2 1 1 . . 
        . 1 1 2 2 2 2 2 2 2 2 2 2 1 1 . 
        . . 1 1 2 2 2 2 2 2 2 2 1 1 . . 
        . . . 1 1 2 2 2 2 2 2 1 1 . . . 
        . . . . 1 1 2 2 2 2 1 1 . . . . 
        . . . . . 1 1 2 2 1 1 . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `
    amberImage = img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . 1 1 1 4 4 4 1 1 . . . . . 
        . . . 1 4 4 4 4 4 4 1 . . . . . 
        . . 1 1 4 4 4 4 4 4 1 . . . . . 
        . 1 1 4 4 4 4 4 4 4 1 . . . . . 
        . 1 4 4 4 4 4 4 4 4 1 . . . . . 
        . 1 4 4 4 4 4 4 4 4 1 . . . . . 
        . 1 1 4 4 4 4 4 1 1 1 . . . . . 
        . . 1 1 4 4 4 1 1 . . . . . . . 
        . . . 1 1 1 1 1 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `
    sapphireImage = img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . . 1 1 8 8 1 1 . . . . . 
        . . . . 1 1 8 8 8 8 1 1 . . . . 
        . . . 1 1 8 8 8 8 8 8 1 1 . . . 
        . . 1 1 8 8 8 8 8 8 8 8 1 1 . . 
        . . 1 8 8 8 8 8 8 8 8 8 8 1 . . 
        . . 1 8 8 8 8 8 8 8 8 8 8 1 . . 
        . . 1 1 8 8 8 8 8 8 8 8 1 1 . . 
        . . . 1 1 8 8 8 8 8 8 1 1 . . . 
        . . . . 1 1 8 8 8 8 1 1 . . . . 
        . . . . . 1 1 8 8 1 1 . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `
    coal = sprites.create(coalImage, SpriteKind.mineral)
    diamond = sprites.create(diamondImage, SpriteKind.mineral)
    emerald = sprites.create(emeraldImage, SpriteKind.mineral)
    gold = sprites.create(goldImage, SpriteKind.mineral)
    iron = sprites.create(ironImage, SpriteKind.mineral)
    ruby = sprites.create(rubyImage, SpriteKind.mineral)
    jadeite = sprites.create(jadeiteImage, SpriteKind.mineral)
    amber = sprites.create(amberImage, SpriteKind.mineral)
    sapphire = sprites.create(sapphireImage, SpriteKind.mineral)
    coalPlace()
    diamondPlace()
    ironPlace()
    jadeitePlace()
    emeraldPlace()
    goldPlace()
    rubyPlace()
    amberPlace()
    sapphirePlace()
}
function setStatusBar () {
    createStatus = true
    if (controller.B.isPressed()) {
        if (createStatus) {
            amberStatus = statusbars.create(20, 4, StatusBarKind.resource)
            amberStatus.setPosition(15, 10)
            amberStatus.setLabel("amber: ", 15)
            coalStatus = statusbars.create(20, 4, StatusBarKind.resource)
            coalStatus.setPosition(amberStatus.x + 45, 10)
            coalStatus.setLabel("coal: ", 15)
            diamondStatus = statusbars.create(20, 4, StatusBarKind.resource)
            diamondStatus.setPosition(15, 25)
            diamondStatus.setLabel("diamond: ", 15)
            emeraldStatus = statusbars.create(20, 4, StatusBarKind.resource)
            emeraldStatus.setPosition(diamondStatus.x + 50, 25)
            emeraldStatus.setLabel("emerald: ", 15)
            goldStatus = statusbars.create(20, 4, StatusBarKind.resource)
            goldStatus.setPosition(15, 40)
            goldStatus.setLabel("gold: ", 15)
            ironStatus = statusbars.create(20, 4, StatusBarKind.resource)
            ironStatus.setPosition(goldStatus.x + 45, 40)
            ironStatus.setLabel("iron: ", 15)
            jaditeStatus = statusbars.create(20, 4, StatusBarKind.resource)
            jaditeStatus.setPosition(15, 55)
            jaditeStatus.setLabel("jadeite: ", 15)
            rubyStatus = statusbars.create(20, 4, StatusBarKind.resource)
            rubyStatus.setPosition(jaditeStatus.x + 55, 55)
            rubyStatus.setLabel("ruby: ", 15)
            sapphireStatus = statusbars.create(20, 4, StatusBarKind.resource)
            sapphireStatus.setPosition(15, 70)
            sapphireStatus.setLabel("sapphire: ", 15)
            if (!(isValueSet)) {
                setValue()
                isValueSet = true
            }
        }
    }
}
function jadeitePlace () {
    let jaditePlace = 0
    if (jaditePlace == 0) {
        grid.place(jadeite, tiles.getTileLocation(19, 3))
    } else if (jaditePlace == 1) {
        grid.place(jadeite, tiles.getTileLocation(19, 4))
    }
}
function setValue () {
    amberStatus.value = 0
    amberStatus.max = 100
    coalStatus.value = 0
    coalStatus.max = 100
    diamondStatus.value = 0
    diamondStatus.max = 100
    emeraldStatus.value = 0
    emeraldStatus.max = 100
    goldStatus.value = 0
    goldStatus.max = 100
    ironStatus.value = 0
    ironStatus.max = 100
    jaditeStatus.value = 0
    jaditeStatus.max = 100
    rubyStatus.value = 0
    rubyStatus.max = 100
    sapphireStatus.value = 0
    sapphireStatus.max = 100
}
function emeraldPlace () {
    if (emeraldDecide == 0) {
        grid.place(emerald, tiles.getTileLocation(0, 5))
    } else if (emeraldDecide == 1) {
        grid.place(emerald, tiles.getTileLocation(0, 6))
    } else if (emeraldDecide == 2) {
        grid.place(emerald, tiles.getTileLocation(0, 7))
    } else if (emeraldDecide == 3) {
        grid.place(emerald, tiles.getTileLocation(1, 6))
    } else if (emeraldDecide == 4) {
        grid.place(emerald, tiles.getTileLocation(1, 7))
    } else if (emeraldDecide == 5) {
        grid.place(emerald, tiles.getTileLocation(2, 7))
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.mineral, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        if (otherSprite.image == img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . 1 1 1 4 4 4 1 1 . . . . . 
            . . . 1 4 4 4 4 4 4 1 . . . . . 
            . . 1 1 4 4 4 4 4 4 1 . . . . . 
            . 1 1 4 4 4 4 4 4 4 1 . . . . . 
            . 1 4 4 4 4 4 4 4 4 1 . . . . . 
            . 1 4 4 4 4 4 4 4 4 1 . . . . . 
            . 1 1 4 4 4 4 4 1 1 1 . . . . . 
            . . 1 1 4 4 4 1 1 . . . . . . . 
            . . . 1 1 1 1 1 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `) {
            otherSprite.destroy()
            amberStatus.value += 10
        } else if (otherSprite.image == img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 1 1 . . . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . 1 f f f 1 1 . . . . . 
            . . . . 1 1 f f f f 1 1 . . . . 
            . . . . 1 f f f f f f 1 1 . . . 
            . . . 1 1 f f f f f f f 1 1 . . 
            . . . 1 f f f f f f f f f 1 1 . 
            . . 1 1 f f f f f f f f f f 1 . 
            . . 1 f f f f f f f f f f 1 1 . 
            . . 1 f f f f f f f f f f 1 . . 
            . . 1 f f f f f f f f f f 1 . . 
            . . 1 f f f f f f f f f f 1 . . 
            . . 1 f f f f f f f f 1 1 1 . . 
            . . 1 1 f f 1 1 1 1 1 1 . . . . 
            . . . 1 1 1 1 . . . . . . . . . 
            `) {
            otherSprite.destroy()
            coalStatus.value += 10
        } else if (otherSprite.image == img`
            . . . . . . . . . . . . . . . . 
            . . . . 1 1 1 1 1 1 1 1 . . . . 
            . . . 1 1 9 9 9 9 9 9 1 1 . . . 
            . . 1 1 9 9 9 9 9 9 9 9 1 1 . . 
            . 1 1 9 9 9 9 9 9 9 9 9 9 1 1 . 
            . . 1 1 9 9 9 9 9 9 9 9 1 1 . . 
            . . . 1 1 9 9 9 9 9 9 1 1 . . . 
            . . . . 1 1 9 9 9 9 1 1 . . . . 
            . . . . . 1 1 9 9 1 1 . . . . . 
            . . . . . . 1 1 1 1 . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `) {
            otherSprite.destroy()
            diamondStatus.value += 10
        } else if (otherSprite.image == img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            . . . . 1 1 7 7 7 7 1 1 . . . . 
            . . . 1 1 7 7 7 7 7 7 1 1 . . . 
            . . 1 1 7 7 7 7 7 7 7 7 1 1 . . 
            . . 1 7 7 7 7 7 7 7 7 7 7 1 . . 
            . . 1 7 7 7 7 7 7 7 7 7 7 1 . . 
            . . 1 7 7 7 7 7 7 7 7 7 7 1 . . 
            . . 1 7 7 7 7 7 7 7 7 7 7 1 . . 
            . . 1 1 7 7 7 7 7 7 7 7 1 1 . . 
            . . . 1 1 7 7 7 7 7 7 1 1 . . . 
            . . . . 1 1 7 7 7 7 1 1 . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `) {
            otherSprite.destroy()
            emeraldStatus.value += 10
        } else if (otherSprite.image == img`
            . . . . . . . . . . . . . . . . 
            . . 1 1 1 . . . . . . . . . . . 
            . 1 1 5 1 1 1 1 . . . . . . . . 
            . 1 5 5 5 5 5 1 1 1 1 . . . . . 
            . 1 5 5 5 5 5 5 5 5 5 1 1 1 . . 
            . 1 1 5 5 5 5 5 5 5 5 5 5 1 1 . 
            . . 1 1 1 1 5 5 5 5 5 5 5 5 1 . 
            . . . . . 1 1 1 1 5 5 5 5 5 1 . 
            . . . . . . . . 1 1 1 1 5 1 1 . 
            . . . . . . . . . . . 1 1 1 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `) {
            otherSprite.destroy()
            goldStatus.value += 10
        } else if (otherSprite.image == img`
            . . . . . . . . . . . . . . . . 
            . . 1 1 1 . . . . . . . . . . . 
            . 1 1 b 1 1 1 1 . . . . . . . . 
            . 1 b b b b b 1 1 1 1 . . . . . 
            . 1 1 b b b b b b b 1 1 1 1 . . 
            . . 1 1 1 1 b b b b b b b 1 1 . 
            . . . . . 1 1 1 1 b b b b b 1 . 
            . . . . . . . . 1 1 1 1 b 1 1 . 
            . . . . . . . . . . . 1 1 1 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `) {
            otherSprite.destroy()
            ironStatus.value += 10
        } else if (otherSprite.image == img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 1 1 1 1 1 1 1 1 . . . . . 
            . . 1 1 6 6 6 6 6 6 1 . . . . . 
            . . 1 6 7 7 7 7 7 6 1 1 . . . . 
            . . 1 6 7 7 7 7 7 6 6 1 1 . . . 
            . . 1 6 7 7 7 7 7 7 6 6 1 . . . 
            . 1 1 6 7 7 7 7 7 6 6 6 1 . . . 
            . 1 6 6 7 7 7 7 7 7 6 1 1 . . . 
            . 1 6 6 7 7 7 7 7 6 6 1 . . . . 
            . 1 1 6 6 6 6 6 6 6 1 1 . . . . 
            . . 1 1 6 6 1 1 1 1 1 . . . . . 
            . . . 1 1 1 1 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `) {
            otherSprite.destroy()
            jaditeStatus.value += 10
        } else if (otherSprite.image == img`
            . . . . . . . . . . . . . . . . 
            . . . . 1 1 1 1 1 1 1 1 . . . . 
            . . . 1 1 2 2 2 2 2 2 1 1 . . . 
            . . 1 1 2 2 2 2 2 2 2 2 1 1 . . 
            . 1 1 2 2 2 2 2 2 2 2 2 2 1 1 . 
            . . 1 1 2 2 2 2 2 2 2 2 1 1 . . 
            . . . 1 1 2 2 2 2 2 2 1 1 . . . 
            . . . . 1 1 2 2 2 2 1 1 . . . . 
            . . . . . 1 1 2 2 1 1 . . . . . 
            . . . . . . 1 1 1 1 . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `) {
            otherSprite.destroy()
            rubyStatus.value += 10
        } else if (otherSprite.image == img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 1 1 1 1 . . . . . . 
            . . . . . 1 1 8 8 1 1 . . . . . 
            . . . . 1 1 8 8 8 8 1 1 . . . . 
            . . . 1 1 8 8 8 8 8 8 1 1 . . . 
            . . 1 1 8 8 8 8 8 8 8 8 1 1 . . 
            . . 1 8 8 8 8 8 8 8 8 8 8 1 . . 
            . . 1 8 8 8 8 8 8 8 8 8 8 1 . . 
            . . 1 1 8 8 8 8 8 8 8 8 1 1 . . 
            . . . 1 1 8 8 8 8 8 8 1 1 . . . 
            . . . . 1 1 8 8 8 8 1 1 . . . . 
            . . . . . 1 1 8 8 1 1 . . . . . 
            . . . . . . 1 1 1 1 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `) {
            otherSprite.destroy()
            sapphireStatus.value += 10
        }
    }
})
function amberPlace () {
    if (amberDecide == 0) {
        grid.place(amber, tiles.getTileLocation(11, 5))
    } else if (amberDecide == 1) {
        grid.place(amber, tiles.getTileLocation(11, 6))
    } else if (amberDecide == 2) {
        grid.place(amber, tiles.getTileLocation(11, 7))
    } else if (amberDecide == 3) {
        grid.place(amber, tiles.getTileLocation(12, 6))
    } else if (amberDecide == 4) {
        grid.place(amber, tiles.getTileLocation(12, 7))
    }
}
function diamondPlace () {
    if (diamondDecide == 0) {
        grid.place(diamond, tiles.getTileLocation(4, 6))
    } else if (diamondDecide == 1) {
        grid.place(diamond, tiles.getTileLocation(5, 6))
    } else if (diamondDecide == 2) {
        grid.place(diamond, tiles.getTileLocation(4, 7))
    } else if (diamondDecide == 3) {
        grid.place(diamond, tiles.getTileLocation(5, 7))
    }
}
let diamondDecide = 0
let amberDecide = 0
let emeraldDecide = 0
let isValueSet = false
let sapphireStatus: StatusBarSprite = null
let rubyStatus: StatusBarSprite = null
let jaditeStatus: StatusBarSprite = null
let ironStatus: StatusBarSprite = null
let goldStatus: StatusBarSprite = null
let emeraldStatus: StatusBarSprite = null
let diamondStatus: StatusBarSprite = null
let coalStatus: StatusBarSprite = null
let amberStatus: StatusBarSprite = null
let createStatus = false
let amber: Sprite = null
let jadeite: Sprite = null
let emerald: Sprite = null
let diamond: Sprite = null
let sapphireImage: Image = null
let amberImage: Image = null
let rubyImage: Image = null
let jadeiteImage: Image = null
let ironImage: Image = null
let goldImage: Image = null
let emeraldImage: Image = null
let diamondImage: Image = null
let coalImage: Image = null
let mineral2 = 0
let coal: Sprite = null
let coalDecide = 0
let sapphire: Sprite = null
let sapphireDecide = 0
let gold: Sprite = null
let goldDecide = 0
let ruby: Sprite = null
let rubyDecide = 0
let iron: Sprite = null
let ironDecide = 0
let doPlaceMineral = false
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level_0`)
mySprite = sprites.create(img`
    2 2 2 2 . . . . . . . . 5 5 5 5 
    2 . . . . . . . . . . . . . . 5 
    2 . . . . . . . . . . . . . . 5 
    2 . . . . . . . . . . . . . . 5 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 5 . . . . . . . 
    . . . . . . . 8 7 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    8 . . . . . . . . . . . . . . 7 
    8 . . . . . . . . . . . . . . 7 
    8 . . . . . . . . . . . . . . 7 
    8 8 8 8 . . . . . . . . 7 7 7 7 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
grid.place(mySprite, tiles.getTileLocation(0, 0))
doPlaceMineral = true
info.startCountdown(10)
game.onUpdate(function () {
    mineral2 = randint(0, 8)
    coalDecide = randint(0, 7)
    diamondDecide = randint(0, 3)
    ironDecide = randint(0, 6)
    rubyDecide = randint(0, 5)
    goldDecide = randint(0, 5)
    emeraldDecide = randint(0, 5)
    amberDecide = randint(0, 4)
    sapphireDecide = randint(0, 4)
})
game.onUpdateInterval(1000, function () {
    if (doPlaceMineral == true) {
        _set()
        place()
    }
})
forever(function () {
    music.playMelody("A E F A D F G E ", 275)
})
