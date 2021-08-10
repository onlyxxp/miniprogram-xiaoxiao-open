const db = wx.cloud.database()
const annivesary = db.collection('annivesary')

Page({
  onShow() {
    wx.reportAnalytics('enter_home_programmatically', {})
    // wx.cloud.callFunction({
    //   name: 'getOpenId',
    //   complete: res => {
    //     console.log('callFunction test result: ', res.result)
    //   }
    // })

    annivesary.get()
      .then(res => {
        console.log(res.data[0])

        var startSecond = new Date(res.data[0].loveBegin).getTime() / 1000
        var marrrySecond = new Date(res.data[0].marryBegin).getTime() / 1000

        const totalDay = Math.floor((new Date().getTime() / 1000 - startSecond) / 3600 / 24)
        const totalMarryDay = Math.floor((new Date().getTime() / 1000 - marrrySecond) / 3600 / 24)

        const list = this.data.list
        for (let i = 0, len = list.length; i < len; ++i) {
          var gap = list[i].id - totalDay
          list[i].gap = Math.abs(gap)
          if (gap >= 0) {
            list[i].pre = "距离恋爱"
            list[i].center = "还有"
            list[i].end = "天"
            list[i].finish = false
          } else {
            list[i].pre = "恋爱"
            list[i].center = ""
            list[i].end = " ✓"
            list[i].finish = true
          }
        }

        this.setData({
          totalDay: totalDay,
          totalMarryDay: totalMarryDay,
          list: list,
          videoShow: false,
          clickTimes: 0
        })
      })
  },
  onShareAppMessage() {
    return {
      title: '纪念日',
      path: 'page/component/index'
    }
  },

  showVideo() {
    var clickTimes = this.data.clickTimes
    this.setData({
      clickTimes: clickTimes > 11 ? 0 : clickTimes + 1
    })

    console.log(clickTimes)
    if (clickTimes == 9) {
      this.setData({
        videoShow: true
      })
    }
    if (clickTimes == 11) {
      this.setData({
        videoShow: false
      })
    }
  },

  videoErrorCallback(e) {
    console.log(e.detail.errMsg)
    this.setData({
      videoErrorMsg: e.detail.errMsg
    })
  },

  data: {
    totalDay: 0,
    totalMarryDay: 0,
    list: [
      { id: 99, desc: "99天" },
      { id: 365, desc: "365天" },
      { id: 520, desc: "520天" },
      { id: 730, desc: "2年" },
      { id: 999, desc: "999天" },
      { id: 1095, desc: "3年" },
      { id: 1314, desc: "1314天" },
      { id: 1460, desc: "4年" },
      { id: 1825, desc: "5年" },
      { id: 3285, desc: "9年" },
      { id: 36135, desc: "99年" },
      { id: 3650000, desc: "10000年" },
    ],
    danmuList:
      [
        { text: '高能预警高能预警高能预警', color: '#ff0000', time: 0 },
        { text: '高能预警高能预警高能预警', color: '#ff0000', time: 0 },
        { text: '高能预警高能预警', color: '#ffff00', time: 0 },
        { text: '高能预警高能预警!!!', color: '#ff0000', time: 0 },
        { text: '高能预警高能预警', color: '#ff0000', time: 0 },
        { text: '高能预警高能预警高能预警', color: '#ffff00', time: 0 },
        { text: '高能预警!!!!!', color: '#ffff00', time: 1 },
        { text: '高能预警高能预警', color: '#ff0000', time: 1 },
        { text: '高能预警高能预警', color: '#ff0000', time: 1 },
        { text: '高能预警高能预警高能预警', color: '#ff0000', time: 1 },
        { text: '高能预警高能预警', color: '#ff0000', time: 1 },
        { text: '高能预警', color: '#ff0000', time: 1 },
        { text: '我是谁????????????', color: '#ffff00', time: 3 },
        { text: '我在哪里????????????', color: '#ffff00', time: 3 },
        { text: '威尼斯!!!!', color: '#ffff00', time: 4 },
        { text: '威尼斯!!!!', color: '#ffff00', time: 4 },
        { text: '威尼斯!!!!', color: '#ffff00', time: 4 },
        { text: '威尼斯!!!!', color: '#ffff00', time: 4 },
        { text: 'Look', color: '#ff0000', time: 8 },
        { text: 'Look', color: '#ff0000', time: 8 },
        { text: 'Look', color: '#ff0000', time: 8 },
        { text: 'Look', color: '#ffff00', time: 9 },
        { text: 'Look', color: '#ff0000', time: 8 },
        { text: 'Look', color: '#ffff00', time: 8 },
        { text: 'Look', color: '#ff0000', time: 8 },
        { text: 'Look', color: '#ffff00', time: 9 },
        { text: '哈哈', color: '#ff0000', time: 11 },
        { text: '哈哈哈', color: '#ff0000', time: 11 },
        { text: '哈哈哈哈', color: '#ff0000', time: 11 },
        { text: '哈哈哈哈哈', color: '#ff0000', time: 11 },
        { text: '哈哈哈哈哈哈哈哈哈哈', color: '#ff0000', time: 11 },
        { text: 'Beautiful Sea', color: '#ffff00', time: 12 },
        { text: 'Beautiful Sea', color: '#ffff00', time: 12 },
        { text: 'Beautiful Sea', color: '#ff0000', time: 12 },
        { text: '哈哈哈哈哈', color: '#ff0000', time: 12 },
        { text: '哈哈哈哈哈哈哈哈哈哈', color: '#ff0000', time: 12 },
        { text: 'Beautiful sea', color: '#ff0000', time: 14 },
        { text: '哈哈哈哈', color: '#ff0000', time: 15 },
        { text: '哈哈哈哈哈', color: '#ff0000', time: 16 },
        { text: '哈哈哈哈哈哈哈哈哈哈', color: '#ff0000', time: 17 },
        { text: '干杯', color: '#ff0000', time: 19 },
        { text: '干杯', color: '#ff0000', time: 20 },
        { text: '吃啥呀!!', color: '#ff0000', time: 27 },
        { text: '吃啥呀!!', color: '#ffff00', time: 28 },
        { text: '吃啥呀!!', color: '#ff0000', time: 27 },
        { text: '吃啥呀!!', color: '#ff0000', time: 28 },
        { text: '吃啥呀!!', color: '#ff0000', time: 27 },
        { text: '吃啥呀!!', color: '#ff0000', time: 28 },
        { text: '虾子!!', color: '#ffff00', time: 31 },
        { text: '墨鱼!!', color: '#ffff00', time: 32 },
        { text: 'fish!!', color: '#ffff00', time: 33 },
        { text: 'and!!', color: '#ffff00', time: 34 },
        { text: '高能预警', color: '#ff0000', time: 32 },
        { text: '高能预警', color: '#ff0000', time: 32 },
        { text: '高能预警', color: '#ff0000', time: 32 },
        { text: '高能预警', color: '#ff0000', time: 32 },
        { text: 'gua gua gua!!', color: '#ff0000', time: 35 },
        { text: 'gua gua gua!!', color: '#ff0000', time: 35 },
        { text: 'gua gua gua!!', color: '#ff0000', time: 35 },
        { text: 'gua gua gua!!', color: '#ff0000', time: 35 },
        { text: 'gua gua gua!!', color: '#ffff00', time: 35 },
        { text: 'gua gua gua!!', color: '#ff0000', time: 35 },
        { text: 'gua gua gua!!', color: '#ff0000', time: 35 },
        { text: 'gua gua gua!!', color: '#ffff00', time: 35 },
        { text: 'gua gua gua!!', color: '#ff0000', time: 35 },
        { text: 'gua gua gua!!', color: '#ffff00', time: 35 },
        { text: 'gua gua gua!!', color: '#ff0000', time: 37 },
        { text: 'gua gua gua!!', color: '#ffff00', time: 38 },
        { text: 'gua gua gua!!', color: '#ffff00', time: 38 },
        { text: 'gua gua gua!!', color: '#ff0000', time: 39 },
        { text: 'gua gua gua!!', color: '#ff0000', time: 39 },
        { text: 'gua gua gua!!', color: '#ff0000', time: 40 },
        { text: '扇贝', color: '#ff00ff', time: 41 },
        { text: '扇贝', color: '#ff00ff', time: 41 },
        { text: '高能预警', color: '#ff0000', time: 45 },
        { text: '高能预警', color: '#ff0000', time: 45 },
        { text: '高能预警', color: '#ff0000', time: 46 },
        { text: '高能预警', color: '#ff0000', time: 47 },
        { text: '高能预警', color: '#ff0000', time: 48 },
        { text: '这是什么', color: '#ff0000', time: 45 },
        { text: '这是什么', color: '#ff0000', time: 48 },
        { text: '💩💩💩💩💩💩💩💩💩💩💩', color: '#ff0000', time: 49 },
        { text: '💩💩💩💩💩💩💩💩💩💩💩', color: '#ff0000', time: 50 },
        { text: '💩💩💩💩💩💩💩💩💩💩💩', color: '#ff0000', time: 51 },
        { text: '💩💩💩💩💩💩💩💩💩💩💩', color: '#ff0000', time: 52 },
        { text: '💩💩💩💩💩💩💩💩💩💩💩', color: '#ff0000', time: 49 },
        { text: '💩💩💩💩💩💩💩💩💩💩💩', color: '#ff00ff', time: 50 },
        { text: '💩💩💩💩💩💩💩💩💩💩💩', color: '#ff0000', time: 51 },
        { text: '💩💩💩💩💩💩💩💩💩💩💩', color: '#ff0000', time: 52 },
        { text: '💩💩💩💩💩💩💩💩💩💩💩', color: '#ff00ff', time: 49 },
        { text: '💩💩💩💩💩💩💩💩💩💩💩', color: '#ff0000', time: 50 },
        { text: '💩💩💩💩💩💩💩💩💩💩💩', color: '#ff00ff', time: 51 },
        { text: '💩💩💩💩💩💩💩💩💩💩💩', color: '#ff0000', time: 52 },
        { text: '💩💩💩💩💩💩💩💩💩💩💩', color: '#ff0000', time: 49 },
        { text: '💩💩💩💩💩💩💩💩💩💩💩', color: '#ff0000', time: 54 },
        { text: '💩💩💩💩💩💩💩💩💩💩💩', color: '#ff00ff', time: 55 },
        { text: '💩💩💩💩💩💩💩💩💩💩💩', color: '#ff0000', time: 56 },
        { text: '💩💩💩💩💩💩💩💩💩💩💩', color: '#ff0000', time: 54 },
        { text: '💩💩💩💩💩💩💩💩💩💩💩', color: '#ff00ff', time: 55 },
        { text: '💩💩💩💩💩💩💩💩💩💩💩', color: '#ff0000', time: 56 },
        { text: '💩💩💩💩💩💩💩💩💩💩💩', color: '#ff0000', time: 63 },
        { text: '💩💩💩💩💩💩💩💩💩💩💩', color: '#ff00ff', time: 62 },
        { text: '💩💩💩💩💩💩💩💩💩💩💩', color: '#ff0000', time: 63 },
        { text: 'look, look, this 💩💩', color: '#ff0000', time: 67 },
        { text: 'looklook, this 💩💩', color: '#ff0000', time: 68 },
        { text: 'looklook, this 💩💩', color: '#ff0000', time: 69 },
        { text: 'look, look, this 💩💩', color: '#ff00ff', time: 67 },
        { text: 'looklook, this 💩💩', color: '#ff0000', time: 68 },
        { text: 'looklook, this 💩💩', color: '#ff00ff', time: 69 },
      ]
  },
})
