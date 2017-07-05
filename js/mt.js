/**
 * Created by bjwsl-001 on 2016/11/7.
 */
var app = angular.module('mt',['ng','ngRoute']);
//控制器,展示所有手机
app.controller('psCtrl',["$scope","$http",function($scope,$http){
  $http.get("data/phone_show.php").success(function(data){
    $scope.phoneList=data;
  });
}]);
//控制器,控制购物车的内容更新
app.controller('parentCtrl',["$rootScope","$http",function($rootScope,$http){
  $rootScope.check=false;
  $rootScope.count=0;
  $rootScope.cart=false;
  $rootScope.totalCount=0;
  $rootScope.totalPrice=0;
  //console.log($rootScope.cart);
  //购物车页面，全选按钮
  $rootScope.selAll=function(){
    $.each($(".cart_table>tbody>tr"),function(i,p){
      $(p).find(".cart_label>input").prop("checked",$("label.cart_all>input").prop("checked"));

    });
    if($("label.cart_all>input").prop("checked")){
      $rootScope.totalCount=$rootScope.count;
      $http.get("data/get_price.php").success(function(data){
        $rootScope.totalPrice=data;
      });
    }
    else{
      $rootScope.totalCount=0;
      $rootScope.totalPrice=0;
    }
  };
  $rootScope.selOnce=function(price,index){
    var check=$(".cart_table>tbody>tr").eq(index).find(".cart_label>input").prop("checked");
      console.log(check);
      if(check==true){
        $rootScope.totalCount++;
        $rootScope.totalPrice+=price;
      }else{
        $rootScope.totalCount--;
        $rootScope.totalPrice-=price;
      }
    var input=document.querySelectorAll(".cart_table>tbody>tr");
    for(var i=0;i<input.length;i++){
      var ch=$(input[i]).find(".cart_label>input").prop("checked");
      if(ch==false){
        $rootScope.check=false;
        $("label.cart_all>input").prop("checked",false);
        break;
      }
      $rootScope.check=true;
    }
  };

  $http.get("data/sel_cart.php").success(function(data){
    if(data==='null'){
      $rootScope.cart=false;
    } else{
      $rootScope.cart=true;
      $rootScope.cartList=data;
    }
  });
  $http.get("data/get_sum.php").success(function(data){
    if(data==""){
      $rootScope.count=0;
    }else{$rootScope.count=parseInt(data);}

  });
  //添加数量
  $rootScope.plusCart=function(cart_id,i){
    $http.get("data/change_count.php?cart_id="+cart_id+"&num="+i).success(function(data){
      $rootScope.cartList=data;
      $http.get("data/get_sum.php").success(function(data){
        if(data==""){
          $rootScope.count=0;
        }else{$rootScope.count=parseInt(data);}
      });
    })
  };
  //减少数量
  $rootScope.reduceCart=function(cart_id,i){
    $http.get("data/change_count.php?cart_id="+cart_id+"&num="+i).success(function(data){
      $rootScope.cartList=data;
      $http.get("data/get_sum.php").success(function(data){
        if(data==""){
          $rootScope.count=0;
        }else{$rootScope.count=parseInt(data);}
      });
    })
  };
  //删除商品
  $rootScope.delCart=function(cart_id){
    $http.get("data/del_cart.php?cart_id="+cart_id).success(function(data){
      $http.get("data/sel_cart.php").success(function(data){
        if(data=="null"){
          $rootScope.cart=false;
        } else{
          $rootScope.cart=true;
          $rootScope.cartList=data;
        }
        //更新总数量
        $http.get("data/get_sum.php").success(function(data){
          if(data==""){
            $rootScope.count=0;
          }else{$rootScope.count=parseInt(data);}
        });
      });
    })
  };
  //去结算
  $rootScope.pay=function(){
      $("div.modal").fadeIn();
  };
}]);
//控制器,首页展示所有配件
app.controller('npCtrl',["$scope","$http",function($scope,$http){
  $http.get("data/parts_show.php").success(function(data){
    $scope.npList=data;
    //console.log($scope.npList);
  });

}]);
//展示首页常规配件
app.controller('nmpCtrl',["$scope","$http",function($scope,$http){
  $http.get("data/parts_show_cate.php?cate=常规配件").success(function(data){
    $scope.npList=data;
    //console.log($scope.npList);
  });

}]);
//展示首页拍摄配件
app.controller('shootCtrl',["$scope","$http",function($scope,$http){
  $http.get("data/parts_show_cate.php?cate=拍摄配件").success(function(data){
    $scope.npList=data;
    //console.log($scope.npList);
  });

}]);
//展示首页生活方式
app.controller('lsCtrl',["$scope","$http",function($scope,$http){
  $http.get("data/parts_show_cate.php?cate=生活方式").success(function(data){
    $scope.npList=data;
    //console.log($scope.npList);
  });
}]);

