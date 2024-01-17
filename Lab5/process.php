<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $title = $_POST['title'];
    $des = $_POST['description'];
    $genre = $_POST['genre'];
    $subject = $_POST['subject'];
    $star = $_POST['Star'];
    $year = $_POST['year'];
    $production = $_POST['Production'];
    $main_dir = $_POST['coStar'];
}
    ?>
    <!DOCTYPE html>
        <html lang='en'>
        <head>
            <meta charset='UTF-8'>
            <meta name='viewport' content='width=device-width, initial-scale=1.0'>
            <title>Movie Information</title>
            <link rel="stylesheet" href="styles1.css" />
            <style>
                .results {
                width: 70%;
                margin: 60px auto;
                }

                #caption {
                font-weight: bold;
                font-size: 110%;
                text-align: center;
                margin-bottom: 10px;
                border-bottom: 1px #616161 solid;
                }
                strong {
            text-align: right;
            width: 20%;
            padding-right: 0.5em;
            padding-bottom: 0.5em;
            display: inline-block;
                }
            .info {
            margin-bottom: 10px;
            }
            span{
                font-weight: bold;
            }
            .infor{
                font-size:25px;
                padding-left: 100px; 
            }
        footer {
            margin-top: 10px;
            text-align: center;
            font-style: italic;
            padding: 10px 0;
        }
    </style>
</head>
<body>
    <?php include('headerM.php'); ?>
    <div class="results">
        <div><h2 id="caption">Movie Information Saved</h2></div>
        <div class="info"><strong>Title:</strong> <?php echo $title ?></div>
        <div class="info"><strong>Description:</strong> <?php echo $des ?></div>
        <div class="info"><strong>Genre:</strong> <?php echo $genre ?></div>
        <div class="info"><strong>Subject:</strong> <?php echo $subject ?></div>
        <div class="info"><strong>Star:</strong> <?php echo $star ?></div>
        <div class="info"><strong>Year:</strong> <?php echo $year ?></div>
        <div class="info"><strong>Production:</strong> <?php echo $production ?></div>
        <div class="infor"><span> Main Director: </span><?php echo $main_dir ?></div>
    </div>
        <?php include('footerM.php'); ?>
        </body>
        </html>

