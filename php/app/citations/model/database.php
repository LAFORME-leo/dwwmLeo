<?php
class Database
{
    protected static $instance = null;
    public $pdo;

    public static function getConnection() {
        if (is_null(self::$instance)) {
            self::$instance = new Database("db","citations","utf8","3306","root","thisisapassworddamned");
        }
        return self::$instance;
    }
    private function __construct($pHost,$pDbname,$pCharset,$pPort,$pUsername,$pPassword) {
        $dsn = "mysql:host=".$pHost.";dbname=".$pDbname.";charset=".$pCharset.";port=".$pPort;
        $this->pdo= new PDO($dsn,$pUsername,$pPassword);
    }

}