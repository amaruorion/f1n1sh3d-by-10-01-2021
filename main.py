@namespace
class SpriteKind:
    mineral = SpriteKind.create()
@namespace
class StatusBarKind:
    resource = StatusBarKind.create()
"""

Stats:

31 variables

11 functions

307 blocks

Time: 150 minutes

"""
"""

Minerals:

Planning on adding:

None

Completed:

Iron

Sapphire

Diamond

Coal

Jadeite

Ruby

Gold

Amber

Emerald

In progress:

None

"""
# Stats:
# 
# 10 functions
# 
# 27 variables
# 
# 289 blocks
# 
# 430 Python lines
# 
# 412 JavaScript lines
# 
# Time: 2 hours
def ironPlace():
    if ironDecide == 0:
        grid.place(iron, tiles.get_tile_location(5, 0))
    elif ironDecide == 1:
        grid.place(iron, tiles.get_tile_location(4, 0))
    elif ironDecide == 2:
        grid.place(iron, tiles.get_tile_location(6, 0))
    elif ironDecide == 3:
        grid.place(iron, tiles.get_tile_location(5, 1))
    elif ironDecide == 4:
        grid.place(iron, tiles.get_tile_location(6, 1))
    elif ironDecide == 5:
        grid.place(iron, tiles.get_tile_location(4, 1))
    elif ironDecide == 6:
        grid.place(iron, tiles.get_tile_location(5, 2))
def rubyPlace():
    if rubyDecide == 0:
        grid.place(ruby, tiles.get_tile_location(8, 0))
    elif rubyDecide == 1:
        grid.place(ruby, tiles.get_tile_location(8, 1))
    elif rubyDecide == 2:
        grid.place(ruby, tiles.get_tile_location(8, 2))
    elif rubyDecide == 3:
        grid.place(ruby, tiles.get_tile_location(9, 0))
    elif rubyDecide == 4:
        grid.place(ruby, tiles.get_tile_location(9, 1))
    elif rubyDecide == 5:
        grid.place(ruby, tiles.get_tile_location(9, 2))

def on_on_overlap(sprite, otherSprite):
    sprite.destroy()
sprites.on_overlap(SpriteKind.mineral, SpriteKind.mineral, on_on_overlap)

def goldPlace():
    if goldDecide == 0:
        grid.place(gold, tiles.get_tile_location(9, 5))
    elif goldDecide == 1:
        grid.place(gold, tiles.get_tile_location(9, 6))
    elif goldDecide == 2:
        grid.place(gold, tiles.get_tile_location(9, 7))
    elif goldDecide == 3:
        grid.place(gold, tiles.get_tile_location(8, 7))
    elif goldDecide == 4:
        grid.place(gold, tiles.get_tile_location(8, 6))
    elif goldDecide == 5:
        grid.place(gold, tiles.get_tile_location(8, 5))

def on_countdown_end():
    global doPlaceMineral
    doPlaceMineral = False
    grid.move_with_buttons(mySprite)
info.on_countdown_end(on_countdown_end)

def sapphirePlace():
    if sapphireDecide == 0:
        grid.place(sapphire, tiles.get_tile_location(11, 0))
    elif sapphireDecide == 1:
        grid.place(sapphire, tiles.get_tile_location(11, 1))
    elif sapphireDecide == 2:
        grid.place(sapphire, tiles.get_tile_location(12, 0))
    elif sapphireDecide == 3:
        grid.place(sapphire, tiles.get_tile_location(12, 1))
    elif sapphireDecide == 4:
        grid.place(sapphire, tiles.get_tile_location(12, 2))
def coalPlace():
    if coalDecide == 0:
        grid.place(coal, tiles.get_tile_location(0, 0))
    elif coalDecide == 1:
        grid.place(coal, tiles.get_tile_location(1, 0))
    elif coalDecide == 2:
        grid.place(coal, tiles.get_tile_location(2, 0))
    elif coalDecide == 3:
        grid.place(coal, tiles.get_tile_location(0, 1))
    elif coalDecide == 4:
        grid.place(coal, tiles.get_tile_location(1, 1))
    elif coalDecide == 5:
        grid.place(coal, tiles.get_tile_location(2, 1))
    elif coalDecide == 6:
        grid.place(coal, tiles.get_tile_location(0, 2))
    elif coalDecide == 7:
        grid.place(coal, tiles.get_tile_location(1, 2))
def placeStatusBars():
    pass
def place():
    if doPlaceMineral:
        if mineral2 == 0:
            coalPlace()
        elif mineral2 == 1:
            diamondPlace()
        elif mineral2 == 2:
            emeraldPlace()
        elif mineral2 == 3:
            goldPlace()
        elif mineral2 == 4:
            ironPlace()
        elif mineral2 == 5:
            rubyPlace()
        elif mineral2 == 6:
            jadeitePlace()
        elif mineral2 == 7:
            amberPlace()
        elif mineral2 == 8:
            sapphirePlace()
