class Grid {
    constructor(size) {
        this.size = size;
        this.grid = this.init();
    }
    init() {
            let grid = [];
            for (let i = 0; i < this.size; i++) {
                // 行
                grid[i] = []
                for (let j = 0; j < this.size; j++) {
                    //列
                    grid[i].push('');
                }
            }
            return grid;
        }
        //把 空格子 找出来
    useFulCell() {
            let cells = [];
            for (let i = 0; i < this.size; i++) {
                for (let j = 0; j < this.size; j++) {
                    if (this.grid[i][j] == '') {
                        cells.push({
                            i,
                            j
                        })
                    }
                }
            }

            return cells
        }
        // 从一堆空格子中 随机拿一个
    selectCell() {
        let unUsed = this.useFulCell(); //3
        let index = Math.floor(Math.random() * unUsed.length); //10
        return unUsed[index];
    }
}
module.exports = Grid;