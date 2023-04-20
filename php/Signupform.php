<?php
// Establishing connection with the database
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database_name";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Check if the form was submitted
if(isset($_POST['submit'])) {
  $email = $_POST['email'];
  $password = $_POST['password'];

  // Insert data into the database
  $sql = "INSERT INTO users (email, password) VALUES ('$email', '$password')";

  if (mysqli_query($conn, $sql)) {
    echo "Sign Up Successfully!";
  } else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
  }

  mysqli_close($conn);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="signup.css">
    <title>Document</title>
</head>
<body>
    

<form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="POST" style="border:1px solid #ccc">
    <div class="container">
      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account.</p>
      <hr>
  
      <label for="email\"><b>Email</b></label><br>
      <input type="text" placeholder="Enter Email" required id="email" name="email">
    <br>
      <label for="psw\"><b>Password</b></label><br>
      <input type="password" placeholder="Enter Password"  required id="password" name="password">
  <br>
    
  
      <div class="clearfix">
        <input type="reset" class="cancelbtn" value="Cancel">
        <button type="submit" class="signupbtn" name="submit">Sign Up</button>
      </div>
    </div>
  </form>
</body>
</html>