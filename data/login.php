<?php
    $username=$_REQUEST['user_name'];
    $userpwd=$_REQUEST['user_pwd'];
include('index.php');
    $conn=mysqli_connect($db_url.':'.$db_port,$db_user,$db_pwd,$db_name);
    $sql="set names utf8";
          	mysqli_query($conn,$sql);
    $sql="select * from user where username='$username' AND userpwd='$userpwd'";
    $res=mysqli_query($conn,$sql);
    $row=mysqli_fetch_assoc($res);
    if($row){
        echo 'succ';
    }else{echo 'fail';}
?>