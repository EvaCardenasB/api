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
                    summary: "Add a songs from the system",
                    tags: [
                        "songs"
                    ],
                    parameters: [
                        {
                            name: "name",
                            in: "path",
                            description: "Name of songs",
                            required: true,
                            type: "string"
                            
                        },
                        {
                            name: "artist",
                            in: "path",
                            description: "Artist of songs",
                            required: true,
                            type: "string"
                            
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
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
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

                                            }
                                        }, example: {
                                            "name": "Imagine"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                put: {
                    summary: "Update a songs from the system",
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
                        },
                        {
                            name: "name",
                            in: "path",
                            description: "Name of song to fetch",
                            required: true,
                            type: "string",
                        },
                        {
                            name: "artist",
                            in: "path",
                            description: "Artist of song to fetch",
                            required: true,
                            type: "string",
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

                                            }
                                        }, example: {
                                            "name": "Imagine"
                                        }
                                    }
                                }
                            }
                        }
                    }
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
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                
            },
        },
    },
    // apis: [path.join(__dirname, './routes/*.js')]
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
