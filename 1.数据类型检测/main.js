/**
 * @description: 数据类型检测
 * @param {*} data 传入的待检测数据
 * @return {*} 返回数据类型
 */
function getType(data) {
    // TODO：待补充代码

    if (data === null) {
        return String(data)
    }
    const toType = (data) => {
        return Object.prototype.toString.call(data).replace('[object ', '').replace(']', '')
    }
    return typeof data === 'object' ?
        toType(data) :
        typeof data;
}



module.exports = {
    getType
}


