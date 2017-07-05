/**
 * Created by zhoupeng on 2016/11/1.
 */
//鼠标滚动事件监听
$(document).scroll(function(){
    //console.log($("body").scrollTop());
    if($("body").scrollTop()>300){
        $(".about_logo>img").css('animation','moveUp 1s ease-out .2s both');
    }
    if($("body").scrollTop()>=500){
        $(".about_btn>a:first-child").css('animation','moveUp 1s ease-out 1s both');
        $(".about_btn>a.down").css('animation','moveUp 1s ease-out .6s both');
    }
    if($("body").scrollTop()>=700){
        $(".about_sign").css('animation','moveUp 1.4s ease-out 1s both');
    }
    if($("body").scrollTop()>=1000){
        $(".re_title").css('animation','moveUp 1s ease-out .3s both');

    }
    if($("body").scrollTop()>=1300&&$("body").scrollTop()<=2000){
        //console.log($("body").scrollTop());

        var x=($("body").scrollTop()-1300)*1.5;
       // console.log(x);
        $(".reviews").css("background-position",'50% '+x+'px');
    }
    if($("body").scrollTop()>=2200&&$("body").scrollTop()<=3000){
        //console.log($("body").scrollTop());
        var x=($("body").scrollTop()-2200)*2;
        $(".features").css("background-position",'50% '+x+'px');
    }
    if($("body").scrollTop()>=1200){

        $(".item:first-child").css('animation','moveUp 1s ease-out .4s both');
        $(".item:first-child .star").each(function(i,p){
           // console.log(i,p);
            var t=i*0.6;
            $(p).css('animation','moveUp .4s ease-out '+t+'s both');

        })
    }
    if($("body").scrollTop()>=1400){
        $(".item:nth-child(2)").css('animation','moveUp 1s ease-out .8s both');
        $(".item:nth-child(2) .star").each(function(i,p){
            //console.log(i,p);
            var t=i*0.6;
            $(p).css('animation','moveUp .5s ease-out '+t+'s both');

        })
    }
    if($("body").scrollTop()>=1700){
        $(".item:nth-child(3)").css('animation','moveUp 1s ease-out 1.2s both');
        $(".item:nth-child(3) .star").each(function(i,p){
            //console.log(i,p);
            var t=i*0.6;
            $(p).css('animation','moveUp .5s ease-out '+t+'s both');

        })
    }
    if($("body").scrollTop()>=2100){
        $(".fe_title").css('animation','moveUp 1s ease-out .4s both');
    }
    if($("body").scrollTop()>=2500){
        $(".carousel_list").css('animation','shake 2s ease-out .4s both');
    }
    if($("body").scrollTop()>=3300){
        $(".get_title").css('animation','moveUp 1s ease-out .4s both');
        $(".sel").css('animation','moveUp 1s ease-out .8s both');

    }
    if($("body").scrollTop()>=3600){
        $(".ios_code").css('animation','moveUp 1s ease-out .4s both');
        $(".android_code").css('animation','moveUp 1s ease-out .8s both');
    }
    if($("body").scrollTop()>=2200){
        $(".bc_btn").each(function(i,p){
            var t=i*0.2;
            $(p).css('animation','shake .8s ease-out '+t+'s both');
        })
    }
    if($("body").scrollTop()>=2500){
        $(".text_item").css('animation','text_left 1s ease-out 1s both');
    }
    $("a.bc_btn").hover(function(){

        $(this).children("span").css('animation','show_border .6s ease-out');

    },function(){
        $(this).children("span").css('animation','none');
    })
});
//
$("div.bc_menu>a:nth-child(2)").hover(function(){
    $(this).children('span').addClass("active");
},function(){$(this).children('span').removeClass("active");});
$(".about_btn>a:nth-child(2)").hover(function(){
    $(this).removeClass("down");
},function(){$(this).addClass("down");});
//click
$("div.fe_btnGroup>a.bc_btn").click(function(e){
    e.preventDefault();
    $(this).data("sel",'isSel').siblings().data('sel','notSel');
    var index=$("div.fe_btnGroup>a.bc_btn").index(this);
    $(".carousel_item").eq(index).addClass("on").siblings().removeClass('on');
    $(".carousel_item").eq(index).children('.baby').
        css("animation",'image_left 1s ease-out both')
        .parent().siblings().css('animation','none');
    $(".carousel_item").eq(index).children('.spe').
        css("animation",'image_right 1s ease-out both')
        .parent().siblings().css('animation','none');


    $(this).children(".img_on").addClass("active");
    $(this).siblings().children(".active").removeClass('active');
});


//hover
$("div.fe_btnGroup>a.bc_btn>span").hover(function(){
    $(this).parent().children(".img_on").addClass("active");

    $(this).parent().css('animation','btn_move .6s ease-out forwards');
},function(){
    if($(this).parent().data('sel')=="notSel") {
        $(this).parent().children('.img_on').removeClass('active');
    }
    $(this).parent().css('opacity',1);
    $(this).parent().css('animation','none');});