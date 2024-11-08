input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Text += abc[num]
    num = 0
    basic.showString("" + (abc[num]))
})
input.onButtonPressed(Button.A, function () {
    num += -1
    basic.showString("" + (abc[num]))
})
input.onButtonPressed(Button.AB, function () {
    serial.writeLine(Text)
    radio.sendString(Text)
    Text = ""
})
input.onButtonPressed(Button.B, function () {
    num += 1
    basic.showString("" + (abc[num]))
})
let abc: string[] = []
let Text = ""
let num = 0
num = 0
Text = ""
abc = [
"a",
"b",
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"k",
"l",
"m",
"n",
"o",
"p",
"q",
"r",
"s",
"t",
"u",
"v",
"w",
"x",
"y",
"z"
]
radio.setGroup(223)
radio.sendNumber(0)
basic.showString("" + (abc[num]))
basic.forever(function () {
    if (num == -1) {
        num = 25
    } else if (num == 26) {
        num = 0
    }
})
