## 本题注意rule规则类型不同，如数组、对象、字符串
## 所以要针对rule规则类型要进行判断分类，首先抽离出第一个参数和第二个参数是否存在的情况
## 主要思路是对str中遍历查找是否存在rule，可通过indexof方法，同时可以将索引值存储在ids中，如果查找到rule的话记录rule在str的首个位置，并进行脱敏字符串的替换
## 对于手机号，利用正则/^1[3456789]\d{9}$/首先将手机号码提取到arr，由题，我们可以直接将中间五位数字直接替换成脱敏符号