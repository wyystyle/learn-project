var { articles } = require('../../../date/db.js');
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
    var articleId = options.articleId;
    this.data.articleId = articleId;
    var article = articles[articleId];
    this.setData({
      article: article
    });
    var articleCollection = wx.setStorageSync('article_Storage');
    var articleCollected = false;
    if (articleCollection) {
      articleCollected = articleCollection[articleId]
    } else {
      var data = {};
      data[articleId] = false;
      wx.setStorageSync('article_Storage', data)
    }

  },
  tapCollection:function(){
    var articleCollection = wx.getStorageSync('article_Storage');
    var articleCollected = articleCollection[this.data.articleId];
    articleCollection[this.data.articleId] = !articleCollected;
    wx.setStorageSync('article_Storage', articleCollection)
    this.setData({
      articleCollected: articleCollected
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