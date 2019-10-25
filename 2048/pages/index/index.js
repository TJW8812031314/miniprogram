// pages/main/index.js
const Grid = require('./grid.js')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        num: null
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        const gameGrid = new Grid(4);
        this.game = gameGrid; //为了方便后面调用
        //两个格子
        this.addRandomData();
        this.addRandomData();
        this.setData({
            num: gameGrid.grid
        })
    },

    addRandomData: function() {
        let cell = this.game.selectCell();
        console.log(cell)
        this.game.grid[cell.i][cell.j] = Math.random() > 0.5 ? 2 : 4;
    },
    game: null,
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0,
    touchstart: function(event) {
        const touch = event.touches[0];
        this.startX = touch.clientX;
        this.startY = touch.clientY;
    },
    touchmove: function(event) {
        const touch = event.touches[0];
        this.endX = touch.clientX;
        this.endY = touch.clientY;
    },
    touchend: function(event) {
        console.log(this.startX, this.startY, this.endX, this.endY);
        const disX = this.startX - this.endX; //在X轴偏移
        const disY = this.startY - this.endY; //在y轴偏移
        const absDisX = Math.abs(disX);
        const absDisY = Math.abs(disY);
        if (absDisX > 10 || absDisY > 10) {
            //0: 上 1 ；右 2: ； 下 3； 左
            var direction = absDisX > absDisY ?
                (disX < 0 ? 1 : 3) : (disY < 0 ? 2 : 0);
            console.log(direction);
            this.move(direction)
        }
    },
    move: function(direction) {
        //数字合并
        this.combine()
    },
    combine: function(direction) {
        // 数字滑动 把数字靠边
        this.slideNumber();
        let res = this.slideNumber(['', 2, '', 2]);
        console.log('数字靠边', res);
    },
    slideNumber: function(arr) {
        //输入['', 2 , '', 2] -> 输出[2, 2, '', '']
        let current = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== '') {
                arr[current] = arr[i];
                current++;
            }
        }
        //[2, 2, '', 2];
        for (let j = current; j < arr.length; j++) {
            arr[j] = '';
        }
        return arr;
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