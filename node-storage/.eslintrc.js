module.exports = {
    "env": {
        "node": true,
        "browser": true,
        "mocha": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [ "error", 4 ],
        "linebreak-style": [ "error", "unix" ],
        "quotes": [ "error", "double" ],
        "semi": [ "error", "always" ],
        "no-console": "off"
    },
    "globals": {
        "describe": true
    }
};
