minode.onPIREvent(ConnName.A0, function () {
    basic.showNumber(4)
    minode.rgbChooseColor(ConnName.D12, MiNodeColor.MiNode_RGB_COLOR_RED)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    minode.rgbChooseColor(ConnName.D12, MiNodeColor.MiNode_RGB_COLOR_BLUE)
})
minode.onMICEvent(AnalogConnName.Analog_A1, function () {
    basic.showNumber(2)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
minode.onLightSensorEvent(AnalogConnName.Analog_A2, function () {
    basic.showNumber(5)
})
basic.showIcon(IconNames.Yes)
basic.forever(function () {
	
})
