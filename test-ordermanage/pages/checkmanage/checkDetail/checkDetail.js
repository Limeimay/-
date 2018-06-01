// pages/checkmanage/checkDetail/checkDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:['单据明细','打印图示'],
    currentNavtab:'0',
    orderDtl:[
      {name:"单据ID",value:"采购订单"},
      { name: "单据编号", value:"S06840001"},
      { name: "单据日期", value:"2017-03-27"},
      {name:"录入人员",value:"A001"},
      { name: "单据时间", value:"2017-03-27 10:39:05"},
      { name: "客户/厂商", value:"上海冠达文化有限公司"},
      {name:"联系人",value:""},
      {name:"联系电话",value:""},
      { name: "币别", value:"人民币"},
      { name: "表身明细", value:"1项"},
      {name:"总数量",value:"30"},
      {name:"交易方式",value:""},
      { name: "结案标记", value:"未结案"},
      { name: "交货方式", value:"送货"},
      { name: "扣税类别", value:"不计税"},
      { name: "立账方式", value:"单张立账"},
      {name:"业办/经办",value:""},
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
  switchTab: function (e) {
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  },
})