<!DOCTYPE html>
<html>
    <head>
        <title>WEBAPP</title>
        <link rel="stylesheet" href="../frontpage_class.css">
    </head>
    <body>
      <?php
        $dp = $_POST["dp"] ?? "-";
        if($dp == 0)
        {
            ?>
            <div>
                <h1>Default photo is selected</h1>
            </div>
            <?php
        }
        else{
            $current_user = file('current_user_no.txt');
            $user_information = file('../user_information.txt');
            $oldMessage = $user_information[$current_user[0]+5];
            $newMessage = $dp . "." . $current_user[0] . "\n";
            $str=file_get_contents('../user_information.txt');
            $str=str_replace($oldMessage, $newMessage, $str);
            file_put_contents('../user_information.txt', $str);
            ?>
            <div class="loginphp">
            <p>Profile picture is updated</p>
            <br><br>
            <a href="user_info.php">
            <button class="button1">Go back</button>
            </a>
            </div>
            <?php
        }
      ?>
    </body>
    
</html>