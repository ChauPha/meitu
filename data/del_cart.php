<?php

    $cart_id=$_REQUEST['cart_id'];
    include('index.php');
      	$conn=mysqli_connect($db_url.':'.$db_port,$db_user,$db_pwd,$db_name);
      	$sql="set names utf8";
      	mysqli_query($conn,$sql);
      	$sql="delete from shopcart_detail where cart_id=$cart_id";
      	$res=mysqli_query($conn,$sql);
      	if($res){
      	    echo "succ";
      	}else{
      	    echo "fail";
      	}
?>