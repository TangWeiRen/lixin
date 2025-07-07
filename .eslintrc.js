module.exports = {
  // 基础配置：继承官方或社区标准
  extends: [
    'eslint:recommended',        // ESLint 官方推荐规则
    'plugin:@typescript-eslint/recommended'  // TypeScript 插件推荐规则
  ],
  
  // 环境声明：指定代码运行的环境
  env: {
    browser: true,              // 浏览器环境
    node: true,                 // Node.js 环境
    es2022: true                // ES2022 语法支持
  },
  
  // 解析器配置：指定代码解析器
  parser: '@typescript-eslint/parser',  // TypeScript 解析器
  
  // 插件配置：扩展 ESLint 功能
  plugins: [
    '@typescript-eslint'          // TypeScript 插件
  ],
  
  // 规则配置：自定义代码检查规则
  rules: {
    // 示例：禁止使用 console.log
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    
    // 示例：强制使用箭头函数
    'prefer-arrow-callback': 'error',
    
    // 其他规则...
  },
  
  // 全局变量声明：允许使用的全局变量
  globals: {
    $: 'readonly',               // jQuery 全局变量（只读）
    React: 'readonly'             // React 全局变量（只读）
  }
};