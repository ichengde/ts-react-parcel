# Typescript + React + Parcel scaffold

Buildling react application in Typescript.

The original source code of the provided example is [here](https://github.com/kentcdodds/advanced-react-patterns/blob/master/14-use-control-props/index.html).

## Built in settings

* React + ReactDOM (16.3.2)
* Typescript (with TSLint setting)
* Prettier + tslint-config-prettier
* Test configuration using Jest + Enzyme
* Parcel bundler -- 1.7.1

## Install

```
git clone git@github.com:ichengde/ts-react-parcel.git
cd ts-react-parcel
npm install

# or
yarn install (recommended)
```

## Develop

    npm run develop
    yarn develop

## Build

    npm run build
    yarn build


```
parcel build ./src/index.html -d YOUR_OUTPUT_DIR --public-url '/'  // change dist-dir
```

## TEST

    npm run test        # run test once
    npm run test:watch  # watch mode

    yarn test
    yarn test:watch

You have to create `__tests__` directory at the same location of files which you want to test.
Test file's name should be `SOURCE.test.ts/tsx/js` or `SOURCE.spec.ts/tsx/js`.
