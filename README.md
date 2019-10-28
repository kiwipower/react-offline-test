# React Offline Test

## Packages installed

```sh
- npm i @types/react -D
- npm i @types/react-dom -D
- npm i css-loader -D
- npm i ts-loader -D
- npm i file-loader -D
- npm i date-fns
- npm i enzyme enzyme-adapter-react-16 react-test-renderer enzyme-to-json -D
- npm i @types/enzyme -D
```

## Webpack config changes

- adding .ts to webpack.config.js for transpilation. There was no config for ts(x) files

## e2e Integration Tests

For e2e test, cypress has been configured. To run the integration test:

```sh
npm run e2e
```

## unit tests

Jest and enzyme have been used for unit test purpose. For start test in watch mode

```
npm run test:watch
```

