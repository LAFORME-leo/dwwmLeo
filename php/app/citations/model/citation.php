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
    public function __construct(int $pID, string $pAuteur, string $pTexte, int $pCategorie)
    {
        $this->id = $pID;
        $this->auteur = $pAuteur;
        $this->texte = $pTexte;
        $this->categorie = $pCategorie;
    }

    public static function getAll():ArrayObject
    {
        // host doit bien être le nom du service dans le docker-composer, ici db
        // db:
        //  build: './build/mysql/'
        //  volumes:

        $host = "db"; // Le host est le nom du service, présent dans le docker-compose.yml
        $dbname = "citations";
        $charset = "utf8";
        $port = "3306";
        
        try {
            $listeCitations = new ArrayObject();
            $pdo = new PDO(
                dsn: "mysql:host=$host;dbname=$dbname;charset=$charset;port=$port",
                username: "root",
                password: "thisisapassworddamned",
            );
            $recipesStatement = $pdo->prepare('SELECT * FROM citations');
            $recipesStatement->execute();
            $citationsData = $recipesStatement->fetchAll();
            foreach ($citationsData as $key => $citation) {
                $listeCitations->append(new Citation($citation['id'],$citation['auteur'],$citation['texte'],$citation['categorie']));
            }
            return $listeCitations;
        } catch (Exception $e) {
            die('Erreur : ' . $e->getMessage());
        }
    }
}
