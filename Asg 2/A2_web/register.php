<?php

$servername = "localhost";
$username = "root"; 
$password = "";
$dbname = "blog_program";


$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user = mysqli_real_escape_string($conn, $_POST['username']);
    $pass = mysqli_real_escape_string($conn, $_POST['password']);


    $sql = "INSERT INTO userlogin (username, password) VALUES ('$user', '$pass')";
    
    if ($conn->query($sql) === TRUE) {

        header("Location: login.html");
        exit();
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
