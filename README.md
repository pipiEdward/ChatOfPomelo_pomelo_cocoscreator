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

如果启动过程中没有错误，那么我们就可以打开浏览器，输入 http://127.0.0.1:3001/index.html16, 然后就可以看到聊天应用的界面了。输入一个用户名和一个房间名，就可以开始聊天了。可以多开几个客户端实例（即打开多个网页），测试 pomelo-chat-demo 是否能正常地运行。

该客户端在web、Android、ccc模拟器都可以正常运行，其他平台请自行尝试。服务器 ip 地址默认为 127.0.0.1，如果你是在 Android 等其他不和服务器同一台机器平台运行，请把该 ip 修改成你启动服务器的电脑 ip 地址。端口默认为 3014，这个一般不需要修改，除非你改动了服务器端的代码。输入一个用户名和一个房间名（用户名和房间名限制了只能是字母、数字、或汉字），然后点击 join 按钮登陆后就可以进行一对多或者一对一聊天了。

参考：
http://www.jianshu.com/p/42ec9893389a
http://forum.cocos.com/t/cocoscreator-pomelo/37323


