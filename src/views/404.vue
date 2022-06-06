<template>
  <div class="section-notFound">
    <div class="agileits-main">
      <div class="agileinfo-row">
        <div class="w3top-nav">
          <div class="w3top-nav-left">
            <h1><a href="index.html">Công Ty LH2D</a></h1>
          </div>
          <div class="w3top-nav-right">
            <h6>Số Điện Thoại: +84 346 996 951</h6>
          </div>
          <div class="clear"></div>
        </div>
        <div class="w3layouts-errortext">
          <h2><span>4</span> <span>0</span> <span>4</span></h2>
          <h3>
            Xin Lỗi!! Trang Này Hiện Không Tồn Tại <br /><router-link
              to="/"
              class="homePage"
              >Về Trang Chủ</router-link
            >
          </h3>
          <p class="w3lstext mb-1">
            Được thành lập từ năm 2021 cho đến nay công ty chúng tôi đã ngày càng
            được mở rộng, ngày càng được khách hàng ưa chuộng. Hiện tại, trong thời
            gian sắp tới công ty đang đề ra mục tiêu sẽ trở thành một trong số những
            công ty đi đầu về ngành dịch vụ truyền thông
          </p>
          <p class="w3lstext">
            Sự tin tưởng và ủng hộ của khách hàng trong suốt thời gian qua là nguồn
            động viên to lớn trên bước đường phát triển của công ty LH2D. Chúng tôi
            xin hứa sẽ không ngừng hoàn thiện, phục vụ khách hàng tốt nhất để luôn
            xứng đáng với niềm tin ấy."
          </p>
          <div class="wthree-sicon">
            <a href="#" class="social-button twitter"
              ><i class="fa fa-twitter"></i
            ></a>
            <a href="#" class="social-button facebook"
              ><i class="fa fa-facebook"></i
            ></a>
            <a href="#" class="social-button google"
              ><i class="fa fa-google-plus"></i
            ></a>
            <a href="#" class="social-button dribbble"
              ><i class="fa fa-dribbble"></i
            ></a>
            <a href="#" class="social-button skype"><i class="fa fa-skype"></i></a>
          </div>
        </div>
      </div>
    </div>
    <!-- //main -->
    <!-- copyright -->
    <div class="copyright w3-agile">
      <p>
        © Công Ty Cở Sở Vật Chất LH2D | Điều Hành bởi
        <a href="https://www.facebook.com/SyDung2222000/" target="_blank"
          >Nguyễn Sỹ Dũng</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "404",
};
</script>
<style scoped>
a {
  text-decoration: none;
}
.txt-rt {
  text-align: right;
} /* text align right */
.txt-lt {
  text-align: left;
} /* text align left */
.txt-center {
  text-align: center;
} /* text align center */
.float-rt {
  float: right;
} /* float right */
.float-lt {
  float: left;
} /* float left */
.clear {
  clear: both;
} /* clear float */
.pos-relative {
  position: relative;
} /* Position Relative */
.pos-absolute {
  position: absolute;
} /* Position Absolute */
.vertical-base {
  vertical-align: baseline;
} /* vertical align baseline */
.vertical-top {
  vertical-align: top;
} /* vertical align top */
nav.vertical ul li {
  display: block;
} /* vertical menu */
nav.horizontal ul li {
  display: inline-block;
} /* horizontal menu */
img {
  max-width: 100%;
}
/*-- end reset --*/
.section-notFound {
  font-family: "Open Sans", sans-serif;
  /* background: url("https://cdn.pixabay.com/photo/2017/04/10/10/08/universe-2218012_960_720.jpg")
    no-repeat center 0px; */
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-blue-tech-line-background-promotion-banner-image_144856.jpg")
      no-repeat center 0px;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
}
.homePage {
  font-family: "Open Sans", sans-serif !important;
  font-size: 16px !important;
}
/*-- main --*/
.agileinfo-row {
  width: 65%;
  margin: 0 auto;
}
/*-- top-nav --*/
.w3top-nav {
  padding-top: 2.5em;
}
.w3top-nav-left {
  float: left;
}
.w3top-nav-right {
  float: right;
  margin-top: 0.8em;
}
.w3top-nav-left h1 {
  font-size: 2.8em;
  font-weight: 100;
  line-height: 0.9em;
  letter-spacing: -2px;
}
.w3top-nav-left h1 a {
  color: #fff;
}
.w3top-nav-right h6 {
  font-size: 1em;
  color: #fff;
  font-weight: 100;
  letter-spacing: 2px;
}
/*-- //top-nav --*/
/*-- //errortext --*/
.w3layouts-errortext {
  padding-top: 5em;
  text-align: center;
}
.w3layouts-errortext h2 {
  font-size: 6em;
  color: #fff;
  line-height: 1.8em;
  font-family: "Share Tech Mono", monospace;
}
.w3layouts-errortext h2 span {
  background: #fff;
  color: #0214bd;
  padding: 0.1em 0.3em;
  border: 15px solid #0214bd;
  -webkit-box-shadow: 0px 0px 10px 1px #000;
  -moz-box-shadow: 0px 0px 10px 1px #000;
  box-shadow: 0px 0px 10px 1px #000;
}
.w3layouts-errortext h3 {
  font-size: 1.5em;
  color: #fff;
  font-weight: 600;
  border: 1px solid #fff;
  display: inline-block;
  padding: 0.8em 2em;
  margin: 2em 0 0;
}
.w3layouts-errortext h3 a {
  font-size: 0.6em;
  color: #fff;
  font-weight: 100;
  background: #0214bd;
  display: inline-block;
  padding: 0.5em 1em;
  margin-top: 1em;
  font-family: "Share Tech Mono", monospace;
  -webkit-transition: 0.6s all;
  -moz-transition: 0.6s all;
  transition: 0.6s all;
}
.w3layouts-errortext h3 a:hover {
  color: #0214bd;
  background: #fff;
}
p.w3lstext {
  font-size: 1em;
  color: #fff;
  line-height: 2em;
  font-weight: 400;
  width: 65%;
  margin: 1.5em auto;
}
/*-- wthree-sicons --*/
.wthree-sicon a {
  font-size: 1em;
  color: #fff;
  margin: 0 0.1em;
  border: 1px solid transparent;
  width: 32px;
  height: 32px;
  display: inline-block;
  text-align: center;
  line-height: 2em;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  transition: 0.5s all;
}
.wthree-sicon a:hover {
  color: #ffc107;
  border-color: #ffc107;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -o-border-radius: 50%;
  -ms-border-radius: 50%;
  border-radius: 50%;
}
/*-- //wthree-sicons --*  
/*-- errortext --*/
/*-- copyright --*/
.copyright {
  margin: 3em 0 1em;
  text-align: center;
}
.copyright p {
  font-size: 1em;
  color: #fff;
  line-height: 1.8em;
}
.copyright p a {
  color: #fff;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
  -ms-transition: 0.5s all;
  transition: 0.5s all;
}
.copyright p a:hover {
  color: #4caf50;
}
/*-- //copyright --*/
/*-- //main --*/
/*-- responsive-design --*/
@media (max-width: 1280px) {
  p.w3lstext {
    width: 72%;
  }
}
@media (max-width: 1080px) {
  p.w3lstext {
    width: 94%;
  }
  .agileinfo-row {
    width: 68%;
  }
}
@media (max-width: 1024px) {
  .w3layouts-errortext h2 {
    font-size: 5.5em;
  }
  .w3layouts-errortext h3 {
    font-size: 1.3em;
  }
  .w3layouts-errortext {
    padding-top: 7em;
  }
}
@media (max-width: 800px) {
  .agileinfo-row {
    width: 80%;
  }
}
@media (max-width: 736px) {
  .w3top-nav-left h1 {
    font-size: 2.6em;
  }
  .w3layouts-errortext h2 {
    font-size: 4.5em;
  }
  .w3layouts-errortext h3 {
    padding: 0.8em 1em;
  }
  .w3top-nav {
    padding-top: 2em;
  }
  .w3top-nav-right {
    margin-top: 0.5em;
  }
}
@media (max-width: 640px) {
  .w3top-nav-right h6 {
    letter-spacing: 1px;
  }
  .w3layouts-errortext h2 span {
    border-width: 10px;
  }
  .w3top-nav-left h1 {
    font-size: 2.4em;
  }
  .w3layouts-errortext h3 {
    font-size: 1.2em;
  }
  .agileinfo-row {
    width: 90%;
  }
  .copyright p {
    padding: 0 1em;
  }
}
@media (max-width: 480px) {
  .w3top-nav-right h6 {
    font-size: 0.9em;
  }
  .w3layouts-errortext h2 {
    font-size: 3.5em;
  }
  .w3layouts-errortext h3 {
    font-size: 1.1em;
    line-height: 1.6em;
    margin: 1.5em 0 0;
  }
  .w3layouts-errortext h3 a {
    font-size: 0.7em;
    padding: 0.2em 1em;
    margin-top: 0.5em;
  }
  p.w3lstext {
    width: 100%;
    font-size: 0.8em;
  }
  .copyright p {
    font-size: 0.9em;
  }
}
@media (max-width: 414px) {
  .w3top-nav-right h6 {
    letter-spacing: 0px;
  }
  .w3top-nav-left h1 {
    font-size: 2.2em;
  }
  .w3layouts-errortext h2 span {
    border-width: 7px;
  }
  .w3layouts-errortext h2 span:nth-child(2) {
    margin: 0 -0.1em;
  }
  .w3layouts-errortext h3 {
    font-size: 1em;
    margin: 1em 0 0;
  }
}
@media (max-width: 375px) {
  .w3top-nav-left,
  .w3top-nav-right {
    float: none;
    text-align: center;
  }
  .w3top-nav-left h1 {
    font-size: 2em;
  }
  .w3top-nav-right {
    margin-top: 0.8em;
  }
  .w3top-nav-right h6 {
    font-size: 0.8em;
  }
  .w3layouts-errortext {
    padding-top: 3em;
  }
  .w3layouts-errortext h2 {
    font-size: 3em;
  }
  .copyright {
    margin: 2em 0 1em;
  }
  .wthree-sicon a {
    font-size: 0.9em;
    width: 28px;
    height: 28px;
  }
}
@media (max-width: 320px) {
  .w3layouts-errortext h2 span:nth-child(2) {
    margin: 0 -0.2em;
  }
  .w3layouts-errortext h3 {
    font-size: 0.9em;
  }
  .w3layouts-errortext h2 {
    font-size: 2.5em;
  }
  .w3layouts-errortext h2 span {
    border-width: 5px;
  }
  .w3top-nav {
    padding-top: 1.5em;
  }
}
</style>
