# registr-poc

## Indice

<!-- TOC -->

- [registr-poc](#-name-)
  - [Indice](#indice)
  - [Introducción](#introducción)
  - [Requisitos](#requisitos)
  - [Notas para Desarrolladores](#notas-para-desarrolladores)
  - [Instalación](#instalación)
    - [Desarrollo](#desarrollo)
  - [Estructura del proyecto](#estructura-del-proyecto)
  - [Ficheros más destacables](#ficheros-más-destacables)
  - [Package.json](#packagejson)
  - [Automatismos](#automatismos)
    - [Linter y Verificado](#linter-y-verificado)
      - [Lintado de código con ESLint](#lintado-de-código-con-eslint)
      - [Verificación de código con Prettier](#verificación-de-código-con-prettier)
    - [Commit and commitizen-lint](#commit-and-commitizen-lint)
    - [Bundle](#bundle)
    - [Servidor de desarrollo](#servidor-de-desarrollo)
    - [Construir documentación con Compodoc](#construir-documentación-con-compodoc)
    - [Bundle Analyzed](#bundle-analyzed)
    - [Scripts](#scripts)
  - [Testing](#testing)
    - [UnitTest: JestJS](#unittest-jestjs)
      - [Configuración](#configuración)
      - [Agregar a ng-cli](#agregar-a-ng-cli)
      - [Solución de problemas](#solución-de-problemas)
    - [End2End: ProtractorJS](#end2end-protractorjs)
    - [Acceptation Test: CucumberJS](#acceptation-test-cucumberjs)
  - [Versionado package.json](#versionado-packagejson)
  - [Angular.json](#angularjson)
  - [Pruebas DoD](#pruebas-dod)

<!-- /TOC -->

[![code formatter with prettier](https://img.shields.io/badge/code_formatter-prettier-lightgrey.svg)](https://github.com/prettier/prettier)
[![styled with eslint](https://img.shields.io/badge/styled_with-eslint-blueviolet.svg)](https://github.com/eslint/eslint)
[![testing](https://img.shields.io/badge/testing-jest-red.svg)](https://github.com/facebook/jest)
[![documentation](https://img.shields.io/badge/doc-compodoc-brightgreen.svg)](https://compodoc.app/)
[![typescript](https://img.shields.io/badge/language-typescript-blue.svg)](https://www.typescriptlang.org/docs/home.html)
[![Conventional-commit](https://img.shields.io/badge/commits-conventinal_commits-pink.svg)](https://www.conventionalcommits.org/en/v1.0.0/)

## Introducción

Código base generado con el acelerador de proyectos @atmira/front

## Requisitos

Los requisitos mínimos y obligatorios para ejecutar correctamente el generador son:

- NodeJS

- NPM

- [Git](https://git-scm.com/)


La recomendación es tener todos instalados en sus últimas versiones LTS.

## Notas para Desarrolladores

This PetShop is based in 'Hexagonal Architecture' and the structure is based in PODS, from Framework Web Ember.
This `App` is divided in:

- `common`: Common components **not linked** to the domain.
- `common-app`: Common components **linked** to the domain.
- `core`: cross component.
- `pods`: group components to the domain.
- `utils`: utils.

## Instalación

Los pasos a seguir para usar este código base son los siguientes:

1. Descargar el proyecto del repositorio
// TODO: comando ``
 desde el sistema de control de versiones (`git`), y ejecutar el comando `cd XXXX`.
1. Descargar las dependencias y herramientas necesarias del proyecto con el comando de node package manager que usemos para instalarlas: `npm install`.
1. Ejecutar el comando de corrección de vulnerabilidades(ver [npm](https://docs.npmjs.com/cli/v7/commands/npm-audit): `npm audit fix`.
1. Ejecutar el comando `npm start`.

### Desarrollo



## Estructura del proyecto

La estructura del proyecto base es la siguiente:

```
├── README.md
├── angular.json
├── commitlint.config.js
├── config
│   ├── compodoc
│   │   └── tsconfig.compodoc.json
│   ├── e2e
│   │   ├── protractor-ci.conf.js
│   │   ├── protractor.conf.js
│   │   └── tsconfig.e2e.json
│   ├── eslint
│   │   └── tsconfig.eslint.json
│   ├── helpers
│   │   └── helper.js
│   └── test
│       ├── config.js
│       ├── jest.config.js
│       ├── setup-jest.ts
│       └── tsconfig.spec.json
├── documentation
├── e2e
│   └── src
│       ├── app.e2e-spec.ts
│       └── app.po.ts
├── package-lock.json
├── package.json
├── src
│   ├── app
│   │   ├── app-routing.module.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   ├── assets
│   │   └── logo-atmira.png
│   ├── environments
│   │   ├── environment.production.ts
│   │   └── environment.ts
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   └── styles.scss
├── tsconfig.app.json
└── tsconfig.json

16 directories, 42 files

```

## Ficheros más destacables

Como ficheros a destacar dentro del proyecto base tenemos los siguientes:

| Ficheros/Carpeta   | Descripción                                                                                                                         |
|--------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| .husky/            | Fichero de configuración de husky.                                                                                                  |
| config/            | Fichero de configuración de testing, linter,...                                                                                     |
| cucumber/          | Carpeta donde se encuentran test. ATDD.                                                                                             |
| e2e/               | Carpeta donde se encuentran test. e2e.                                                                                              |
| src/               | Carpeta donde se encuentran nuestros. sources.                                                                                      |
| /environments      | Carpeta donde se encuentran nuestros ficheros de propiedades por entornos.                                                          |
| tsconfig.app.json  | Fichero que extiende la configuración general de Typescript para añadir nuevas reglas que solo afectan a la aplicación Angular.     |
| .browserlistrc     | Fichero que permite automatizar el grado decompatibilidad que tendrán algunas herramientas Javascript o CSS respecto a navegadores. |
| .commitlintrc.json | Fichero de configuración de commitlint.                                                                                             |
| .editorconfig      | Fichero de configuración del editor.                                                                                                |
| .eslintrc.js       | Fichero de configuración de lintado de código.                                                                                      |
| .lintstagedrc      | Fichero de configuración de lint-staged.                                                                                            |
| .prettierrc        | Fichero de configuración de prettier.                                                                                               |
| .czrc              | Fichero de configuración de cz-conventional-changelog.                                                                              |
| .nvmrc             | Fichero de configuración si se usa nvm.                                                                                             |
| angular.json       | Fichero de configuración de Angular.                                                                                                |
| package.json       | Fichero que describe la totalidad de nuestra aplicación NPM (ver apartado propio).                                                  |
| tsconfig.json      | Fichero de configuración de Typescript.                                                                                             |

## Package.json

El fichero package.json es el fichero que define la totalidad del proyecto en el que estamos trabajando.

La definición del fichero que existe en nuestro proyecto base es el siguiente:

```json
{
  "name": "registr-poc",
  "version": "0.1.0",
  "description": "Frontend Scaffolding BCC",
  "license": "MIT",
  "files": [
    "dist"
  ],
  "scripts": {
    "analyzed": "webpack-bundle-analyzer dist/registr-poc/stats.json",
    "prebuild": "rimraf dist",
    "build": "ng build --prod",
    "build:dev": "ng build",
    "build:stats": "ng build --prod --stats-json",
    "bundleAnalyzed": "run-s build:stats analyzed",
    "ci:pack": "npm pack",
    "ci:e2e": "ng e2e --protractor-config=./e2e/protractor-ci.conf.js --webdriver-update false",
    "ci:cucumber": "protractor config/atdd/cucumber-ci.conf.js --webdriver-update false",
    "ci:test": "ng test",
    "ci:compodoc": "npm run compodoc -- --coverageTest",
    "precucumber": "rimraf ./cucumber_report && webdriver-manager update",
    "cucumber": "protractor config/atdd/cucumber.conf.js",
    "precommit": "run-s format:fix lint",
    "commit": "npx cz",
    "precompodoc": "npm run test:coverage",
    "compodoc": "npx compodoc -c ./config/compodoc/.compodocrc.json",
    "compodoc:serve": "npm run compodoc -- -s -o",
    "pree2e": "rimraf ./protractor_report && webdriver-manager update --gecko false --standalone false --ignore_ssl",
    "e2e": "ng e2e",
    "lint": "ng lint",
    "format:fix": "pretty-quick --staged",
    "ng": "ng",
    "prepublishOnly": "npm run build:prod",
    "prettier": "npx prettier --write ./src",
    "release": "standard-version",
    "serve": "ng serve",
    "start": "ng serve -o",
    "test": "ng test",
    "test:coverage": "ng test --coverage",
    "test:watch": "ng test --watch",
    "prepare": "husky install"
  },
  "resolutions": {
    "webpack": "^5.0.0"
  },
  "dependencies": {
    "@angular/animations": "^11.2.10",
    "@angular/cdk": "^11.2.9",
    "@angular/common": "^11.2.10",
    "@angular/compiler": "^11.2.10",
    "@angular/compiler-cli": "^11.2.10",
    "@angular/core": "^11.2.10",
    "@angular/forms": "^11.2.10",
    "@angular/material": "^11.2.9",
    "@angular/platform-browser": "^11.2.10",
    "@angular/platform-browser-dynamic": "^11.2.10",
    "@angular/router": "^11.2.10",
    "rxjs": "^6.6.7",
    "tslib": "^2.2.0",
    "zone.js": "~0.11.4"
  },
  "devDependencies": {
    "@angular-builders/jest": "^11.1.1",
    "@angular-devkit/build-angular": "^0.1102.9",
    "@angular-eslint/builder": "^2.1.0",
    "@angular-eslint/eslint-plugin": "^2.1.0",
    "@angular-eslint/eslint-plugin-template": "^2.1.0",
    "@angular-eslint/schematics": "^2.1.0",
    "@angular-eslint/template-parser": "^2.1.0",
    "@angular/cli": "^11.2.9",
    "@angular/compiler-cli": "^11.2.10",
    "@angular/language-service": "^11.2.10",
    "@commitlint/cli": "^12.1.1",
    "@commitlint/config-conventional": "^12.1.1",
    "@compodoc/compodoc": "^1.1.11",
    "@cucumber/cucumber": "^7.1.0",
    "@types/chai": "^4.2.16",
    "@types/chai-as-promised": "^7.1.3",
    "@types/eslint": "^7.2.10",
    "@types/eslint-scope": "^3.7.0",
    "@types/jest": "^26.0.22",
    "@types/node": "^14.14.41",
    "@typescript-eslint/eslint-plugin": "^4.22.0",
    "@typescript-eslint/parser": "^4.22.0",
    "chai": "^4.3.4",
    "chai-as-promised": "^7.1.1",
    "cucumber-html-reporter": "^5.4.0",
    "cz-conventional-changelog": "^3.3.0",
    "eslint": "^7.24.0",
    "eslint-config-prettier": "^8.2.0",
    "eslint-plugin-import": "^2.22.1",
    "eslint-plugin-jsdoc": "^32.3.0",
    "eslint-plugin-prefer-arrow": "^1.2.3",
    "eslint-plugin-prettier": "^3.4.0",
    "eslint-plugin-unicorn": "^29.0.0",
    "husky": "^6.0.0",
    "jasmine-reporters": "^2.4.0",
    "jasmine-spec-reporter": "^7.0.0",
    "jest": "^26.6.3",
    "jest-html-reporters": "^2.1.3",
    "lint-staged": "^10.5.4",
    "npm-run-all": "^4.1.5",
    "prettier": "^2.2.1",
    "prettier-eslint": "^12.0.0",
    "pretty-quick": "^3.1.0",
    "protractor": "^7.0.0",
    "protractor-cucumber-framework": "^8.0.2",
    "protractor-html-reporter-2": "^1.0.4",
    "rimraf": "^3.0.2",
    "sort-package-json": "^1.49.0",
    "standard-version": "^9.2.0",
    "ts-node": "^9.1.1",
    "typescript": ">=4.0 <4.2",
    "webpack-bundle-analyzer": "^4.4.1"
  },
  "engines": {
    "node": ">=14.0.0",
    "npm": ">=6.0.0"
  }
}
```

| Sección del fichero | Descripción                                                                                                       |
|---------------------|-------------------------------------------------------------------------------------------------------------------|
| name                | Nombre del proyecto.                                                                                              |
| version             | Versión del proyecto que estamos desarrollando.                                                                   |
| scripts             | Conjunto de scripts NPM que ejecutan ciertas tareas asociadas.                                                    |
| dependencies        | Dependencias que son requeridas para la correcta ejecución de nuestra aplicación.                                 |
| devDepencies        | Dependencias que son requeridas solo en tiempo de desarrollo. No estarán incluidas dentro del distribuible final. |

## Automatismos

Dentro de la parte de automatismos, tenemos las siguientes librerías, que podemos separarlas en dos grupos:

**Linters:**

- eslint
- prettier
- sort-package-json

**Automatización:**

- husky
- lint-staged
- commitizen
- conventional-changelog
- standard-version
- commitizen-lint

Ambos grupos trabajan conjuntos, pero el primero está más focalizado en el código fuente, mientras que el segundo, está más enfocado en que los commits tengan el mismo formato para que a la hora de hacer una release, se genere correctamente el fichero `CHANGELOG.md` para llevar el registro de cambios del aplicativo.

### Linter y Verificado

Se ha procedido a cambiar la herramienta que provee Angular por defecto (TSLint), a favor de ESLint, que incorpora mejor control y guías de código para el desarrollo. Para ello, se ha cambiado *builder* de TSLint por el de ESLint, además de la generación básica de archivos de *linter* para el mismo y la eliminación de los obsoletos archivos de TSLint. Para  mejorar el formato de código se ha unido con la herramienta `prettier`. Para ello, se han instalado los `plugins` de ESLint y Prettier necesarios y su particular configuración en el archivo `.eslintrc.js`. Se ha agregado los siguientes `plugins` para su configuración:

- `@angular-eslint`
- `unicorn`
- `prettier`

Toda esta configuración puede ser modificada siempre y cuando el equipo de desarrollo así lo estime oportuno, ya que se trata de un marco básico desde el que desarrollar.

#### Lintado de código con ESLint

Primero incluya en el archivo .eslintignore los ficheros que deberán de ser obviados por eslint.
Seguidamente lance la siguiente instrucción:

```bash
npm run lint
```

#### Verificación de código con Prettier

Primero incluya en el archivo .prettierignore los ficheros que deberán de ser obviados por prettier.
Seguidamente lance la siguiente instrucción:

```bash
npm run prettier
```

### Commit and commitizen-lint

Para llevar a cabo un control  de los  commits, y que sigan el patrón recomendado para poder generar correctamente el archivo  de control de cambios, se han instalado las siguientes herramientas:

- **husky**: en su version 6, nos permite crear git hooks sencillamente, lo que nos da un plus de seguridad de que todo el código que se suba va a pasar por los mismos scripts(linter, test,...).
- **lint-staged**: nos ejecuta los linters de nuevo a los archivos que se van a subir, para realizar una nueva comprobación de que todo es correcto.
- **commitizen**: es una ayuda para asegurarnos que nuestros commits tienen el formato  correcto adoptado por la comunidad.
- **commitizen-lint**: el linter propiamente dicho de commitizen.
- **conventional-changelog**: para el etiquetado, versionado y generación del archivo `CHANGELOG.md` sea correcto.
- **standard-version**: a la hora de generar release, según se hayan ido realizando commits y su nivel, se encargará de la generación del archivo `CHANGELOG.md` y del versionado de nuestro aplicativo.

Para ejecutar todo el automatismo para los commits, se ha agregado el siguiente script en el package.json:

```bash
npm run commit
```

O, como alternativa, si se quiere ejecutar con el comando `git` se puede hacer:

```bash
git cz
```

### Bundle

Dentro de nuestra aplicación base tenemos disponibles dos modos distintos de bundle, dependientes del entorno donde se quiera ejecutar la aplicación

En caso de que se quiera generar un bundle para un entorno de desarrollo usaremos el siguiente comando

```bash
npm run build:dev
```

Si lo que queremos es generar el bundle que debería ser desplegado en producción, ejecutaremos el comando

```bash
npm run build
```

Ambos comandos nos generarán una carpeta "dist" dentro del raíz de nuestro proyecto, en la que encontraremos la aplicación preparada para desplegar en un servidor.

Nótese de que la ejecución de estos comandos generará una aplicación con las propiedades determinadas por cada entorno, es decir, si ejecutamos el script para generar la aplicación de desarrollo, usaremos el environments de desarrollo, pero si ejecutamos el script para producción, usaremos el fichero de propiedades de producción.

### Servidor de desarrollo

Dentro de la aplicación base tenemos un script que lanzará un servidor en local para usar en tiempo de desarrollo.

Para lanzar el servidor de desarrollo tenemos que ejecutar el siguiente comando, el cual nos abrirá automáticamente una pestaña dentro de nuestro navegador con nuestra aplicación ejecutándose.

```bash
ng serve -o
```

Se puede hacer con NPM de esta manera:

```bash
npm start
```

En caso de que queramos abrir la URL manualmente en otro navegador, la URL por defecto que se expone al ejecutar el servidor de desarrollo es la siguiente:

```bash
http://localhost:4200
```

### Construir documentación con Compodoc

Para construir la documentacion del proyecto, se ha instalado la herramienta [compodoc](https://compodoc.app/guides/documentation-coverage.html), la cual nos genera la documentación del proyecto basado en los comentarios tipo **jsdoc**. Para poder ver el formato soportado, se recomienda revisar el apartado [comments](https://compodoc.app/guides/comments.html) de la documentación.

Se ha creado un archivo de configuración propio de la herramienta, en `./config/compodoc/.compodocrc.json`, y el correspondiente archivo de configuración de TypeScript, `./config/compodoc/tsconfig.compodoc.json`. De forma reseñable, se ha configurado esta herramienta para que nos muestre también un reporte de la cobertura de los UnitTest generada con `JestJS`, a través de [istanbul reporter](https://github.com/istanbuljs/istanbuljs/tree/master/packages/istanbul-reports/lib), y el logo que se muestra lo captura de la ruta `./src/assets/logo-atmira.png`. En caso de eliminarse, hay que borrarlo de la configuración de compodoc.

Podemos construir documentación con Compodoc con la siguiente instrucción:

```bash
npm run compodoc
```

Y podemos ejecutar el servidor de la documentación con la siguiente instrucción:

```bash
npm run compodoc:serve
```

Que nos abrirá la documentación en el navegador que tengamos configurado como predeterminado.

> NOTA: Se ha preparado el script de compodoc para que previamente ejecute los test unitarios con el reporte de cobertura, en caso de no tener el reporte de cobertura, la generación de documentación fallará.

Para un entorno CI, se puede usar el *flag* `--coverageTest`, para que evalúe si se cumple un mínimo de cobertura del 70% en la documentación. En caso de no cumplirse, nos dará un error. Para ello, se ha habilitado la siguiente instrucción en el `package.json`

```bash
npm run ci:compodoc
```

### Bundle Analyzed

Para poder verificar cómo se está construyendo el paquete distribuido, y para buscar mejoras adicionales, se ha configurado la herramienta que nos proporciona Webpack, que  es `Webpack Bundle Analyzer`.  Esta herramienta nos proporciona una visualización amigable e interactiva del paquete distribuido que genera Angular, lo que nos ayuda a analizar y refactorizar qué módulo es candidato para la carga diferida o qué biblioteca de terceros debemos evitar usar debido a su gran tamaño.

Para ello, se han configurado los siguientes `scrips` dentro del *package.json*:

```json
{
  "analyzed": "webpack-bundle-analyzer dist/registr-poc/stats.json",
  "build:stats": "ng build --prod --stats-json",
  "bundleAnalyzed": "run-s build:stats analyzed"
}
```

### Scripts

Se han agregado los siguientes `scripts` en el `package.json` del proyecto:

- `build`: Genera el paquetizado de la aplicación en modo producción por defecto.
- `build:dev`: Genera el paquetizado de la aplicación en modo desarrollo.
- `prepublishOnly`: ejecuta previamente el script comando `npm run build:prod` cuando se llama al comando `npm publish`.
- `serve`: Usa `angular-cli` para levantar la aplicación en modo desarrollo.
- `analyze`: Levanta el proyecto de analizar el bundle.
- `build:stats`: Generación del bundle de analizado.
- `bundleAnalyzed`: Script que ejecuta los dos anteriores secuencialmente.
- `ci:xxx`: Script específico para entornos CI.
- `commit`: Lanza el comando para hacer el commit.
- `compodoc`: Genera la documentación.
- `compodoc:serve`: Genera la documentación y levanta la documentación en el navegador.
- `e2e`: Ejecuta test 2e2.
- `lint`: Ejecuta el lintado del código.
- `prettier`: Ejecuta prettier.
- `release`: Crea la release.
- `sonar`: Ejecuta el sonar sobre el código.
- `start`: Ejecuta `npm run serve` pero con el flag `open`.
- `test`: Ejecuta los Unit Test y muestra reporte.
- `test:coverage`: Ejecuta los Unit Test, muestra reporte y genera reporte de cobertura.
- `test:watch`: Ejecuta los Unit Test en modo watch y genera reporte.
- `prepare`: Comando para husky.
- `cucumber`: Ejecuta los test ATDD,
- `postinstall`: Ejecuta la el comando `npm audit fix --force` sobre las dependencias

## Testing

Dentro del proyecto base se crearán por defecto configuraciones para dos tipos de testing distintos, tendremos test tanto unitarios como end-to-end.

Los test unitarios se ejecutaran bajo JestJS y los test end-to-end serán ejecutados con protractor.

Para la ejecución de los test tenemos disponibles dos scripts distintos

Ejecución de test unitarios:

```bash
npm run test
npm run test:coverage
npm run test:watch
```

Ejecución de test end-to-end:


```bash
npm run e2e
```

Ambas ejecuciones crearán diversas carpetas al ejecutarse y ejecutar los test correctamente, y, en el caso de ProtractorJS, nos hará una captura (`screenshot`) si los test han fallado.

Los test unitarios crearán una carpeta al ejecutar el comando `npm test` llamada "report", en la cual tendremos disponibles los reportes de cobertura de nuestros test unitarios. Por defecto, cuando se terminen de ejecutar los test se abrirá un navegador y mostrará el reporte. Para quitar este comportamiento, ir al dichero `./config/test/config.js` y poner la propiedad de `openReport` a false.

Los test unitarios crearán, con el comando `npm run testing:coverage` una carpeta "coverage", en la cual tendremos disponibles los reportes de cobertura de nuestros test unitarios

Los test end-to-end crearán una carpeta "e2e_report", en la cual tendremos disponibles los informes sobre la ejecución de nuestros test end-to-end.

### UnitTest: JestJS

Se ha cambiado el runner de testing y de test unitarios (no e2e) por `Jest`. Para ello se ha configurado angular para que pueda seguir usando el comando propio de `ng test`.

Se ha establecido un mínimo de cobertura de código, en las 4 principales características de un 80%. Esto, se puede modificar según el equipo crea conveniente, y para ello, habría que modificar las siguientes propiedades del fichero `./config/test/config.js`:

```javascript
module.exports.coverageThreshold = {
  global: {
    branches: 80,
    functions: 80,
    lines: 80,
    statements: 80,
  },
};
```

#### Configuración

Para poder instalar `Jest` en Angular, primero, desinstalamos `karma` y sus `plugins`, y borramos los ficheros de configuración de `karma`.

```bash
$ npm remove karma karma-chrome-launcher karma-coverage-istanbul-reporter karma-jasmine karma-jasmine-html-reporter
  Done!
$ rm ./karma.conf.js ./src/test.ts
  Done!
```

Instalamos Jest y el builder de Jest para Angular;

```bash
$ npm i -D jest @types/jest @angular-builders/jest
  Done!
```

Actualizamos el `tsconfig.spec.json`, que se encuentra en la carpeta `config/test/tsconfig.spec.json`:

```json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    // is needed for reflection over metadata in Jest runtime
    "emitDecoratorMetadata": true,
    "outDir": "../../out-tsc/spec",
    // is necessary to avoid the following warning: If you have issues related to imports, you should consider setting `esModuleInterop` to `true` in your TypeScript configuration file (usually `tsconfig.json`).
    "esModuleInterop": true,
    "types": ["jest", "node"]
  },
  "files": ["src/polyfills.ts"],
  "include": ["src/**/*.spec.ts", "src/**/*.d.ts"]
}
```

Aunque se ejecuten las pruebas unitarias con `Jest`, `Protractor` (test e2e) todavía tiene que usar `Jasmine`. Debido a este hecho, es posible que el IDE se confunda y proponga tipos de `Jasmine` en pruebas unitarias (`Jest`). Para ello, editamos el `tsconfig.json`, que es el archivo de configuración que usa el IDE, indicando que se usen los tipos de `Jest`. Por contrapartida, es que el IDE propondrá tipos `Jest` en tus pruebas `e2e`.

```json
/* To learn more about this file see: https://angular.io/config/tsconfig. */
{
  "compileOnSave": false,
  "compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist/out-tsc",
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "sourceMap": true,
    "declaration": false,
    "downlevelIteration": true,
    "experimentalDecorators": true,
    "module": "ESNext",
    "esModuleInterop": true,
    "moduleResolution": "node",
    "importHelpers": true,
    "target": "es2015",
    "lib": ["es2018", "dom"],
    "types": ["jest"]
  },
  "angularCompilerOptions": {
    "fullTemplateTypeCheck": true,
    "strictInjectionParameters": true,
    "enableI18nLegacyMessageIdFormat": false,
    "strictInputAccessModifiers": true,
    "strictTemplates": true,
    "trace": true
  }
}
```

#### Agregar a ng-cli

Para poder usar el comando `ng test`, hay que modificar el `angular.json` de tal manera:

```json
{
  [...],
  "projects": {
    "MI_PROYECTO": {
      [...],
      "architect": {
        [...],
        "test": {
          "builder": "@angular-builders/jest:run",
          "options": {
            "configPath": "./config/test/jest.config.js",
            "tsConfig": "./config/test/tsconfig.spec.json",
            "no-cache": true,
            "verbose": true,
            "watch": false,
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.scss"
            ],
            "scripts": []
          }
        },
      [...],
    }
  }
}
```

La librería `@angular-builder/jest` usa el preset de `jest-preset-angular`, por lo que no es necesario la instalación del mismo, y ya se encuentra preconfigurada para que pueda funcionar. De todos modos, se ha agregado una pequeña configuración que se encuentra en `config/test/jest.js`.

Se ha agregado un archivo de pre-configuración (antes estaba en `./src/test.ts`) que se llama `setup-jest.ts`. En caso de que haya que extender alguna configuración específica, ya no de `Jest`, sino de pre-configuración tanto de estilos, como variables de entorno, se hará aquí.

> Árbol de directorio:

```tree
./config/test
        ├── config.js
        ├── jest.config.js
        ├── setup-jest.ts
        └── tsconfig.spec.json

0 directories, 4 files
```

En dicha configuración se encuentra la propiedad que genera los reportes. En caso de ejecutar los test y que sea satisfactoria  o errónea la ejecución, Jest nos abrirá un reporte en html, nos lo mostrará en la consola y nos mandará una notificación de escritorio. Este es un ejemplo de la salida:

![alt text][jest]

En el caso de que se quiera agregar nueva configuración al proyecto, se deberá de agregar en el fichero de configuración `jest.config.js`, en el `config.js`, o directamente en el `angular.json`.

Si hacemos  una ejecución de test en modo coverage con el script `test:coverage`, nos mostrará en consola el reporte de cobertura, y generará una carpeta de coverage en la que se encuentra el mismo reporte en diversos formatos para poder levantarlos en distintas plataformas:

![alt text][jest_coverage]

#### Solución de problemas

Los problemas más comunes de trabajar con `Jest` en Angular, están descritos [aquí](https://github.com/just-jeb/angular-builders/tree/master/packages/jest#troubleshooting)

### End2End: ProtractorJS

Para la realización de los test E2E, se ha mantenido la herramienta de ProtractorJS, pero se ha dotado a esta herramienta de una configuración específica para desarrollo y otra para entornos de `Continuous Integration`. Para la generación de reportes, se utiliza la librería de `protractor-html-reporter-2` junto con `jasmine-spec-reporter`. Para la toma de screenshots, se hace con el paquete `fs-extra`.

Dentro de la carpeta `config/e2e` encontramos la configuración para ambos entornos `protractor.conf.js` y `protractor-ci.conf.js`, el archivo de configuración específico de Typescript, `tsconfig.json` y las carpetas que contienen el `source` de los test e2e.

En la configuración local, como se realiza una actualización del WebDriver, puede que en algún momento un error de nor muestre un error de versiones

![alt text][error_chromedriver]

Para solucionarlo, podemos indicarle el binario de chrome que queremos usar, en este ejemplo, usaremos un ChromeCanary:

```js
{
binary:
      '/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary',
}
```

![alt text][protractor.config]

Para ejecutar los test e2e en local, se ha provisto, como se ha indicado anteriormente, de un script dentro del `package.json`:

```bash
npm run pree2e
npm run e2e
```

Al ejecutar el comando `npm run e2e`, directamente se ejecuta el comando previo, `pree2e` que borra la carpeta de `protractor_report` y el de actualización del webDriver necesario.

Se ha configurado la salida por consola con `jasmine-spec-reporter` para que sea lo más amigable y legible posible.

```bash
Jasmine started
[09:55:41] W/element - more than one element found for locator By(css selector, atm-root .content span) - the first result will be used

  1 base-project App
    ✗ should display welcome message (0.447 sec)
      - Expected 'registr-poc app is running!' to equal 'registr-poc app is running!'.

      /GitLab/registr-poc/e2e/src/app.e2e-spec.ts:14:39
        it('should display welcome message', async () => {
          await page.navigateTo();
          expect(await page.getTitleText()).toEqual('registr-poc app is running!');
                                            ~
        });


      internal/process/task_queues.js:93:5
      jasmine-spec-reporter: unable to open 'internal/process/task_queues.js'
      Error: ENOENT: no such file or directory, open 'internal/process/task_queues.js'
```

Ejemplo de reporte `success`

```bash
Jasmine started
[10:29:53] W/element - more than one element found for locator By(css selector, atm-root .content span) - the first result will be used

  1 base-project App
    ✓ should display welcome message (0.318 sec)

**************************************************
*                   Successes                    *
**************************************************

1) base-project App should display welcome message

Executed 1 of 1 spec SUCCESS in 0.321 sec.
```

Para la parte de CI, se ha configurado el siguiente script dentro del `package.json`:

```bash
npm run ci:e2e
```

Este script nos ejecuta la configuración específica para este entorno y se le indica que no debe actualizar el webDriver, que lo único que difiere es en el que se le agrega el flag `--headless` y se le especifica al sistema CI dónde se encuentra el `chromedriver` para Selenium .

## Versionado package.json

  | install         | Libreria                               | Version    |
  |-----------------|----------------------------------------|------------|
  | dependencies    | @angular/animations                    | ^11.2.10   |
  | dependencies    | @angular/cdk                           | ^11.2.9    |
  | dependencies    | @angular/common                        | ^11.2.10   |
  | dependencies    | @angular/compiler                      | ^11.2.10   |
  | dependencies    | @angular/compiler-cli                  | ^11.2.10   |
  | dependencies    | @angular/core                          | ^11.2.10   |
  | dependencies    | @angular/forms                         | ^11.2.10   |
  | dependencies    | @angular/material                      | ^11.2.9    |
  | dependencies    | @angular/platform-browser              | ^11.2.10   |
  | dependencies    | @angular/platform-browser-dynamic      | ^11.2.10   |
  | dependencies    | @angular/router                        | ^11.2.10   |
  | dependencies    | rxjs                                   | ^6.6.7     |
  | dependencies    | tslib                                  | ^2.2.0     |
  | dependencies    | zone.js                                | ~0.11.4    |
  | devDependencies | @angular-builders/jest                 | ^11.1.1    |
  | devDependencies | @angular-devkit/build-angular          | ^0.1102.9  |
  | devDependencies | @angular-eslint/builder                | ^2.1.0     |
  | devDependencies | @angular-eslint/eslint-plugin          | ^2.1.0     |
  | devDependencies | @angular-eslint/eslint-plugin-template | ^2.1.0     |
  | devDependencies | @angular-eslint/schematics             | ^2.1.0     |
  | devDependencies | @angular-eslint/template-parser        | ^2.1.0     |
  | devDependencies | @angular/cli                           | ^11.2.9    |
  | devDependencies | @angular/compiler-cli                  | ^11.2.10   |
  | devDependencies | @angular/language-service              | ^11.2.10   |
  | devDependencies | @commitlint/cli                        | ^12.1.1    |
  | devDependencies | @commitlint/config-conventional        | ^12.1.1    |
  | devDependencies | @compodoc/compodoc                     | ^1.1.11    |
  | devDependencies | @cucumber/cucumber                     | ^7.1.0     |
  | devDependencies | @types/chai                            | ^4.2.16    |
  | devDependencies | @types/chai-as-promised                | ^7.1.3     |
  | devDependencies | @types/eslint                          | ^7.2.10    |
  | devDependencies | @types/eslint-scope                    | ^3.7.0     |
  | devDependencies | @types/jest                            | ^26.0.22   |
  | devDependencies | @types/node                            | ^14.14.41  |
  | devDependencies | @typescript-eslint/eslint-plugin       | ^4.22.0    |
  | devDependencies | @typescript-eslint/parser              | ^4.22.0    |
  | devDependencies | chai                                   | ^4.3.4     |
  | devDependencies | chai-as-promised                       | ^7.1.1     |
  | devDependencies | cucumber-html-reporter                 | ^5.4.0     |
  | devDependencies | cz-conventional-changelog              | ^3.3.0     |
  | devDependencies | eslint                                 | ^7.24.0    |
  | devDependencies | eslint-config-prettier                 | ^8.2.0     |
  | devDependencies | eslint-plugin-import                   | ^2.22.1    |
  | devDependencies | eslint-plugin-jsdoc                    | ^32.3.0    |
  | devDependencies | eslint-plugin-prefer-arrow             | ^1.2.3     |
  | devDependencies | eslint-plugin-prettier                 | ^3.4.0     |
  | devDependencies | eslint-plugin-unicorn                  | ^29.0.0    |
  | devDependencies | husky                                  | ^6.0.0     |
  | devDependencies | jasmine-reporters                      | ^2.4.0     |
  | devDependencies | jasmine-spec-reporter                  | ^7.0.0     |
  | devDependencies | jest                                   | ^26.6.3    |
  | devDependencies | jest-html-reporters                    | ^2.1.3     |
  | devDependencies | lint-staged                            | ^10.5.4    |
  | devDependencies | npm-run-all                            | ^4.1.5     |
  | devDependencies | prettier                               | ^2.2.1     |
  | devDependencies | prettier-eslint                        | ^12.0.0    |
  | devDependencies | pretty-quick                           | ^3.1.0     |
  | devDependencies | protractor                             | ^7.0.0     |
  | devDependencies | protractor-cucumber-framework          | ^8.0.2     |
  | devDependencies | protractor-html-reporter-2             | ^1.0.4     |
  | devDependencies | rimraf                                 | ^3.0.2     |
  | devDependencies | sort-package-json                      | ^1.49.0    |
  | devDependencies | standard-version                       | ^9.2.0     |
  | devDependencies | ts-node                                | ^9.1.1     |
  | devDependencies | typescript                             | >=4.0 <4.2 |
  | devDependencies | webpack-bundle-analyzer                | ^4.4.1     |

## Angular.json

Se ha modificado el `angular.json` de la aplicación, de tal manera que queda de la siguiente manera con todos los cambios recogidos en esta guía:

```json
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "cli": {
    "analytics": false,
    "defaultCollection": "@angular-eslint/schematics",
    "packageManager": "npm"
  },
  "newProjectRoot": "projects",
  "projects": {
    "registr-poc": {
      "projectType": "application",
      "schematics": {
        "@schematics/angular:component": {
          "style": "scss"
        },
        "@schematics/angular:application": {
          "strict": true
        }
      },
      "root": "",
      "sourceRoot": "src",
      "prefix": "atm",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist/registr-poc",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "tsconfig.app.json",
            "aot": true,
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "./node_modules/@angular/material/prebuilt-themes/pink-bluegrey.css",
              "src/styles.scss"
            ],
            "scripts": []
          },
          "configurations": {
            "production": {
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.production.ts"
                }
              ],
              "optimization": true,
              "outputHashing": "all",
              "sourceMap": true,
              "namedChunks": false,
              "aot": true,
              "extractLicenses": true,
              "vendorChunk": false,
              "buildOptimizer": true,
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kb",
                  "maximumError": "1mb"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "2kb",
                  "maximumError": "4kb"
                }
              ]
            }
          }
        },
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "options": {
            "browserTarget": "registr-poc:build",
            "port": 4200
          },
          "configurations": {
            "production": {
              "browserTarget": "registr-poc:build:production"
            }
          }
        },
        "extract-i18n": {
          "builder": "@angular-devkit/build-angular:extract-i18n",
          "options": {
            "browserTarget": "registr-poc:build"
          }
        },
        "test": {
          "builder": "@angular-builders/jest:run",
          "options": {
            "configPath": "./config/test/jest.config.js",
            "tsConfig": "./config/test/tsconfig.spec.json",
            "no-cache": true,
            "verbose": true,
            "watch": false,
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.scss"
            ],
            "scripts": []
          }
        },
        "lint": {
          "builder": "@angular-eslint/builder:lint",
          "options": {
            "lintFilePatterns": [
              "src/**/*.ts",
              "src/**/*.html"
            ],
            "eslintConfig": ".eslintrc.js",
            "fix": true
          }
        },
        "e2e": {
          "builder": "@angular-devkit/build-angular:protractor",
          "options": {
            "protractorConfig": "config/e2e/protractor.conf.js",
            "devServerTarget": "registr-poc:serve"
          },
          "configurations": {
            "production": {
              "devServerTarget": "registr-poc:serve:production"
            }
          }
        }
      }
    }
  },
  "defaultProject": "registr-poc"
}
```

## Pruebas DoD

El proyecto ha pasado unas pruebas DoD, la siguiente tabla las resume:

| Prueba/script          | Action                                                             | APTO |
|------------------------|--------------------------------------------------------------------|------|
| npm run install        | Se instala correctamente                                           | OK   |
| npm run audit          | Lanza el auditor de dependencias                                   | OK   |
| npm run serve          | El proyecto se lanza                                               | OK   |
| npm run start          | El proyecto se lanza y se abre en el navegador                     | OK   |
| npm run build:dev      | El proyecto compila para desarrollo                                | OK   |
| npm run build          | El proyecto compila para producción                                | OK   |
| npm run test           | Pasa los test                                                      | OK   |
| npm run test           | Crea reporte con jest                                              | OK   |
| npm run test:coverage  | Crea carpeta coverage con jest                                     | OK   |
| npm run test:watch     | Ejecuta test en modo watch                                         | OK   |
| npm run commit         | Lanza los automatismos para el commit                              | OK   |
| npm run precommit      | Lanza comandos previos al commit                                   | OK   |
| npm run lint           | Pasa los linters y hace un fix                                     | OK   |
| npm run compodoc       | Crea documentacion con compodoc                                    | OK   |
| npm run prettier       | Pasa el lintado de prettier                                        | OK   |
| npm run release        | Crea release                                                       |      |
| npm run bundleAnalyzed | Genera y muestra un análisis del bundle                            | OK   |
| npm run e2e            | Lanza pruebas e2e con protractor                                   | OK   |
| npm run e2e            | Crea reporte con protractor                                        | OK   |
| npm run e2e            | Cuando hay un error, genera un reporte con screenshot              | OK   |
| npm run cucumber       | Lanza pruebas de aceptación con cucumber                           | OK   |
| npm run cucumber       | Crea un reporte en formato html y json                             | OK   |
| npm run ci:e2e         | Lanza pruebas e2e para un entorno CI                               | OK   |
| npm run ci:cucumber    | Lanza pruebas de aceptación para un entorno CI                     | OK   |
| npm run ci:test        | Lanza test unitarios para un entorno CI                            | OK   |
| npm run ci:compodoc    | Lanza generación de documentación con cobertura para un entorno CI | OK   |

------

[protractor.config]: ./docs/protractor.config.png "configuración de protractor"
[error_chromedriver]: ./docs/error_chromedriver.png "error de chromedriver consola"
[jest]: ./docs/jest.png "reporte de jest"
[jest_coverage]: ./docs/jest_coverage.png "reporte de coverage de jest"