//控制器，从首页进入配件页
app.controller('cateCtrl',["$scope","$http","$routeParams",function($scope,$http,$routeParams){
  $scope.cate=$routeParams.cate;
  //console.log($routeParams.cate);
  //获得所有类型
  //console.log($routeParams.tp);
  $http.get("data/get_types.php?cate="+$routeParams.cate).success(function(data){
    $scope.typeList=data;
    $.each($("ul.cate_list>li"), function (i, p) {
      if ($(p).data("type") == $routeParams.tp) {
        $(p).children("a.cate_link").css("color", "#e92076");
      }
    });
  });
  if($routeParams.tp=='all'){
    //获得所有配件
    $http.get("data/parts_show_cate.php?cate="+$routeParams.cate).success(function(data){
      $scope.cateList=data;
      //console.log(data);
    });
  }else{
    //获取某个类型的配件
    $http.get("data/type_parts_select.php?type="+$routeParams.tp).success(function(data){
      $scope.cateList=data;
      //console.log(data);
    });
  }
}]);
//根据id进入详情页
app.controller('detailCtrl',["$rootScope","$scope","$routeParams","$http",function($rootScope,$scope,$routeParams,$http){
  //$rootScope.count=0;
  $scope.num=1;

  $http.get("data/parts_detail.php?pid="+$routeParams.pid).success(function(data){
    $scope.dtList=data;
    //console.log($scope.dtList[0].np_name);
    $scope.np_id=$scope.dtList[0].np_id;
    $http.get("data/parts_img.php?pid="+$scope.np_id).success(function(data){
      $scope.imgList=data;
      $scope.bigImg=$scope.imgList[0].img_big;
      //console.log($scope.imgList);
      $("ul.thumb_nav>li").eq(0).children("img").css("border","1px solid #F00");
    });
    $http.get("data/detail_type.php?pid="+$routeParams.pid).success(function(data){
      $scope.ptList=data;
    });
    //切换大图
    $scope.getImg=function(path,index){
      //$scope.path=path;
      $http.get("data/big_img.php?img_small="+path).success(function(data){
        $scope.bigImg=data[0].img_big;
        $("ul.thumb_nav>li").eq(index).children("img").css("border","1px solid #e92076")
          .parent().siblings().children("img").css("border","1px solid #ddd");
      });
    };
    //选择型号
    $scope.selType=function(path,pt_id,index){
      $("div.detail_types span.del_type").css("display","none");
      $scope.pt_id=pt_id;
      $scope.path=path;
      $http.get("data/big_img.php?img_small="+$scope.path).success(function(data){
        $scope.bigImg=data[0].img_big;
        $("div.detail_types a").eq(index).css("border","1px solid #f00")
          .siblings().css("border","1px solid #ebebeb");
      });
    };
    //点击购买
    $scope.buy=function(){
      if($scope.pt_id==undefined){
        $("div.detail_types span.del_type").css("display","inline-block");
        alert("请选择型号");
      }else {
        $("div.modal").css('display', 'block');
      }
    };
    //点击加入购物车按钮
    $scope.addCart=function(){

      //$rootScope.count+=$scope.num;
      //console.log($scope.pt_id);
      if($scope.pt_id==undefined){
        $("div.detail_types span.del_type").css("display","inline-block");
        alert("请选择型号");
      }else{

        $http.get("data/get_info.php?np_id="+ $scope.np_id+"&pt_id="+$scope.pt_id).success(function(data){
          $scope.cart_image=$scope.path;
          $scope.cart_norms=data[0].pt_name;
          $scope.cart_name=data[0].np_name;
          $scope.cart_price=data[0].np_price;
          $scope.cart_count=$scope.num;

          //console.log($scope.cart_image,$scope.cart_norms,$scope.cart_name,$scope.cart_price,$scope.cart_count);
          $http.get("data/add_cart.php?c_image="+$scope.cart_image+"&c_norms=" +
          $scope.cart_norms+"&c_name="+$scope.cart_name+"&c_price="+$scope.cart_price+"&c_count="+$scope.cart_count)
            .success(function(data){
              //更新到购物车
              $rootScope.cart=true;
              $http.get("data/sel_cart.php").success(function(data){
                console.log(data);
                $rootScope.cartList=data;
                console.log($rootScope.cartList);
                //console.log($scope.cartList,$scope.cart);
              });
              //更新总数量
              $http.get("data/get_sum.php").success(function(data){
                $rootScope.count=parseInt(data);
              });
            })
        })
      }

    };
    //增加数量
    $scope.plus=function(){
      $scope.num++;
    };
    //减少数量
    $scope.reduce=function(){
      if($scope.num==1){
        $scope.num=1;
      }else{
        $scope.num--;
      }
    };

  });
}]);
//根据id进入手机详情页
app.controller('phoneCtrl',["$scope","$routeParams","$http",function($scope,$routeParams,$http){
  $http.get("data/phone_detail.php?phone_id="+$routeParams.phone_id).success(function(data){
    $scope.phoneList=data;

  });

}]);
//登录页 控制器
app.controller('loginCtrl',['$scope','$rootScope','$http','$location',function($scope,$rootScope,$http,$location){
  $rootScope.customer_name="登";
  $scope.login=function(user_name,user_pwd){
    $http.get("data/login.php?user_name="+user_name+"&user_pwd="+user_pwd).success(function(data){
      if(data=="succ"){
        console.log($rootScope.customer_name);
        $rootScope.customer_name=user_name;
        $location.path("/main");

      }else{
        $("div.login").fadeIn();
      }
    });
  };
  $("#login_name").focus(function(){
    $("div.login").fadeOut();
  })
}]);
//注册页 控制器
app.controller('regCtrl',["$scope","$http",function($scope,$http){
  var name="";
  var code="";
  var pwd="";
  var pwd_repeat="";
  $("#username").blur(function(){
    var username=$(this).val();
    //console.log(username);
    if(username.length!=11){
      $(this).siblings("div.tips").fadeIn();
      $("span.name_error").html("手机格式不正确");
      name="";
    }else if(username==""){
      $(this).siblings("div.tips").fadeIn();
      $("span.name_error").html("手机号不能为空");
      name="";
    }else{
      $http.get("data/sel_user.php?username="+username).success(function(data){
        if(data=="succ"){
        console.log(data);
          $("#username").siblings("div.tips").fadeIn();
          $("span.name_error").html("该手机号已被注册");
          name="";
        } else if(data=="fail"){
          $(this).siblings("div.tips").fadeOut();
          $("#btn_send").prop("disabled",false);
          name=$("#username").val();
        }
      })

    }
  });
  $("#username").focus(function(){
    $(this).siblings("div.tips").fadeOut();

    name="";
  });
  $("#btn_send").click(function(){
    $("#code").attr("placeholder","123456");
    code="";
  });
  $("#code").blur(function(){
    if($(this).val()!="123456"){
      $(this).siblings("div.tips").fadeIn();
      code="";
    }else{
      $(this).siblings("div.tips").fadeOut();
      code=$("#code").val();
    }
  });
  $("#code").focus(function(){
    $(this).siblings("div.tips").fadeOut();

    code="";
  });
  $("#userpwd").blur(function(){
    var userpwd=$(this).val();
    if(userpwd.length<6){
      $(this).siblings("div.tips").fadeIn();
      $("span.pwd_error").html("密码不能少于6位");
      pwd="";
    }else if(username==""){
      $(this).siblings("div.tips").fadeIn();
      $("span.pwd_error").html("密码不能为空");
      pwd="";
    }else{
      $(this).siblings("div.tips").fadeOut();
      pwd=$("#userpwd").val();
    }
  });
  $("#userpwd").focus(function(){
    $(this).siblings("div.tips").fadeOut();

    pwd="";
  });
  $("#pwd_repeat").blur(function(){
    var userpwd=$(this).val();
    if(userpwd!=$("#userpwd").val()){
      $(this).siblings("div.tips").fadeIn();
      $("span.pwd_repeat_error").html("和密码不一致");
      pwd_repeat="";
    }else{
      $(this).siblings("div.tips").fadeOut();
      pwd_repeat=$("#pwd_repeat").val();
    }
  });
  $("#pwd_repeat").focus(function(){
    $(this).siblings("div.tips").fadeOut();
    pwd_repeat="";
  });
  $("#reg_btn").click(function(){
    if(name!=""&&pwd!=""&&code!=""&&pwd_repeat!=""&&($("#agreement").prop("checked"))){
      $http.get("data/reg.php?username="+name+"&pwd="+pwd).success(function(data){
        //console.log(data);
      })
    }else{
      alert("用户名或密码不正确");
    }
  })
}]);
//配置路由
app.config(function($routeProvider,$httpProvider){
  $routeProvider
    .when('/main',{
      templateUrl:'html/main.html'

    })
    .when('/login',{//登录
      templateUrl:'html/login.html'
    })
    .when('/register',{//注册
      templateUrl:'html/register.html'
    })
    .when('/phone/:phone_id',{//负责手机详情
      templateUrl:'html/phone.html'
    })
    .when('/phone_show',{//负责手机展示
      templateUrl:'html/phone_show.html',
      controller:"psCtrl"
    })
    .when('/phone_shell',{//手机壳详情页
      templateUrl:'html/phone_shell.html'

    })
    .when('/camera',{//相机
      templateUrl:'html/camera.html'

    })
    .when('/camera_photo',{//相机
      templateUrl:'html/camera_photo.html'

    })
    .when('/parts_show/:cate/:tp',{//配件
      templateUrl:'html/parts_show.html'

    })

    .when('/parts_detail/:pid',{//手机配件详情
      templateUrl:'html/phone_shell_detail.html'

    })
    .when('/lifestyle',{//详情
      templateUrl:'html/lifestyle.html'

    })
    .when('/beauty_camera',{//手机配件详情
      templateUrl:'html/beauty_camera.html'

    })
    .when('/phone_intro',{//手机配件详情
      templateUrl:'html/phone_intro.html'

    })
    .when('/shopcart',{//手机配件详情
      templateUrl:'html/shopcart.html'

    })
    //.when('/phone_shell_detail',{//手机配件详情
    //  templateUrl:'html/phone_shell_detail.html',
    //    controller:"psdCtrl"
    //})
    .otherwise('/main',{//主页
      templateUrl:'html/main.html'
    })
});
