<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Controller\HomeController;
use App\Controller\MeController;
use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Lexik\Bundle\JWTAuthenticationBundle\Security\User\JWTUserInterface;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ApiResource(
   security: 'is_granted("ROLE_USER")',
   collectionOperations:[],
   itemOperations: [
    'get' => [
        'controller' => NotFoundAction::class,
        'openapi_context' => ['summary' => 'hidden'],
        'read' => false,
        'output' => false
    ],
        'me' => [
            'pagination_enabled' => false,
            'path' => '/me',
            'method' => 'get',
            'controller' => MeController::class,
            'read' => false,
            'openapi_context' => [
                'security' => [['bearerAuth' =>[]]]
            ]
        ]
    ],
    normalizationContext: ['groups' => ['read:User']]
)]
    
class User implements UserInterface, PasswordAuthenticatedUserInterface,JWTUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['read:User'])]
    private ?int $id = null;

    #[ORM\Column(length: 180, unique: true)]
    #[Groups(['read:User'])]
    private ?string $username = null;

    #[ORM\Column(type:"json")]
    #[Groups(['read:User'])]
    private array $roles = [];

    /**
     * @var string The hashed password
     */
    #[ORM\Column]
    private ?string $password = null;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: AbsenceConge::class)]
    private Collection $absenceConges;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: Document::class)]
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
    public function setId(?int $id): self
    {
       $this->id = $id;
       return $this; 
    }

    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function setUsername(string $username): self
    {
        $this->username = $username;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->username;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
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
            $absenceConge->setUser($this);
        }

        return $this;
    }

    public function removeAbsenceConge(AbsenceConge $absenceConge): self
    {
        if ($this->absenceConges->removeElement($absenceConge)) {
            // set the owning side to null (unless already changed)
            if ($absenceConge->getUser() === $this) {
                $absenceConge->setUser(null);
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
            $document->setUser($this);
        }

        return $this;
    }

    public function removeDocument(Document $document): self
    {
        if ($this->documents->removeElement($document)) {
            // set the owning side to null (unless already changed)
            if ($document->getUser() === $this) {
                $document->setUser(null);
            }
        }

        return $this;
    }
    public static function createFromPayload($id, array $payload)
    {
        dd($id,$payload);
        return (new User())->setId($id)->setUsername($payload['username'] ?? '');
    }
}
