// pages/stories/index.js
const entities = require('../../assets/entities.js')
let currentVideo;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        entities,
        currentVid: null
    },
    play(event) {
        const target = event.target;
        const currentVid = target.dataset.vid;
        if (this.data.currentVid !== null) { //如果播放不为空
            currentVideo.pause(); //把上一个暂停掉
        }
        if (currentVid) {

            currentVideo = wx.createVideoContext(`${currentVid}`);
            currentVideo.play();

        }
        this.setData({
            currentVid
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})