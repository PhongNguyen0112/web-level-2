
<?php
session_start(); // Start the session

// Check if the user is logged in, if not then redirect to login page
if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
    header("Location: login.html");
    exit;
}

// Assuming 'username' is stored in session when the user logs in
$username = $_SESSION['username'];

// You can retrieve more user information from the database if needed
// Connect to database and retrieve user details code goes here...
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>User Profile</title>
    <link rel="stylesheet" href="./css/index.css">
</head>
<body>
    <div class="topnav">
        <ul>
            <li><a href="./index.html">Home</a></li>
            <li><a href="./discovery.html">Discover</a></li>
            <li><a class="active">MyProfile</a></li>
            <li><a href="./post.html">Publish Blog</a></li>
        </ul>
    </div>    
    <div class="toppicture">
        <p>JavaScript Community</p>
    </div>
    <div id="userProfile">
        <h2>User Profile</h2>
        <h1>Welcome, <?php echo htmlspecialchars($username); ?>!</h1>
        <p><strong>Name:</strong> <span id="userName"></span></p>
        <p><strong>Email:</strong> <span id="userEmail"></span></p>

    </div>
    <a href="logout.php">Logout</a>

    <script src="profile.js"></script> 
</body>
</html>






