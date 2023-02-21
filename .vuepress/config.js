const friendLink = require("./config/friendLink.js");
const nav = require("./config/nav.js");
const sidebar = require("./config/sidebar.js");
const head = require("./config/head.js");
const blogConfig = require("./config/blogConfig.js");
const plugins = require("./config/plugins/index.js");
const valineConfig = require("./config/valineConfig.js");
module.exports = {
  title: "blog",
  description: "my blog",
  dest: "public",
  head,
  theme: "reco",
  dest: "dist",
  themeConfig: {
    valineConfig, //底部评论
    nav, //导航栏
    sidebar, //侧边栏
    blogConfig, //博客配置
    friendLink, //友情链接
    subSidebar: "auto", //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    type: "blog", //blog
    logo: "/logo.png", //logo
    search: true, //搜索
    searchMaxSuggestions: 10, //搜索最大建议数
    lastUpdated: "上次更新", // string | boolean
    author: "guoxq", //作者
    authorAvatar: "/avatar.png", //头像
    record: "xxxx", //备案号
    startYear: "2023", // 项目开始时间
  },
  plugins, //插件
  markdown: {
    lineNumbers: true, // 代码块显示行号
  },
};
