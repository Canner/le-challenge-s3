module.exports = {
  "extends": ["google"],
  "env": {
    "mocha": true,
    "node": true
  },
  "parserOptions": {
    "ecmaVersion": 6
  },
  "settings": {},
  "rules": {
    // 0 for closing rules
    "arrow-parens": ["error", "as-needed"],
    "comma-dangle": ["error", "never"],
    "generator-star-spacing": ["error", {"before": true, "after": true}],
    "curly": [2, "multi-or-nest", "consistent"],
    "no-unused-vars": [2, { "varsIgnorePattern": "should" }],
    "no-use-before-define": [2, { "classes": false, "functions": false }],
    "new-cap": [2, { "capIsNew": false }],
    "require-jsdoc": 0,
    "max-len": 0,
    "quote-props": 0,
    "no-new": 0
  }
};
