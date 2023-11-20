<!DOCTYPE html>
<html>
    <head>
        <title>WEBAPP</title>
        <link rel="stylesheet" href="frontpage_class.css">
    </head>
    <body>
        <div class="userinfo">
            <h1>User Information</h1>
            <br><br>
            <p>Name: </p>
            <?php
            session_start();
            $i = $_SESSION['varname'];
            echo $i;
 
            ?>
        </div>
    </body>
</html>