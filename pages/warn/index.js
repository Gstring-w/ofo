// pages/warn/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemValue:[{
      value:'私锁私用',
      checked:false
    },
      {
        value: '车牌缺损',
        checked: false
      }, {
        value: '轮胎坏了',
        checked: false
      }, {
        value: '车锁坏了',
        checked: false
      }, {
        value: '违规乱停',
        checked: false
      }, {
        value: '密码不对',
        checked: false
      }, {
        value: '刹车坏了',
        checked: false
      }, {
        value: '其他故障',
        checked: false
      }],
    photoUrl:[],
    chooseText:'拍摄/相册',
    chooseValue:[]
  },
  takePhoto: function(){
      wx.chooseImage({
        success: (res)=> {
          console.log(res);
          let photo = res.tempFilePaths;
          this.setData({
            photoUrl:photo,
            chooseText:'+'
          })
        },
      })
  },
  delPhoto: function(e){
    let _index = e.target.dataset.index;
    let _photoUrl = this.data.photoUrl;
    _photoUrl.splice(_index,1);
    if(_photoUrl.length == 0){
      this.setData({
        chooseText:'拍摄/相册'
      })
    }
    this.setData({
      photoUrl:_photoUrl
    })
  },
  chooseCheck:function(e){
    let _index = e.target.dataset.index;
    let _choose = [];
    this.data.chooseValue.push(this.data.itemValue[_index]);
  },
  submitBtn: function(){
    
    if (this.data.chooseValue.length > 0 && this.data.photoUrl.length > 0){
      wx.showToast({
        title: '提交成功',
        icon: 'success',
        duration: 2000,
        success:()=>{
          setTimeout(()=>{
            wx.navigateBack({
              delta: 1
            })
          },2000)
        }
      })
     
    }else{
      wx.showModal({
        content: '请填写完整信息',
        success:(res)=>{
          console.log(res);
          if(res.confirm){

          }else{
            wx.navigateBack({
              delta:1
            })
          }
        }
      })
    }
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
  
  }
})