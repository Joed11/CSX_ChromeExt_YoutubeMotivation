const contents = $( '#contents' )
const contentsParent = contents.parent()
contents.remove()
const image = $('<img src="https://media.giphy.com/media/5ftsmLIqktHQA/giphy.gif" alt="Ah! Ah! Ah!" width=600px height=600px>')

contentsParent.prepend(image)
contentsParent.prepend($('<div class="scroll-box"> <div class="scroll-text"> Ah! Ah! Ah! You should be studying Ah! Ah! Ah! </div> </div>'))

contentsParent.prepend(audio)

$(document).ready(function () {

    var startAni = function () {
        var elem = $('.scroll-box');
        var boxWidth = elem.width();
        var textWidth = $('.scroll-text', elem).width();
        if (textWidth > boxWidth) {
            var animSpeed = textWidth * 10;
            elem.animate({
                scrollLeft: (textWidth - boxWidth)
            }, animSpeed, function () {
                elem.animate({
                    scrollLeft: 0
                }, animSpeed, function () {
                    startAni();
                });
            });
        }
    }

    startAni();

});