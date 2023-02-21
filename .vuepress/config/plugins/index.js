const plugins = require("./data.js");
module.exports = [
  // 上一次更新时间
  ["@vuepress/last-updated", {}],
  // 一键复制代码 vuepress-plugin-code-copy
  ["vuepress-plugin-code-copy", {}],
  // 阅读进度条 vuepress-plugin-reading-progress
  ["reading-progress", {}],
  // 鼠标点击特效 vuepress-plugin-cursor-effects
  ["vuepress-plugin-cursor-effects", plugins["cursor-effects"]],
  // 看板娘 vuepress-plugin-kan-ban-niang
  ["@vuepress-reco/vuepress-plugin-kan-ban-niang", plugins["kan-ban-niang"]],
  // 公告 @vuepress-reco/vuepress-plugin-bulletin-popover
  // ["@vuepress-reco/vuepress-plugin-bulletin-popover", plugins["bulletin-popover"]],
  // 音乐 @vuepress-reco/vuepress-plugin-bgm-player
  ["@vuepress-reco/vuepress-plugin-bgm-player", plugins["bgm-player"]],
  // 彩色背景 vuepress-plugin-ribbon-animation
  ["ribbon-animation", plugins["ribbon-animation"]],
];
