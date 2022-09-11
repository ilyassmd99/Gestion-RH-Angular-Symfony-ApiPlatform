<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SecurityController extends AbstractController
{
    #[Route(path:'/api/login', name: 'api_login', methods:['POST'])]
    public function login()
    {
        $user = $this->getUser();
        return $this->json([
            'username' => $user->getUserIdentifier(),
            'roles' => $user->getRoles()
        ]);
    }
    #[Route('/api/logout', name: 'api_logout')]
    public function logout()
    {
        throw new \LogicException("Error Processing Request", 1);
        
    }

}
