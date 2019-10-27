// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'jiawentian'

cloud.init()
const db = cloud.database({ env })

// 云函数入口函数
exports.main = async(event, context) => {
    const openId = cloud.getWXContext().OPENID // 拿到用户ID

    let groupList = await db.collection('usre-group') //查询库里面是否有usreid
        .where({
            userId: openId
        })
        .get()
    let returnResult = []
    for (let item of groupList.data) {
        // 循环groupList  item每一条数据
        const oneGroup = await db.collection('group') // 查询是否有这些数据
            .where({
                _id: item.groupId,
                delete: false
            })
            .get()
        if (oneGroup.data.length > 0) {
            //   const userInfo = await db.collection('user')
            //   .where({
            //     openId: oneGroup.data[0].createBy
            //   })
            //   .get()
            //   oneGroup.data[0].createBy = userInfo.data[0]
            //   oneGroup.data[0].relateUserGroupId = item._id
            returnResult.push(oneGroup.data[0])
        }
    }
    return returnResult.sort((a, b) => a.createTime < b.createTime ? 1 : -1) // 拿时间排序
}