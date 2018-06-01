// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  statusType:["全部订单","已结订单","未结订单"],
  currentIndex:0,
  orders: [
    { orderNo: "03181701031", userName: "林金尚", address: "中海国际社区39-2-601-9504", mobile: "15233648584", price: "123123" },
    { orderNo: "03181701031", userName: "林金尚", address: "中海国际社区39-2-601-9504", mobile: "15233648584", price: "123123" },
    { orderNo: "03181701031", userName: "林金尚", address: "中海国际社区39-2-601-9504", mobile: "15233648584", price: "123123" },
    { orderNo: "03181701031", userName: "林金尚", address: "中海国际社区39-2-601-9504", mobile: "15233648584", price: "123123" },
    { orderNo: "03181701031", userName: "林金尚", address: "中海国际社区39-2-601-9504", mobile: "15233648584", price: "123123" },
    { orderNo: "03181701031", userName: "林金尚", address: "中海国际社区39-2-601-9504", mobile: "15233648584", price: "123123" },
    { orderNo: "03181701031", userName: "林金尚", address: "中海国际社区39-2-601-9504", mobile: "15233648584", price: "123123" },
    { orderNo: "03181701031", userName: "林金尚", address: "中海国际社区39-2-601-9504", mobile: "15233648584", price: "123123" },
    { orderNo: "03181701031", userName: "林金尚", address: "中海国际社区39-2-601-9504", mobile: "15233648584", price: "123123" },
    { orderNo: "03181701031", userName: "林金尚", address: "中海国际社区39-2-601-9504", mobile: "15233648584", price: "123123" },
  ],
  next:[
    { orderNo: "03181701031", userName: "林金尚", address: "中海国际社区39-2-601-9504", mobile: "15233648584", price: "123123" },
    { orderNo: "03181701031", userName: "林金尚", address: "中海国际社区39-2-601-9504", mobile: "15233648584", price: "123123" },
    { orderNo: "03181701031", userName: "林金尚", address: "中海国际社区39-2-601-9504", mobile: "15233648584", price: "123123" },
    { orderNo: "03181701031", userName: "林金尚", address: "中海国际社区39-2-601-9504", mobile: "15233648584", price: "123123" },
    { orderNo: "03181701031", userName: "林金尚", address: "中海国际社区39-2-601-9504", mobile: "15233648584", price: "123123" },
    { orderNo: "03181701031", userName: "林金尚", address: "中海国际社区39-2-601-9504", mobile: "15233648584", price: "123123" },
    { orderNo: "03181701031", userName: "林金尚", address: "中海国际社区39-2-601-9504", mobile: "15233648584", price: "123123" },
    { orderNo: "03181701031", userName: "林金尚", address: "中海国际社区39-2-601-9504", mobile: "15233648584", price: "123123" },
    { orderNo: "03181701031", userName: "林金尚", address: "中海国际社区39-2-601-9504", mobile: "15233648584", price: "123123" },
    { orderNo: "03181701031", userName: "林金尚", address: "中海国际社区39-2-601-9504", mobile: "15233648584", price: "123123" },
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
  statusTap:function(e){
    var currentIndex = e.currentTarget.dataset.index;
    this.data.currentIndex = currentIndex
    this.setData({
      currentIndex: currentIndex
    });
    this.onShow();
  },
  orderQuery:function(){
    wx.navigateTo({
      url: '/pages/orderQuery/orderQuery',
    })
  },
  upper:function(){
    wx.showNavigationBarLoading()
    this.refresh();
    console.log("upper");
    setTimeout(function () { wx.hideNavigationBarLoading(); wx.stopPullDownRefresh(); }, 2000);
  },
  lower:function(){
    wx.showNavigationBarLoading();
    var that = this;
    setTimeout(function () { wx.hideNavigationBarLoading(); that.nextLoad(); }, 1000);
    console.log("lower")
  },
  refresh: function () {
    wx.showToast({
      title: '刷新中',
      icon: 'loading',
      duration: 3000
    });
    this.setData({
      orders: orders,
    });
    setTimeout(function () {
      wx.showToast({
        title: '刷新成功',
        icon: 'success',
        duration: 2000
      })
    }, 3000)
  },
  nextLoad: function () {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 4000
    })
    this.setData({
      orders: this.data.orders.concat(this.next),
    });
    setTimeout(function () {
      wx.showToast({
        title: '加载成功',
        icon: 'success',
        duration: 2000
      })
    }, 3000)
  }
})