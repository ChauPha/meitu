<?php
header("Content-Type:application;charset=utf-8");
include('index.php');
  	$conn=mysqli_connect($db_url.':'.$db_port,$db_user,$db_pwd,$db_name);
    $np_id=$_REQUEST['np_id'];
    $pt_id=$_REQUEST['pt_id'];
  	$sql="set names utf8";
          	mysqli_query($conn,$sql);
  	$sql="select * from parts_type,parts
  	 where parts.np_id=$np_id AND pt_id=$pt_id";
  	$res=mysqli_query($conn,$sql);
  	while($a = mysqli_fetch_assoc($res)){
  	    $list[]=$a;
  	}
    echo json_encode($list);
  ?>