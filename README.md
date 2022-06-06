
## Getting started

```sh
# For Windows:
npm install --save-dev @ballcat/commitlint-config-gitmoji @commitlint/cli

# Configure commitlint to use conventional config
echo "module.exports = {extends: ['./node_modules/@ballcat/commitlint-config-gitmoji']}" > commitlint.config.js
```

To lint commits before they are created you can use Husky's `commit-msg` hook:

**install husky v8**
```sh
npx husky-init && npm install       # npm
npx husky-init && yarn              # Yarn 1
yarn dlx husky-init --yarn2 && yarn # Yarn 2+
pnpm dlx husky-init && pnpm install # pnpm
```

**add hook**
```npm
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```
