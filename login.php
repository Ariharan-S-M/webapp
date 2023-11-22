<!DOCTYPE html >
<head>
        <title>WEBAPP</title>
        <link rel="stylesheet" href="frontpage_class.css">
    </head>
<?php
  $file = fopen('account/current_user_no.txt', 'w');
  ftruncate($file, 0);
  fclose($file);
  $name2 = $_POST["name2"];
  $password2 = $_POST["password2"];
  $filename = "user_information.txt";
  $request = 0;
  try {
    $lineCount = 0;

    $fileHandle = fopen($filename, 'r');
    if ($fileHandle === false) {
        throw new Exception("Error opening the file.");
    }

    while (!feof($fileHandle)) {
        $line = fgets($fileHandle);
        if ($line !== false) {
            $lineCount++;
        }
    }

    fclose($fileHandle);
  } catch (Exception $e) {
        echo "An error occurred: " . $e->getMessage();
    }
  $information = file('user_information.txt');
  for($i=0; $i<$lineCount; $i=$i+6)
  {
    if(substr($information[$i], 0, -1) == $name2 && substr($information[$i+1], 0, -1) == $password2)
    {
      $file = fopen('account/current_user_no.txt', 'a');
      fwrite($file, $i);
      $request++;
    }
  }
  if($request == 0)
  {?>
    <div class="loginphp">
      <p>You have been failed to login</p>
      <br>
      <p>Please enter the correct username or password</p>
      <br>
      <a href="frontpage.html">
        <button class="button1">Go to login page</button>
      </a>
      <br><br>
      <div class="signup">
      <a href="signup.html">
        <button class="button2">Signup</button>
      </a>
      </div>
    </div>
    
   <?php 
  }
  else{
    ?>
    <div class= "loginphp">
      <p>You have been successfully logged into your account</p>
      <br><br>
        <a href="frontapp.html">
          <button>Go to Homepage</button>
        </a>
    </div>
    <?php
  }
?>
