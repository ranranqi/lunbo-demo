var allButtons = $("#buttons>button")
for (let i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', function (x) {
        var index = $(x.currentTarget).index()
        var p = index * -260
        $('#images').css({
            transform: 'translateX(' + p + 'px)'
        })
        n = index
        allButtons.eq(n)
            .addClass('red')
            .siblings('.red')
            .removeClass('red')
    })
}

var n = 0
var size = allButtons.length
allButtons.eq(n % size).trigger('click').addClass('red')
    .siblings('.red').removeClass('red')

var timerId = setInterval(() => {
    n += 1
    allButtons.eq(n % size).trigger('click').addClass('red')
        .siblings('.red').removeClass('red')
}, 1000)


$('.window').on('mouseenter', function () {
    window.clearInterval(timerId)
})
$('.window').on('mouseleave', function () {
    timerId = setInterval(() => {
        n += 1
        allButtons.eq(n % size).trigger('click').addClass('red')
            .siblings('.red').removeClass('red')
    }, 1000)
})