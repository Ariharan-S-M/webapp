<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="canvas2.css">
    <title>Game</title>
</head>
<body>
    <canvas id = "canvas2" class = "canvas2"></canvas>
    <div class = "score1">
        <p id = "score">Score</p>
        <p id = "highscore">High Score: 0</p>
    </div>
    <?php
    if(isset($_POST)){
    $data = file_get_contents("php://input");
    json_decode($data, true);
    $current_user = file('../../account/current_user_no.txt');
    $current_highscore = file('pingpong1.txt');
    $oldMessage = $current_highscore[$current_user[0]];
    $newMessage = 0 . "=" . $data . "\n";
    $check = (int)substr($oldMessage, 2);
    if($data > $check)
    {
        $str = file_get_contents('pingpong1.txt');
        $str = str_replace($oldMessage, $newMessage, $str);
        file_put_contents('pingpong1.txt', $str);
    }
    
    }
    $final = substr(trim(preg_replace('/\s\s+/', ' ', $current_highscore[$current_user[0]])), 2);
    ?>
    <script src = "canvas2.js"></script>
    <script>

            var final = '<?php echo $final; ?>';
            document.getElementById("highscore").innerHTML = "High Score: " + final;

    </script>
</body>
</html>