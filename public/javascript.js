$('document').ready(function(){
    $('#mainN').click(function() {
        ScrollToClassId('#main');
    });
    $('#aboutN').click(function() {
        ScrollToClassId('#articles');
    });
    $('#contactN').click(function() {
        ScrollToClassId('#footer');
    });
});

function ScrollToClassId(str){
    $('html, body').stop().animate({
      scrollTop : $(str).offset().top-50
    }, 1000);
}
