<?php
header('Access-control-Allow-Headers: *');
header('Access-control-Allow-Origin: *');
header('Access-control-Allow-Methods: POST, GET');

$contactno = "";
$contactnoError = "";
// $contactErorr = "";



// print_r($_POST);
$db = new SQLite3('data.sqlite');
$existContactno = false;
if($_POST){
    $contactno = $_POST['contactno'];
    $select = "SELECT * FROM customer WHERE contactno='".$contactno."'";
    $result = $db->query($select);
    $data = $result->fetchArray();

    //print_r($data['contactno']);
    if(!$data){
            $name = $_POST['name'];
            $contactno = $_POST['contactno'];
            $email = $_POST['email'];
            $division = $_POST['division'];
        
        
            $sql = "INSERT INTO customer('name', 'contactno', 'email', 'division')
            values ('".$name."', '".$contactno."', '".$email."', '".$division."' )";
            $response = $db ->exec($sql);
        
            //print $result;
            // $success .= "Number added in database";
            if($response){
                echo "200";
            }
               
       
    }else{
        echo "Number already exist";

    }
    
}





 //$db->exec("CREATE TABLE IF NOT EXISTS customer(id integer primary key , name varchar(50), contactno varchar(11), email varchar(50), division varchar(50))");