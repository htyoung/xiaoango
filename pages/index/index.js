//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  catchBtnClickme: function () {
    var title = []
    var userInfo = this.data.userInfo
    if (userInfo.nickName == '小安') {
      title.unshift("老板，你好！")
    }else{
      title.unshift("员工，你好！")
    }
    wx.showToast({
      title: title.toString(),
      icon: 'success',
      duration: 500
    });
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})
