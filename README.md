# webpack-typescript-service-boilerplate
## Description
Boilerplate to kickstart development of a node service using Webpack and TypeScript.
## How To
### Get Started
1. `git clone` this repository.
   * Delete the resulting <kbd>.git</kbd> folder and run `git init` to start with a fresh commit history.
2. Delete the contents of <kbd>CHANGELOG.md</kbd> and <kbd>README.md</kbd>.
3. Update the fields in <kbd>package.json</kbd> with the relevant information (e.g. `name`, `description`, `version`, `license`).
4. Update the `title` option for `HtmlWebpackPlugin` in <kbd>webpack.config.js</kbd> to be used in the generated <kbd>dist/index.html</kbd> file.
6. Add your code to the <kbd>server</kbd> folder.
### Install & Build
* Install dependencies using `yarn` (recommended) or `npm install`.
* Run webpack using `yarn run build` or `npm run build` from the command line.
  * This will output bundles to the <kbd>dist</kbd> folder.
### Serve Using Express
* Optionally set the `PORT` environment variable if you don't want to use the default port number `3000`.
* Run `yarn start` or `npm start` from the command line.
### Enable Source Maps
* Set the `NODE_ENV` environment variable to `development` and rebuild.
### Disable `auto-changelog`
* Upon running `yarn version` or `node version`, the [auto-changelog](https://github.com/CookPete/auto-changelog) tool automatically updates <kbd>CHANGELOG.md</kbd> based on git tags and commit history. It requires the usage of [semver](https://semver.org/) version numbering. To disable this feature, remove the `version` script from <kbd>package.json</kbd> and optionally remove the node module itself as well.
### Add Type Definitions
* Run `yarn add @types/<dependency_name> --dev` or `npm install @types/<dependency_name> --save-dev` from the command line.
