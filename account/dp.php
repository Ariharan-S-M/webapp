<!DOCTYPE html>
<html>
    <head>
        <title>WEBAPP</title>
        <link rel="stylesheet" href="../frontpage_class.css">
    </head>
    <body>
         <?php
         $information = file('../user_information.txt');
          ?>
        <div class="dps">
          <form action="dp_select.php" method="post">
          <label for="dp"><img src="../images/dp's/dp1.jpg" height="200" width="200"></label>
          <input type="radio" value=1 name="dp" id="dp">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <label for="dp"><img src="../images/dp's/dp2.jpg" height="200" width="200"></label>
          <input type="radio" value=2 name="dp" id="dp">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <label for="dp"><img src="../images/dp's/dp3.jpg" height="200" width="200"></label>
          <input type="radio" value=3 name="dp" id="dp">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <label for="dp"><img src="../images/dp's/dp4.jpg" height="200" width="200"></label>
          <input type="radio" value=4 name="dp" id="dp"><br><br><br><br>
          <label for="dp"><img src="../images/dp's/dp5.jpg" height="200" width="200"></label>
          <input type="radio" value=5 name="dp" id="dp">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <label for="dp"><img src="../images/dp's/dp6.jpg" height="200" width="200"></label>
          <input type="radio" value=6 name="dp" id="dp">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <label for="dp"><img src="../images/dp's/dp7.jpg" height="200" width="200"></label>
          <input type="radio" value=7 name="dp" id="dp">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <label for="dp"><img src="../images/dp's/dp8.jpg" height="200" width="200"></label>
          <input type="radio" value=8 name="dp" id="dp"><br><br><br><br>
          <button class="cen">Submit</button>
          </form>
        </div>
    
    </body>
</html>
