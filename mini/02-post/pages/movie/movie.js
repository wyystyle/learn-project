// pages/movie/movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.request({
    //   url: 'http://yushu.im/v2/movie/in_theater?start=0&count=3',
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success(res) {
    //     console.log(res)
    //   }
    // })
    var _this = this;
    this.getData('http://t.yushu.im/v2/movie/in_theaters?start=0&count=3',function(data){
      console.log(data);
      _this.setData({
        inTheatersData:data,
        inTheatersTag: "即将上映"
      })
    })
    this.getData('http://t.yushu.im/v2/movie/coming_soon?start=1&count=3', function (data) {
      console.log(data);
      _this.setData({
        comingSoonData: data,
        comingSoonTag:"正在上映"
      })
    })
    this.getData('http://t.yushu.im/v2/movie/top250?start=0&count=3', function (data) {
      console.log(data);
      _this.setData({
        top250Data: data,
        top250Tag: "豆瓣Top2018"
      })
    })
  },
  getData:function(url,success){
    var _this =this;
    wx.request({
      url:url,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        success(_this.formatData(res.data));
      }
    })
  },
  formatData:function(data){
    var arr=[];
    for(var i=0;i<data.subjects.length;i++){
      arr.push({
        coverImg: data.subjects[i].images.large,
        title: data.subjects[i].title,
        stars: data.subjects[i].rating.stars,
        score: data.subjects[i].rating.average
      })
    }
    return arr;
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