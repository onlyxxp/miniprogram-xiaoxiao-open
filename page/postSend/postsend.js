const db = wx.cloud.database()
const postCollection = db.collection('post')
// const sourceType = [['camera'], ['album'], ['camera', 'album']]
const sourceType = [
  ['camera'],
  ['album'],
  ['camera', 'album']
]
const sizeType = [
  ['compressed'],
  ['original'],
  ['compressed', 'original']
]

Page({
  onShareAppMessage() {
    return {
      title: '图片',
      path: 'page/API/pages/image/image'
    }
  },

  data: {
    openId : '',
    inputValue: '',
    imageList: [],
    sourceTypeIndex: 2,
    sourceType: ['拍照', '相册', '拍照或相册'],
    sizeTypeIndex: 0,
    sizeType: ['压缩', '原图', '压缩或原图'],
    countIndex: 8,
    count: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },

  bindKeyInput(e) {
    this.setData({
      inputValue: e.detail.value
    })
    console.log(this.data.inputValue)
  },

  sourceTypeChange(e) {
    this.setData({
      sourceTypeIndex: e.detail.value
    })
  },

  sizeTypeChange(e) {
    this.setData({
      sizeTypeIndex: e.detail.value
    })
  },

  countChange(e) {
    this.setData({
      countIndex: e.detail.value
    })
  },

  chooseImage() {
    const that = this
    wx.chooseImage({
      sourceType: sourceType[this.data.sourceTypeIndex],
      sizeType: sizeType[this.data.sizeTypeIndex],
      count: this.data.count[this.data.countIndex],
      success(res) {
        console.log(res)
        that.setData({
          imageList: res.tempFilePaths
        })
      }
    })
  },

  previewImage(e) {
    const current = e.target.dataset.src

    wx.previewImage({
      current,
      urls: this.data.imageList
    })
  },

  onShow() {
    wx.reportAnalytics('enter_home_programmatically', {})
  },

  onGotUserInfo(e) {
    console.log("error:" + e.detail.errMsg)
    console.log("userInfo:" + e.detail.userInfo)
    console.log("rawData" + e.detail.rawData)

    console.dir(e)
    if (e.detail.errMsg != "getUserInfo:ok") {
      wx.showToast({
        title: '未授权登录无法发布',
        icon: 'none',
        duration: 2000
      })
      return
    }

    const time = new Date()
    const filename = `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}-${time.getTime()}.png`
    const openId = this.data.openId
    const userInfo = e.detail.userInfo
    const imageFile = this.data.imageList[0]
    const inputValue = this.data.inputValue
    
    console.log("imageFile" + imageFile)
    console.log("filename:" + filename)

    wx.showLoading({
      title: 'uploading...',
    })

    wx.cloud.uploadFile({
      cloudPath: filename,
      filePath: imageFile, // 文件路径
      success: res => {
        console.log("upload img:" + res.fileID)

        wx.showLoading({
          title: 'saving...',
        })

        postCollection.add({
          data: {
            // openId: openId,
            userInfo: userInfo,
            message: inputValue,
            imageFileIDList: [res.fileID],
            createTime: db.serverDate()
          }, 
          success : res=> {
            console.log("save " + res)
            wx.hideLoading()
            wx.navigateBack()
          },
          fail: err => {
            console.log(err)
            wx.hideLoading()
          }
        })
      },
      fail: err => {
        console.log(err)
        wx.hideLoading()
      }
    })
  }
})