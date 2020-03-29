$("path").hover(function () {
    $("path").css("fill","#FF6F91");
    $(this).css("fill","#fff");
    let name = $(this).attr("name");
    $(".current").html(name,500);

});