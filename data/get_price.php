<?php
    $type=$_REQUEST['type'];
    include('index.php');
  	$conn=mysqli_connect($db_url.':'.$db_port,$db_user,$db_pwd,$db_name);

  	$sql="set names utf8";
          	mysqli_query($conn,$sql);
  	$sql="select sum(cart_price*cart_count) as total from shopcart_detail ";
  	$res=mysqli_query($conn,$sql);
  	$row=mysqli_fetch_assoc($res);
  	$total=$row['total'];
    echo $total;
  ?>