const swaggerJSDoc = require('swagger-jsdoc');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

//Metadata info about out api
const options =

{
    definition: {
        openapi: "3.0.0",
        info: {
            title: "MyApiRest",
            version: "1.0.0",
            description: "MyApiRest",
            contact: {
                name: "EvaCardenasB",
                email: "evacrdns17@gmail.com",
                url: "https://evacardenasb.com"
            },
            license: {
                name: "GPLv3",
                url: "https://www.gnu.org/licenses/gpl-3.0.en.html"
            },
        },
        paths: {
            "/api/v1/songs": {
                get: {
                    summary: "Returns all songs from the system that the user has access to",
                    tags: [
                        "songs"
                    ],
                    responses: {
                        200: {
                            description: "A list of songs.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            properties: {
                                                id: {
                                                    type: "integer",
                                                    format: "int64"
                                                },
                                                name: {
                                                    type: "string"
                                                },
                                                artist: {
                                                    type: "string"
                                                }
                                            }
                                        }
                                    }
                                }

                            }
                        }
                    }
                },
                post: {
                    summary: 'Save a song in the system',
                    tags: ['songs'],
                    requestBody: {
                        description: 'A song to create',
                        required: true,
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        nombre: {
                                            type: 'string',
                                        },
                                        artist: {
                                            type: 'string',
                                        },
                                    },
                                },
                            },
                        },
                    },
                    responses: {
                        '200': {
                            description: 'A list of songs.',
                            content: {
                                'application/json': {
                                    schema: {
                                        type: 'array',
                                        items: {
                                            type: 'object',
                                            properties: {
                                                id: {
                                                    type: 'integer',
                                                    format: 'int64',
                                                },
                                                name: {
                                                    type: 'string',
                                                },
                                                artist: {
                                                    type: 'string',
                                                },
                                            },
                                            example: {
                                                id: 1,
                                                nombre: 'Like a Rolling Stone',
                                                artist: 'Bob Dylan'
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            "/api/v1/songs/{id}": {
                get: {
                    summary: "Returns a songs from the system that the user has access to",
                    tags: [
                        "songs"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID of song to fetch",
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    responses: {
                        200: {
                            description: "",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            name: {
                                                type: "string"

                                            },
                                            artist: {
                                                type: "string"

                                            },
                                        }, example: {
                                            id: 1,
                                            nombre: 'Like a Rolling Stone',
                                            artist: 'Bob Dylan'
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                put: {
                    summary: 'Update a songs from the system',
                    tags: ['songs'],
                    parameters: [
                        {
                            name: 'id',
                            in: 'path',
                            description: 'ID of song to update',
                            required: true,
                            schema: {
                                type: 'integer',
                                format: 'int64',
                            },
                        },
                    ],
                    requestBody: {
                        description: 'A song to update',
                        required: true,
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        name: {
                                            type: 'string',
                                        },
                                        artist: {
                                            type: 'string',
                                        },
                                    },
                                },
                            },
                        },
                    },
                    responses: {
                        '200': {
                            description: 'A list of songs.',
                            content: {
                                'application/json': {
                                    schema: {
                                        type: 'array',
                                        items: {
                                            type: 'object',
                                            properties: {
                                                id: {
                                                    type: 'integer',
                                                    format: 'int64',
                                                },
                                                name: {
                                                    type: 'string',
                                                },
                                                artist: {
                                                    type: 'string',
                                                },
                                            },
                                            example: {
                                                id: 1,
                                                nombre: 'Like a Rolling Stone',
                                                artist: 'Bob Dylan'
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                delete: {
                    summary: "Deletes a songs from the system",
                    tags: [
                        "songs"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID of songs to delete",
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    responses: {
                        200: {
                            description: "",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            message: {
                                                type: "string"
                                            }
                                        },
                                    },
                                },
                            },
                        },
                    },
                },

            },
            "/api/v1/films": {
                get: {
                    summary: "Returns all films from the system that the user has access to",
                    tags: [
                        "films"
                    ],
                    responses: {
                        200: {
                            description: "A list of songs.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            properties: {
                                                id: {
                                                    type: "integer",
                                                    format: "int64"
                                                },
                                                name: {
                                                    type: "string"
                                                },
                                                year: {
                                                    type: "string"
                                                }
                                            }
                                        }
                                    }
                                }

                            }
                        }
                    }
                },
                post: {
                    summary: 'Save a films in the system',
                    tags: ['films'],
                    requestBody: {
                        description: 'A films to create',
                        required: true,
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        nombre: {
                                            type: 'string',
                                        },
                                        year: {
                                            type: 'string',
                                        },
                                    },
                                },
                            },
                        },
                    },
                    responses: {
                        '200': {
                            description: 'A list of films.',
                            content: {
                                'application/json': {
                                    schema: {
                                        type: 'array',
                                        items: {
                                            type: 'object',
                                            properties: {
                                                id: {
                                                    type: 'integer',
                                                    format: 'int64',
                                                },
                                                name: {
                                                    type: 'string',
                                                },
                                                year: {
                                                    type: 'string',
                                                },
                                            },
                                            example: {
                                                id: 1,
                                                nombre: 'Like a Rolling Stone',
                                                year: 'Bob Dylan'
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            "/api/v1/films/{id}": {
                get: {
                    summary: "Returns a films from the system that the user has access to",
                    tags: [
                        "films"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID of films to fetch",
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    responses: {
                        200: {
                            description: "",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            name: {
                                                type: "string"

                                            },
                                            year: {
                                                type: "string"

                                            },
                                        }, example: {
                                            id: 1,
                                            name: 'Like a Rolling Stone',
                                            year: 'Bob Dylan'
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                put: {
                    summary: 'Update a films from the system',
                    tags: ['films'],
                    parameters: [
                        {
                            name: 'id',
                            in: 'path',
                            description: 'ID of films to update',
                            required: true,
                            schema: {
                                type: 'integer',
                                format: 'int64',
                            },
                        },
                    ],
                    requestBody: {
                        description: 'A films to update',
                        required: true,
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        name: {
                                            type: 'string',
                                        },
                                        year: {
                                            type: 'string',
                                        },
                                    },
                                },
                            },
                        },
                    },
                    responses: {
                        '200': {
                            description: 'A list of films.',
                            content: {
                                'application/json': {
                                    schema: {
                                        type: 'array',
                                        items: {
                                            type: 'object',
                                            properties: {
                                                id: {
                                                    type: 'integer',
                                                    format: 'int64',
                                                },
                                                name: {
                                                    type: 'string',
                                                },
                                                year: {
                                                    type: 'string',
                                                },
                                            },
                                            example: {
                                                id: 1,
                                                nombre: 'Like a Rolling Stone',
                                                year: 'Bob Dylan'
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                delete: {
                    summary: "Deletes a films from the system",
                    tags: [
                        "films"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID of films to delete",
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    responses: {
                        200: {
                            description: "",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            message: {
                                                type: "string"
                                            }
                                        },
                                    },
                                },
                            },
                        },
                    },
                },

            },
        },
    },
    apis: ["src/v1/routes/songs.js", "src/v1/routes/films.js"],

};

//Docs en JSON format
const swaggerSpec = swaggerJSDoc(options);

//Funtion to setup out docs
const swaggerDocs = (app, port) => {
    app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
    app.get('/api/v1/docs.json', (req, res) => {
        res.setHeader('Content-Type', 'aplication/json');
        res.send(swaggerSpec)
    });
    console.log(`Swagger v1 docs disponible en http://localhost:${port}/api/v1/docs/`);
};

module.exports = { swaggerDocs };