// pages/billing/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hours:0,
    minutes:0,
    scends:0,
    number:12345,
    title:"正在计费",
    disable:false
  },
  startChar:function (){
   let _hours = 0;
   let _minutes = 0;
   let _scends = 0;
   this.time = setInterval(()=>{
     this.setData({
       scends:++_scends
     })
     if(_scends == 59){
       _scends = 0;
        this.setData({
          scends:0,
          minutes:++_minutes
        })
     }
     if(_minutes == 59){
       _minutes = 0;
       this.setData({
         minutes:0,
         hours: ++_hours
       })
     }
   },1000)
  },
  endride:function(){
    clearInterval(this.time)
    this.time = '';
    this.setData({
        title:"骑行时间",
        disable:true
    })
  },
  backMap:function(){
    console.log(this.time)
    if(this.time){
      wx.navigateTo({
        url: '../index/index?time='+ this.time,
      })
    }else{
      wx.redirectTo({
        url: '../index/index?time='+this.time,
      })
      console.log(111)
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.startChar();
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
  
  }
})