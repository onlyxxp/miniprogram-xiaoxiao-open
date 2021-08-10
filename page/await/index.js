Page({
  onShow() {
    wx.reportAnalytics('enter_home_programmatically', {})
    const endSecond = 1598665600

    const totalDay = Math.floor((endSecond - new Date().getTime() / 1000) / 3600 / 24)
    // const totalMarryDay = Math.floor((new Date().getTime() / 1000 - marrrySecond) / 3600 / 24)

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
      list: list
    })
  },
  onShareAppMessage() {
    return {
      title: '纪念日',
      path: 'page/component/index'
    }
  },

  data: {
    totalDay: 0,
    totalMarryDay: 0,
    list: [
      // { id: 1, desc: "99天" }
    ]
  },
})
