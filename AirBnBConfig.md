# Configuracion para AirBnB en React

## Dependencias NPM

Instalar dependencias prettier y eslint

```
npm i --save-dev eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-node eslint-config-node
```

Instalar configuracion de airbnb

```
npx install-peerdeps --dev eslint-config-airbnb
```

## Crear archivo de configuracion

### Prettier

Al mismo nivel que el package.json crear el archivo: .prettierrc

```json
{
  "singleQuote": true
}
```

Aqui van reglas.

### Eslint

Instalamos

```
npm i -g eslint
```

Inicializamos archivo

```
npm init @eslint/config
```
