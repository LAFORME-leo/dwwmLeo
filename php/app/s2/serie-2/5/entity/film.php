<?php declare(strict_types=1);
class Film
{
    private string $_titre;
    private string $_realisateur;
    private int $_annee;
    private float $_note;
    public function __construct(string $titre,string $realisateur,int $annee,float $note) {
        $this->_titre = $titre;
        $this->_realisateur = $realisateur;
        $this->_annee = $annee;
        $this->_note = $note;
    }
    public function getTitre(): string
    {
        return $this->_titre;
    }
    public function getRealisateur(): string
    {
        return $this->_realisateur;
    }
    public function getAnnee():int
    {
        return $this->_annee;
    }
    public function getNote(): float
    {
        return $this->_note;
    }

}