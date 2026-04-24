//测试地址
const DEVURL = '127.0.0.1:5000';
const domain = process.env.NODE_ENV === 'development' ? DEVURL : PRODUCTURL;
// 在开发中，一般还需要单点登录或者其他功能的通用请求头，可以一并配置进来
const headers = {
  get: {
    "hmr-api": "hmr-api"
  },
  post: {
    "hmr-api": "hmr-api"
  }
};
//设置请求头
export const config = {
  url: `http://${domain}/`, // 本地测试接口地址
  cancelDuplicated: true, // 全局开启是否取消重复的请求配置=>true开启、false关闭
  timeout: 15000, //设置接口请求超时-20s
  headers, //请求头
}
//自定义重复请求拦截标识，默认true开启
export const isHmr = true;