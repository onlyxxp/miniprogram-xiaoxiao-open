# miniprogram-demo

开发指南
https://developers.weixin.qq.com/miniprogram/dev/framework/

微信小程序设计指南
https://developers.weixin.qq.com/miniprogram/design/

开发者资源 /HTTP API 文档 /数据库 /插入记录
https://developers.weixin.qq.com/minigame/dev/wxcloud/reference-http-api/database/databaseAdd.html

两年前花了一个周末写的，比较粗糙，可以看看👆的文档，比较友好


核心代码：
1）app.json , 整体ui外框描述
2）app.js  ， wx.cloud.init  是云函数配置
3）functions 目录， 是云函数
4）page目录下，只各个页面，postList下面是帖子列表， postSend是发帖
5）彩蛋，是视频&弹幕，在memory/index.wsml   <video id="myVideo"

                                        
小程序文档写的挺好的，反正拿官方demo整吧整吧，2天就能弄出来
        
                                        
～～～～～～～～
Wed Mar 20 01:12:23 2019 +0800 fix 分页bug
Wed Mar 20 01:08:26 2019 +0800 完善细节
Wed Mar 20 01:05:22 2019 +0800 完善体验
Wed Mar 20 00:57:40 2019 +0800 解决加载闪烁
Wed Mar 20 00:53:06 2019 +0800 优化细节
Wed Mar 20 00:46:22 2019 +0800 支持分页加载
Wed Mar 20 00:46:05 2019 +0800 支持分页加载
Wed Mar 20 00:40:19 2019 +0800 分页加载
Tue Mar 19 23:59:42 2019 +0800 refactor
Thu Feb 21 00:10:06 2019 +0800 日期
Wed Feb 20 23:52:16 2019 +0800 大图、拍照
Tue Jan 1  21:09:39 2019 +0800 时间format
Tue Jan 1  21:06:26 2019 +0800 线上发布
Tue Jan 1  20:59:25 2019 +0800 fix 展示bug
Tue Jan 1  20:40:46 2019 +0800 fix 授权登录的bug
Tue Jan 1  20:21:15 2019 +0800 message
Tue Jan 1  20:16:40 2019 +0800 desc
Tue Jan 1  20:10:45 2019 +0800 发布上传全部走通
Tue Jan 1  16:48:52 2019 +0800 帖子列表展示
Tue Jan 1  16:39:14 2019 +0800 列表&发布
Tue Jan 1  16:27:30 2019 +0800 发布
Tue Jan 1  15:43:54 2019 +0800 发送页面
Tue Jan 1  15:10:44 2019 +0800 add page list
Tue Jan 1  14:05:08 2019 +0800 aniversary 从server 拿
Tue Jan 1  13:22:38 2019 +0800 云函数
Tue Jan 1  11:33:06 2019 +0800 cloud api
Mon Dec 31 15:06:32 2018 +0800 hhhh
Thu Dec 20 01:00:43 2018 +0800 完善文案
Thu Dec 20 00:50:41 2018 +0800 完善ui
Wed Dec 19 02:02:04 2018 +0800 finish
Wed Dec 19 01:38:18 2018 +0800 fix ui
Tue Dec 18 09:25:57 2018 +0800 await
Tue Dec 18 01:13:46 2018 +0800 task complete
Tue Dec 18 00:53:03 2018 +0800 结构
Sun Dec 16 23:05:43 2018 +0800 Initial Commit
