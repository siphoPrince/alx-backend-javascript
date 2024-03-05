module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true // Add Node.js environment
    },
    "extends": "airbnb-base",
    "parserOptions": {
        "ecmaVersion": 2021, // Specify ECMAScript version
        "sourceType": "module"
    },
    "rules": {},
    "overrides": [
        {
            "files": ["**/*.js"], // Adjust file pattern if necessary
            "excludedFiles": ["node_modules/*"], // Exclude node_modules if needed
            "rules": {
                // Add specific rules for Node.js files if necessary
            }
        }
    ]
}

