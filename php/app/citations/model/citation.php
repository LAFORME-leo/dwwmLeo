<?php
class Citation
{
 

    public int $id;
    public string $auteur;
    public string $texte;
    public int $categorie;
    /**
     * Constructeur
     */
    public function __construct(string $pAuteur, string $pTexte, int $pCategorie, int $pId=0)
    {
        $this->auteur = $pAuteur;
        $this->texte = $pTexte;
        $this->categorie = $pCategorie;
        $this->id = $pId;
    }
    public function saveToDb():void
    { $
        $listeCitations = new ArrayObject();
       
        $recipesStatement = Database::getConnection()->pdo->prepare('INSERT INTO citations (auteur,texte,categorie) values (?,?,?)');
        $recipesStatement->execute([$this->auteur,$this->texte,$this->categorie]);
    }
    public static function get( int $pId):Citation
    {
        try {
            $listeCitations = new ArrayObject();
            $recipesStatement = Database::getConnection()->pdo->prepare('SELECT * FROM citations where id=?');
            $recipesStatement->execute([$pId]);
            $citationsData = $recipesStatement->fetch();
            return new Citation($citationsData['auteur'],$citationsData['texte'],$citationsData['categorie'],$citationsData['id']);
        } catch (Exception $e) {
            die('Erreur : ' . $e->getMessage());
        }
    }
    public static function getAll():ArrayObject
    {
        try {
            $listeCitations = new ArrayObject();
            $recipesStatement = Database::getConnection()->pdo->prepare('SELECT * FROM citations');
            $recipesStatement->execute();
            $citationsData = $recipesStatement->fetchAll();
            foreach ($citationsData as $key => $citation) {
                $listeCitations->append(new Citation($citation['auteur'],$citation['texte'],$citation['categorie'],$citation['id']));
            }
            return $listeCitations;
        } catch (Exception $e) {
            die('Erreur : ' . $e->getMessage());
        }
    }
    public static function getAllByCategorie(int $pCategorie):ArrayObject
    {

        try {
            $listeCitations = new ArrayObject();

            $recipesStatement = Database::getConnection()->pdo->prepare('SELECT * FROM citations where categorie=?');
            $recipesStatement->execute([$pCategorie]);
            $citationsData = $recipesStatement->fetchAll();
            foreach ($citationsData as $key => $citation) {
                $listeCitations->append(new Citation($citation['auteur'],$citation['texte'],$citation['categorie'],$citation['id']));
            }
            return $listeCitations;
        } catch (Exception $e) {
            die('Erreur : ' . $e->getMessage());
        }
    }
}
