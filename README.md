# upkaran-finance mono repo

Gasless Asset Management Dapp

## Project Structure

This project is a monorepo created with [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/).

[comment]: # 'git ls-tree -r --name-only HEAD | tree --fromfile'

```
upkaran-finance
├── .gitignore
├── .prettierrc.json
├── README.md
├── package.json
├── packages
│   ├── contracts
│   │   ├── contracts
│   │   │   └── Greeter.sol
│   │   ├── hardhat-env.d.ts
│   │   ├── hardhat.config.ts
│   │   ├── package.json
│   │   ├── scripts
│   │   │   └── deploy.ts
│   │   ├── test
│   │   │   └── sample-test.js
│   │   ├── tsconfig.json
│   │   └── yarn-error.log
│   └── dapp
│       ├── README.md
│       ├── develop.log
│       ├── package.json
│       ├── public
│       │   ├── android-chrome-192x192.png
│       │   ├── apple-touch-icon.png
│       │   ├── browserconfig.xml
│       │   ├── favicon-16x16.png
│       │   ├── favicon-32x32.png
│       │   ├── favicon.ico
│       │   ├── index.html
│       │   ├── manifest.json
│       │   ├── mstile-150x150.png
│       │   ├── robots.txt
│       │   └── safari-pinned-tab.svg
│       ├── src
│       │   ├── App.tsx
│       │   ├── Routes.tsx
│       │   ├── components
│       │   │   ├── ErrorBoundary.tsx
│       │   │   ├── Header.tsx
│       │   │   ├── Layout.tsx
│       │   │   ├── Link.tsx
│       │   │   ├── NavBar.tsx
│       │   │   └── develop.log
│       │   ├── config.ts
│       │   ├── contexts
│       │   │   └── Web3Context.tsx
│       │   ├── index.tsx
│       │   ├── pages
│       │   │   └── home.tsx
│       │   ├── react-app-env.d.ts
│       │   ├── theme.ts
│       │   └── utils
│       │       ├── 3box.ts
│       │       ├── constants.ts
│       │       └── helpers.ts
│       └── tsconfig.json
├── tsconfig.base.json
├── tsconfig.json
└── yarn.lock
```

Owing to this dependency on Yarn Workspaces, upkaran-finance can't be used with npm.

## Available Scripts

In the project directory, you can run:

### React App

#### `yarn dapp:start`

Runs the React app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

#### `yarn dapp:test`

Runs the React test watcher in an interactive mode.<br>
By default, runs tests related to files changed since the last commit.

#### `yarn dapp:build`

Builds the React app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### Contracts

#### `yarn contracts:build`

Compiles the smart contracts for deployment.

#### `yarn contracts:deploy-<network>`

Deploys the smart contracts for particular network.<br/>
