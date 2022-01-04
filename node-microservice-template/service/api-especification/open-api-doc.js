
const { INDENTIFIER_TYPES, REGULAR } = require('../../config/constants');

module.exports = {
  openapi: '3.0.1',
  /*title, version, description, and other things.*/
  info: {
    version: '1.3.0',
    title: 'Users',
    description: 'User management API',
    termsOfService: 'http://api_url/terms/',
    contact: {
      name: 'Admiral Team',
      email: 'hello@admiralgroup.co.uk',
      url: 'https://admiral.com/'
    },
    license: {
      name: 'Apache 2.0',
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
    }
  },
  /*servers where our API is deployed*/
  servers: [
    {
      url: 'http://localhost:3000/',
      description: 'Local server'
    },
    {
      url: 'https://api_url_testing',
      description: 'Testing server'
    },
    {
      url: 'https://api_url_production',
      description: 'Production server'
    }
  ],
  /*apy key authorisation*/
  security: [
    {
      ApiKeyAuth: []
    }
  ],
  /* group our endpoints*/
  tags: [
    {
      name: 'CRUD operations'
    }
  ],
  /*paths for CRUD operations */
  paths: {
    '/pagehistories': {
      get: {
        tags: ['CRUD operations'],
        description: 'Get page histories',
        operationId: 'getPageHistories',
        parameters: [
          {
            name: 'checkpoint',
            in: 'query',
            schema: {
              type: 'string',
              default: 'deeplink'
            },
            required: false
          },
          {
            name: 'orderBy',
            in: 'query',
            schema: {
              type: 'string',
              enum: ['asc', 'desc'],
              default: 'asc'
            },
            required: false
          },
          {
            name: 'x-auth-token',
            in: 'header',
            schema: {
              type: 'string',
              default: 'shhhhh'
            },
            required: true
          }
        ],
        responses: {
          '200': {
            description: 'Users were obtained',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/PageHistory'
                }
              }
            }
          },
          '400': {
            description: 'Invalid parameters',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error'
                },
                example: {
                  message: 'Invalid parameters',
                  internal_code: 'server_error'
                }
              }
            }
          }
        }
      },
      post: {
        tags: ['CRUD operations'],
        description: 'Create page history',
        operationId: 'createPageHistory',
        parameters: [
          {
            name: 'x-auth-token',
            in: 'header',
            schema: {
              type: 'string',
              default: 'shhhhh'
            },
            required: true
          }
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/PageHistory'
              }
            }
          },
          required: true
        },
        responses: {
          '200': {
            description: 'New page history were created'
          },
          '400': {
            description: 'Invalid parameters',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error'
                },
                example: {
                  message: 'Invalid parameters',
                  internal_code: 'invalid_parameters'
                }
              }
            }
          }
        }
      }
    }, 
  },
   /* componets and schemas tp use any time you want and avoid repeating code */
   components: {
    schemas: {
      checkpoint: {
        type: 'string',
        description: 'Flow check point',
        example: 'retrieval'
      },
      flowName: {
        type: 'string',
        example: 'acceptance'
      },
      identifier: {
        type: 'string',
        enum: INDENTIFIER_TYPES,
        default: REGULAR
      },
      pageName: {
        type: 'string',
        description: 'Flow page name',
        example: 'cover_select'
      },
      product: {
        type: 'string',
        description: 'Product type',
        example: 'home'
      },
      quoteNumber: {
        type: 'string',
        description: 'Quote number',
        example: '4456612110'
      },
      sessionId: {
        type: 'string',
        description: 'Session ID',
        example: 'QzczMkYzOTM5MkVGNEY3RDg1NDE3RTVGQzA0OUU3MDk6MUNGREQ3MzdCMzUxNDYxMjlCQUIxODgwQ0YzOTk4NzQ='
      },
      Details: {
        type: 'object',
        properties: {
          flowName: {
            $ref: '#/components/schemas/flowName'
          },
          identifier: {
            $ref: '#/components/schemas/identifier'
          },
          pageName: {
            $ref: '#/components/schemas/pageName'
          },
          product: {
            $ref: '#/components/schemas/product'
          },
          quoteNumber: {
            $ref: '#/components/schemas/quoteNumber'
          },
          sessionId: {
            $ref: '#/components/schemas/sessionId'
          }
        }
      },
      PageHistory: {
        type: 'object',
        properties: {
          checkpoint: {
            $ref: '#/components/schemas/checkpoint'            
          },
          details: {
            $ref: '#/components/schemas/Details'  
          }
        }
      },
      Error: {
        type: 'object',
        properties: {
          message: {
            type: 'string'
          },
          internal_code: {
            type: 'string'
          }
        }
      }
    }
  },
  /*every endpoint in the API requires a header with x-api-key as key*/
  securitySchemes: {
    ApiKeyAuth: {
      type: 'apiKey',
      in: 'header',
      name: 'x-auth-token'
    }
  }
}