def _set():
    global coalImage, diamondImage, emeraldImage, goldImage, ironImage, jadeiteImage, rubyImage, amberImage, sapphireImage, coal, diamond, emerald, gold, iron, ruby, jadeite, amber, sapphire
    coalImage = img("""
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
    """)
    diamondImage = img("""
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
    """)
    emeraldImage = img("""
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
    """)
    goldImage = img("""
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
    """)
    ironImage = img("""
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
    """)
    jadeiteImage = img("""
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
    """)
    rubyImage = img("""
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
    """)
    amberImage = img("""
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
    """)
    sapphireImage = img("""
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
    """)
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
def setStatusBar():
    global amberStatus, coalStatus, diamondStatus, emeraldStatus, goldStatus, ironStatus, jaditeStatus, rubyStatus, sapphireStatus
    amberStatus = statusbars.create(20, 4, StatusBarKind.resource)
    amberStatus.set_label("amber: ")
    coalStatus = statusbars.create(20, 4, StatusBarKind.resource)
    coalStatus.set_label("coal: ")
    diamondStatus = statusbars.create(20, 4, StatusBarKind.resource)
    diamondStatus.set_label("diamond: ")
    emeraldStatus = statusbars.create(20, 4, StatusBarKind.resource)
    emeraldStatus.set_label("emerald: ")
    goldStatus = statusbars.create(20, 4, StatusBarKind.resource)
    goldStatus.set_label("gold: ")
    ironStatus = statusbars.create(20, 4, StatusBarKind.resource)
    ironStatus.set_label("iron: ")
    jaditeStatus = statusbars.create(20, 4, StatusBarKind.resource)
    rubyStatus = statusbars.create(20, 4, StatusBarKind.resource)
    sapphireStatus = statusbars.create(20, 4, StatusBarKind.resource)
def jadeitePlace():
    jaditePlace = 0
    if jaditePlace == 0:
        grid.place(jadeite, tiles.get_tile_location(19, 3))
    elif jaditePlace == 1:
        grid.place(jadeite, tiles.get_tile_location(19, 4))
def emeraldPlace():
    if emeraldDecide == 0:
        grid.place(emerald, tiles.get_tile_location(0, 5))
    elif emeraldDecide == 1:
        grid.place(emerald, tiles.get_tile_location(0, 6))
    elif emeraldDecide == 2:
        grid.place(emerald, tiles.get_tile_location(0, 7))
    elif emeraldDecide == 3:
        grid.place(emerald, tiles.get_tile_location(1, 6))
    elif emeraldDecide == 4:
        grid.place(emerald, tiles.get_tile_location(1, 7))
    elif emeraldDecide == 5:
        grid.place(emerald, tiles.get_tile_location(2, 7))

def on_on_overlap2(sprite, otherSprite):
    if isAHold:
        otherSprite.destroy(effects.disintegrate, 1000)
sprites.on_overlap(SpriteKind.player, SpriteKind.mineral, on_on_overlap2)

def amberPlace():
    if amberDecide == 0:
        grid.place(amber, tiles.get_tile_location(11, 5))
    elif amberDecide == 1:
        grid.place(amber, tiles.get_tile_location(11, 6))
    elif amberDecide == 2:
        grid.place(amber, tiles.get_tile_location(11, 7))
    elif amberDecide == 3:
        grid.place(amber, tiles.get_tile_location(12, 6))
    elif amberDecide == 4:
        grid.place(amber, tiles.get_tile_location(12, 7))
def diamondPlace():
    if diamondDecide == 0:
        grid.place(diamond, tiles.get_tile_location(4, 6))
    elif diamondDecide == 1:
        grid.place(diamond, tiles.get_tile_location(5, 6))
    elif diamondDecide == 2:
        grid.place(diamond, tiles.get_tile_location(4, 7))
    elif diamondDecide == 3:
        grid.place(diamond, tiles.get_tile_location(5, 7))
diamondDecide = 0
amberDecide = 0
isAHold = False
emeraldDecide = 0
sapphireStatus: StatusBarSprite = None
rubyStatus: StatusBarSprite = None
jaditeStatus: StatusBarSprite = None
ironStatus: StatusBarSprite = None
goldStatus: StatusBarSprite = None
emeraldStatus: StatusBarSprite = None
diamondStatus: StatusBarSprite = None
coalStatus: StatusBarSprite = None
amberStatus: StatusBarSprite = None
amber: Sprite = None
jadeite: Sprite = None
emerald: Sprite = None
diamond: Sprite = None
sapphireImage: Image = None
amberImage: Image = None
rubyImage: Image = None
jadeiteImage: Image = None
ironImage: Image = None
goldImage: Image = None
emeraldImage: Image = None
diamondImage: Image = None
coalImage: Image = None
mineral2 = 0
coal: Sprite = None
coalDecide = 0
sapphire: Sprite = None
sapphireDecide = 0
gold: Sprite = None
goldDecide = 0
ruby: Sprite = None
rubyDecide = 0
iron: Sprite = None
ironDecide = 0
doPlaceMineral = False
mySprite: Sprite = None
tiles.set_tilemap(tilemap("""
    level_0
"""))
mySprite = sprites.create(img("""
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
    """),
    SpriteKind.player)
scene.camera_follow_sprite(mySprite)
grid.place(mySprite, tiles.get_tile_location(0, 0))
doPlaceMineral = True
info.start_countdown(10)
setStatusBar()

def on_on_update():
    global mineral2, coalDecide, diamondDecide, ironDecide, rubyDecide, goldDecide, emeraldDecide, amberDecide, sapphireDecide
    mineral2 = randint(0, 8)
    coalDecide = randint(0, 7)
    diamondDecide = randint(0, 3)
    ironDecide = randint(0, 6)
    rubyDecide = randint(0, 5)
    goldDecide = randint(0, 5)
    emeraldDecide = randint(0, 5)
    amberDecide = randint(0, 4)
    sapphireDecide = randint(0, 4)
game.on_update(on_on_update)

def on_on_update2():
    global isAHold
    if controller.A.is_pressed():
        isAHold = True
    else:
        isAHold = False
game.on_update(on_on_update2)

def on_update_interval():
    if doPlaceMineral == True:
        _set()
        place()
game.on_update_interval(1000, on_update_interval)

def on_forever():
    music.play_melody("G B A G C5 B A B ", 300)
forever(on_forever)
