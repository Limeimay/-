// pages/checkmanage/checkmanage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    check:[
      {name:"未审核",number:6},
      {name:"审核未通过",number:2},
      {name:"反审核",number:3},
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '审核作业'
    })
    var that = this
    //更新数据
    that.setData({
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  getUndoUnCheck:function(){
    wx.navigateTo({
      url: 'undoUnCheck/undoUnCheck',
    })
  },
  getUndoDisargeeCheck: function () {
    wx.navigateTo({
      url: 'undoDisargeeCheck/undoDisargeeCheck',
    })
  },
  getUndoAntiCheck: function () {
    wx.navigateTo({
      url: 'undoAntiCheck/undoAntiCheck',
    })
  },
  getDoneArgeeCheck: function () {
    wx.navigateTo({
      url: 'doneArgeeCheck/doneArgeeCheck',
    })
  },
  getDoneDisargeeCheck: function () {
    wx.navigateTo({
      url: 'doneDisargeeCheck/doneDisargeeCheck',
    })
  },
})