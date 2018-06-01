// pages/index/myorder/myorder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myOrderInput:'',
    orders:[
      {orderNo:"03181701031",userName:"林金尚",address:"中海国际社区39-2-601-9504",mobile:"15233648584",price:"123123"},
      { orderNo: "03181701031", userName: "林金尚", address: "中海国际社区39-2-601-9504", mobile: "15233648584", price: "123123"},
      { orderNo: "03181701031", userName: "林金尚", address: "中海国际社区39-2-601-9504", mobile: "15233648584", price: "123123"},
      { orderNo: "03181701031", userName: "林金尚", address: "中海国际社区39-2-601-9504", mobile: "15233648584", price: "123123"},
      { orderNo: "03181701031", userName: "林金尚", address: "中海国际社区39-2-601-9504", mobile: "15233648584", price: "123123"},
      { orderNo: "03181701031", userName: "林金尚", address: "中海国际社区39-2-601-9504", mobile: "15233648584", price: "123123"},
      { orderNo: "03181701031", userName: "林金尚", address: "中海国际社区39-2-601-9504", mobile: "15233648584", price: "123123"},
      
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '我的订单'})
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
  bindKeyInput:function(e){
    this.setData({
      myOrderInput: e.detail.value
    })
  },
  searchOrder:function(){

  }
})