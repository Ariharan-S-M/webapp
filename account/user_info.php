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
                  elseif(substr($information[$count+4], 0, -1) == "male")
                  {
                    ?>
                    <img src="../images/male.jpg" width="150" height="150">
                    <?php
                  }
                  elseif(substr($information[$count+4], 0, -1) == "female")
                  {
                    ?>
                  <img src="../images/female.jpg" width="150" height="150">
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
        <?php
          if(substr($information[$count+4], 0, -1) == "male")
          {
            echo "";
          }
        ?>
    </body>
</html>