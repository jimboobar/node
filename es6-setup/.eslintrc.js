module.exports = {
    "parser": "babel-eslint",
    "rules": {
        "strict": 0
    },
    "env": {
        "node": true,
        "browser": true,
        "mocha": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [ "error", 4 ],
        "linebreak-style": [ "error", "unix" ],
        "semi": [ "error", "always" ],
        "no-console": "off"
    },
    "globals": {
        "describe": true
    }
};
