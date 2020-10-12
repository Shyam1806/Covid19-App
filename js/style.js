// counter

$('.Countz').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});




$('.count').each(function() {
    const prop = $(this).data("prop");     //Get the element's data-prop
    $(this).prop('Counter', 0).animate({
      Counter: data[prop]                  //Use that property
    }, {
      duration: 400,
      easing: 'swing',
      step: function(now) {
        $(this).text(Math.ceil(now));
      }
    });
  });