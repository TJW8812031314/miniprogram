// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        markers: [],
        longitude: '115.872951', //经度
        latitude: '28.784509', //纬度
        scale: 18 //地图缩放等级
    },
    tocreatMarkers(longitude, latitude) {
        let markers = [{
            "id": 1,
            "iconPath": "../../images/map-bicycle.png",
            "latitude": latitude,
            "longitude": longitude,
            "width": 52.5,
            "height": 30,
            "callout": {}
        }]
        this.setData({
            markers
        })
    },
    toVisit(e) {
        console.log(e);
    },
    toScan() {
        return wx.scanCode({
            success: (res) => {
                // console.log(res);
                wx.wx.showModal({
                    title: 'scan',
                    content: JSON.stringify(res), //把它变成一个字符窜
                });
            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        // 微信赋予程序可以调用的APP
        wx.showLoading({
            title: '获取坐标',
        });
        //手机的GPS
        wx.getLocation({
            type: 'gcj02',
            success: (res) => {
                // console.log(res);
                let { longitude, latitude } = res;
                this.tocreatMarkers(longitude, latitude)
                    // console.log(longitude, latitude);
                this.setData({
                    longitude,
                    latitude
                }, () => {
                    wx.hideLoading();
                })
            }
        })
    },
    toUser() {},
    toMsg() {},
    toReset() {
        // 当时用地图来来去去， 再回来当初的起点
        this.mapCtx.moveToLocation();
        this.setData({
            scale: 18
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {
        //地图上下文环境 把地图的组件放到JS中用（id）
        this.mapCtx = wx.createMapContext('myMap');
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