<?php
        include('index.php');
      	$conn=mysqli_connect($db_url.':'.$db_port,$db_user,$db_pwd,$db_name);
      	$sql="set names utf8";
         mysqli_query($conn,$sql);
         $sql="select * from mt_phone";
         $res=mysqli_query($conn,$sql);
         if($res){
            $sql="select sum(cart_count) as total from shopcart_detail ";
            $res=mysqli_query($conn,$sql);
            $row=mysqli_fetch_assoc($res);
            $total=$row['total'];
            echo $total;
        }

?>