$(window).on('load resize', function() {
    var wHeight = $(window).height() - 65;
    $('#homeBannerCarousel').height(wHeight);
    $('#homeBannerCarousel .item').height(wHeight);
    var IwHeight = $(window).height() - 175;
    $('#innerCarousel').height(IwHeight);
    $('#innerCarousel .item').height(IwHeight);

    var width = $(window).width();
    if (width < 1200) {


    } else {
        $('ul.nav li.dropdown').hover(function() {
            $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(250);
        }, function() {
            $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(250);
        });
    }
});



$(function() {
    $("#booking").hover(function() {
        $(this).removeClass("collapsed");
    });
    $("#inner-wrapper .sidebar-nav h4").click(function() {
        $(this).toggleClass("active");
    });
	


 $("#arrival_date").datepicker({
            dateFormat: "mm-dd-yy",
            minDate: new Date(),
            onSelect: function (date) {
                var date2 = $('#arrival_date').datepicker('getDate');
                date2.setDate(date2.getDate() + 1);
                $('#departure_date').datepicker('setDate', date2);
                //sets minDate to dt1 date + 1
                $('#departure_date').datepicker('option', 'minDate', date2);
            }
        });
        $('#departure_date').datepicker({
            dateFormat: "mm-dd-yy",
            onClose: function () {
                var dt1 = $('#arrival_date').datepicker('getDate');
                console.log(dt1);
                var dt2 = $('#departure_date').datepicker('getDate');
                if (dt2 <= dt1) {
                    var minDate = $('#departure_date').datepicker('option', 'minDate');
                    $('#departure_date').datepicker('setDate', minDate);
                }
            }
        });

    
    var owl = $("#owl-promo");
    owl.owlCarousel({
        items: 3,
        itemsDesktop: [1199, 3],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1],
        navigation: true
    });
	var rooms = 1; //default
    var adults = 2; //default
	$(".selectbox").selectmenu({
        change: function(event, ui) {
            if (event.target.id == 'adults') {
                adults = ui.item.value;
            }

            if (event.target.id == 'rooms') {
                rooms = ui.item.value;
            }
 
        }
    });
});