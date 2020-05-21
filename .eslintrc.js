module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": [
        "standard"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
         //Definindo tudo que o prettier achar seja declarado como error
        "prettier/prettier":"error",
        //Fazendo com que não seja obrigado a utilização do this
        "class-methods-use-this": "off",
        //Permite que eu recebe um parametro e faça alterações nele
        "no-param-ressingn": "off",
        //Desabilitando a obrigatoriedade de todas as vars em cammelCase
        "camelcase": "off",
        //Desabilitando aviso de erro para variáveis inutilizadas
        "no-unused-vars": ["error", {"argsIgnorePattern": "next"}],
    }
};
