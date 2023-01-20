input.onButtonPressed(Button.A, function () {
    if (button_pressed == 2) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.showString("Good Job!")
        control.reset()
    } else if (button_pressed == 3) {
        pins.digitalWritePin(DigitalPin.P12, 1)
        basic.showString("Wrong Button")
        control.reset()
    } else {
        basic.showString("Press A+B")
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.pause(randint(1000, 5000))
    button_pressed = randint(2, 3)
    if (button_pressed == 2) {
        basic.showString("A")
    } else {
        basic.showString("B")
    }
    basic.pause(500)
    button_pressed = 0
    basic.showString("Too Slow")
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    if (button_pressed == 3) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.showString("Good Job!")
        control.reset()
    } else if (button_pressed == 2) {
        pins.digitalWritePin(DigitalPin.P12, 1)
        basic.showString("Wrong Button")
        control.reset()
    } else {
        basic.showString("Press A+B")
    }
})
// Created by: Owen Whalley
// Created on: January 20th, 2023
// 
// This block of code sets pin 8 and pin 12 on the Robot:Bit to zero, cutting off the power to the LEDs. It also shows "Press A+B" on the Micro:Bit screen to start the game.
let button_pressed = 0
pins.digitalWritePin(DigitalPin.P8, 0)
pins.digitalWritePin(DigitalPin.P12, 0)
basic.showString("Press A+B")
