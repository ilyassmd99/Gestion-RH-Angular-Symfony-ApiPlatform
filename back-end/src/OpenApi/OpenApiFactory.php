<?php

namespace App\OpenApi;

use ApiPlatform\Core\OpenApi\Factory\OpenApiFactoryInterface;
use ApiPlatform\Core\OpenApi\Model\Operation;
use ApiPlatform\Core\OpenApi\Model\PathItem;
use ApiPlatform\Core\OpenApi\Model\RequestBody;
use ApiPlatform\Core\OpenApi\OpenApi;

class OpenApiFactory implements OpenApiFactoryInterface
{
  
    public function __construct(private OpenApiFactoryInterface $decorated){
    
    }
    
    public function __invoke(array $context = []): OpenApi
    {
        $openApi = $this->decorated->__invoke($context);
        foreach ($openApi->getPaths()->getPaths() as $key => $path) {
            if($path->getGet() && $path->getGet()->getSummary() == 'hidden'){
                $openApi->getPaths()->addPath($key,$path->withGet(null));
            }
        }

        $schemas = $openApi->getComponents()->getSecuritySchemes();
        $schemas['beareAuth'] = new \ArrayObject([
            'type' => 'http',
            'scheme' => 'bearer',
            'bearerFormat' => 'JWT'
        ]);

        $schemas = $openApi->getComponents()->getSchemas();
        $schemas['Credentials'] = new \ArrayObject([
            'type' => 'object',
            'properties' => [
                'username' =>[
                    'type' => 'string'
                ],
                'password' =>[
                    'type' => 'string'
                ]
            ]
        ]);

        /*$schemas['Token'] = new \ArrayObject([
            'type' => 'object',
            'properties' => [
                'token' =>[
                    'type' => 'string',
                    'readOnly' => 'true'
                ]
            ]
        ]);*/
        
        $meOperation = $openApi->getPaths()->getPath('/api/me')->getGet()->withParameters([]);
        $mePathItem = $openApi->getPaths()->getPath('/api/me')->withGet($meOperation);
        $openApi->getPaths()->addPath('/api/me',$mePathItem);

        $pathItem = new PathItem(
            post: new Operation(
                operationId: 'postApiLogin',
                tags: ['Auth'],
                requestBody: new RequestBody(
                    content: new \ArrayObject([
                        'application/json' => [
                            'schema' => [
                                '$ref' => '#/components/schemas/Credentials'
                            ]
                        ]
                    ])
                 ),
                 responses: [
                    '200' => [
                        'decription' => 'Token JWT',
                        'content' => [
                            'application/json' => [
                                'schema' => [
                                    '$ref' => '#/components/schemas/User-read.User'
                                ]
                            ]
                        ]
                    ]
                 ]

            )
            );
            


        



        return $openApi;
    }
} 






















?>