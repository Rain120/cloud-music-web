<!--
 * @Author: Rainy
 * @Github: https://github.com/Rain120
 * @Date: 2019-01-06 15:26:29
 * @LastEditTime: 2019-04-03 21:57:57
 -->

`React` + `Antd` + `Axios` 网易云音乐网页版

> 测试账号
> phone: 7480719899

### **架构图**
![web-struct](./网易云音乐-web.png)

#### `分支`
  - `routes` 路由设置
  - `axios-config` `axios`请求配置

#### `Typescript`

[typescript中文文档](https://www.tslang.cn/docs/handbook/compiler-options.html)

#### `Error`

##### `Axios` 问题
1、跨域问题
> Q: ![CORS](./errors_screenshot/axios/cors.png)

`start.js`
![start-load-proxy](./errors_screenshot/axios/start-load-proxy.png)

`paths.js`
![path-load-proxy](./errors_screenshot/axios/path-load-proxy.png)

我们在`start.js`中找到`webpack`读取`proxy`的配置发现最终是读取`package.json`中的配置项`proxy`, 故: 

A: `package.json`添加下面配置
```javascript
"proxy": {
    "/api": {
      "target": "http://localhost:3000",
      "changeOrigin": true,
      "pathRewrite": {
        "^/api": "/"
      }
    }
  }
```

> 2、`Axios 404`
> 
> ![axios-404](./errors_screenshot/axios/axios-404.png) ![network](./errors_screenshot/axios/network.png)

A: `package.json` 中`proxy`配置问题

> 3、`iconfont import error`

> ![iconfont_import_error](./errors_screenshot/fonts/iconfont_import_error.png)

A: 在引入文件之前添加`/`

> 3、`React.Children.only expected to receive a single React element child.`
> ![single-react-element](./errors_screenshot/react/single-react-element.png) ![app_tsx](./errors_screenshot/react/app_tsx.png)

A: 将`Provider`内的`Dom`用一个元素包裹
