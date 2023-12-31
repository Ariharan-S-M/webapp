<!DOCTYPE html >
<head>
        <title>WEBAPP</title>
        <link rel="stylesheet" href="frontpage_class.css">
    </head>
<?php
  $name = $_POST["name"];
  $password = $_POST["password"];
  $dob = $_POST["dob"];
  $email = $_POST["email"];
  $gender = $_POST["gender"];
  $information = file('user_information.txt');
  $nameok = 0;
  $emailok = 0;
  try {
    $lineCount = 0;

    $fileHandle = fopen('user_information.txt', 'r');
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
  
    for( $i=0; $i<$lineCount; $i=$i+6 )
    {
      if( substr($information[$i], 0, -1) == $name )
      {
        $nameok++;
      }
    }

    for( $i=3; $i<$lineCount; $i=$i+6 )
    {
      if( substr($information[$i], 0,-1) == $email )
      {
          $emailok++;
      }
    }

  if($name == "" || $password == "" || $dob == "" || $email == "" || $gender == "")
  {
    ?>
    <div class="loginphp">
      <p>Please fill all the required fields to continue</p>
      <br><br>
      <a href="signup.html">
        <button>Go back</button>
      </a>
    </div>
    <?php
  }  
  
  elseif($emailok != 0){
    ?>
    <div class="loginphp">
      <p>An account has already been created using the given E-mail</p>
      <br><br>
      <a href="signup.html">
        <button>Go back</button>
      </a>
    </div>
    <?php
  }
  elseif($nameok != 0)
  {
    ?>
    <div class="loginphp">
      <p>The given username is already taken</p>
      <br><br>
      <a href="signup.html">
        <button>Go back</button>
      </a>
    </div>
    <?php
  }
  else{
    $file = fopen('user_information.txt', 'a');
    fwrite($file, $name . "\n");
    fwrite($file, $password . "\n");
    fwrite($file, $dob . "\n");
    fwrite($file, $email . "\n");
    fwrite($file, $gender . "\n");
    fwrite($file, "-" . "\n");
    fclose($file);
    $file2 = fopen('apps/pingpong/pingpong.txt', 'a');
    fwrite($file2, "\n");
    fclose($file2);
    ?>
    <div class="loginphp">
      <p>You have been successfully signed in, go to login page to continue</p>
      <br><br>
      <a href="frontpage.html">
        <button class="button1">Login</button>
      </a>
    </div>
    <?php
  }
?>