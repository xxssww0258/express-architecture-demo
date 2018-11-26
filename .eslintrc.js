module.exports = {
    "root": true, // 指定当前文件是根配置文件
    "env": { // 环境  例如browser 没选true的话 websocket 就报错
      "browser": true,
      "es6": true,
      "commonjs": true,
      "node": true,
    },
    // 如果用到 es5
    "parserOptions": {
      "parser": 'babel-eslint'
    },
    "extends": [
      "plugin:vue/recommended",
      "eslint:recommended",
      "standard"
    ],
    "plugins": [
      "vue", //此ESLint插件允许linting和修复HTML文件中包含的内联脚本。 eslint-plugin-vue  https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    ],
    "rules": {
      //---------------------------------------- js ----------------------------------------
      "no-unused-vars":1,// 是否允许 声明没有执行的的变量
      "no-console": 0,
      "indent": [1, 4, {
        "SwitchCase": 1
      }], //缩进风格
      "key-spacing": [1, {
        "align": {}
      }], // 对象的对齐风格
      "max-len": [1, {
        "code": 130
      }], // 最大长度
      "newline-per-chained-call": [1, {
        "ignoreChainWithDepth": 3
      }], //链式连接的 当前行的大深度
      "operator-linebreak": [1, "before"], // 三元操作符的位置
      "require-jsdoc": [1, { //js doc
        "require": {
          "FunctionDeclaration": true,
          "MethodDefinition": true,
          "ClassDeclaration": true,
          "ArrowFunctionExpression": true,
          "FunctionExpression": false //<= 匿名函数 或变量
        }
      }],
  
      //---------------------------------------- html ----------------------------------------
      //  https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-indent.md
      "vue/html-self-closing": [2, { // 这个有点问题 例如<Col></Col> 标签 会被识别成<col></col> 导致错误  所以旧项目新增的 就不要用always
        "html": { // never 禁止自我关闭 or always 要求在没有内容的元素上自我关闭  or any 任意
          "void": "always", // 空内容是否要闭合
          "normal": "always", // 
          "component": "always"
        },
        "svg": "always",
        "math": "always"
      }],
      // 标签和属性缩进
      "vue/html-indent": [1, 4, {
        "attribute": 1,
        "closeBracket": 0,
        "alignAttributesVertically": true,
        "ignores": []
      }],
      // 属性换行
      "vue/max-attributes-per-line": [1, {
        "singleline": 7, // 每行属性不得超过多少个属性
        "multiline": {
          "max": 7, // 多行情况下 每行接受多少个属性
          "allowFirstLine": false
        }
      }],
      "vue/order-in-components":0, // 组件顺序
      "vue/attributes-order":0, // 属性顺序,
      // "vue/no-spaces-around-equal-signs-in-attribute":1, // 标签=左右不能留空格  <= 这两个不知道为什么没效果
      // "vue/component-name-in-template-casing":1, // 组件命名大写  PascalCase|kebab-case <= 这两个不知道为什么没效果
    }
  };