Page({

  /**
   * 页面的初始数据
   */
  data: {
    navTab: ["全部", "我的订单", "已结订单", "未结订单"],
    orders: [{ name: "我的订单", icon: "myorder",number:20,tapMehod:"getMyorder" },
      { name: "已结订单", icon: "myorder-finished", number: 11, tapMehod: 'getOrderFinished'},
      { name: "未结订单", icon: "myorder-unfinished", number: 9, tapMehod: 'getOrderUnfinished' }],
    currentNavtab:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '订单查询'
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
  switchTab: function (e) {
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  },
  getMyorder:function(){
    wx.navigateTo({
      url: '../index/myorder/myorder'
    })
  },
  getOrderFinished: function () {
    wx.navigateTo({
      url: '../index/orderFinished/orderFinished'
    })
  },
  getOrderUnFinished: function () {
    wx.navigateTo({
      url: '../index/orderUnFinished/orderUnFinished'
    })
  },
  createOrder:function(){
    wx.navigateTo({
      url: '../index/ordernew/ordernew'
    })
  }
})
