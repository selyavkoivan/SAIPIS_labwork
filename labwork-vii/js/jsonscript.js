$("#show-iOS").click(function () {
    $.getJSON("../JSON/iOS.json", function (data) {

        $('#show-iOS').after(createTable(data, "#868686", "versions"))
        $('#show-iOS').hide()
        $('#click-iOS').html("Таблица с доступными версиями")
    }).fail(function () {
        location.reload()
    })
})
$("#show-Android").click(function () {

    $.getJSON("../JSON/Android.json", function (data) {
        $('#show-Android').after(createTable(data, "#9ec99e", "versions"))
        $('#show-Android').hide()
        $('#click-Android').html("Таблица с доступными версиями")
    }).fail(function () {
        location.reload()
    })
})
$("#show-Bada").click(function () {
    $.getJSON("../JSON/Bada.json", function (data) {

        $('#show-Bada').after(createTable(data, "#8bafdb", "mobile phones"))
        $('#show-Bada').hide()
        $('#click-Bada').html("Таблица с доступными версиями")
    }).fail(function () {
        location.reload()
    })
})

$("#show-Symbian").click(function () {
    $.getJSON("../JSON/Symbian.json", function (data) {

        $('#show-Symbian').after(createTable(data, "#ffab65", "modifications"))
        $('#show-Symbian').hide()
        $('#click-Symbian').html("Таблица с доступными версиями")
    }).fail(function () {
        location.reload()
    })
})
function createTable(data, color, array) {
    var content = "<table class='table_col'><colgroup>\n" +
        "      <col style=\"background:" + color + ";\">\n" +
        "  </colgroup>"

    $.each(data, function (key, val) {
        if (key === array) {
            content += '<tr><td>' + key + '</td><td><ul>'
            val.forEach(version => content += '<li>' + version + '</li>')
            content += '</ul></td></tr>'
        } else {
            content += '<tr><td>' + key + '</td><td>' + val + '</td></tr>'
        }
    });
    content += "</table>"
    return content
}
