<!--
 * @Author: Rainy
 * @Github: https://github.com/Rain120
 * @Date: 2019-01-06 15:26:29
 * @LastEditTime: 2019-03-23 19:57:57
 -->

`React` + `Antd` + `Axios` 网易云音乐网页版

> 测试账号
> phone: 7480719899

### **架构图**
![web-struct](./网易云音乐-web.png)

#### `分支`
  - `routes` 路由设置
  - `axios-config` `axios`请求配置

#### `Error`

##### `Axios` 问题
1、跨域问题
> Q: ![CORS](./errorRepo/axios/cors.png)

`start.js`
![start-load-proxy](./errorRepo/axios/start-load-proxy.png)

`paths.js`
![path-load-proxy](./errorRepo/axios/path-load-proxy.png)

我们在`start.js`中找到`webpack`读取`proxy`的配置发现最终是读取`package.json`中的配置项`proxy`, 故: 

A: `package.json`添加下面配置
```javascript
"proxy": {
    "/api": {
      "target": "http://localhost:3000",
      "changeOrigin": true,
      "pathRewrite": {
        "^/api": "/api"
      }
    }
  }
```

> 2、`Axios 404`
> 
> ![axios-404](./errorRepo/axios/axios-404.png) ![network](./errorRepo/axios/network.png)

A: 
