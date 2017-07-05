<?php
header("Content-Type:application;charset=utf-8");
include('index.php');
  	$conn=mysqli_connect($db_url.':'.$db_port,$db_user,$db_pwd,$db_name);
    $img_small=$_REQUEST['img_small'];
  	$sql="set names utf8";
          	mysqli_query($conn,$sql);
  	$sql="select * from np_img where img_small='$img_small'";
  	$res=mysqli_query($conn,$sql);
  	while($a = mysqli_fetch_assoc($res)){
  	    $list[]=$a;
  	}
    echo json_encode($list);
  ?>