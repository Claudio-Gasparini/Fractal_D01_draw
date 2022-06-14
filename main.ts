function TurnLeft (degrees: number) {
    timeToWait = degrees * MicroSecInASecond / NumberOfDegreesPerSec
    pins.servoWritePin(AnalogPin.P1, 45)
    pins.servoWritePin(AnalogPin.P2, 45)
    control.waitMicros(timeToWait)
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
}
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.pause(500)
        DriveForward(22)
        basic.pause(500)
        TurnLeft(45)
        basic.pause(500)
        DriveForward(22)
        basic.pause(500)
        TurnRight(45)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        basic.pause(200)
        DriveForward(22)
        basic.pause(200)
        TurnLeft(90)
        basic.pause(200)
        DriveForward(22)
        basic.pause(200)
        TurnRight(90)
    }
})
function DriveForward (distance: number) {
    timeToWait2 = distance * MicroSecInASecond / DistancePerSec
    pins.servoWritePin(AnalogPin.P1, 0)
    pins.servoWritePin(AnalogPin.P2, 180)
    control.waitMicros(timeToWait2)
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
}
function TurnRight (degrees: number) {
    timeToWait = degrees * MicroSecInASecond / NumberOfDegreesPerSec
    pins.servoWritePin(AnalogPin.P1, 45)
    pins.servoWritePin(AnalogPin.P2, -45)
    control.waitMicros(timeToWait)
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
}
let timeToWait2 = 0
let timeToWait = 0
let NumberOfDegreesPerSec = 0
let DistancePerSec = 0
let MicroSecInASecond = 0
basic.showIcon(IconNames.Yes)
MicroSecInASecond = 1000000
DistancePerSec = 100
NumberOfDegreesPerSec = 200
