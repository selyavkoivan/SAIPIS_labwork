$("#iOS").click(function () {
    clearButtons("#868686", "black")

    $(this).css("background-color", "white");
    $(this).css("color", "black");

    $.ajax({
        url: 'iOS.html',
        dataType: 'html',
        success: function (data) {

            $("#content").html(data)
        },
        statusCode: {}
    })

})
$("#Android").click(function () {

    clearButtons("#9ec99e", "black")

    $(this).css("background-color", "white");
    $(this).css("color", "black");
    $.ajax({
        url: 'Android.html',
        dataType: 'html',
        success: function (data) {
            $("#content").html(data)
        },
        statusCode: {}
    });
})
$("#Bada").click(function () {

    clearButtons("#8bafdb", "black")

    $(this).css("background-color", "white");
    $(this).css("color", "black");
    $.ajax({
        url: 'Bada.html',
        dataType: 'html',
        success: function (data) {
            $("#content").html(data)
        },
        statusCode: {}
    });
})
$("#Symbian").click(function () {

    clearButtons("#ffab65", "black")

    $(this).css("background-color", "white");
    $(this).css("color", "black");
    $.ajax({
        url: 'Symbian.html',
        dataType: 'html',
        success: function (data) {
            $("#content").html(data)
        },
        statusCode: {}
    });
})

function clearButtons(back, font) {
    tabcontent = document.getElementsByClassName("button");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.backgroundColor = back
        tabcontent[i].style.color = font
    }
}


$(document).ajaxStart(function() {
    console.log("ajaxStart  ")
    document.getElementById("load").classList.remove("display-none")
});

$(document).ajaxSuccess(function() {
    console.log("ajaxSuccess")
});

$(document).ajaxStop(function() {
    console.log("ajaxStop")
    document.getElementById("load").classList.add("display-none")
});

$(document).ajaxError(function() {
    console.log("ajaxError")
});

$(document).ajaxComplete(function() {
    console.log("ajaxComplete")
});

$(document).ajaxSend(function() {
    console.log("ajaxSend")
});