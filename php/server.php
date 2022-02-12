<?php
if (isset($_POST['post_param'])) {
    echo "post param = ";
    echo $_POST['post_param'];
    echo ";";
} else {
    echo "post param is empty;";
}

if (isset($_GET['get_param'])) {
    echo "get param = ";
    echo $_GET['get_param'];
    echo ";";
} else {
    echo "get param is empty;";
}
