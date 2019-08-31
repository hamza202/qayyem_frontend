$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 300) {
        $(".navbar").addClass("fixed-header");
        $(".page-container ").addClass("page-container-pad");
    } else {
        $(".navbar").removeClass("fixed-header");
        $(".page-container ").removeClass("page-container-pad");
    }
});


//Change file img


$(document).ready(function() {
    var readURL = function(input=['file']) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.pic1').attr('src', e.target.result);
            };

            reader.readAsDataURL(input.files[0]);
        }
    };


    $(".up1").on('change', function(){
        readURL(this);
    });

});
//Edit & save btn
$(document).ready(function() {
    $( ".e-btn" ).on( "click", function() {
        $(this).addClass('d-none');
        $(this).parent().find('.s-btn').removeClass('d-none');
        $(this).parent().find('input').prop('disabled',false);
    });
    $( ".s-btn" ).on( "click", function() {
        $(this).addClass('d-none');
        $(this).parent().find('.e-btn').removeClass('d-none');
        $(this).parent().find('input').prop('disabled',true);
    });
});