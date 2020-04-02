var url = window.location.origin;
$(document).on('click', 'button#btn_calculate', function(e) {
    var input_a = $("#input_a").val();
    if ($.isNumeric(input_a) == true) {
        $.ajax({
            url: url + '/doscg/calculate',
            data: { input_a: input_a },
            success: function(result) {

                if (result != "") {
                    var html = '<div class="alert alert-success alert-dismissible">' +
                        '<button type="button" class="close">&times;</button>' +
                        " [A=" + result.a + "] [B=" + result.b + "] [C=" + result.c + "]" +
                        '</div>';
                    $(".msg_calculate").html(html);
                };
            }
        });
    } else {
        var html = '<div class="alert alert-danger alert-dismissible">' +
            '<button type="button" class="close">&times;</button>' +
            "Number only" +
            '</div>';
        $(".msg_calculate").html(html);
    }
});
$(document).on('click', '.close', function(e) {
    $(".msg_calculate").hide();
});
$(document).on('click', '.close_finding', function(e) {
    $(".msg_finding").hide();
});
$(document).on('click', 'button#btn_finding', function(e) {
    var input_f = $("#input_f").val();
    var res = input_f.split(",");
    let x = 0;
    let y = 0;
    let z = 0;
    if (res != "") {
        $.each(res, function(index, value) {
            var new_value = value.trim().toUpperCase();
            if (new_value == "X") {
                ++x;
            } else if (new_value == "Y") {
                ++y;
            } else if (new_value == "Z") {
                ++z;
            }
        });
        if (x == 0 && y == 0 && z == 0) {
            var html = '<div class="alert alert-danger alert-dismissible">' +
                '<button type="button" class="close close_finding">&times;</button>' +
                "Empty" +
                '</div>';
            $(".msg_finding").html(html);
        } else {
            var html = '<div class="alert alert-success alert-dismissible">' +
                '<button type="button" class="close close_finding">&times;</button>' +
                " [X=" + x + "] [Y=" + y + "] [Z=" + z + "]" +
                '</div>';
            $(".msg_finding").html(html);
        }
    }


});