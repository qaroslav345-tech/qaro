let Зарче = 0
input.onButtonPressed(Button.A, function () {
    Зарче = randint(1, 6)
})
basic.forever(function () {
    if (Зарче == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else {
        if (Зарче == 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . # # . #
                . . . . .
                . . . . .
                `)
        } else {
            if (Зарче == 3) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . # # # .
                    . . . . .
                    . . . . .
                    `)
            } else {
                if (Зарче == 4) {
                	
                } else {
                	
                }
            }
        }
    }
})
