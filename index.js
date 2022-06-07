const { gitmojis } = require('gitmojis');
const allGitmojiCodes = gitmojis.map(gitmoji => gitmoji.code);

module.exports = {
    parserPreset: {
        parserOpts: {
            headerPattern: /^(:\w*:) (?:\((.*)\) )?(.*)$/,
            headerCorrespondence: ["type", "scope", "subject"]
        }
    },
    rules: {
        // subject 前面不要有 :
        'subject-exclamation-mark': [2, 'never'],
        // body 以空行开始
        'body-leading-blank': [2, 'always'],
        // 结尾以空行开始
        'footer-leading-blank': [2, 'always'],
        // 标题最大长度 72 个字符
        'header-max-length': [2, 'always', 72],
        // scope 单词格式 永远使用小写
        'scope-case': [2, 'always', 'lower-case'],
        // subject 单词格式
        'subject-case': [
            2,
            'never',
            ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
        ],
        // subject 不允许为空
        'subject-empty': [2, 'never'],
        // subject 不要以 . 结尾
        'subject-full-stop': [2, 'never', '.'],
        // type 单词格式 永远使用小写
        'type-case': [2, 'always', 'lower-case'],
        // type 不能为空
        'type-empty': [2, 'never'],
        // type 的枚举范围：即支持的 gitmoji 列表
        'type-enum': [2, 'always', allGitmojiCodes],
    },
};
