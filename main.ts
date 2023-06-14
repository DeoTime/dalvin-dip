namespace SpriteKind {
    export const Number_1_12 = SpriteKind.create()
    export const Number_0 = SpriteKind.create()
    export const Number_13_24 = SpriteKind.create()
    export const Number_25_36 = SpriteKind.create()
    export const Num_1_12 = SpriteKind.create()
    export const Num_13_24 = SpriteKind.create()
    export const Num_25_36 = SpriteKind.create()
    export const Num_1_18 = SpriteKind.create()
    export const Num_19_36 = SpriteKind.create()
    export const Chip = SpriteKind.create()
    export const Display = SpriteKind.create()
    export const Odd = SpriteKind.create()
    export const Even = SpriteKind.create()
}
function SPIN() {
    if (PLAYER_BET == true) {
        if (game.ask("SPIN?") == true) {
            ROULETTE_NUMBER = randint(0, 36)
            ROULETTE_NUMBER += 1
            TEXT_SPRITE = textsprite.create(convertToText(ROULETTE_NUMBER))
            TEXT_SPRITE.setPosition(80, 100)
            NUMBER_RESET_NUMBER_CHECK(0, 2, ROULETTE_NUMBER)
            COLOR_PRESENTATION_TEXT(2)
            for (let index = 0; index < 300; index++) {
                pause(33.333333333333333)
                ROULETTE_NUMBER += 1
                NUMBER_RESET_NUMBER_CHECK(ROULETTE_NUMBER, 1, ROULETTE_NUMBER)
                NUMBER_RESET_NUMBER_CHECK(0, 2, ROULETTE_NUMBER)
                COLOR_PRESENTATION_TEXT(2)
                COLOR_PRESENTATION_TEXT(1)
            }
            CHECK_WIN_SETUP(ROULETTE_NUMBER)
            CHECK_WIN()
            CLEAR()
        }
    } else {
        game.splash("CANNOT SPIN, NO", "BETS HAVE BEEN PLACED.")
    }
}
function CHECK_BET_CONDITIONS() {
    if (MONEY < 0) {
        if (Math.abs(MONEY) > Math.abs(MAXIMUM_LOANS)) {
            game.splash("EXCEEDED MAXIMUM LOANS,", "CANNOT BET THIS AMOUNT")
            CLEAR()
        } else if (Math.abs(MONEY) < Math.abs(MAXIMUM_LOANS)) {
            PLACE_BET()
        }
    } else if (MONEY >= 0) {
        PLACE_BET
    } 
}
function CLEAR() {
    sprites.destroyAllSpritesOfKind(SpriteKind.Chip)
    CANNOT_SELECT_ANYMORE = false
    BU = 0
    SELECTED_NUM_1 = null
    SELECTED_NUM_2 = null
    SELECTED_NUM_3 = null
    SELECTED_NUM_4 = null
    _1ST_12_SELECTION = false
    _2ND_12_SELECTION = false
    _3RD_12_SELECTION = false
    FIRST_18_ROULETTE = false
    SECOND_18_ROULETTE = false
    FIRST_18_SELECTION = false
    SECOND_18_SELECTION = false
    FIRST_12_ROULETTE = false
    SECOND_12_ROULETTE = false
    _1ST_12_SELECTION = false
    _2ND_12_SELECTION = false
    _3RD_12_SELECTION = false
    ODD_ROULETTE = false
    EVEN_ROULETTE = false
    ODD_SELECTION = false
    EVEN_SELECTION = false
    RED_SELECTION = false
    BLACK_SELECTION = false
    RED = false
    BLACK = false
}
function COLOR_PRESENTATION_TEXT (numbers: Number) {
if (numbers == 1) {
    if (BLACK_DISPLAY_SPRITE) {
        BLACK_DISPLAY_SPRITE.destroy()
    } else if (GREEN_DISPLAY_SPRITE) {
        GREEN_DISPLAY_SPRITE.destroy()
    } else if (RED_DISPLAY_SPRITE) {
        RED_DISPLAY_SPRITE.destroy()
    }
    if (PRESENT_COLOR_BLACK == true) {
    BLACK_DISPLAY_SPRITE = sprites.create(assets.image`BLACK_DISPLAY_SPRITE_DESIGN`, SpriteKind.Display)
    BLACK_DISPLAY_SPRITE.setPosition(80,100)
    } else if (PRESENT_COLOR_GREEN == true) {
    GREEN_DISPLAY_SPRITE = sprites.create(assets.image`GREEN_DISPLAT_SPRITE_DESIGN`, SpriteKind.Display)
    GREEN_DISPLAY_SPRITE.setPosition(80,100)
    } else if (PRESENT_COLOR_RED == true) {
    RED_DISPLAY_SPRITE = sprites.create(assets.image`RED_DISPLAY_SPRITE_DESIGN`, SpriteKind.Display)
    RED_DISPLAY_SPRITE.setPosition(80,100)
    }
} else if (numbers == 2) {
  TEXT_SPRITE.destroy()
  TEXT_SPRITE = textsprite.create(convertToText(ROULETTE_NUMBER))
  TEXT_SPRITE.setPosition(80, 100)
} else {
    if (PRESENT_COLOR_BLACK == true) {
        BLACK_DISPLAY_SPRITE = sprites.create(assets.image`BLACK_DISPLAY_SPRITE_DESIGN`, SpriteKind.Display)
        BLACK_DISPLAY_SPRITE.setPosition(80, 100)
    } else if (PRESENT_COLOR_GREEN == true) {
        GREEN_DISPLAY_SPRITE = sprites.create(assets.image`GREEN_DISPLAT_SPRITE_DESIGN`, SpriteKind.Display)
        GREEN_DISPLAY_SPRITE.setPosition(80, 100)
    } else if (PRESENT_COLOR_RED == true) {
        RED_DISPLAY_SPRITE = sprites.create(assets.image`RED_DISPLAY_SPRITE_DESIGN`, SpriteKind.Display)
        RED_DISPLAY_SPRITE.setPosition(80, 100)
}
}
        }       
