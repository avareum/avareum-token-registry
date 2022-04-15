module.exports = {
    overrides: [
        {
            files: ['*.ts', '*.js', '*.json'],
            options: {
                trailingComma: 'es5',
                tabWidth: 4,
                semi: false,
                singleQuote: true,
                printWidth: 100,
            },
        },
    ],
}
