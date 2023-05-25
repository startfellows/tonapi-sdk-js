FROM openapitools/openapi-generator-cli

CMD ["generate", "-i", "https://raw.githubusercontent.com/tonkeeper/opentonapi/master/api/openapi.yml", "-g", "typescript-fetch", "-o", "/local/src", "-p", "supportsES6=true,withInterfaces=true"]
