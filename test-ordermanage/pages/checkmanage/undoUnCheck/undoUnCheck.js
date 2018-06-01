// pages/checkmanage/undoUnCheck/undoUnCheck.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  classify:['按单据日期','按类别'],
  currentNavtab:0,
  searchCondition:'',
  orders:[
    { date: "2017-03-27", detail: [{ number: "SO68040002", date: "2017-03-27", kind: "销售订单", company: "上海生活家", maker: "任七" }, { number: "SO68040002", date: "2017-03-27", kind: "销售订单", company: "上海生活家", maker: "任七" }]},
    { date: "2017-03-25", detail: [{ number: "SO68040002", date: "2017-03-25", kind: "采购订单", company: "成都天诚材料有限公司", maker: "任七" }]}
  ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  switchTab:function(e){
    this.setData({
      currentNavtab:e.currentTarget.dataset.idx
    });
  },
  getDetail:function(args){
    wx.navigateTo({
      url: '../checkDetail/checkDetail',
    })
  }
})