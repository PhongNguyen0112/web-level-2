<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "blog_program";


$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$user = $_POST['username'];
$pass = $_POST['password'];


$user = mysqli_real_escape_string($conn, $user);
$pass = mysqli_real_escape_string($conn, $pass);


$sql = "SELECT * FROM userlogin WHERE username='$user' AND password='$pass'";
$result = $conn->query($sql);

session_start(); 

if ($result->num_rows > 0) {

    $_SESSION['loggedin'] = true;
    $_SESSION['username'] = $user;

   header("Location: index.html");
        exit();
} else {

    echo "Invalid username or password";
}


$conn->close();
?>
