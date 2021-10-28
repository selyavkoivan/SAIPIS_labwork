$("#btn-1").click(function(){
    $("#id1").addClass("border")
    $(".class-2").fadeOut("slow");
    $(".class-4").fadeOut("slow");
    $(".class-6").fadeOut("slow");



});
$("#btn-2").click(function(){
    $("input").fadeOut(0);
    $(".class-1").append('<input>', {
        type: 'text',
        id: 'newId1'
    })
    $(".class-3").append('<input>', {
        type: 'text',
        id: 'newId3'
    })
    $(".class-5").append('<input>', {
        type: 'text',
        id: 'newId5'
    })
    $("p").each(function () {
        $(this).html( $(this).html().replace(/london/g,"parise") );
    });
    $("#btn-1").hide()
});