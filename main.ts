let score_a = 0
let score = 0
input.onButtonPressed(Button.A, function () {
    score_a += 1
})
input.onButtonPressed(Button.AB, function () {
    score_a += 3
    score = 10
})
input.onButtonPressed(Button.B, function () {
    score_a += 2
})
basic.forever(function () {
    basic.showNumber(score_a)
})
