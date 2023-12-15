<!DOCTYPE html>
<html>
    <head>
        <title>WEBAPP</title>
        <link rel="stylesheet" href="../frontpage_class.css">
    </head>
    <body>
    <?php
      $user_no = file('current_user_no.txt');
      $count = $user_no[0];
      $information = file('../user_information.txt');
    ?>
        <div class="user_info">
          <form action="dp.php">
            <button class="change_dp">Change Profile Picture</button>
          </form>
              <h1>User Information</h1>
              <br><br>
              <div class="profile_pic">
                <?php
                  if(1 == 2)
                  {
                    echo "";
                  }
                  elseif(substr($information[$count+4], 0, -1) == "male" && substr($information[$count+5], 0, -1) == "-" . "." . $count)
                  {
                    ?>
                    <img src="../images/male.jpg" width="150" height="150">
                    <?php
                  }
                  elseif(substr($information[$count+4], 0, -1) == "female" && substr($information[$count+5], 0, -1) == "-" . "." . $count)
                  {
                    ?>
                  <img src="../images/female.jpg" width="150" height="150">
                  <?php
                  }
                  elseif(substr($information[$count+5], 0, -1) == 1 . "." . $count)
                  {
                    ?>
                  <img src="../images/dp's/dp1.jpg" width="150" height="150">
                  <?php
                  }
                  elseif(substr($information[$count+5], 0, -1) == 2 . "." . $count)
                  {
                    ?>
                  <img src="../images/dp's/dp2.jpg" width="150" height="150">
                  <?php
                  }
                  elseif(substr($information[$count+5], 0, -1) == 3 . "." . $count)
                  {
                    ?>
                  <img src="../images/dp's/dp3.jpg" width="150" height="150">
                  <?php
                  }
                  elseif(substr($information[$count+5], 0, -1) == 4 . "." . $count)
                  {
                    ?>
                  <img src="../images/dp's/dp4.jpg" width="150" height="150">
                  <?php
                  }
                  elseif(substr($information[$count+5], 0, -1) == 5 . "." . $count)
                  {
                    ?>
                  <img src="../images/dp's/dp5.jpg" width="150" height="150">
                  <?php
                  }
                  elseif(substr($information[$count+5], 0, -1) == 6 . "." . $count)
                  {
                    ?>
                  <img src="../images/dp's/dp6.jpg" width="150" height="150">
                  <?php
                  }
                  elseif(substr($information[$count+5], 0, -1) == 7 . "." . $count)
                  {
                    ?>
                  <img src="../images/dp's/dp7.jpg" width="150" height="150">
                  <?php
                  }
                  elseif(substr($information[$count+5], 0, -1) == 8 . "." . $count)
                  {
                    ?>
                  <img src="../images/dp's/dp8.jpg" width="150" height="150">
                  <?php
                  }
                  ?>
              </div>
              
            <div class="">
                <br><br>
              <p>Name: 
                <?php
                  echo $information[$count];
                ?>
              </p>
              <br>
              <p>E-mail: 
                <?php
                  echo $information[$count+3];
                ?>
              </p>
              <br>
              <p>DOB: 
                <?php
                  echo $information[$count+2];
                ?>
              </p>
              <br>
              <p>Gender: 
                <?php
                  echo $information[$count+4];
                ?>
              </p>
              <br>
            </div>
        </div>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="../frontapp.html">
          <button>Go back to Home page</button>
        </a>
    </body>
</html>