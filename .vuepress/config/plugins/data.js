module.exports = {
  "cursor-effects": {
    size: 2, // size of the particle, default: 2
    shape: "circle", // shape of the particle, default: 'star'
    zIndex: 999999999, // z-index property of the canvas, default: 999999999
  },
  "kan-ban-niang": {
    theme: [
      "blackCat",
      "miku",
      "whiteCat",
      "haru1",
      "haru2",
      "haruto",
      "koharu",
      "izumi",
      "shizuku",
      "wanko",
      "z16",
    ],
    clean: false,
    info: "https://github.com/guoxq971",
    messages: {
      welcome: "欢迎来到我的博客",
      home: "心里的花，我想要带你回家。",
      theme: "好吧，希望你能喜欢我的其他小伙伴。",
      close: "你不喜欢我了吗？痴痴地望着你。",
    },
    // messageStyle: { right: "68px", bottom: "290px" },
    // width: 250,
    // height: 320,
  },
  "bulletin-popover": {
    title: "公告",
    body: [
      {
        type: "title",
        content: "欢迎加我的QQ/vx 🎉🎉🎉",
        style: "text-aligin: center;",
      },
      {
        type: "text",
        content: "QQ/VX：1349320519",
        style: "text-align: center;",
      },
      {
        type: "text",
        content: "喜欢的主题特效可以去个人信息",
        style: "text-align: center;",
      },
      {
        type: "text",
        content: "友链或疑问均可在留言板给我留言",
        style: "text-align: center;",
      },
    ],
    footer: [{ type: "button", text: "打赏", link: "/blog/donate" }],
  },
  "bgm-player": {
    autoplay: false, // 自动播放，默认为 false
    autoShrink: true, // 自动缩小，默认为 true
    shrinkMode: "float", // 缩小模式，float：浮动缩小，mini：迷你模式
    floatPosition: "left", // 浮动缩小模式下的位置，left：左边，right：右边
    floatStyle: {
      bottom: "200px",
      "z-index": "999999",
    }, // 浮动缩小模式下的样式
    audios: [
      // 本地文件示例
      //   {
      //     name: "장가갈 수 있을까",
      //     artist: "咖啡少年",
      //     url: "/bgm/1.mp3",
      //     cover: "/bgm/1.jpg",
      //   },
      // 网络文件示例
      {
        name: "강남역 4번 출구",
        artist: "Plastic / Fallin` Dild",
        url: "https://assets.smallsunnyfox.com/music/2.mp3",
        cover: "https://assets.smallsunnyfox.com/music/2.jpg",
      },
      {
        name: "用胳膊当枕头",
        artist: "최낙타",
        url: "https://assets.smallsunnyfox.com/music/3.mp3",
        cover: "https://assets.smallsunnyfox.com/music/3.jpg",
      },
    ],
  },
  "ribbon-animation": {
    size: 90, // 默认数据
    opacity: 0.3, //  透明度
    zIndex: -1, //  层级
    opt: {
      colorSaturation: "80%", // 色带HSL饱和度
      colorBrightness: "60%", // 色带HSL亮度量
      colorAlpha: 0.65, // 带状颜色不透明度
      colorCycleSpeed: 6, // 在HSL颜色空间中循环显示颜色的速度有多快
      verticalPosition: "center", // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
      horizontalSpeed: 200, // 到达屏幕另一侧的速度有多快
      ribbonCount: 2, // 在任何给定时间，屏幕上会保留多少条带
      strokeSize: 0, // 添加笔划以及色带填充颜色
      parallaxAmount: -0.5, // 通过页面滚动上的因子垂直移动色带
      animateSections: true, // 随着时间的推移，为每个功能区添加动画效果
    },
    ribbonShow: false, //  点击彩带  true显示  false为不显示
    ribbonAnimationShow: true, // 滑动彩带
  },
};
