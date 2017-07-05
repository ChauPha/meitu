<?php
header("Content-Type:application;charset=utf-8");
    $cate=$_REQUEST['cate'];
    include('index.php');
  	$conn=mysqli_connect($db_url.':'.$db_port,$db_user,$db_pwd,$db_name);
  	$sql="set names utf8";
          	mysqli_query($conn,$sql);
    if($cate=='all'){
        $sql="select * from parts";
          	$res=mysqli_query($conn,$sql);
          	while($a = mysqli_fetch_assoc($res)){
          	    $list[]=$a;
          	}
            echo json_encode($list);
    }else {
        $sql="select * from parts where np_cate='$cate'";
          	$res=mysqli_query($conn,$sql);
          	while($a = mysqli_fetch_assoc($res)){
          	    $list[]=$a;
          	}
            echo json_encode($list);
    }
  ?>