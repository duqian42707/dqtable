# angular第三方组件开发示例

## 操作步骤

1. 创建一个不带默认项目的工作空间

```bash
ng new dqtable --create-application=false
```
   
2. 创建一个库

```bash
cd dqtable
ng g library dqtable
```
这样会在项目根目录下创建`projects`目录，`dqtable`存放在`projects`目录下

3. 创建一个演示的应用

```bash
ng g application demo
```

`demo`项目会在`projects`目录下创建。

4. 安装依赖

```bash
npm i ng-zorro-antd@8
```


5. 声明自定义库的依赖

修改库项目的`package.json`中的`peerDependencies`，表示你这个库依赖了哪些其他的库。

6. 进行库的开发，同时在演示项目中看效果。

7. 打包

```bash
ng build dqtable
```

打包后的文件会生成到 `dist/dqtable` 下

8. 发布

```bash
cd dist/dqtable
npm publish
```
