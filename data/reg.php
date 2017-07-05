<?php
    $username=$_REQUEST['username'];
    $userpwd=$_REQUEST['userpwd'];
    include('index.php');
    $conn=mysqli_connect($db_url.':'.$db_port,$db_user,$db_pwd,$db_name);
   $sql="set names utf8";
         	mysqli_query($conn,$sql);
    $sql="insert into user values(null,'$username','$userpwd')";
    $res=mysqli_query($conn,$sql);
    if($res){
        echo "succ";
    }else{echo "fail";}
?>