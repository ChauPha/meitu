<?php
    header("Content-Type:application/json;charset=utf-8");
    $cart_id=$_REQUEST['cart_id'];
    $num=$_REQUEST['num'];
    include('index.php');
      	$conn=mysqli_connect($db_url.':'.$db_port,$db_user,$db_pwd,$db_name);
      	$sql="set names utf8";
              	mysqli_query($conn,$sql);

      	$sql="select cart_count from shopcart_detail where cart_id=$cart_id";
      	$res=mysqli_query($conn,$sql);
      	$row=mysqli_fetch_assoc($res);
      	$cart_count=$row['cart_count'];

      		if($num==1){
      			$sql="update shopcart_detail set cart_count=cart_count+$num where cart_id=$cart_id";
            	$res=mysqli_query($conn,$sql);
            }
      		else if($num==-1){
      			if($cart_count>1){
      				$sql="update shopcart_detail set cart_count=cart_count+$num where cart_id=$cart_id";
                    $res=mysqli_query($conn,$sql);
      			}
      		}

      	    $sql="select * from shopcart_detail";
      	    $res=mysqli_query($conn,$sql);
            while($a = mysqli_fetch_assoc($res)){
                $list[]=$a;
            }
            echo json_encode($list);


?>