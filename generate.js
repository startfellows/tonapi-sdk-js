import path from "node:path";
import { generateApi } from "swagger-typescript-api";

function addRouteToModuleByOperationId(operationId, moduleName, config) {
  const route = config.routes.combined
    ?.find((route) =>
      route.routes.find((route) => route.routeName.usage === operationId)
    )
    ?.routes.find((route) => route.routeName.usage === operationId);

  if (route) {
    const newRoute = {
      ...route,
      raw: {
        ...route.raw,
        deprecated: true,
      },
    };
    config.routes.combined
      ?.find((route) => route.moduleName === moduleName)
      ?.routes.push(newRoute);
  }
}

function applyFallbackRoutes(config, data) {
  Object.entries(data)
    .flatMap(([moduleName, operationIds]) =>
      operationIds.map((operationId) => [operationId, moduleName])
    )
    .forEach(([operationId, moduleName]) =>
      addRouteToModuleByOperationId(operationId, moduleName, config)
    );

  return config;
}

const schemaUrl =
  "https://raw.githubusercontent.com/tonkeeper/opentonapi/master/api/openapi.yml";

const generateApiParams = {
  url: schemaUrl,
  output: path.resolve(process.cwd(), "./src"),
  name: "index.ts",
  unwrapResponseData: true,
  moduleNameFirstTag: true,
  singleHttpClient: true,
  hooks: {
    onPrepareConfig(config) {
      // Fall back to previous version of the schema
      const data = {
        // accounts: ["addressParse"],
        // blockchain: ["status"],
      };
      return applyFallbackRoutes(config, data);
    },
  },
};

console.log("Generating API...");
generateApi(generateApiParams);
