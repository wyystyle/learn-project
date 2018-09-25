// pages/movie/movie.js
var { getMovieListData } = require("../../utils/utils.js");
var app = getApp();

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
    var baseUrl = app.G_DATA.baseUrl;
    var inTheatersUrl = baseUrl + 'in_theaters?start=0&count=3';
    var comingSoonUrl = baseUrl + 'coming_soon?start=1&count=3';
    var top250Url = baseUrl + 'top250?start=0&count=3';
    getMovieListData(inTheatersUrl,function(data){
      _this.setData({
        inTheatersData:data,
        inTheatersTag: "即将上映",
        inTheatersTypes:"inTheatersType"
      })
    })
    getMovieListData(comingSoonUrl, function (data) {
      _this.setData({
        comingSoonData: data,
        comingSoonTag:"正在上映",
        comingSoonTypes: "comingSoonType"
      })
    })
    getMovieListData(top250Url, function (data) {
      _this.setData({
        top250Data: data,
        top250Tag: "豆瓣Top2018",
        top250Types: "top250Type"
      })
    })
  },
  tapMovieMore:function(tagTypes){
    console.log(tagTypes)
    var tagType = tagTypes.target.dataset.type;
    console.log(tagType)
    wx.navigateTo({
      url: 'movie-more/movie-more?type=' + tagType
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

  }
})