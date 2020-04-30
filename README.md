# enzyme-jest-react

> 使用 enzyme + jest 测试 React

## 选型

> [http://react.html.cn/docs/test-utils.html](http://react.html.cn/docs/test-utils.html)

- [react-test-renderer](https://react.docschina.org/docs/test-renderer.html): 是在不依赖浏览器或 jsdom 的情况下，返回某个时间点由 React DOM 渲染出的视图结构（类似与 DOM 树）快照
- [enzyme](https://enzymejs.github.io/enzyme/) 用于保证 React 组件的输入输出结构
- [react-testing-library](https://testing-library.com/docs/react-testing-library/intro) 的特性
  - 不面向具体组件代码进行测试
  - 面向最终 DOM 进行测试（Query）
  - 模拟用户的交互方式（fireEvent）
  - 所以也支持除了 React 以外的其他 UI 框架
- [jest](https://jestjs.io/zh-Hans/) JavaScript 测试框架

## 安装

```sh
# React

npm install react react-dom --save

# 编译

npm install @babel/core @babel/plugin-proposal-class-properties @babel/polyfill @babel/preset-env @babel/preset-react -D

# lint

npm install babel-eslint eslint prettier eslint-config-airbnb eslint-config-prettier eslint-plugin-babel eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks -D

# test

npm install jest enzyme babel-jest enzyme-adapter-react-16 react-test-renderer -D

# commit

npm install husky lint-staged -D

```
