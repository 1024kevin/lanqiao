/**
 * @description:
 * @param {*} str
 * @param {*} rule
 * @param {*} symbol
 * @param {*} dealPhone
 * @return {*}
 */
const toDesensitization = (str, rule, symbol = "*", dealPhone = true) => {
    if (str == '') {
        return null;
    } else if (rule == null) {
        return str;
    } else {
        var ids = [];
        let newStr = "";
        if (typeof rule == "object") {
            rule.forEach(item => {
                while (str.indexOf(item) != -1) {
                    ids.push(str.indexOf(item))
                    let cnt = item.length;
                    let sign = ""

                    for (let i = 0; i < cnt; i++) {
                        sign += symbol;
                    }
                    newStr = str.replace(item, sign);
                    str = newStr;
                }
            });
        } else {
            while (str.indexOf(rule) != -1) {
                ids.push(str.indexOf(rule))
                let cnt = rule.length;
                let sign = ""

                for (let i = 0; i < cnt; i++) {
                    sign += symbol;
                }
                newStr = str.replace(rule, sign);
                str = newStr;
            }
        }

        if (dealPhone) {
            let arr = str.match(/^1[3456789]\d{9}$/);
            var flag = true;
            let newstr = ""
            arr.forEach((item, index) => {

                if (item.length > 1) {
                    let ss = "";
                    if (!flag) {
                        index = index + 10;
                    }
                    //console.log(index);
                    for (let i = 0; i < 5; i++) {
                        ss += str[index + 3  + i]
                    }
                    //console.log(ss);
                    newstr = str.replace(ss, "*****")
                    str = newstr
                    //console.log(str);
                    flag = false;
                }
            })
        }
    }
    let obj = {};
    obj = {
        ids: ids,
        newStr: str
    }
    return obj

    //console.log("******", obj);
};

// toDesensitization("放假了电视剧理发店，杰弗里斯寄过来的15356895642结果劳动竞赛", "发")
module.exports = toDesensitization;

