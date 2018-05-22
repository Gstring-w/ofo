// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude:110,
    latitude: 10,
    controls:[],
    time:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.time){
      this.setData({
        time: options.time
      })
    }
   
    wx.getLocation({
      success: (res) => {
        this.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })
      },
    })
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          controls: [{
            id: 1,
            iconPath: '../images/use.png',
            position: {
              width: 80,
              height: 80,
              left: res.windowWidth/2 - 40,
              top: res.windowHeight - 150
            },
            clickable: true
          },{
            id:2,
            iconPath: '../images/marker.png',
            position: {
              width:30,
              height:45,
              left:res.windowWidth/2 - 15,
              top:res.windowHeight/2 - 45
            },
            clickable: false,
          }, {
            id: 3,
            iconPath: '../images/location.png',
            position: {
              width: 40,
              height: 40,
              left: 20,
              top: res.windowHeight-130
            },
            clickable: true,
          },
          {
            id: 4,
            iconPath: '../images/avatar.png',
            position: {
              width: 40,
              height: 40,
              left: res.windowWidth - 60,
              top: res.windowHeight - 200
            },
            clickable: true,
          },
          {
            id: 5,
            iconPath: '../images/warn.png',
            position: {
              width: 40,
              height: 40,
              left: res.windowWidth - 60,
              top: res.windowHeight - 130
            },
            clickable: true,
          }]
        })
      },
    })
  },
  controltap: function (e){

    switch(e.controlId){
      case 1 :
        if(this.data.time){
            wx.navigateBack({
              delta:1
            })
        }else {
          wx.scanCode({
            success: (e) => {

              wx.showLoading({
                title: '正在获取密码',
              })
              wx.request({
                url: 'https://www.easy-mock.com/mock/5af263a845f8124d5d28d880/ofo/ofo',
                success: (data) => {
                  console.log(data)
                  wx.hideLoading();
                  wx.showToast({
                    title: '获取密码成功',
                    icon: 'success',
                    duration: 2000
                  });

                  wx.redirectTo({
                    url: '../scanResult/index?password=' + data.data.data.password + '&number=' + data.data.data.number,
                  })
                }
              })
            }
          }); 
        }
        
        break;
      case 3 :
        this.movetoCenter();
        break;
      case 4 : 
        wx.navigateTo({
          url: '../my/index',
        })
        break;
      case 5 : 
        wx.navigateTo({
          url: '../warn/index',
        })
        break;
    }
    
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.mapctx = wx.createMapContext('ofo-map');
    this.movetoCenter();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },
  movetoCenter:function (){
    this.mapctx.moveToLocation();
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