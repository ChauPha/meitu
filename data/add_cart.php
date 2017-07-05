<?php
	include('index.php');
  	$conn=mysqli_connect($db_url.':'.$db_port,$db_user,$db_pwd,$db_name);
    $c_image=$_REQUEST['c_image'];
    $c_norms=$_REQUEST['c_norms'];
    $c_name=$_REQUEST['c_name'];
    $c_price=$_REQUEST['c_price'];
    $c_count=$_REQUEST['c_count'];

  	$sql="set names utf8";
          	mysqli_query($conn,$sql);
  	$sql="select * from shopcart_detail where cart_image='$c_image' AND cart_name='$c_name' AND
  	cart_norms='$c_norms'";
  	$res=mysqli_query($conn,$sql);
  	$rows=mysqli_fetch_assoc($res);
  	if($rows){

  		$sql="update shopcart_detail set cart_count=cart_count+$c_count where cart_image='$c_image' AND cart_name='$c_name' AND
                                                                                	cart_norms='$c_norms'";

  		$res=mysqli_query($conn,$sql);
  		if($res){
  			echo "succ";
  		}else{
  			echo "fail";
  		}
  	}else{

  		$sql="insert into shopcart_detail values(null,'$c_image','$c_norms','$c_name',$c_price,$c_count)";

		$res=mysqli_query($conn,$sql);
		if($res){
		echo "succ";}
		else{
			echo "fail";

		}
  	}

  ?>