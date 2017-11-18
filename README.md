# ChatOfPomelo_pomelo_cocoscreator
cocosCreator集成pomelo实现的聊天室demo

## 安装 pomelo

参考[安装 pomelo wiki](https://github.com/NetEase/pomelo/wiki/%E5%AE%89%E8%A3%85pomelo)来安装

## pomelo-chat-demo 源码下载与运行
ccc-pomelo-chat-client 服务端使用的是 pomelo-chat-demo 的服务端，并没有另外开发，这样可以很方便的展示多人聊天应用的多端（Web, Android, desktop等）聊天通讯功能。
参考 [pomelo chat 源码下载与安装](https://github.com/NetEase/pomelo/wiki/chat%E6%BA%90%E7%A0%81%E4%B8%8B%E8%BD%BD%E4%B8%8E%E5%AE%89%E8%A3%85) 下载 pomelo-chat-demo 源码。
下载源码后，通过下列步骤来运行 pomelo-chat-demo。下文使用 yourdir 指代你本地 pomelo-chat-demo 源码的存放目录。

打开终端，启动 pomelo-chat-demo 的聊天服务器。
```
$ cd yourdir/chatofpomelo-websocket/game-server 
$ pomelo start
```
打开另外一个终端，启动 pomelo-chat-demo 的 web 服务器。
```
$ cd yourdir/chatofpomelo-websocket/web-server
$ node app.js
```

如果启动过程中没有错误，那么我们就可以打开浏览器，输入 http://127.0.0.1:3001/index.html16, 然后就可以看到聊天应用的界面了。输入一个用户名和一个房间名，就可以开始聊天了。可以多开几个客户端实例（即打开多个网页），测试 pomelo-chat-demo 是否能正常地运行。效果图如下：
