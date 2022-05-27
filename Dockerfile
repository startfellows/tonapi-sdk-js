FROM openapitools/openapi-generator-cli

CMD ["generate", "-i", "https://tonapi.io/docs/swagger.json", "-g", "typescript-fetch", "-o", "/local/src", "-p", "supportsES6=true,withInterfaces=true"]
