<?php
    header("Content-Type:application;charset=utf-8");
    $phone_id=$_REQUEST['phone_id'];
    include('index.php');
      	$conn=mysqli_connect($db_url.':'.$db_port,$db_user,$db_pwd,$db_name);

      	$sql="set names utf8";
              	mysqli_query($conn,$sql);
      	$sql="select * from mt_phone where phone_id=$phone_id";
      	$res=mysqli_query($conn,$sql);
      	while($a = mysqli_fetch_assoc($res)){
      	    $list[]=$a;
      	}
        echo json_encode($list);
?>