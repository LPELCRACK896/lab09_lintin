# Juego de memoria con react
## Start project
Instalar dependencias
```
npm i
```
Correr proyecto con localhost: 

```
npm start
```
## Create a react project from scratch
### NPM
1. Inicializar pckg json
```
npm init -y
```
### Babel
2. Instalar babel
```
npm i --save-dev @babel/core @babel/preset-env @babel/preset-react
```
3. Crear archivo babel.config.js
Dentro del mismo crear constante con las configuraciones de babel añadidas: 
const presets = ["@babel/preset-env", "@babel/preset-react"]
module.exports = {presets}

Y exportar el modulo
### Webpack
4. Instalar webpack
```
npm i --save-dev webpack wepack-cli
npm i --save-dev html-webpack-plugin babel-loader css-loader
npm i --save-dev webpack-dev-server
npm i --save-dev mini-css-extract-plugin
```
5. Crear archivo webepack.config.js
Utilizar el de este proyecto como base. 

### NPM
6. Instalar dependencia DOM react
```
npm i react react-dom
```
7. Añadir scripts start en pckg json
"start": "webpack"