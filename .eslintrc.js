module.exports = {
    parser: 'babel-eslint',
    env: {
        es6: true,
        node: true,
        mocha: true,
    },
    extends: ['airbnb-base'],
    rules: {
        'object-curly-spacing': [
            'error',
            'never',
        ],
        indent: [
            'error',
            4,
            {SwitchCase: 1},
        ],
        'max-len': [
            'error',
            {
                code: 120,
                comments: 120,
                ignoreComments: true,
                ignoreTrailingComments: true,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true,
            },
        ],
        'arrow-parens': [
            'error',
            'as-needed',
            {requireForBlockBody: false},
        ],
        'import/prefer-default-export': 'warn',
    },
    overrides: {
        files: ['*.test.js'],
        rules: {
            // because of babel-plugin-rewire
            'import/named': 'off',
            'no-underscore-dangle': [
                'error',
                {
                    allow: ['__Rewire__', '__ResetDependency__'],
                },
            ],
        },
    },
};
