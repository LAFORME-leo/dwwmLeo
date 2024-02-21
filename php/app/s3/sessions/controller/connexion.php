<?php
function afficherLogin()
{
    if (isset($_SESSION['isConnected']))
    header('Location: index.php?page=info');

    if ((isset($_POST['name']))&&(isset($_POST['password']))&& ($_POST['name']=="admin")&& ($_POST['password']=="admin"))
    {
        $_SESSION["isConnected"] = true;
        header ('location: index.php?page=info');
    }
    ob_start();
    include 'templates/vue_login.php';
    $content = ob_get_contents();
    ob_end_clean();
    include_once 'templates/base.php';
  
}
function logOut()
{
    unset($_SESSION['isConnected']);
    session_destroy();
    header('Location: index.php?page=login');
}