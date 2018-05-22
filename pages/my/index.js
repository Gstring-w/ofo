// pages/my/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{
      userUrl:'',
      nickName:'未登录'
    },
    status:'登录',
    btnType:'primary'
  },
  statusBtn:function(){
    if(this.data.status == '登录'){
      wx.login({
        success:()=>{
          wx.getUserInfo({
            success:(res)=>{
              this.setData({
                userInfo:{
                  userUrl:res.userInfo.avatarUrl,
                  nickName:res.userInfo.nickName
                },
                status: '退出登录',
                btnType: 'warn'
              })
              console.log(res)
              wx.setStorage({
                key: 'userInfo',
                data: {
                  userInfo: {
                    userUrl: res.userInfo.avatarUrl,
                    nickName: res.userInfo.nickName
                  }
                },
              })
            }
          })
          
        }
      })
    }else{
        this.setData({
          userInfo:{
            userUrl:'',
            nickName:'未登录'
          },
          btnType:'primary',
          status:'登录'
        })
    }
  },
  walletBtn:function(){
      wx.navigateTo({
        url: '../wallet/index',
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    wx.getStorage({
      key: 'userInfo',
      success:(res)=> {
        console.log(res);
        this.setData({
          userInfo: {
            userUrl: res.data.userInfo.userUrl,
            nickName: res.data.userInfo.nickName
          },
          status: '退出登录',
          btnType: 'warn'
        })
      },
    })
    if (this.data.userInfo.userUrl !== '') {
      this.setData({
        status: '退出登录',
        btnType: 'warn'
      })
    };
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