<?php
	header("Content-Type:application;charset=utf-8");
    $type=$_REQUEST['type'];
    include('index.php');
  	$conn=mysqli_connect($db_url.':'.$db_port,$db_user,$db_pwd,$db_name);

  	$sql="set names utf8";
          	mysqli_query($conn,$sql);
  	$sql="select * from parts where np_type='$type'";
  	$res=mysqli_query($conn,$sql);
  	while($a = mysqli_fetch_assoc($res)){
  	    $list[]=$a;
  	}
    echo json_encode($list);
  ?>