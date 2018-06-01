//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
  },
  //事件处理
  onLoad: function () {
    
  },
  onShow:function(){
    this.getUserInfo();
  },
  getUserInfo: function (cb) {
    var that = this
    wx.login({
      success: function () {
        wx.getUserInfo({
          success: function (res) {
            that.setData({
              userInfo: res.userInfo
            });
          }
        })
      }
    })
  },
})
