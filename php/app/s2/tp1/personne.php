<?php
class Personne
{
    public $salutation;
    public $prenom;
    public $nom;
    public $date;
    public $identifiant;
    public $password;
    public $genre;
    public $newb;
    public function __construct(String $salutation,String  $prenom,String $nom, String $date, String $identifiant, String $password, String $genre, String $pnewb)
    {
        $this->salutation = $salutation;
        $this->prenom = $prenom;
        $this->nom = $nom;
        $this->date = $date;
        $this->identifiant = $identifiant;
        $this->password = $password;
        $this->genre = $genre;
        $this->newb = $pnewb;
    }
    static function createFromTable(Array $array):Personne
    {
        return new Personne($array['salutation'],$array['prenom'],$array['nom'],$array['salutation'],$array['date'],$array['identifiant'],$array['password'],$array['genre'],$array['newb']);
    }
}
