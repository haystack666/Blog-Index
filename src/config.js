const SERVE = false; // 是否使用线上服务器

const HOST = "https://esunr.xyz:8080/api/esunrIndex"; // 线上服务器地址，如果不使用请留空

const BLOG_NAME = "我的主页"; // 个人网站名字

const BLOG_URL = "https://imhay.icu"; // 个人网站链接（请填写完整链接）

const GITHUB = ""; // 右上角 Github 图标链接，留空不显示

const BACKGROUND_IMG_URL = "https://api.dujin.org/bing/1920.php"; // 背景图片url，默认为必应每日图片（第三方接口）

const SORT_DATA = [
  { sortId: 1, title: "常用链接" },
  { sortId: 2, title: "个人网站" }
]; // 网站分类列表，请按照API.md中'/getSort'接口中返回的data格式填写

const RECORD_NUMBER = "蜀ICP备2022018495号"; // 网站备案号，留空不显示

const PAGES_DATA = [
  {
    pageId: 1,
    sortId: 1,
    title: "百度",
    subtitle: "国内最大的搜索引擎",
    url: "https://www.baidu.com/",
    icon: ""
  },
  {
    pageId: 2,
    sortId: 1,
    title: "Goole",
    subtitle: "全球最大的搜索引擎",
    url: "https://www.google.com/",
    icon: ""
  },
  {
    pageId: 3,
    sortId: 1,
    title: "IT之家",
    subtitle: "爱科技，爱这里",
    url: "https://www.ithome.com/",
    icon: ""
  },
  {
    pageId: 4,
    sortId: 1,
    title: "知乎",
    subtitle: "有问题，就会有答案",
    url: "https://www.zhihu.com/",
    icon: ""
  },
  {
    pageId: 5,
    sortId: 1,
    title: "掘金",
    subtitle: "面向全球中文开发者的技术内容分享与交流平台",
    url: "https://www.juejin.cn/",
    icon: ""
  },
  {
    pageId: 6,
    sortId: 1,
    title: "CSDN",
    subtitle: "全球知名中文IT技术交流平台",
    url: "https://www.csdn.net/",
    icon: ""
  },
  {
    pageId: 7,
    sortId: 1,
    title: "持续更新",
    subtitle: "",
    url: "https://imhay.icu/",
    icon: ""
  },
  {
    pageId: 1,
    sortId: 2,
    title: "Haystack的主页",
    subtitle: "欢迎来到Haystack的主页",
    url: "https://imhay.icu/",
    icon: ""
  },
  {
    pageId: 2,
    sortId: 2,
    title: "Haystack的小屋",
    subtitle: "欢迎来到Haystack的小屋",
    url: "https://blog.imhay.icu/",
    icon: ""
  },
  {
    pageId: 3,
    sortId: 2,
    title: "Haystack的云盘",
    subtitle: "欢迎来到Haystack的云盘",
    url: "https://drive.imhay.icu/",
    icon: ""
  },
  {
    pageId: 4,
    sortId: 2,
    title: "Haystack的音乐",
    subtitle: "欢迎来到Haystack的音乐",
    url: "https://music.imhay.icu/",
    icon: ""
  },
  {
    pageId: 4,
    sortId: 2,
    title: "Haystack的站点检测",
    subtitle: "欢迎来到Haystack的站点检测",
    url: "https://status.imhay.icu/",
    icon: ""
  },
]; // 网站分类列表，请按照API.md中'/getPages'接口中返回的data格式填写

const SLOGAN = [
  "欢迎拜访",
  "歡迎拜訪",
  "Welcome, my friend!",
  "訪問へようこそ",
  "嗨，别来无恙",
  "不忘初心，一生浪漫",
  "最近还好吗？",
  "流星，落花，萤火",
  "马车越空，晃荡越响"
]; // 在Logo下方显示的标题

const FOOTER_INFO = false; // 是否显示抽屉右下角的文字信息

export default {
  SERVE,
  HOST,
  BLOG_URL,
  BLOG_NAME,
  SORT_DATA,
  PAGES_DATA,
  SLOGAN,
  GITHUB,
  FOOTER_INFO,
  BACKGROUND_IMG_URL,
  RECORD_NUMBER
};
