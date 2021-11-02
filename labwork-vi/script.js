$("#btn-1").click(function () {
    $("#id1").addClass("border")
    $(".class-2").fadeOut("slow");
    $(".class-4").fadeOut("slow");
    $(".class-6").fadeOut("slow");
});
$("#btn-2").click(function () {
    if (!$("#newId1").attr("type")) {
        for(i = 1; i <= 5; i +=2)
        {
            $(".class-" + i).append('<input type="text" id="newId' + i + '"/>')
        }
    }
    $("p").each(function () {
        $(this).html($(this).html().replace("london", "parise"))
    });
    $("#btn-1").hide()
});