<?php
  $access_key_id="AKIASH7OZUXXRF7UWH6B";
  $secret_access_key="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";
  
  $hostname = "database-1.ceiotdyh9u2y.ap-south-1.rds.amazonaws.com";
  $username = "admin";
  $password = "kunal123";
  $dbname = "chatapp";
  $conn = mysqli_connect($hostname, $username,$password, $dbname);
  if(!$conn){
    echo "Database connection error".mysqli_connect_error();
  }
?>  
