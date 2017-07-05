<?php
    header("Content-Type:application;charset=utf-8");
    $pid=$_REQUEST['pid'];
    include('index.php');
      	$conn=mysqli_connect($db_url.':'.$db_port,$db_user,$db_pwd,$db_name);
      	$sql="set names utf8";
              	mysqli_query($conn,$sql);
      	$sql="select * from np_img where np_id=$pid";
      	$res=mysqli_query($conn,$sql);
      	while($a = mysqli_fetch_assoc($res)){
      	    $list[]=$a;
      	}
        echo json_encode($list);
?>