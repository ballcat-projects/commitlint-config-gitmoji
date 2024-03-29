# @ballcat/commit-config-gitmoji
[English](./README.md) | 中文

可共享的 `commitlint` 配置，强制使用 [gitmoji](https://github.com/carloscuesta/gitmoji).  
需要和 [@commitlint/cli](https://npm.im/@commitlint/cli) 或 [@commitlint/prompt-cli](https://npm.im/@commitlint/prompt-cli) 搭配使用.

## 开始使用

**安装 commitlint 和 commit-config-gitmoji**
```sh
# For Windows:
npm install --save-dev @ballcat/commitlint-config-gitmoji @commitlint/cli

# Configure commitlint to use conventional config
echo "module.exports = {extends: ['./node_modules/@ballcat/commitlint-config-gitmoji']}" > commitlint.config.js
```

To lint commits before they are created you can use Husky's `commit-msg` hook:

**安装 husky v8**
```sh
npx husky-init && npm install       # npm
npx husky-init && yarn              # Yarn 1
yarn dlx husky-init --yarn2 && yarn # Yarn 2+
pnpm dlx husky-init && pnpm install # pnpm
```

**添加 hook**
```npm
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```

## 提交消息的格式
```
<type> [scope] <subject>

[body]

[footer]
```
- `type`(必须): 规定列表中的一个 Emoji Code
- `scope`(可选): 使用英文括号包裹，用来描述当前更改范围
- `subject`(必须): 更改的简要说明
- `body`(可选): 更改的动机，详细描述等
- `footer`(可选): 链接或者操作 issues 或 PR, 例如：**Closes #392**


## Rules

### Problems

以下 rules 被视为 `@ballcat/commit-config-gitmoji` 的问题，如果不满足，将产生非零退出代码。

更多可用的 rules，请参阅 [docs/rules](https://conventional-changelog.github.io/commitlint/#/reference-rules).

#### type-enum

- **condition**: `type` 存在于 value 中
- **rule**: `always`
- **level**: `error`
- **value**: emoji code 列表，参看 <a herf="#gitmoji-list">gitmoji list</a>


```sh
echo ":no: some message" # fails
echo ":bug: some message" # passes
```

#### type-case

- **description**: `type` 必须符合 `value` 指定的大小写规范
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

- **condition**: `type` 为空
- **rule**: `never`
- **level**: `error`

```sh
echo "some message" # fails
echo ":bug: some message" # passes
```

#### subject-case

- **condition**: `subject` 符合其中的一种格式： `['sentence-case', 'start-case', 'pascal-case', 'upper-case']`
- **rule**: `never`
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

- **condition**: `subject` 为空
- **rule**: `never`
- **level**: `error`

```sh
echo ":bug:" # fails
echo ":bug: some message" # passes
```

#### subject-full-stop

- **condition**: `subject` 以 `value` 指定的值结尾
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

- **condition**: `header` 的字符数小于等于 `value` 指定的值
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

- **condition**: `footer` 需要有一个空行在文本之前
- **rule**: `always`
- level: `error`

```sh
echo ":bug: some message
BREAKING CHANGE: It will be significant" # error

echo ":bug: some message

BREAKING CHANGE: It will be significant" # passes
```

#### body-leading-blank

- **condition**: `body` 需要有一个空行在文本之前
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


| Emoji | Emoji 代码                    | 描述                                       |
| ----- | ----------------------------- | ------------------------------------------ |
| 🎨     | `:art:`                       | 改进代码结构/代码格式                      |
| ⚡️     | `:zap:`                       | 提升性能                                   |
| 🔥     | `:fire:`                      | 移除代码或文件                             |
| 🐛     | `:bug:`                       | 修复 bug                                   |
| 🚑     | `:ambulance:`                 | 重要的补丁/修复                            |
| ✨     | `:sparkles:`                  | 引入新功能                                 |
| 📝     | `:memo:`                      | 添加或更新文档                             |
| 🚀     | `:rocket:`                    | 部署功能                                   |
| 💄     | `:lipstick:`                  | 更新 UI 和样式文件                         |
| 🎉     | `:tada:`                      | 初次提交/开始一个项目                      |
| ✅     | `:white_check_mark:`          | 添加、更新或通过测试                       |
| 🔒     | `:lock:`                      | 修复安全问题                               |
| 🔐     | `:closed_lock_with_key:`      | 添加或更新密钥                             |
| 🔖     | `:bookmark:`                  | 发行/版本标签                              |
| 🚨     | `:rotating_light:`            | 修正编译器/ linter警告                     |
| 🚧     | `:construction:`              | 工作进行中                                 |
| 💚     | `:green_heart:`               | 修复 CI 构建问题                           |
| ⬇️     | `:arrow_down:`                | 降级依赖                                   |
| ⬆️     | `:arrow_up:`                  | 升级依赖                                   |
| 📌     | `:pushpin:`                   | 将依赖关系固定到特定版本                   |
| 👷     | `:construction_worker:`       | 添加 或更新 CI 构建系统                    |
| 📈     | `:chart_with_upwards_trend:`  | 添加分析或跟踪代码                         |
| ♻️     | `:recycle:`                   | 重构代码                                   |
| ➕     | `:heavy_plus_sign:`           | 增加一个依赖                               |
| ➖     | `:heavy_minus_sign:`          | 减少一个依赖                               |
| 🔧     | `:wrench:`                    | 添加或修改配置文件                         |
| 🔨     | `:hammer:`                    | 添加或更新开发脚本                         |
| 🌐     | `:globe_with_meridians:`      | 国际化与本地化                             |
| ✏️     | `:pencil2:`                   | 修复拼写错误                               |
| 💩     | `:poop:`                      | 编写需要改进的糟糕代码                     |
| ⏪️     | `:rewind:`                    | 还原更改                                   |
| 🔀     | `:twisted_rightwards_arrows:` | 合并分支                                   |
| 📦️     | `:package:`                   | 添加或更新已编译的文件或包                 |
| 👽️     | `:alien:`                     | 由于外部 API 的更改而更新了代码            |
| 🚚     | `:truck:`                     | 移动或重命名资源（例如：文件，路径，路由） |
| 📄     | `:page_facing_up:`            | 添加或更新许可证                           |
| 💥     | `:boom:`                      | 介绍重大更改                               |
| 🍱     | `:bento:`                     | 添加或更新静态资源                         |
| ♿️     | `:wheelchair:`                | 改善可访问性                               |
| 💡     | `:bulb:`                      | 在源代码中添加或更新注释                   |
| 🍻     | `:beers:`                     | 醉酒地编写代码                             |
| 💬     | `:speech_balloon:`            | 添加或更新文本和文字                       |
| 🗃️     | `:card_file_box:`             | 执行与数据库相关的更改                     |
| 🔊     | `:loud_sound:`                | 添加或更新日志                             |
| 🔇     | `:mute:`                      | 删除日志                                   |
| 👥     | `:busts_in_silhouette:`       | 添加或更新贡献者                           |
| 🚸     | `:children_crossing:`         | 改善用户体验/可用性                        |
| 🏗️     | `:building_construction:`     | 进行体系结构更改                           |
| 📱     | `:iphone:`                    | 进行响应式设计                             |
| 🤡     | `:clown_face:`                | Mock 相关                                  |
| 🥚     | `:egg:`                       | 添加或更新复活节彩蛋                       |
| 🙈     | `:see_no_evil:`               | 添加或更新.gitignore文件                   |
| 📸     | `:camera_flash:`              | 添加或更新快照                             |
| ⚗️     | `:alembic:`                   | 进行实验                                   |
| 🔍️     | `:mag:`                       | 改善SEO                                    |
| 🏷️     | `:label:`                     | 添加或更新类型                             |
| 🌱     | `:seedling:`                  | 添加或更新种子文件                         |
| 🚩     | `:triangular_flag_on_post:`   | 添加，更新或删除功能标志                   |
| 🥅     | `:goal_net:`                  | 捕获错误                                   |
| 💫     | `:dizzy:`                     | 添加或更新动画和过渡                       |
| 🗑️     | `:wastebasket:`               | 弃用需要清除的代码                         |
| 🛂     | `:passport_control:`          | 处理与授权，角色和权限相关的代码           |
| 🩹     | `:adhesive_bandage:`          | 对非关键问题的简单修复                     |
| 🧐     | `:monocle_face:`              | 数据探索/检查                              |
| ⚰️     | `:coffin:`                    | 删除无效代码                               |
| 🧪     | `:test_tube:`                 | 添加失败的测试                             |
| 👔     | `:necktie:`                   | 添加或更新业务逻辑                         |
| 🩺     | `:stethoscope:`               | 添加或更新健康检查                         |
| 🧱     | `:bricks:`                    | 基础设施相关的变化                         |
| 🧑‍💻    | `:technologist:`              | 提升开发者体验                             |
| 💸     | `:money_with_wings:`          | 添加赞助或者与金钱相关的信息               |
| 🧵     | `:thread:`                    | 添加或更新与多线程或并发相关的代码         |
