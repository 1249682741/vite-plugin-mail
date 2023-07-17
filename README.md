# Vite-plugin-mail
需配合*vite-plugin-zip-output*等压缩插件使用，在构建静态文件并压缩成zip后， 将zip文件发送到邮箱中

## 使用
```sh
npm install vite-plugin-mail -D 
```

```js
import {defineConfig} from 'vite'
import VitePluginMail from 'vite-plugin-mail'

export default defineConfig({
  plugins:[
    VitePluginMail({
      user: 'xxx@qq.com',
      pass: 'xxx',
      file: 'xxx',
    })
  ]
})
```

## 参数
|参数|必填|说明|
|--|--|--|
|user|√|QQ邮箱账号|
|pass|√|对应账号的授权码，获取方法见下|
|file|√|要发送的文件地址|
|to|x|接收者邮箱，不传默认使用user的邮箱为接收者|

## 授权码
目前仅支持qq邮箱
### QQ邮箱
#### 在网页QQ邮箱端管理授权码
在邮箱[帐号与安全](http://https://wx.mail.qq.com/account#/)点击 **设备管理** > **授权码管理**，对授权码进行管理。
#### 在QQ邮箱APP端管理
在QQ邮箱App**点击左上角头像** > **在我的帐户列表下点击帐号**>**安全管理**>**设备管理**，对授权码进行管理。