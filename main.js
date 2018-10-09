var allButtons = $("#buttons>button")

for (let i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', function (xx) {
        var index = $(xx.currentTarget).index()
        var p = index * -260
        $('#images').css({
            transform: 'translateX(' + p + 'px)'
        })
        n = index
        activeButton(allButtons.eq(n))
    })
}

var n = 0
var size = allButtons.length
playSlide(n % size)

var timerId = setTime()

function setTime() {
    return setInterval(() => {
        n += 1
        playSlide(n % size)
    }, 1000)
}

function playSlide(index) {
    allButtons.eq(index).trigger('click')
}

function activeButton($button) {
    $button
        .addClass('red')
        .siblings('.red')
        .removeClass('red')
}

$('.window').on('mouseenter', function () {
    window.clearInterval(timerId)
})
$('.window').on('mouseleave', function () {
    timerId = setTime()
})