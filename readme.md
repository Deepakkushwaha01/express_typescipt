## TypeScipt With Express

- Intial setup
```
npm init -y
```

change it with compare

```
"main": "src/index.js",
```

- Add express dot env
```
npm i express dotenv
```

# Installing TypeScript

```
npm i -D typescript @types/express @types/node
```

The -D or the --dev flag directs the package manager to install these libraries as development dependencies.


## Generating tsconfig.json

The tsconfig.json file is usually placed at the project’s root. To generate this file, use the following tsc command, initiating the TypeScript Compiler:

```
npx tsc --init
```

Among all these options, compilerOptions is a mandatory field that must be specified. Here’s a summary of all the default options that belong inside the compilerOptions field:

- target: Enables the specification of the target JavaScript version that the compiler will output
- module: Facilitates the utilization of a module manager in the compiled JavaScript code, CommonJS is supported and is a standard in Node.js
- strict: Toggles strict type-checking protocols
- esModuleInterop: Enables the compilation of ES6 modules to CommonJS modules
- skipLibCheck: When set to true, bypasses type-checking of default library declaration files
- forceConsistentCasingInFileNames: When set to true, enforces case-sensitive file naming


One crucial option you will need to enable is outDir, which determines the destination directory for the compiled output. Locate this option in the tsconfig.json file and uncomment it.


```
{
  "compilerOptions": {
    ...
    "outDir": "./dist"
    ...
  }
}
```

**You should now update the main field in the package.json file to dist/index.js as the TypeScript code will compile from the src directory to dist.**


# Create an Express server with a .ts extension

Transforming our JavaScript Express server code into TypeScript isn’t as complicated as it may seem. Begin by renaming the file from index.js in the src directory to index.ts. The .ts extension indicates a TypeScript file, and it will be compiled into JavaScript when we build the application later.

Now, open the index.ts file and add the following modifications to make it TypeScript-compatible:
```
// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
```


# Running TypeScript in Node with ts-node

```
npx ts-node src/index.ts
```

## Error 

**Unknown file extension ".ts" for F:\express-typescript\src\index.ts**

## Reffer to unknownFileType.md

shot solution --  Add to tsconfig.json after compilerOptions

```
  "ts-node": {
    "esm": true,
    "experimentalSpecifierResolution": "node"
 },
 ```

 ## Error 2

 **exports is not defined in ES module scope**

 In tsconfig.json 

set module to es6 and target to es5

 ```
    "target": "ES5",
    "module": "ES6", 
 ```
