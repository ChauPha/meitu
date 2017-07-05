/**
 * Created by zhoupeng on 2016/10/20.
 */
console.log(111);

/***************¬÷≤•Õº*************/
//var j=0;
//$("div.flex").on("click","ol>li>a",function(e){
//    var i= $(e.target).html();
//    j=i;
//    $(e.target).addClass("active").parent().siblings().children().removeClass("active");
//    $("ul.list>li").eq(i-1).addClass("active").siblings().removeClass("active");
//});
//var c=0;
//var timer=setInterval(function(){
//    c=j;
//    if(c==5){i=0;$("div.flex>ol>li").eq(c).children("a").trigger("click");c++;}
//    else{
//        c++;
//        //console.log(c);
//        $("div.flex>ol>li").eq(c-1).children("a").trigger("click");
//    }
//},2000);
//◊Û≤‡∑÷¿‡
$("ul.category_nav>li:not(.last_nav)").hover(function(e){
    var index=$("ul.category_nav>li").index(this);
    //console.log(index);
    $(this).addClass('active').siblings().removeClass('active');
    $("div.category_all>div.cateSub").eq(index).css('display','block').
        siblings().css('display','none');
    $('div.category_all').fadeIn();

});
$("div.category_all>div.cateSub").hover(function(e){
    //console.log(e.target);
    var index=$("div.category_all>div.cateSub").index(this);
    $('div.category_all').css('opacity',1);
    $("ul.category_nav>li").eq(index).addClass('active');
    $(this).css("display","block");
});
$('div.ext').mouseleave(function(e){
  $("ul.category_nav>li").removeClass('active');
    $('div.category_all').fadeOut();
});
$("ul.category_nav>li.last_nav").hover(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('div.category_all').fadeOut();
});
//√¿ÕºAPP
$("a.prev").click(function(e){
    e.preventDefault();
    var left=$("ul.card_list").css("left");
    //console.log(left);
    if(left=="0px"){
        console.log("fail");
    }
    else{
        $("ul.card_list").removeClass('move_right').addClass('move_left');
    }
});
$("a.next").click(function(e){
    e.preventDefault();
    var left=$("ul.card_list").css("left");
   // console.log(left);
    if(left=="0px"){
        $("ul.card_list").addClass('move_right').removeClass('move_left');
    }

});
//toolbar
$("div.tool_bar").hover(function(e){
   $(this).css("opacity",1);
},function(e){$(this).css("opacity",.7);$("div.qr_code").css("display",'none');});
$("div.tool_bar a.active").hover(function(){
    $("div.qr_code").fadeIn();
    $("div.qr_code").hover(function(){
        $(this).css("display",'block')
    },function(){
        $(this).css("display",'none')
    })
},function(){$("div.qr_code").css("display",'none');});
//camera