function NUMBER_RESET_NUMBER_CHECK (numbers: Number, numbered: Number, num: Number) {
    if (numbered == 1) {
if (numbers == 37) {
ROULETTE_NUMBER = 0
} else if (numbered == 2) {
    if (num == 0) {
       PRESENT_COLOR_GREEN = true
        PRESENT_COLOR_RED = false
        PRESENT_COLOR_BLACK = false
    } else if (num == 1) {
       PRESENT_COLOR_RED = true
        PRESENT_COLOR_BLACK = false
        PRESENT_COLOR_GREEN = false
    } else if (num == 2) {
        PRESENT_COLOR_BLACK = true
        PRESENT_COLOR_RED = false
        PRESENT_COLOR_GREEN = false
    } else if (num == 3) {
        PRESENT_COLOR_RED = true
        PRESENT_COLOR_BLACK = false
        PRESENT_COLOR_GREEN = false
    } else if (num == 4) {
        PRESENT_COLOR_BLACK = true
        PRESENT_COLOR_RED = false
        PRESENT_COLOR_GREEN = false
    } else if (num == 5) {
        PRESENT_COLOR_RED = true
        PRESENT_COLOR_BLACK = false
        PRESENT_COLOR_GREEN = false
    } else if (num == 6) {
        PRESENT_COLOR_BLACK = true
        PRESENT_COLOR_RED = false
        PRESENT_COLOR_GREEN = false
    } else if (num == 7) {
        PRESENT_COLOR_RED = true
        PRESENT_COLOR_BLACK = false
        PRESENT_COLOR_GREEN = false
    } else if (num == 8) {
        PRESENT_COLOR_BLACK = true
        PRESENT_COLOR_RED = false
        PRESENT_COLOR_GREEN = false
    } else if (num == 9) {
        PRESENT_COLOR_RED = true
        PRESENT_COLOR_BLACK = false
        PRESENT_COLOR_GREEN = false
    } else if (num == 10) {
        PRESENT_COLOR_BLACK = true
        PRESENT_COLOR_RED = false
        PRESENT_COLOR_GREEN = false
    } else if (num == 11) {
        PRESENT_COLOR_BLACK = true
        PRESENT_COLOR_RED = false
        PRESENT_COLOR_GREEN = false
    } else if (num == 12) {
        PRESENT_COLOR_RED = true
        PRESENT_COLOR_BLACK = false
        PRESENT_COLOR_GREEN = false
    } else if (num == 13) {
        PRESENT_COLOR_BLACK = true
        PRESENT_COLOR_RED = false
        PRESENT_COLOR_GREEN = false
    } else if (num == 14) {
        PRESENT_COLOR_RED = true
        PRESENT_COLOR_BLACK = false
        PRESENT_COLOR_GREEN = false
    } else if (num == 15) {
        PRESENT_COLOR_BLACK = true
        PRESENT_COLOR_RED = false
        PRESENT_COLOR_GREEN = false
    } else if (num == 16) {
        PRESENT_COLOR_RED = true
        PRESENT_COLOR_BLACK = false
        PRESENT_COLOR_GREEN = false
    } else if (num == 17) {
        PRESENT_COLOR_BLACK = true
        PRESENT_COLOR_RED = false
        PRESENT_COLOR_GREEN = false
    } else if (num == 18) {
        PRESENT_COLOR_RED = true
        PRESENT_COLOR_BLACK = false
        PRESENT_COLOR_GREEN = false
    } else if (num == 19) {
        PRESENT_COLOR_BLACK = true
        PRESENT_COLOR_RED = false
        PRESENT_COLOR_GREEN = false
    } else if (num == 20) {
        PRESENT_COLOR_RED = true
        PRESENT_COLOR_BLACK = false
        PRESENT_COLOR_GREEN = false
    } else if (num == 21) {
        PRESENT_COLOR_BLACK = true
        PRESENT_COLOR_RED = false
        PRESENT_COLOR_GREEN = false
    } else if (num == 22) {
        PRESENT_COLOR_RED = true
        PRESENT_COLOR_BLACK = false
        PRESENT_COLOR_GREEN = false
    } else if (num == 23) {
        PRESENT_COLOR_BLACK = true
        PRESENT_COLOR_RED = false
        PRESENT_COLOR_GREEN = false
    } else if (num == 24) {
        PRESENT_COLOR_RED = true
        PRESENT_COLOR_BLACK = false
        PRESENT_COLOR_GREEN = false
    } else if (num == 25) {
        PRESENT_COLOR_BLACK = true
        PRESENT_COLOR_RED = false
        PRESENT_COLOR_GREEN = false
    } else if (num == 26) {
        PRESENT_COLOR_RED = true
        PRESENT_COLOR_BLACK = false
        PRESENT_COLOR_GREEN = false
    } else if (num == 27) {
        PRESENT_COLOR_BLACK = true
        PRESENT_COLOR_RED = false
        PRESENT_COLOR_GREEN = false
    } else if (num == 28) {
        PRESENT_COLOR_RED = true
        PRESENT_COLOR_BLACK = false
        PRESENT_COLOR_GREEN = false
    } else if (num == 29) {
        PRESENT_COLOR_BLACK = true
        PRESENT_COLOR_RED = false
        PRESENT_COLOR_GREEN = false
    } else if (num == 30) {
        PRESENT_COLOR_RED = true
        PRESENT_COLOR_BLACK = false
        PRESENT_COLOR_GREEN = false
    } else if (num == 31) {
        PRESENT_COLOR_BLACK = true
        PRESENT_COLOR_RED = false
        PRESENT_COLOR_GREEN = false
    } else if (num == 32) {
        PRESENT_COLOR_RED = true
        PRESENT_COLOR_BLACK = false
        PRESENT_COLOR_GREEN = false
    } else if (num == 33) {
        PRESENT_COLOR_BLACK = true
        PRESENT_COLOR_RED = false
        PRESENT_COLOR_GREEN = false
    } else if (num == 34) {
        PRESENT_COLOR_RED = true
        PRESENT_COLOR_BLACK = false
        PRESENT_COLOR_GREEN = false
    } else if (num == 35) {
        PRESENT_COLOR_BLACK = true
        PRESENT_COLOR_RED = false
        PRESENT_COLOR_GREEN = false
    } else if (num == 36) {
        PRESENT_COLOR_RED = true
        PRESENT_COLOR_BLACK = false
        PRESENT_COLOR_GREEN = false
    }
}
function VARIABLE_ASSIGN() {
    MAXIMUM_LOANS = 0
    EXPERIENCE = 0
    ESCALATE = 0
    MONEY = 350
    ROULETTE_NUMBER = 0
    RETURN_RATE = 0
    TEMP_2 = 0
    GREEN_SELECTION = false
    BLACK_SELECTION = false
    RED = false
    RED = false
    GREEN = false
    BLACK = false
    PRESENT_COLOR_BLACK = false
    PRESENT_COLOR_RED = false
    PRESENT_COLOR_GREEN = false
    CANNOT_SELECT_ANYMORE = false
    FIRST_12_ROULETTE = false
    SECOND_12_ROULETTE = false
    THIRD_12_ROULETTE = false
    RED_SELECTION = false
    BLACK_SELECTION = false
    _1ST_12_SELECTION = false
    _2ND_12_SELECTION = false
    _3RD_12_SELECTION = false
    PLAYER_BET = false
    BU = 1
    TEMP_CONVERT_TEXT = ""
}
function START() {
    scene.setBackgroundColor(7)
    game.splash("MAKECODE ARCADE:", "ROULETTE")
    game.splash("PRESS 'A' TO PLACE BET", "PRESS 'B' TP SPIN")
    VARIABLE_ASSIGN()
    info.setScore(MONEY)
    BETTING_SPRITES_ASSIGN()
    CURSOR_ASSIGN()
}
function EXPEREINCE() {
    EXPERIENCE += 25
    if (EXPERIENCE == 100) {
        PLAY_NUMBER = 10
        MAXIMUM_LOANS = 100
        game.showLongText("STARTER GAMBLER REACHED: YOU CAN NOW BORROW UP TO $100 FROM THE CASINO, AND CAN PLAY WITH UP TO $10 OF DEBT", DialogLayout.Full)
    } else if (EXPERIENCE == 200) {
        PLAY_NUMBER = 500
        MAXIMUM_LOANS = 1000
        game.showLongText("BEGINNING GAMBLER REACHED: YOU CAN NOW BORROW UP TO $1,000 FROM THE CASINO, AND CAN PLAY WITH UP TO $500 OF DEBT", DialogLayout.Full)
    } else if (EXPERIENCE == 300) {
        PLAY_NUMBER = 5000
        MAXIMUM_LOANS = 10000
        game.showLongText("INTERMEDIATE GAMBLER REACHED: YOU CAN NOW BORROW UP TO $10,000 FROM THE CASINO, AND CAN PLAY WITH UP TO $5,000 OF DEBT", DialogLayout.Full)
    } else if (EXPERIENCE == 400) {
        PLAY_NUMBER = 50000
        MAXIMUM_LOANS = 100000
        game.showLongText("SKILLED GAMBLER REACHED: YOU CAN NOW BORROW UP TO $100,000 FROM THE CASINO, AND CAN PLAY WITH UP TO $50,000 OF DEBT", DialogLayout.Full)
    } else if (EXPERIENCE == 500) {
        PLAY_NUMBER = 500000
        MAXIMUM_LOANS = 1000000
        game.showLongText("PROFESSIONAL GAMBLER REACHED: YOU CAN BORROW UP TO $1,000,000 FROM THE CASINO, AND CAN PLAY WITH UP TO $500,000 OF DEBT", DialogLayout.Full)
    } else if (EXPERIENCE == 1000) {
        PLAY_NUMBER = 5000000
        MAXIMUM_LOANS = 10000000
        game.showLongText("MASTER GAMBLER REACHED: YOU CAN BORROW UP TO $10,000,000 FROM THE CASINO, AND CAN PLAY WITH UP TO $5,000,000 OF DEBT", DialogLayout.Full)
    }
}
function BET_NUMBER(num: number) {
    if (BU == 1) {
        BU += 1
        SELECTED_NUM_1 = num
        CHECK_SELECTION_SETUP(num)
    } else if (BU == 2) {
        BU += 1
        SELECTED_NUM_2 = num
        CHECK_SELECTION_SETUP(num)
    } else if (BU == 3) {
        BU += 1
        SELECTED_NUM_3 = num
        CHECK_SELECTION_SETUP(num)
    } else if (BU == 4) {
        SELECTED_NUM_4 = num
        CHECK_SELECTION_SETUP(num)
    }
}
function CHECK_SELECTION_SETUP(num: number) {
    if (num == 1) {
        RED_SELECTION = true
    } else if (num == 2) {
        BLACK_SELECTED = true
    } else if (num == 3) {
        RED_SELECTION = true
    } else if (num == 4) {
        BLACK_SELECTED = true
    } else if (num == 5) {
        RED_SELECTION = true
    } else if (num == 6) {
        BLACK_SELECTED = true
    } else if (num == 7) {
        RED_SELECTION = true
    } else if (num == 8) {
        BLACK_SELECTED = true
    } else if (num == 9) {
        RED_SELECTED = true
    } else if (num == 10) {
        BLACK_SELECTED = true
    } else if (num == 11) {
        BLACK_SELECTED = true
    } else if (num == 12) {
        RED_SELECTION = true
    } else if (num == 13) {
        BLACK_SELECTED = true
    } else if (num == 14) {
        RED_SELECTION = true
    } else if (num == 15) {
        BLACK_SELECTED = true
    } else if (num == 16) {
        RED_SELECTION = true
    } else if (num == 17) {
        BLACK_SELECTED = true
    } else if (num == 18) {
        RED_SELECTION = true
    } else if (num == 19) {
        BLACK_SELECTED = true
    } else if (num == 20) {
        RED_SELECTION = true
    } else if (num == 21) {
        BLACK_SELECTED = true
    } else if (num == 22) {
        RED_SELECTION = true
    } else if (num == 23) {
        BLACK_SELECTED = true
    } else if (num == 24) {
        RED_SELECTION = true
    } else if (num == 25) {
        BLACK_SELECTION = true
    } else if (num == 26) {
        RED_SELECTION = true
    } else if (num == 27) {
        BLACK_SELECTION = true
    } else if (num == 28) {
        RED_SELECTION = true
    } else if (num == 29) {
        BLACK_SELECTION = true
    } else if (num == 30) {
        RED_SELECTION = true
    } else if (num == 31) {
        BLACK_SELECTION = true
    } else if (num == 32) {
        RED_SELECTION = true
    } else if (num == 33) {
        BLACK_SELECTION = true
    } else if (num == 34) {
        RED_SELECTION = true
    } else if (num == 35) {
        BLACK_SELECTION = true
    } else if (num == 36) {
        RED_SELECTION = true
    } else {
        GREEN_SELECTION = true
    }
    }
}
}
function PLACE_BET() {
    if (TEXT_SPRITE_2) {
        TEXT_SPRITE_2.destroy()
    }
    if (CANNOT_SELECT_ANYMORE == false && BU <= 4) {
        if (Math.abs(MONEY) > Math.abs(PLAY_NUMBER)) {
            PLACE_CHIPS()
            TEMP = game.askForNumber("BET_AMOUNT")
            if (MONEY - TEMP < 0) {
                if (Math.abs(MONEY - TEMP) > Math.abs(MAXIMUM_LOANS)) {
                    game.splash("EXCEEDED MAXIMUM LOANS.", "CANNOT BET THIS AMOUNT.")
                    CLEAR()
                } else {
                    PLAYER_BET = true
                    TEMP_2 = MONEY
                    MONEY += 0 - TEMP
                    info.setScore(MONEY)
                }
            } else {
                PLAYER_BET = true
                TEMP_2 = MONEY
                MONEY += 0 - TEMP
                info.setScore(MONEY)
            }
        } else {
            game.splash("CANNOT PLAY, YOU", "ARE IN TOO MUCH DEBT")
            CLEAR()
        }
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    SPIN()
})
function CHECK_WIN() {
    if (SELECTED_NUM_1 == ROULETTE_NUMBER || SELECTED_NUM_2 == ROULETTE_NUMBER || (SELECTED_NUM_3 == ROULETTE_NUMBER || SELECTED_NUM_4 == ROULETTE_NUMBER) || (_1ST_12_SELECTION == true && FIRST_12_ROULETTE == true || _2ND_12_SELECTION == true && SECOND_12_ROULETTE == true || _3RD_12_SELECTION == true && THIRD_12_ROULETTE == true || (BLACK_SELECTION == true && BLACK == true || RED_SELECTION == true && RED == true || FIRST_18_SELECTION == true && FIRST_18_ROULETTE == true || SECOND_18_SELECTION == true && SECOND_18_ROULETTE == true || ODD_SELECTION == true && ODD_ROULETTE == true || EVEN_ROULETTE == true && EVEN_SELECTION == true))) {
        WIN_LOSE(true)
    } else {
        WIN_LOSE(false)
    }
}
function PLACE_CHIPS() {
    if (CANNOT_SELECT_ANYMORE == false) {
        if (CURSOR.overlapsWith(ODD_SPRITE)) {
            ODD_SELECTION = true
            CHIPS = sprites.create(assets.image`CHIP_SPRITE_DESIGN`, SpriteKind.Chip)
            CHIPS.setPosition(ODD_SPRITE.x, ODD_SPRITE.y)
            CANNOT_SELECT_ANYMORE = true
            RETURN_RATE = 1
        }
    }
    if (CANNOT_SELECT_ANYMORE == false) {
        if (CURSOR.overlapsWith(EVEN_SPRITE)) {
            EVEN_SELECTION = true
            CHIPS = sprites.create(assets.image`CHIP_SPRITE_DESIGN`, SpriteKind.Chip)
            CHIPS.setPosition(EVEN_SPRITE.x, EVEN_SPRITE.y)
            CANNOT_SELECT_ANYMORE = true
            RETURN_RATE = 1
        }
    }
    if (CANNOT_SELECT_ANYMORE == false) {
        if (CURSOR.overlapsWith(FIRST_18_SPRITE)) {
            FIRST_18_SELECTION = true
            CHIPS = sprites.create(assets.image`CHIP_SPRITE_DESIGN`, SpriteKind.Chip)
            CHIPS.setPosition(FIRST_18_SPRITE.x, FIRST_18_SPRITE.y)
            CANNOT_SELECT_ANYMORE = true
            RETURN_RATE = 1
        }
    }
    if (CANNOT_SELECT_ANYMORE == false) {
        if (CURSOR.overlapsWith(SECOND_18_SPRITE)) {
            SECOND_18_SELECTION = true
            CHIPS = sprites.create(assets.image`CHIP_SPRITE_DESIGN`, SpriteKind.Chip)
            CHIPS.setPosition(SECOND_18_SPRITE.x, SECOND_18_SPRITE.y)
            CANNOT_SELECT_ANYMORE = true
            RETURN_RATE = 1
        }
    }
    if (CANNOT_SELECT_ANYMORE == false) {
        if (CURSOR.overlapsWith(_1ST_12_SPRITE)) {
            _1ST_12_SELECTION = true
            CHIPS = sprites.create(assets.image`CHIP_SPRITE_DESIGN`, SpriteKind.Chip)
            CHIPS.setPosition(_1ST_12_SPRITE.x, _1ST_12_SPRITE.y)
            CANNOT_SELECT_ANYMORE = true
            RETURN_RATE = 2
        }
    }
    if (CANNOT_SELECT_ANYMORE == false) {
        if (CURSOR.overlapsWith(_2ND_12_SPRITE)) {
            _2ND_12_SELECTION = true
            CHIPS = sprites.create(assets.image`CHIP_SPRITE_DESIGN`, SpriteKind.Chip)
            CHIPS.setPosition(_2ND_12_SPRITE.x, _2ND_12_SPRITE.y)
            CANNOT_SELECT_ANYMORE = true
            RETURN_RATE = 2
        }
    }
    if (CANNOT_SELECT_ANYMORE == false) {
        if (CURSOR.overlapsWith(_3RD_12_SPRITE)) {
            _3RD_12_SELECTION = true
            CHIPS = sprites.create(assets.image`CHIP_SPRITE_DESIGN`, SpriteKind.Chip)
            CHIPS.setPosition(_3RD_12_SPRITE.x, _3RD_12_SPRITE.y)
            CANNOT_SELECT_ANYMORE = true
            RETURN_RATE = 2
        }
    }
    if (CANNOT_SELECT_ANYMORE == false) {
        if (CURSOR.overlapsWith(RED_SPRITE)) {
            RED_SELECTION = true
            CHIPS = sprites.create(assets.image`CHIP_SPRITE_DESIGN`, SpriteKind.Chip)
            CHIPS.setPosition(RED_SPRITE.x, RED_SPRITE.y)
            CANNOT_SELECT_ANYMORE = true
            RETURN_RATE = 1
        }
    }
    if (CANNOT_SELECT_ANYMORE == false) {
        if (CURSOR.overlapsWith(BLACK_SPRITE)) {
            BLACK_SELECTION = true
            CHIPS = sprites.create(assets.image`CHIP_SPRITE_DESIGN`, SpriteKind.Chip)
            CHIPS.setPosition(BLACK_SPRITE.x, BLACK_SPRITE.y)
            CANNOT_SELECT_ANYMORE = true
            RETURN_RATE = 1
        }
    }
    if (CANNOT_SELECT_ANYMORE == false) {
        if (CURSOR.overlapsWith(NUM_0)) {
            CHIPS = sprites.create(assets.image`CHIP_SPRITE_DESIGN`, SpriteKind.Chip)
            CHIPS.setPosition(NUM_0.x, NUM_0.y)
            BET_NUMBER(0)
            RETURN_RATE_CHECK()
        }
    }
    if (CANNOT_SELECT_ANYMORE == false) {
        if (CURSOR.overlapsWith(NUM_1)) {
            CHIPS = sprites.create(assets.image`CHIP_SPRITE_DESIGN`, SpriteKind.Chip)
            CHIPS.setPosition(NUM_1.x, NUM_1.y)
            BET_NUMBER(1)
            RETURN_RATE_CHECK()
        }
    }
    if (CANNOT_SELECT_ANYMORE == false) {
        if (CURSOR.overlapsWith(NUM_2)) {
            CHIPS = sprites.create(assets.image`CHIP_SPRITE_DESIGN`, SpriteKind.Chip)
            CHIPS.setPosition(NUM_2.x, NUM_2.y)
            BET_NUMBER(2)
            RETURN_RATE_CHECK()
        }
    }
    if (CANNOT_SELECT_ANYMORE == false) {
        if (CURSOR.overlapsWith(NUM_3)) {
            CHIPS = sprites.create(assets.image`CHIP_SPRITE_DESIGN`, SpriteKind.Chip)
            CHIPS.setPosition(NUM_3.x, NUM_3.y)
            BET_NUMBER(3)
            RETURN_RATE_CHECK()
        }
    }
    if (CANNOT_SELECT_ANYMORE == false) {
        if (CURSOR.overlapsWith(NUM_4)) {
            CHIPS = sprites.create(assets.image`CHIP_SPRITE_DESIGN`, SpriteKind.Chip)
            CHIPS.setPosition(NUM_4.x, NUM_4.y)
            BET_NUMBER(4)
            RETURN_RATE_CHECK()
        }
    }
    if (CANNOT_SELECT_ANYMORE == false) {
        if (CURSOR.overlapsWith(NUM_5)) {
            CHIPS = sprites.create(assets.image`CHIP_SPRITE_DESIGN`, SpriteKind.Chip)
            CHIPS.setPosition(NUM_5.x, NUM_5.y)
            BET_NUMBER(5)
            RETURN_RATE_CHECK()
        }
    }
    if (CANNOT_SELECT_ANYMORE == false) {
        if (CURSOR.overlapsWith(NUM_6)) {
            CHIPS = sprites.create(assets.image`CHIP_SPRITE_DESIGN`, SpriteKind.Chip)
            CHIPS.setPosition(NUM_6.x, NUM_6.y)
            BET_NUMBER(6)
            RETURN_RATE_CHECK()
        }
    }
    if (CANNOT_SELECT_ANYMORE == false) {
        if (CURSOR.overlapsWith(NUM_7)) {
            CHIPS = sprites.create(assets.image`CHIP_SPRITE_DESIGN`, SpriteKind.Chip)
            CHIPS.setPosition(NUM_7.x, NUM_7.y)
            BET_NUMBER(7)
            RETURN_RATE_CHECK()
        }
    }
    if (CANNOT_SELECT_ANYMORE == false) {
        if (CURSOR.overlapsWith(NUM_8)) {
            CHIPS = sprites.create(assets.image`CHIP_SPRITE_DESIGN`, SpriteKind.Chip)
            CHIPS.setPosition(NUM_8.x, NUM_8.y)
            BET_NUMBER(8)
            RETURN_RATE_CHECK()
        }
    }
    if (CANNOT_SELECT_ANYMORE == false) {
        if (CURSOR.overlapsWith(NUM_9)) {
            CHIPS = sprites.create(assets.image`CHIP_SPRITE_DESIGN`, SpriteKind.Chip)
            CHIPS.setPosition(NUM_9.x, NUM_9.y)
            BET_NUMBER(9)
            RETURN_RATE_CHECK()
        }
    }
    if (CANNOT_SELECT_ANYMORE == false) {
        if (CURSOR.overlapsWith(NUM_10)) {
            CHIPS = sprites.create(assets.image`CHIP_SPRITE_DESIGN`, SpriteKind.Chip)
            CHIPS.setPosition(NUM_10.x, NUM_10.y)
            BET_NUMBER(10)
            RETURN_RATE_CHECK()
        }
    }
    if (CANNOT_SELECT_ANYMORE == false) {
        if (CURSOR.overlapsWith(NUM_11)) {
            CHIPS = sprites.create(assets.image`CHIP_SPRITE_DESIGN`, SpriteKind.Chip)
            CHIPS.setPosition(NUM_11.x, NUM_11.y)
            BET_NUMBER(11)
            RETURN_RATE_CHECK()
        }
    }
    if (CANNOT_SELECT_ANYMORE == false) {
        if (CURSOR.overlapsWith(NUM_12)) {
            CHIPS = sprites.create(assets.image`CHIP_SPRITE_DESIGN`, SpriteKind.Chip)
            CHIPS.setPosition(NUM_12.x, NUM_12.y)
            BET_NUMBER(12)
            RETURN_RATE_CHECK()
        }
    }
    if (CANNOT_SELECT_ANYMORE == false) {
        if (CURSOR.overlapsWith(NUM_13)) {
            CHIPS = sprites.create(assets.image`CHIP_SPRITE_DESIGN`, SpriteKind.Chip)
            CHIPS.setPosition(NUM_13.x, NUM_13.y)
            BET_NUMBER(13)
            RETURN_RATE_CHECK()
        }
    }
    if (CANNOT_SELECT_ANYMORE == false) {
        if (CURSOR.overlapsWith(NUM_14)) {
            CHIPS = sprites.create(assets.image`CHIP_SPRITE_DESIGN`, SpriteKind.Chip)
            CHIPS.setPosition(NUM_14.x, NUM_14.y)
            BET_NUMBER(14)
            RETURN_RATE_CHECK()
        }
    }
    if (CANNOT_SELECT_ANYMORE == false) {
        if (CURSOR.overlapsWith(NUM_15)) {
            CHIPS = sprites.create(assets.image`CHIP_SPRITE_DESIGN`, SpriteKind.Chip)
            CHIPS.setPosition(NUM_15.x, NUM_15.y)
            BET_NUMBER(15)
            RETURN_RATE_CHECK()
        }
    }
    if (CANNOT_SELECT_ANYMORE == false) {
        if (CURSOR.overlapsWith(NUM_16)) {
            CHIPS = sprites.create(assets.image`CHIP_SPRITE_DESIGN`, SpriteKind.Chip)
            CHIPS.setPosition(NUM_16.x, NUM_16.y)
            BET_NUMBER(16)
            RETURN_RATE_CHECK()
        }
    }
    if (CANNOT_SELECT_ANYMORE == false) {
        if (CURSOR.overlapsWith(NUM_17)) {
            CHIPS = sprites.create(assets.image`CHIP_SPRITE_DESIGN`, SpriteKind.Chip)
            CHIPS.setPosition(NUM_17.x, NUM_17.y)
            BET_NUMBER(17)
            RETURN_RATE_CHECK()
        }
    }
    if (CANNOT_SELECT_ANYMORE == false) {
        if (CURSOR.overlapsWith(NUM_18)) {
            CHIPS = sprites.create(assets.image`CHIP_SPRITE_DESIGN`, SpriteKind.Chip)
            CHIPS.setPosition(NUM_18.x, NUM_18.y)
            BET_NUMBER(18)
            RETURN_RATE_CHECK()
        }
    }
    if (CANNOT_SELECT_ANYMORE == false) {
        if (CURSOR.overlapsWith(NUM_19)) {
            CHIPS = sprites.create(assets.image`CHIP_SPRITE_DESIGN`, SpriteKind.Chip)
            CHIPS.setPosition(NUM_19.x, NUM_19.y)
            BET_NUMBER(19)
            RETURN_RATE_CHECK()
        }
    }
    if (CANNOT_SELECT_ANYMORE == false) {
        if (CURSOR.overlapsWith(NUM_20)) {
            CHIPS = sprites.create(assets.image`CHIP_SPRITE_DESIGN`, SpriteKind.Chip)
            CHIPS.setPosition(NUM_20.x, NUM_20.y)
            BET_NUMBER(20)
            RETURN_RATE_CHECK()
        }
    }
    if (CANNOT_SELECT_ANYMORE == false) {
        if (CURSOR.overlapsWith(NUM_21)) {
            CHIPS = sprites.create(assets.image`CHIP_SPRITE_DESIGN`, SpriteKind.Chip)
            CHIPS.setPosition(NUM_21.x, NUM_21.y)
            BET_NUMBER(21)
            RETURN_RATE_CHECK()
        }
    }
    if (CANNOT_SELECT_ANYMORE == false) {
        if (CURSOR.overlapsWith(NUM_22)) {
            CHIPS = sprites.create(assets.image`CHIP_SPRITE_DESIGN`, SpriteKind.Chip)
            CHIPS.setPosition(NUM_22.x, NUM_22.y)
            BET_NUMBER(22)
            RETURN_RATE_CHECK()
        }
    }
    if (CANNOT_SELECT_ANYMORE == false) {
        if (CURSOR.overlapsWith(NUM_23)) {
            CHIPS = sprites.create(assets.image`CHIP_SPRITE_DESIGN`, SpriteKind.Chip)
            CHIPS.setPosition(NUM_23.x, NUM_23.y)
            BET_NUMBER(23)
            RETURN_RATE_CHECK()
        }
    }
    if (CANNOT_SELECT_ANYMORE == false) {
        if (CURSOR.overlapsWith(NUM_24)) {
            CHIPS = sprites.create(assets.image`CHIP_SPRITE_DESIGN`, SpriteKind.Chip)
            CHIPS.setPosition(NUM_24.x, NUM_24.y)
            BET_NUMBER(24)
            RETURN_RATE_CHECK()
        }
    }
    if (CANNOT_SELECT_ANYMORE == false) {
        if (CURSOR.overlapsWith(NUM_25)) {
            CHIPS = sprites.create(assets.image`CHIP_SPRITE_DESIGN`, SpriteKind.Chip)
            CHIPS.setPosition(NUM_25.x, NUM_25.y)
            BET_NUMBER(25)
            RETURN_RATE_CHECK()
        }
    }
    if (CANNOT_SELECT_ANYMORE == false) {
        if (CURSOR.overlapsWith(NUM_26)) {
            CHIPS = sprites.create(assets.image`CHIP_SPRITE_DESIGN`, SpriteKind.Chip)
            CHIPS.setPosition(NUM_26.x, NUM_26.y)
            BET_NUMBER(26)
            RETURN_RATE_CHECK()
        }
    }
    if (CANNOT_SELECT_ANYMORE == false) {
        if (CURSOR.overlapsWith(NUM_27)) {
            CHIPS = sprites.create(assets.image`CHIP_SPRITE_DESIGN`, SpriteKind.Chip)
            CHIPS.setPosition(NUM_27.x, NUM_27.y)
            BET_NUMBER(27)
            RETURN_RATE_CHECK()
        }
    }
    if (CANNOT_SELECT_ANYMORE == false) {
        if (CURSOR.overlapsWith(NUM_28)) {
            CHIPS = sprites.create(assets.image`CHIP_SPRITE_DESIGN`, SpriteKind.Chip)
            CHIPS.setPosition(NUM_28.x, NUM_28.y)
            BET_NUMBER(28)
            RETURN_RATE_CHECK()
        }
    }
    if (CANNOT_SELECT_ANYMORE == false) {
        if (CURSOR.overlapsWith(NUM_29)) {
            CHIPS = sprites.create(assets.image`CHIP_SPRITE_DESIGN`, SpriteKind.Chip)
            CHIPS.setPosition(NUM_29.x, NUM_29.y)
            BET_NUMBER(29)
            RETURN_RATE_CHECK()
        }
    }
    if (CANNOT_SELECT_ANYMORE == false) {
        if (CURSOR.overlapsWith(NUM_30)) {
            CHIPS = sprites.create(assets.image`CHIP_SPRITE_DESIGN`, SpriteKind.Chip)
            CHIPS.setPosition(NUM_30.x, NUM_30.y)
            BET_NUMBER(30)
            RETURN_RATE_CHECK()
        }
    }
    if (CANNOT_SELECT_ANYMORE == false) {
        if (CURSOR.overlapsWith(NUM_31)) {
            CHIPS = sprites.create(assets.image`CHIP_SPRITE_DESIGN`, SpriteKind.Chip)
            CHIPS.setPosition(NUM_31.x, NUM_31.y)
            BET_NUMBER(31)
            RETURN_RATE_CHECK()
        }
    }
    if (CANNOT_SELECT_ANYMORE == false) {
        if (CURSOR.overlapsWith(NUM_32)) {
            CHIPS = sprites.create(assets.image`CHIP_SPRITE_DESIGN`, SpriteKind.Chip)
            CHIPS.setPosition(NUM_32.x, NUM_32.y)
            BET_NUMBER(32)
            RETURN_RATE_CHECK()
        }
    }
    if (CANNOT_SELECT_ANYMORE == false) {
        if (CURSOR.overlapsWith(NUM_33)) {
            CHIPS = sprites.create(assets.image`CHIP_SPRITE_DESIGN`, SpriteKind.Chip)
            CHIPS.setPosition(NUM_33.x, NUM_33.y)
            BET_NUMBER(33)
            RETURN_RATE_CHECK()
        }
    }
    if (CANNOT_SELECT_ANYMORE == false) {
        if (CURSOR.overlapsWith(NUM_34)) {
            CHIPS = sprites.create(assets.image`CHIP_SPRITE_DESIGN`, SpriteKind.Chip)
            CHIPS.setPosition(NUM_34.x, NUM_34.y)
            BET_NUMBER(34)
            RETURN_RATE_CHECK()
        }
    }
    if (CANNOT_SELECT_ANYMORE == false) {
        if (CURSOR.overlapsWith(NUM_35)) {
            CHIPS = sprites.create(assets.image`CHIP_SPRITE_DESIGN`, SpriteKind.Chip)
            CHIPS.setPosition(NUM_35.x, NUM_35.y)
            BET_NUMBER(35)
            RETURN_RATE_CHECK()
        }
    }
    if (CANNOT_SELECT_ANYMORE == false) {
        if (CURSOR.overlapsWith(NUM_36)) {
            CHIPS = sprites.create(assets.image`CHIP_SPRITE_DESIGN`, SpriteKind.Chip)
            CHIPS.setPosition(NUM_36.x, NUM_36.y)
            BET_NUMBER(36)
            RETURN_RATE_CHECK()
        }
    }
}
function WIN_LOSE(bool: boolean) {
    if (bool == true) {
        MONEY = TEMP_2
        MONEY += 0 + (TEMP * RETURN_RATE)
        TEMP_CONVERT_TEXT = convertToText(TEMP)
        info.setScore(MONEY)
        timer.after(5000, function () {
            TEXT_SPRITE.destroy()
            TEXT_SPRITE_2 = textsprite.create(`WINNER: + ${TEMP_CONVERT_TEXT}!`)
            TEXT_SPRITE_2.setPosition(80, 100)
        })
        BU = 1
        EXPEREINCE()
    } else if (bool == false) {
        MONEY = TEMP_2
        MONEY += 0 - TEMP
        TEMP_CONVERT_TEXT = convertToText(TEMP)
        info.setScore(MONEY)
        timer.after(5000, function () {
            TEXT_SPRITE.destroy()
            TEXT_SPRITE_2 = textsprite.create(`LOSER: - ${TEMP_CONVERT_TEXT}!`)
            TEXT_SPRITE_2.setPosition(80, 100)
        })
        BU = 1
        EXPEREINCE()
    }
}
function CURSOR_ASSIGN() {
    CURSOR = sprites.create(assets.image`CHIP`, SpriteKind.Player)
    CURSOR.setPosition(80, 80)
    controller.moveSprite(CURSOR, 35, 35)
    CURSOR.setStayInScreen(true)
    CURSOR.setBounceOnWall(true)
}
function CHECK_WIN_SETUP(num: number) {
    if (ROULETTE_NUMBER >= 0 && ROULETTE_NUMBER <= 12) {
        FIRST_12_ROULETTE = true
    } else if (ROULETTE_NUMBER >= 13 && ROULETTE_NUMBER <= 24) {
        SECOND_12_ROULETTE = true
    } else if (ROULETTE_NUMBER >= 25 && ROULETTE_NUMBER <= 36) {
        THIRD_12_ROULETTE = true
    }
    if (ROULETTE_NUMBER >= 1 && ROULETTE_NUMBER <= 18) {
       FIRST_18_ROULETTE = true
    } else if (ROULETTE_NUMBER >= 19 && ROULETTE_NUMBER <= 36) {
       SECOND_18_ROULETTE = true
    }
    if (ROULETTE_NUMBER % 2 == 0) {
        EVEN_ROULETTE = true
    } else {
        ODD_ROULETTE = true
    }
    if (num == 1) {
        RED = true
    } else if (num == 2) {
        BLACK = true
    } else if (num == 3) {
        RED = true
    } else if (num == 4) {
        BLACK = true
    } else if (num == 5) {
        RED = true
    } else if (num == 6) {
        BLACK = true
    } else if (num == 7) {
        RED = true
    } else if (num == 8) {
        BLACK = true
    } else if (num == 9) {
        RED = true
    } else if (num == 10) {
        BLACK = true
    } else if (num == 11) {
        BLACK = true
    } else if (num == 12) {
        RED = true
    } else if (num == 13) {
        BLACK = true
    } else if (num == 14) {
        RED = true
    } else if (num == 15) {
        BLACK = true
    } else if (num == 16) {
        RED = true
    } else if (num == 17) {
        BLACK = true
    } else if (num == 18) {
        RED = true
    } else if (num == 19) {
        BLACK = true
    } else if (num == 20) {
        RED = true
    } else if (num == 21) {
        BLACK = true
    } else if (num == 22) {
        RED = true
    } else if (num == 23) {
        BLACK = true
    } else if (num == 24) {
        RED = true
    } else if (num == 25) {
        BLACK = true
    } else if (num == 26) {
        RED = true
    } else if (num == 27) {
        BLACK = true
    } else if (num == 28) {
        RED = true
    } else if (num == 29) {
        BLACK = true
    } else if (num == 30) {
        RED = true
    } else if (num == 31) {
        BLACK = true
    } else if (num == 32) {
        RED = true
    } else if (num == 33) {
        BLACK = true
    } else if (num == 34) {
        RED = true
    } else if (num == 35) {
        BLACK = true
    } else if (num == 36) {
        RED = true
    } else {
        GREEN = true
    }
}
function RETURN_RATE_CHECK() {
    if (BU == 1) {
        RETURN_RATE = 35
    } else if (BU == 2) {
        RETURN_RATE = 17
    } else if (BU == 3) {
        RETURN_RATE = 13
    } else if (BU == 4) {
        RETURN_RATE = 8
    }
}
function VARIABLE_ASSIGN() {
    MAXIMUM_LOANS = 0
    EXPERIENCE = 0
    ESCALATE = 0
    MONEY = 350
    ROULETTE_NUMBER = 0
    RETURN_RATE = 0
    TEMP_2 = 0
    GREEN_SELECTION = false
    BLACK_SELECTION = false
    RED = false
    RED = false
    GREEN = false
    BLACK = false
    PRESENT_COLOR_BLACK = false
    PRESENT_COLOR_RED = false
    PRESENT_COLOR_GREEN = false
    CANNOT_SELECT_ANYMORE = false
    FIRST_12_ROULETTE = false
    SECOND_12_ROULETTE = false
    THIRD_12_ROULETTE = false
    FIRST_18_ROULETTE = false
    SECOND_18_ROULETTE = false
    RED_SELECTION = false
    BLACK_SELECTION = false
    _1ST_12_SELECTION = false
    _2ND_12_SELECTION = false
    _3RD_12_SELECTION = false
    PLAYER_BET = false
    BU = 1
    TEMP_CONVERT_TEXT = ""
}
function START() {
    scene.setBackgroundColor(7)
    game.splash("MAKECODE ARCADE:", "ROULETTE")
    game.splash("PRESS 'A' TO PLACE BET", "PRESS 'B' TP SPIN")
    VARIABLE_ASSIGN()
    info.setScore(MONEY)
    BETTING_SPRITES_ASSIGN()
    CURSOR_ASSIGN()
}
function EXPEREINCE() {
    EXPERIENCE += 25
    if (EXPERIENCE == 100) {
        PLAY_NUMBER = 10
        MAXIMUM_LOANS = 100
        game.showLongText("STARTER GAMBLER REACHED: YOU CAN NOW BORROW UP TO $100 FROM THE CASINO, AND CAN PLAY WITH UP TO $10 OF DEBT", DialogLayout.Full)
    } else if (EXPERIENCE == 200) {
        PLAY_NUMBER = 500
        MAXIMUM_LOANS = 1000
        game.showLongText("BEGINNING GAMBLER REACHED: YOU CAN NOW BORROW UP TO $1,000 FROM THE CASINO, AND CAN PLAY WITH UP TO $500 OF DEBT", DialogLayout.Full)
    } else if (EXPERIENCE == 300) {
        PLAY_NUMBER = 5000
        MAXIMUM_LOANS = 10000
        game.showLongText("INTERMEDIATE GAMBLER REACHED: YOU CAN NOW BORROW UP TO $10,000 FROM THE CASINO, AND CAN PLAY WITH UP TO $5,000 OF DEBT", DialogLayout.Full)
    } else if (EXPERIENCE == 400) {
        PLAY_NUMBER = 50000
        MAXIMUM_LOANS = 100000
        game.showLongText("SKILLED GAMBLER REACHED: YOU CAN NOW BORROW UP TO $100,000 FROM THE CASINO, AND CAN PLAY WITH UP TO $50,000 OF DEBT", DialogLayout.Full)
    } else if (EXPERIENCE == 500) {
        PLAY_NUMBER = 500000
        MAXIMUM_LOANS = 1000000
        game.showLongText("PROFESSIONAL GAMBLER REACHED: YOU CAN BORROW UP TO $1,000,000 FROM THE CASINO, AND CAN PLAY WITH UP TO $500,000 OF DEBT", DialogLayout.Full)
    } else if (EXPERIENCE == 1000) {
        PLAY_NUMBER = 5000000
        MAXIMUM_LOANS = 10000000
        game.showLongText("MASTER GAMBLER REACHED: YOU CAN BORROW UP TO $10,000,000 FROM THE CASINO, AND CAN PLAY WITH UP TO $5,000,000 OF DEBT", DialogLayout.Full)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    PLACE_BET()
})
function BET_NUMBER(num: number) {
    if (BU == 1) {
        BU += 1
        SELECTED_NUM_1 = num
        CHECK_SELECTION_SETUP(num)
    } else if (BU == 2) {
        BU += 1
        SELECTED_NUM_2 = num
        CHECK_SELECTION_SETUP(num)
    } else if (BU == 3) {
        BU += 1
        SELECTED_NUM_3 = num
        CHECK_SELECTION_SETUP(num)
    } else if (BU == 4) {
        SELECTED_NUM_4 = num
        CHECK_SELECTION_SETUP(num)
    }
}
function CHECK_SELECTION_SETUP(num: number) {
    if (num == 1) {
        RED_SELECTION = true
    } else if (num == 2) {
        BLACK_SELECTED = true
    } else if (num == 3) {
        RED_SELECTION = true
    } else if (num == 4) {
        BLACK_SELECTED = true
    } else if (num == 5) {
        RED_SELECTION = true
    } else if (num == 6) {
        BLACK_SELECTED = true
    } else if (num == 7) {
        RED_SELECTION = true
    } else if (num == 8) {
        BLACK_SELECTED = true
    } else if (num == 9) {
        RED_SELECTED = true
    } else if (num == 10) {
        BLACK_SELECTED = true
    } else if (num == 11) {
        BLACK_SELECTED = true
    } else if (num == 12) {
        RED_SELECTION = true
    } else if (num == 13) {
        BLACK_SELECTED = true
    } else if (num == 14) {
        RED_SELECTION = true
    } else if (num == 15) {
        BLACK_SELECTED = true
    } else if (num == 16) {
        RED_SELECTION = true
    } else if (num == 17) {
        BLACK_SELECTED = true
    } else if (num == 18) {
        RED_SELECTION = true
    } else if (num == 19) {
        BLACK_SELECTED = true
    } else if (num == 20) {
        RED_SELECTION = true
    } else if (num == 21) {
        BLACK_SELECTED = true
    } else if (num == 22) {
        RED_SELECTION = true
    } else if (num == 23) {
        BLACK_SELECTED = true
    } else if (num == 24) {
        RED_SELECTION = true
    } else if (num == 25) {
        BLACK_SELECTION = true
    } else if (num == 26) {
        RED_SELECTION = true
    } else if (num == 27) {
        BLACK_SELECTION = true
    } else if (num == 28) {
        RED_SELECTION = true
    } else if (num == 29) {
        BLACK_SELECTION = true
    } else if (num == 30) {
        RED_SELECTION = true
    } else if (num == 31) {
        BLACK_SELECTION = true
    } else if (num == 32) {
        RED_SELECTION = true
    } else if (num == 33) {
        BLACK_SELECTION = true
    } else if (num == 34) {
        RED_SELECTION = true
    } else if (num == 35) {
        BLACK_SELECTION = true
    } else if (num == 36) {
        RED_SELECTION = true
    } else {
        GREEN_SELECTION = true
    }
}
function BETTING_SPRITES_ASSIGN() {
    _1ST_12_SPRITE = sprites.create(assets.image`1ST_12_SPRITE`, SpriteKind.Num_1_12)
    _2ND_12_SPRITE = sprites.create(assets.image`2ND_12_SPRITE`, SpriteKind.Num_13_24)
    _3RD_12_SPRITE = sprites.create(assets.image`3RD_12_SPRITE`, SpriteKind.Num_25_36)
    FIRST_18_SPRITE = sprites.create(assets.image`1ST_18_SPRITE`, SpriteKind.Num_1_18)
    SECOND_18_SPRITE = sprites.create(assets.image`2ND_18_SPRITE`, SpriteKind.Num_19_36)
    BLACK_SPRITE = sprites.create(assets.image`BLACK_SPRITE`, SpriteKind.Number_0)
    RED_SPRITE = sprites.create(assets.image`RED_SPRITE`, SpriteKind.Number_0)
    ODD_SPRITE = sprites.create(assets.image`ODD_SPRITE`, SpriteKind.Odd)
    EVEN_SPRITE = sprites.create(assets.image`EVEN_SPRITE`, SpriteKind.Even)
    NUM_0 = sprites.create(assets.image`NUM_0`, SpriteKind.Number_0)
    NUM_1 = sprites.create(assets.image`NUM_1`, SpriteKind.Number_1_12)
    NUM_2 = sprites.create(assets.image`NUM_2`, SpriteKind.Number_1_12)
    NUM_3 = sprites.create(assets.image`NUM_3`, SpriteKind.Number_1_12)
    NUM_4 = sprites.create(assets.image`NUM_4`, SpriteKind.Number_1_12)
    NUM_5 = sprites.create(assets.image`NUM_5`, SpriteKind.Number_1_12)
    NUM_6 = sprites.create(assets.image`NUM_6`, SpriteKind.Number_1_12)
    NUM_7 = sprites.create(assets.image`NUM_7`, SpriteKind.Number_1_12)
    NUM_8 = sprites.create(assets.image`NUM_8`, SpriteKind.Number_1_12)
    NUM_9 = sprites.create(assets.image`NUM_9`, SpriteKind.Number_1_12)
    NUM_10 = sprites.create(assets.image`NUM_10`, SpriteKind.Number_1_12)
    NUM_11 = sprites.create(assets.image`NUM_11`, SpriteKind.Number_1_12)
    NUM_12 = sprites.create(assets.image`NUM_12`, SpriteKind.Number_1_12)
    NUM_13 = sprites.create(assets.image`NUM_13`, SpriteKind.Num_13_24)
    NUM_14 = sprites.create(assets.image`NUM_14`, SpriteKind.Num_13_24)
    NUM_15 = sprites.create(assets.image`NUM_15`, SpriteKind.Num_13_24)
    NUM_16 = sprites.create(assets.image`NUM_16`, SpriteKind.Num_13_24)
    NUM_17 = sprites.create(assets.image`NUM_17`, SpriteKind.Num_13_24)
    NUM_18 = sprites.create(assets.image`NUM_18`, SpriteKind.Num_13_24)
    NUM_19 = sprites.create(assets.image`NUM_19`, SpriteKind.Num_13_24)
    NUM_20 = sprites.create(assets.image`NUM_20`, SpriteKind.Num_13_24)
    NUM_21 = sprites.create(assets.image`NUM_21`, SpriteKind.Num_13_24)
    NUM_22 = sprites.create(assets.image`NUM_22`, SpriteKind.Num_13_24)
    NUM_23 = sprites.create(assets.image`NUM_23`, SpriteKind.Num_13_24)
    NUM_24 = sprites.create(assets.image`NUM_24`, SpriteKind.Num_13_24)
    NUM_25 = sprites.create(assets.image`NUM_25`, SpriteKind.Num_25_36)
    NUM_26 = sprites.create(assets.image`NUM_26`, SpriteKind.Num_25_36)
    NUM_27 = sprites.create(assets.image`NUM_27`, SpriteKind.Num_25_36)
    NUM_28 = sprites.create(assets.image`NUM_28`, SpriteKind.Num_25_36)
    NUM_29 = sprites.create(assets.image`NUM_29`, SpriteKind.Num_25_36)
    NUM_30 = sprites.create(assets.image`NUM_30`, SpriteKind.Num_25_36)
    NUM_31 = sprites.create(assets.image`NUM_31`, SpriteKind.Num_25_36)
    NUM_32 = sprites.create(assets.image`NUM_32`, SpriteKind.Num_25_36)
    NUM_33 = sprites.create(assets.image`NUM_33`, SpriteKind.Num_25_36)
    NUM_34 = sprites.create(assets.image`NUM_34`, SpriteKind.Num_25_36)
    NUM_35 = sprites.create(assets.image`NUM_35`, SpriteKind.Num_25_36)
    NUM_36 = sprites.create(assets.image`NUM_36`, SpriteKind.Num_25_36)
    _1ST_12_SPRITE.setPosition(36, 63)
    _2ND_12_SPRITE.setPosition(84, 63)
    _3RD_12_SPRITE.setPosition(132, 63)
    FIRST_18_SPRITE.setPosition(24,79)
    SECOND_18_SPRITE.setPosition(144,79)
    BLACK_SPRITE.setPosition(72, 79)
    RED_SPRITE.setPosition(96, 79)
    ODD_SPRITE.setPosition(120, 79)
    EVEN_SPRITE.setPosition(48, 79)
    NUM_0.setPosition(6, 37)
    NUM_1.setPosition(18, 25)
    NUM_2.setPosition(18, 37)
    NUM_3.setPosition(18, 49)
    NUM_4.setPosition(30, 25)
    NUM_5.setPosition(30, 37)
    NUM_6.setPosition(30, 49)
    NUM_7.setPosition(42, 25)
    NUM_8.setPosition(42, 37)
    NUM_9.setPosition(42, 49)
    NUM_10.setPosition(54, 25)
    NUM_11.setPosition(54, 37)
    NUM_12.setPosition(54, 49)
    NUM_13.setPosition(66, 25)
    NUM_14.setPosition(66, 37)
    NUM_15.setPosition(66, 49)
    NUM_16.setPosition(78, 25)
    NUM_17.setPosition(78, 37)
    NUM_18.setPosition(78, 49)
    NUM_19.setPosition(90, 25)
    NUM_20.setPosition(90, 37)
    NUM_21.setPosition(90, 49)
    NUM_22.setPosition(102, 25)
    NUM_23.setPosition(102, 37)
    NUM_24.setPosition(102, 49)
    NUM_25.setPosition(114, 25)
    NUM_26.setPosition(114, 37)
    NUM_27.setPosition(114, 49)
    NUM_28.setPosition(126, 25)
    NUM_29.setPosition(126, 37)
    NUM_30.setPosition(126, 49)
    NUM_31.setPosition(138, 25)
    NUM_32.setPosition(138, 37)
    NUM_33.setPosition(138, 49)
    NUM_34.setPosition(150, 25)
    NUM_35.setPosition(150, 37)
    NUM_36.setPosition(150, 49)
}
let RED_SELECTED = false
let BLACK_SELECTED = false
let GREEN_SELECTION = false
let RETURN_RATE = 0
let ESCALATE = 0
let EXPERIENCE = 0
let GREEN = false
let NUM_36: Sprite = null
let NUM_35: Sprite = null
let NUM_34: Sprite = null
let NUM_33: Sprite = null
let NUM_32: Sprite = null
let NUM_31: Sprite = null
let NUM_30: Sprite = null
let NUM_29: Sprite = null
let NUM_28: Sprite = null
let NUM_27: Sprite = null
let NUM_26: Sprite = null
let NUM_25: Sprite = null
let NUM_24: Sprite = null
let NUM_23: Sprite = null
let NUM_22: Sprite = null
let NUM_21: Sprite = null
let NUM_20: Sprite = null
let NUM_19: Sprite = null
let NUM_18: Sprite = null
let NUM_17: Sprite = null
let NUM_16: Sprite = null
let NUM_15: Sprite = null
let NUM_14: Sprite = null
let NUM_13: Sprite = null
let NUM_12: Sprite = null
let NUM_11: Sprite = null
let NUM_10: Sprite = null
let NUM_9: Sprite = null
let NUM_8: Sprite = null
let NUM_7: Sprite = null
let NUM_6: Sprite = null
let NUM_5: Sprite = null
let NUM_4: Sprite = null
let NUM_3: Sprite = null
let NUM_2: Sprite = null
let NUM_1: Sprite = null
let NUM_0: Sprite = null
let BLACK_SPRITE: Sprite = null
let RED_SPRITE: Sprite = null
let _3RD_12_SPRITE: Sprite = null
let _2ND_12_SPRITE: Sprite = null
let CHIPS: Sprite = null
let _1ST_12_SPRITE: Sprite = null
let CURSOR: Sprite = null
let RED = false
let RED_SELECTION = false
let BLACK = false
let PRESENT_COLOR_RED = false
let PRESENT_COLOR_BLACK = false
let PRESENT_COLOR_GREEN = false
let BLACK_SELECTION = false
let THIRD_12_ROULETTE = false
let _3RD_12_SELECTION = false
let SECOND_12_ROULETTE = false
let _2ND_12_SELECTION = false
let FIRST_12_ROULETTE = false
let _1ST_12_SELECTION = false
let FIRST_18_ROULETTE = false
let SECOND_18_ROULETTE = false
let BLACK_DISPLAY_SPRITE: Sprite = null
let RED_DISPLAY_SPRITE: Sprite = null
let GREEN_DISPLAY_SPRITE: Sprite = null
let FIRST_18_SPRITE: Sprite = null
let SECOND_18_SPRITE: Sprite = null
let SELECTED_NUM_4 = 0
let SELECTED_NUM_3 = 0
let SELECTED_NUM_2 = 0
let SELECTED_NUM_1 = 0
let TEMP_2 = 0
let MAXIMUM_LOANS = 0
let TEMP = 0
let PLAY_NUMBER = 0
let MONEY = 0
let BU = 0
let ODD_SELECTION = false
let EVEN_SELECTION = false
let EVEN_ROULETTE = false
let ODD_ROULETTE = false
let ODD_SPRITE: Sprite = null
let EVEN_SPRITE: Sprite = null
let CANNOT_SELECT_ANYMORE = false
let TEXT_SPRITE_2: TextSprite = null
let TEXT_SPRITE: TextSprite = null
let ROULETTE_NUMBER = 0
let PLAYER_BET = false
let TEMP_CONVERT_TEXT = ""
let FIRST_18_SELECTION = false
let SECOND_18_SELECTION = false
let CANNOT_BET_AGAIN = false
START()
