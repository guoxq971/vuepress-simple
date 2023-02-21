---
home: true
heroText: Guoxq的博客
tagline: 一点一滴都是进步
heroImageStyle:
  {
    maxWidth: "600px",
    width: "100%",
    display: block,
    margin: "9rem auto 2rem",
    background: "#fff",
    borderRadius: "1rem",
  }
bgImage: back1.jpg
bgImageStyle: { height: "1000px" }
---

<!-- 首页向下的箭头(要配合首屏铺满 height: "1000px")  -->
<style>
/* 自定义-start */
.navbar{
  background: transparent!important;
}
.hero{
  color: #fff;
}
.navbar .links{
  background: transparent!important;
}
.home-blog{
  font-family: cursive;
}
/* 自定义-end */
/* 背景图 */
body{        
  background-image: url('https://img-blog.csdnimg.cn/img_convert/6602d9cf3ab2ce79293484b2b871138f.gif');
}
.anchor-down {
  display: block;
  margin: 12rem auto 0;
  bottom: 45px;
  width: 20px;
  height: 20px;
  font-size: 34px;
  text-align: center;
  animation: bounce-in 5s 3s infinite;
  position: absolute;
  left: 50%;
  bottom: 30%;
  margin-left: -10px;
  cursor: pointer;
}

@-webkit-keyframes bounce-in {
  0% {
    transform: translateY(0);
  }

  20% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-20px);
  }

  80% {
    transform: translateY(0);
  }

  to {
    transform: translateY(0);
  }
}

.anchor-down::before {
  content: "";
  width: 20px;
  height: 20px;
  display: block;
  border-right: 3px solid #fff;
  border-top: 3px solid #fff;
  transform: rotate(135deg);
  position: absolute;
  bottom: 10px;
}

.anchor-down::after {
  content: "";
  width: 20px;
  height: 20px;
  display: block;
  border-right: 3px solid #fff;
  border-top: 3px solid #fff;
  transform: rotate(135deg);
}
</style>
<script>
export default {
  mounted() {
    const ifJanchor = document.getElementById("JanchorDown");
    ifJanchor && ifJanchor.parentNode.removeChild(ifJanchor);
    let a = document.createElement("a");
    a.id = "JanchorDown";
    a.className = "anchor-down";
    document.getElementsByClassName("hero")[0].append(a);
    let targetA = document.getElementById("JanchorDown");
    targetA.addEventListener("click", (e) => {
      // 添加点击事件
      this.scrollFn();
    });
  },
  methods: {
    scrollFn() {
      const windowH = document.getElementsByClassName("hero")[0].clientHeight; // 获取窗口高度         
      document.documentElement.scrollTop = windowH;
      // 滚动条滚动到指定位置
    },
  },
};
</script>
