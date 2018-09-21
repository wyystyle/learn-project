var { articles } = require('../../../date/db.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isMusicPlay:false
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


    var articleCollection = wx.getStorageSync('article_collection');
    var articleCollected = false;
    if (articleCollection) {
      articleCollected = !!articleCollection[articleId]
    } else {
      var data = {};
      data[articleId] = false;
      wx.setStorageSync('article_collection',data)
    }
    this.setData({
      articleCollected:articleCollected
    })

    //监听音乐播放状态
    var _this = this;
    var backgroundAudioManager = wx.getBackgroundAudioManager();
    backgroundAudioManager.onPlay(function(){
      _this.setData({
        isMusicPlay: true
      })
    })
    backgroundAudioManager.onPause(function(){
      _this.setData({
        isMusicPlay: false
      })
    })

  },
  tapCollection:function(){
    var articleCollection = wx.getStorageSync('article_collection');
    var articleCollected = articleCollection[this.data.articleId];
    articleCollection[this.data.articleId] = !articleCollected;
    wx.setStorageSync('article_collection',articleCollection)
    this.setData({
      articleCollected:!articleCollected
    })
    wx.showToast({
      title: articleCollected ? "取消成功" : "收藏成功"
    })
  },
  tapShare:function(){
    var itemList = ["分享QQ","分享微信","分享微博"];
    wx.showActionSheet({
      itemList:itemList,
      success:function(res){
        wx.showToast({
          title: itemList[res.tapIndex] + "成功",
        })
      }
    })
  },
  tapMusic:function(){
    console.log(this.data)
    var isMusicPlay = !!this.data.isMusicPlay;
    var backgroundAudioManager = wx.getBackgroundAudioManager();
    if (isMusicPlay){
      backgroundAudioManager.pause()
      this.setData({
        isMusicPlay: false
      })
    }else{
      backgroundAudioManager.src = this.data.article.music.src;
      backgroundAudioManager.title = this.data.article.music.title;
      backgroundAudioManager.coverImgUrl = this.data.article.music.coverImgUrl;
      backgroundAudioManager.play()
      this.setData({
        isMusicPlay:true
      })
    }
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