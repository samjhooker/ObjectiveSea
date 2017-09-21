$(document).ready(function(){
    $("#submitCode").click(function(){
        //$("#codeBox").animate({height: "300px"});
        $("#codeForm").addClass("header");
        $("#submitCode").addClass("headerDisappear");
        $("#codeBox").addClass("headerDisappear");
    });
});


let socket = new WebSocket("ws://132.181.13.96:2828", "checkingLifeWorks");

socket.onopen = function (event) {
  socket.sendBytes("hello");
};
