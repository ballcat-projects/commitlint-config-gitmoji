# @ballcat/commit-config-gitmoji
English | [中文](./README_zh-cn.md)

Shareable `commitlint` config enforcing [gitmoji](https://github.com/carloscuesta/gitmoji).  
Use with [@commitlint/cli](https://npm.im/@commitlint/cli) and [@commitlint/prompt-cli](https://npm.im/@commitlint/prompt-cli).

## Getting started

**install commitlint and commit-config-gitmoji**
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

## Commit Message Format
```
<type> [scope] <subject>

[body]

[footer]
```
- `type`(required): An emoji from the list.
- `scope`(optional): A string wrapped in parentheses that adds contextual information for the scope of the change.
- `subject`(required): A brief explanation of the change.
- `body`(required): Detailed description of the change.
- `footer`(required): Links and operation issues or PR, eg.**Closes #392**


## Rules

### Problems

The following rules are considered problems for `@ballcat/commit-config-gitmoji` and will yield a non-zero exit code when not met.

Consult [docs/rules](https://conventional-changelog.github.io/commitlint/#/reference-rules) for a list of available rules.

#### type-enum

- **condition**: `type` is found in value
- **rule**: `always`
- **level**: `error`
- **value**: emoji code list, see <a herf="#gitmoji-list">gitmoji list</a>


```sh
echo ":no: some message" # fails
echo ":bug: some message" # passes
```

#### type-case

- **description**: `type` is in case `value`
- **rule**: `always`
- **level**: `error`
- **value**
  ```
  'lowerCase'
  ```

```sh
echo ":BUG: some message" # fails
echo ":bug: some message" # passes
```

#### type-empty

- **condition**: `type` is empty
- **rule**: `never`
- **level**: `error`

```sh
echo "some message" # fails
echo ":bug: some message" # passes
```

#### subject-case

- **condition**: `subject` is in one of the cases `['sentence-case', 'start-case', 'pascal-case', 'upper-case']`
- **rule**: `always`
- **level**: `error`

```sh
echo ":bug: Some message" # fails
echo ":bug: Some Message" # fails
echo ":bug: SomeMessage" # fails
echo ":bug: SOMEMESSAGE" # fails
echo ":bug: some message" # passes
echo ":bug: some Message" # passes
```

#### subject-empty

- **condition**: `subject` is empty
- **rule**: `never`
- **level**: `error`

```sh
echo ":bug:" # fails
echo ":bug: some message" # passes
```

#### subject-full-stop

- **condition**: `subject` ends with `value`
- **rule**: `never`
- **level**: `error`
- **value**

```
'.'
```

```sh
echo ":bug: some message." # fails
echo ":bug: some message" # passes
```

#### header-max-length

- **condition**: `header` has `value` or less characters
- **rule**: `always`
- **level**: `error`
- **value**

```
72
```

```sh
echo ":bug: some message that is way too long and breaks the line max-length by several characters" # fails
echo ":bug: some message" # passes
```

#### footer-leading-blank

- **condition**: `footer` should have a leading blank line
- **rule**: `always`
- level: `error`

```sh
echo ":bug: some message
BREAKING CHANGE: It will be significant" # error

echo ":bug: some message

BREAKING CHANGE: It will be significant" # passes
```

#### body-leading-blank

- **condition**: `body` should have a leading blank line
- **rule**: `always`
- level: `error`

```sh
echo ":bug: some message
body" # error

echo ":bug: some message

body" # passes
```

## <div id="gitmoji-list">Gitmoji List</div>
> see [gitmojis.json](https://github.com/carloscuesta/gitmoji/blob/master/src/data/gitmojis.json) or [gitmoji.dev](https://gitmoji.dev/)

| Emoji | Emoji code                    | Description                                                  |
| ----- | ----------------------------- | ------------------------------------------------------------ |
| 🎨     | `:art:`                       | Improve structure / format of the code.                      |
| ⚡️     | `:zap:`                       | Improve performance.                                         |
| 🔥     | `:fire:`                      | Remove code or files.                                        |
| 🐛     | `:bug:`                       | Fix a bug.                                                   |
| 🚑     | `:ambulance:`                 | Critical hotfix.                                             |
| ✨     | `:sparkles:`                  | Introduce new features.                                      |
| 📝     | `:memo:`                      | Add or update documentation.                                 |
| 🚀     | `:rocket:`                    | Deploy stuff.                                                |
| 💄     | `:lipstick:`                  | Add or update the UI and style files.                        |
| 🎉     | `:tada:`                      | Begin a project.                                             |
| ✅     | `:white_check_mark:`          | Add, update, or pass tests.                                  |
| 🔒     | `:lock:`                      | Fix security issues.                                         |
| 🔐     | `:closed_lock_with_key:`      | Add or update secrets.                                       |
| 🔖     | `:bookmark:`                  | Release / Version tags.                                      |
| 🚨     | `:rotating_light:`            | Fix compiler / linter warnings.                              |
| 🚧     | `:construction:`              | Work in progress.                                            |
| 💚     | `:green_heart:`               | Fix CI Build.                                                |
| ⬇️     | `:arrow_down:`                | Downgrade dependencies.                                      |
| ⬆️     | `:arrow_up:`                  | Upgrade dependencies.                                        |
| 📌     | `:pushpin:`                   | Pin dependencies to specific versions.                       |
| 👷     | `:construction_worker:`       | Add or update CI build system.                               |
| 📈     | `:chart_with_upwards_trend:`  | Add or update analytics or track code.                       |
| ♻️     | `:recycle:`                   | Refactor code.                                               |
| ➕     | `:heavy_plus_sign:`           | Add a dependency.                                            |
| ➖     | `:heavy_minus_sign:`          | Remove a dependency.                                         |
| 🔧     | `:wrench:`                    | Add or update configuration files.                           |
| 🔨     | `:hammer:`                    | Add or update development scripts.                           |
| 🌐     | `:globe_with_meridians:`      | Internationalization and localization.                       |
| ✏️     | `:pencil2:`                   | Fix typos.                                                   |
| 💩     | `:poop:`                      | Write bad code that needs to be improved.                    |
| ⏪️     | `:rewind:`                    | Revert changes.                                              |
| 🔀     | `:twisted_rightwards_arrows:` | Merge branches.                                              |
| 📦️     | `:package:`                   | Add or update compiled files or packages.                    |
| 👽️     | `:alien:`                     | Update code due to external API changes.                     |
| 🚚     | `:truck:`                     | Move or rename resources (e.g.: files, paths, routes).       |
| 📄     | `:page_facing_up:`            | Add or update license.                                       |
| 💥     | `:boom:`                      | Introduce breaking changes.                                  |
| 🍱     | `:bento:`                     | Add or update assets.                                        |
| ♿️     | `:wheelchair:`                | Improve accessibility.                                       |
| 💡     | `:bulb:`                      | Add or update comments in source code.                       |
| 🍻     | `:beers:`                     | Write code drunkenly.                                        |
| 💬     | `:speech_balloon:`            | Add or update text and literals.                             |
| 🗃️     | `:card_file_box:`             | Perform database related changes.                            |
| 🔊     | `:loud_sound:`                | Add or update logs.                                          |
| 🔇     | `:mute:`                      | Remove logs.                                                 |
| 👥     | `:busts_in_silhouette:`       | Add or update contributor(s).                                |
| 🚸     | `:children_crossing:`         | Improve user experience / usability.                         |
| 🏗️     | `:building_construction:`     | Make architectural changes.                                  |
| 📱     | `:iphone:`                    | Work on responsive design.                                   |
| 🤡     | `:clown_face:`                | Mock things.                                                 |
| 🥚     | `:egg:`                       | Add or update an easter egg.                                 |
| 🙈     | `:see_no_evil:`               | Add or update a .gitignore file.                             |
| 📸     | `:camera_flash:`              | Add or update snapshots.                                     |
| ⚗️     | `:alembic:`                   | Perform experiments.                                         |
| 🔍️     | `:mag:`                       | Improve SEO.                                                 |
| 🏷️     | `:label:`                     | Add or update types.                                         |
| 🌱     | `:seedling:`                  | Add or update seed files.                                    |
| 🚩     | `:triangular_flag_on_post:`   | Add, update, or remove feature flags.                        |
| 🥅     | `:goal_net:`                  | Catch errors.                                                |
| 💫     | `:dizzy:`                     | Add or update animations and transitions.                    |
| 🗑️     | `:wastebasket:`               | Deprecate code that needs to be cleaned up.                  |
| 🛂     | `:passport_control:`          | Work on code related to authorization, roles and permissions. |
| 🩹     | `:adhesive_bandage:`          | Simple fix for a non-critical issue.                         |
| 🧐     | `:monocle_face:`              | Data exploration/inspection.                                 |
| ⚰️     | `:coffin:`                    | Remove dead code.                                            |
| 🧪     | `:test_tube:`                 | Add a failing test.                                          |
| 👔     | `:necktie:`                   | Add or update business logic                                 |
| 🩺     | `:stethoscope:`               | Add or update healthcheck.                                   |
| 🧱     | `:bricks:`                    | Infrastructure related changes.                              |
| 🧑‍💻    | `:technologist:`              | Improve developer experience                                 |

