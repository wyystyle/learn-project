// pages/movie/movie-more/movie-more.js
var { getMovieListData } = require("../../../utils/utils.js");
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    requestUrl:"",
    totalCount:0,
    totalMovies:[],
    isEnd:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.type)
    var _this = this;
    var title = '';
    var baseUrl = app.G_DATA.baseUrl;
    var requestUrl = '';
    switch (options.type)
      {
        case ('inTheatersType') :
        requestUrl = baseUrl + 'in_theaters';
        title = "正在热映"
        break;
        case ('comingSoonType') :
        requestUrl = baseUrl + 'coming_soon';
        title = "即将上映"
        break;
      case ('top250Type'):
        requestUrl = baseUrl + 'top250';
        title = "豆瓣top250"
        break;
      }
    wx.setNavigationBarTitle({
      title: title,
    })
    this.data.requestUrl = requestUrl;
    wx.showNavigationBarLoading();
    getMovieListData(requestUrl, this.handleMoviesList)
  },
  handleMoviesList: function (data){
    wx.hideNavigationBarLoading();
    if(data.length == 0){
      this.data.isEnd = true;
      wx.showToast({
        title: '已经没有更多了',
      })
    }
    this.data.totalCount += data.length;
    this.data.totalMovies = this.data.totalMovies.concat(data); 
    this.setData({
      moviesData: this.data.totalMovies
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
    if(this.data.isEnd){
      wx.showToast({
        title: '已经没有更多了',
      })
    }
    var _this =this;
   var nextRequestUrl = this.data.requestUrl + '?start=' + this.data.totalCount + '&count=20';
    wx.showNavigationBarLoading();
    getMovieListData(nextRequestUrl,this.handleMoviesList)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})