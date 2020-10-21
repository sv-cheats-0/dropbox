module.exports = {
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json",
  },
  "env": {
    "browser": true,
    "jest/globals": true
  },
  "plugins": [
    "@typescript-eslint",
    "prefer-arrow",
    "react",
    "react-hooks",
    "import",
    "jest"
  ],
  "extends": [
    "airbnb",
    "plugin:import/react",
    "plugin:@typescript-eslint/recommended"
  ],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx", ".d.ts"]
      }
    }
  },
  "rules": {
    "import/named": "off",
    "import/export": "off",
    "import/prefer-default-export": "off",
    "import/extensions": [
      1,
      "always",
      {
        "js": "never",
        ".js": "never",
        "jsx": "never",
        ".jsx": "never",
        "json": "never",
        ".json": "never",
        "ts": "never",
        ".ts": "never",
        "tsx": "never",
        ".tsx": "never",
        "d.ts": "never",
        ".d.ts": "never"
      }
    ],
    "import/no-unresolved": [
      2,
      {
        "commonjs": true,
        "amd": false,
        "caseSensitive": true
      }
    ],
    "singleQuote": "off",
    "semi": "off",
    "no-use-before-define": "off",
    "arrow-parens": "off",
    "arrow-body-style": "off",
    "object-curly-newline": ["error", {
      "ImportDeclaration": { "multiline": true, "minProperties": 5 }
    }],
    "no-unused-expressions": ["warn", {
      "allowShortCircuit": true,
      "allowTernary": true
    }],
    "@typescript-eslint/prefer-interface": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-use-before-define": "warn",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "react/jsx-filename-extension": ["off", {
      "extensions": [".jsx", ".tsx"]
    }],
    "react/jsx-props-no-spreading": [0],
    "jsx-quotes": ["error", "prefer-single"],
    "react/prop-types": "off",
    "react-hooks/rules-of-hooks": "error",
  }
}
