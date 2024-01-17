<?php
$genres = array("Action", "Adventure", "Comedy", "Drama");
$subjects = array("Animation", "Children", "Youth", "People");
$mainDirectors = array("Walt Disney", "Steven Spielberg", "Anthony Russo", "Tim Burton");

$options = "";
foreach ($genres as $type) {
    $options .= "<option>$type</option>";
}

$subjectOptions = "";
foreach ($subjects as $subject) {
    $subjectOptions .= "<option>$subject</option>";
}

$directorOptions = "";
foreach ($mainDirectors as $director) {
    $directorOptions .= "<option>$director</option>";
}
?>
<!DOCTYPE html>
<html>

<head lang="en">
    <meta charset="utf-8">
    <title>Chapter 12</title>

    <link rel="stylesheet" href="styles1.css" />
</head>

<body>
    <?php
    include("headerM.php");
    ?>

    <main>
        <form class="form" method="post" action="process.php" id="mainForm">
            <fieldset class="form__panel">
                <legend class="form__heading">Edit Movie Details</legend>
                <p class="form__row">
                    <label>Title</label><br />
                    <input type="text" name="title" class="form__input form__input--large" />
                </p>
                <p class="form__row">
                    <label>Description</label><br />
                    <input type="text" name="description" class="form__input form__input--large">
                </p>
                <p class="form__row">
                    <label>Genre</label><br />
                    <select name="genre" class="form__input form__select">
                        <option>Choose genre</option>
                        <?php
                        echo $options;
                        ?>
                    </select>
                </p>
                <p class="form__row">
                    <label>Subject</label><br />
                    <select name="subject" class="form__input form__select">
                        <option>Choose subject</option>
                        <?php
                        echo $subjectOptions;
                        ?>
                    </select>
                </p>
                <p class="form__row">
                    <label>Star</label><br />
                    <input type="text" name="Star" class="form__input form__input--medium" />
                </p>
                <p class="form__row">
                    <label>Year</label><br />
                    <input type="text" name="year" class="form__input form__input--small" />
                </p>
                <p class="form__row">
                    <label>Production</label><br />
                    <input type="text" name="Production" class="form__input form__input--medium" />
                </p>
                <p class="form__row">
                    <label>Main Director</label><br />
                    <select name="coStar" class="form__input form__select">
                        <option>Choose Main Director</option>
                        <?php
                        echo $directorOptions;
                        ?>
                    </select>
                </p>

                <div class="form__box">
                    <input type="submit" class="form__btn"> <input type="reset" value="Clear Form" class="form__btn">
                </div>
            </fieldset>
        </form>
    </main>
   <?php
   include("footerM.php");
   ?>
</body>

</html>
