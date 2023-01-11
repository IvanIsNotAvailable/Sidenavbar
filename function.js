$(document).ready(function(){
    $(".sidenav-list ul li").click(function(){
        $("li").removeClass("active");
        $(this).addClass("active");
    });
})