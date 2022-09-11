<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\EmployeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: EmployeRepository::class)]
#[ApiResource(
    itemOperations:['get', 'delete', 'put'],
    collectionOperations:['get', 'post']
)]
class Employe
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 30)]
    private ?string $nom = null;

    #[ORM\Column(length: 30)]
    private ?string $prenom = null;

    #[ORM\Column(length: 40)]
    private ?string $adresse = null;

    #[ORM\Column(length: 100)]
    private ?string $email = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $dateNaissance = null;

    #[ORM\Column(length: 15)]
    private ?string $telephone = null;

    #[ORM\Column(length: 5)]
    private ?string $sexe = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $dateEmbauche = null;

    #[ORM\Column(length: 20)]
    private ?string $numImmatriculation = null;

    #[ORM\Column]
    private ?int $salaire = null;

    #[ORM\Column(length: 30)]
    private ?string $deppartement = null;

    #[ORM\Column(length: 30)]
    private ?string $poste = null;

    #[ORM\OneToMany(mappedBy: 'employe', targetEntity: AbsenceConge::class)]
    private Collection $absenceConges;

    #[ORM\OneToMany(mappedBy: 'employe', targetEntity: Document::class)]
    private Collection $documents;

    public function __construct()
    {
        $this->absenceConges = new ArrayCollection();
        $this->documents = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }

    public function getPrenom(): ?string
    {
        return $this->prenom;
    }

    public function setPrenom(string $prenom): self
    {
        $this->prenom = $prenom;

        return $this;
    }

    public function getAdresse(): ?string
    {
        return $this->adresse;
    }

    public function setAdresse(string $adresse): self
    {
        $this->adresse = $adresse;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getDateNaissance(): ?\DateTimeInterface
    {
        return $this->dateNaissance;
    }

    public function setDateNaissance(\DateTimeInterface $dateNaissance): self
    {
        $this->dateNaissance = $dateNaissance;

        return $this;
    }

    public function getTelephone(): ?string
    {
        return $this->telephone;
    }

    public function setTelephone(string $telephone): self
    {
        $this->telephone = $telephone;

        return $this;
    }

    public function getSexe(): ?string
    {
        return $this->sexe;
    }

    public function setSexe(string $sexe): self
    {
        $this->sexe = $sexe;

        return $this;
    }

    public function getDateEmbauche(): ?\DateTimeInterface
    {
        return $this->dateEmbauche;
    }

    public function setDateEmbauche(\DateTimeInterface $dateEmbauche): self
    {
        $this->dateEmbauche = $dateEmbauche;

        return $this;
    }

    public function getNumImmatriculation(): ?string
    {
        return $this->numImmatriculation;
    }

    public function setNumImmatriculation(string $numImmatriculation): self
    {
        $this->numImmatriculation = $numImmatriculation;

        return $this;
    }

    public function getSalaire(): ?int
    {
        return $this->salaire;
    }

    public function setSalaire(int $salaire): self
    {
        $this->salaire = $salaire;

        return $this;
    }

    public function getDeppartement(): ?string
    {
        return $this->deppartement;
    }

    public function setDeppartement(string $deppartement): self
    {
        $this->deppartement = $deppartement;

        return $this;
    }

    public function getPoste(): ?string
    {
        return $this->poste;
    }

    public function setPoste(string $poste): self
    {
        $this->poste = $poste;

        return $this;
    }

    /**
     * @return Collection<int, AbsenceConge>
     */
    public function getAbsenceConges(): Collection
    {
        return $this->absenceConges;
    }

    public function addAbsenceConge(AbsenceConge $absenceConge): self
    {
        if (!$this->absenceConges->contains($absenceConge)) {
            $this->absenceConges->add($absenceConge);
            $absenceConge->setEmploye($this);
        }

        return $this;
    }

    public function removeAbsenceConge(AbsenceConge $absenceConge): self
    {
        if ($this->absenceConges->removeElement($absenceConge)) {
            // set the owning side to null (unless already changed)
            if ($absenceConge->getEmploye() === $this) {
                $absenceConge->setEmploye(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Document>
     */
    public function getDocuments(): Collection
    {
        return $this->documents;
    }

    public function addDocument(Document $document): self
    {
        if (!$this->documents->contains($document)) {
            $this->documents->add($document);
            $document->setEmploye($this);
        }

        return $this;
    }

    public function removeDocument(Document $document): self
    {
        if ($this->documents->removeElement($document)) {
            // set the owning side to null (unless already changed)
            if ($document->getEmploye() === $this) {
                $document->setEmploye(null);
            }
        }

        return $this;
    }
}
