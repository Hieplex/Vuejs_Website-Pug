<template>
  <div class="home-page">
    <header class="my-header">
      <div class="header-inner">
        <div></div>
        <input class="input_box" id="inputtext" type="text" placeholder="Voucher Giảm 100k" v-model="searchText">
        <a :href="linkUrl" id="inputlink" class="search_box">
          <button @click="handleClick">
            <img class="slogo" src="../assets/Slogo.png" alt="slogo">
            <img class="cartlogo" src="../assets/cartlogo.png" alt="cartlogo">
          </button>
        </a>
        <div></div>
      </div>
      <nav class="navigate_header">
        <ul class="navigate_consumerneeds">
          <li><a href="https://google.com" class="a1">Kênh Người Bán</a></li>
          <li><a href="https://google.com" class="a2">Trở Thành Người Bán Shopee</a></li>
          <li><a href="https://facebook.com" class="a3">Tải Ứng Dụng</a></li>
          <li>
            <a class="a4">Kết Nối</a>
            <a href="https://facebook.com" class="icon1"><img src="../assets/fb.png" alt="Facebook icon"></a>
            <a href="https://instargram.com" class="icon2"><img src="../assets/ins.png" alt="Instagram icon"></a>
          </li>
        </ul>
      </nav>
      <nav class="navigate_header_right">
        <ul class="navigate_customerinfo">
          <li><a href="https://google.com" class="a5">Thông Báo</a></li>
          <li><a href="https://google.com" class="a6">Hỗ trợ</a></li>
          <li><a href="https://facebook.com" class="a7">Tải Ứng Dụng</a></li>
          <li><a class="a8">Ngôn Ngữ</a></li>
          <li><a href="" class="a9">Đăng Nhập</a></li>
          <li><a href="" class="a10">Đăng Ký</a></li>
        </ul>
      </nav>
      <div class="header_bottom">
        <img class="logo" src="../assets/logo2.png" alt="logo">
      </div>
    </header>
    <div class="container">
      <div class="box">
        <div class="banner1">
          <img class="bimg1" src="../assets/banner.png" alt="logo">
        </div>
        <div class="banner2" style="width: 40%;">
          <img class="bimg2" src="../assets/banner2.png" alt="logo">
        </div>
        <div class="banner3" style="width: 40%;">
          <img class="bimg3" src="../assets/banner3.png" alt="logo">
        </div>

        <div class="optional_events">
            <ul class="list_event">
                <li><img class="evtimg1" src="../assets/events_img/event_img1.png" alt="evtimg1"></li>
                <li><img class="evtimg2" src="../assets/events_img/event_img2.png" alt="evtimg2"></li>
                <li><img class="evtimg3" src="../assets/events_img/event_img3.png" alt="evtimg3"></li>
                <li><img class="evtimg4" src="../assets/events_img/event_img4.png" alt="evtimg4"></li>
                <li><img class="evtimg5" src="../assets/events_img/event_img5.png" alt="evtimg5"></li>
                <li><img class="evtimg6" src="../assets/events_img/event_img6.png" alt="evtimg6"></li>
                <li><img class="evtimg7" src="../assets/events_img/event_img7.png" alt="evtimg7"></li>
                <li><img class="evtimg8" src="../assets/events_img/event_img8.png" alt="evtimg8"></li>
                <li><img class="evtimg9" src="../assets/events_img/event_img9.png" alt="evtimg9"></li>
                <li><img class="evtimg10" src="../assets/events_img/event_img10.png" alt="evtimg10"></li>


            </ul>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>



<script>
export default {
  name: 'HomePage',
  data(){
    return{
      searchText: ''
    }
  },
  computed: {
    linkUrl() {
      return `https://shopee.vn/search?keyword=1${encodeURIComponent(this.searchText)}`;
    },
  },
}
</script >
<style scoped lang="scss">
@import "@/styles/_variables.scss";
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 10px;
}
li {
  display: inline-block;
  margin-right: 10px;
}
a {
  color: #fdf3ff;
  text-decoration: none;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  margin-left: -20px;
  size: 0px;
  
}
.logo{
  position: absolute;
  bottom: 10px;
  left: 40px;
}
.cartlogo{
  position: absolute;
  bottom: 60px;
  left: 150px;
}
.input_box{
  background-color: #fdf3ff;
  width: 790px;
  height: 44px;
  text-align: left;
  padding: 0px;
  right: 27%;
  top: 48%;
  position: absolute;
  outline: none;
  
}
.search_box{
  position: absolute;
  width: 100px;
  height: 100px;
  top: 53px;
  right: 25%;
}
.header-inner > div {
  position: relative;
}
.container{
  position: absolute; top: 100px; bottom: 0; left: 0; right: 0; background-color: #fff;
  background-image: url('../assets/background.jpg'); background-size: cover; background-position: center;
}
.a1{
  margin-left: 30px;
}
.a2{
   
   margin-left: 30px;
}
.a3{
   
   margin-left: 30px;
}
.a4{
   
margin-left: 32px;
   
}
.a5{
  margin-left: 30px;
}
.a6{
   
   margin-left: 30px;
}
.a7{
   
   margin-left: 30px;
}
.a8{
   
margin-left: 32px;
   
}
.a9{
   
margin-left: 32px;
   
}
.a10{
   
margin-left: 32px;
   
}
.icon1 {
  vertical-align: top;
   margin-left: 5px;
}

.icon1 img {
  width: 16px;
  height: 16px;
  
}
.icon2 {
  vertical-align: top;
  margin-left: 5px;
}
.icon2 img {
  width: 16px;
  height: 16px;

}
.icon3 {
  vertical-align: top;
   margin-left: 5px;
}

.icon3 img {
  width: 16px;
  height: 16px;
  
}
.icon4 {
  vertical-align: top;
  margin-left: 5px;
}
.icon4 img {
  width: 16px;
  height: 16px;
  margin-right: 0px;
}

.navigate_header{
   position: absolute;
    top: 0;
    left: 0;
    font-size: 12.5px;
}
.navigate_consumerlist{
      margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
}
.navigate_header_right{
  position: absolute;
    top: 0;
    right: 200px;
    font-size: 12.5px;
}
.my-header {
  background-color: #ee4d2d;
  height: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  padding: 55px;
  position: fixed;
  z-index: 1;
}
ul li {
  display: inline-block;
  margin-right: -10px;
  position: relative;
}

.navigate_header ul.navigate_consumerneeds li::after {
  content: '|';
  position: absolute;
  top: 0;
  right: -15px;
  color: #fdf3ff;
}


.box{
    position:fixed;
    width: 80%;
    height: 655px;
    background: white;
    margin: 20px;
    left: 200px;
    top: 110px;
    flex-direction: column;
  .banner1{
  position:fixed;
  width: 0px;
  height: 0px;
  left: 230px;
  top: 140px;
    .bimg1{
      width: 800px;
      height: 235px;
    }

}
.banner2 {
  position:fixed;
  right: 70px;
  top: 140px;
  width: auto;
  height: auto;
  .bimg2{
      width: 560px;
      height: 115px;
    }

  }

.banner3 {
  position:fixed;
  right: 70px;
  top: 260px;
  width: auto;
  height: auto;
  .bimg3{
      width: 560px;
      height: 115px;
    }

    }
    .optional_events {
     margin-top: 280px;
          a{
            color: red;
          }
          .list_event {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.list_event li {
  display: inline-block;
  width: 10%;
  margin: 0;
  padding: 0;
  list-style: none;
}
}
}
</style>
