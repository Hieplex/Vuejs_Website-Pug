<template>
      
    <div class="home-page">
        <header class="my-header">
        <h1>
            Shopaa
        </h1>
        <nav class="navigate_header">
            <ul class="navigate_consumerneeds">
                <li><a href="https://google.com" class="a1">Kênh Người Bán</a></li>
                <li><a href="https://google.com" class="a2">Trở Thành Người Bán Shopee </a></li>
                <li><a href="www.facebook.com" class="a3">Tải Ứng Dụng</a></li>
                <li> <a class="a4">Kết Nối</a>
                <a href="https://facebook.com" class ="icon1">
                <img src="../assets/fb.png" alt="Folder icon"> 
                 </a>
                <a href="https://instargram.com" class ="icon2">
                <img src="../assets/ins.png" alt="Folder icon"> 
                 </a>
                    </li>
               
                
            </ul> 
                   
        </nav>
        <nav class="navigate_header_right">
            <ul class="navigate_customerinfo">
                <li><a href="https://google.com" class="a5">Thông Báo</a></li>
                <li><a href="https://google.com" class="a6">Hỗ trợ </a></li>
                <li><a href="www.facebook.com" class="a7">Tải Ứng Dụng</a></li>
                <li> <a class="a8">Ngôn Ngữ</a></li>
                <li><a href="" class="a9">Đăng Nhập</a></li>
                <li><a href="" class="a10">Đăng Ký</a></li>
               
                
            </ul> 
        </nav>
        
        </header>
        <div class="container">
            <div class ="box"></div>
            <div class ="box2"></div>
        </div>
        <router-view/>

        </div>
    
</template>

<script>
export default {
  name: 'HomePage'
}
</script >
<style scoped>
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
    right: 0;
    font-size: 12.5px;
}
.my-header {
  background-color: #ee4d2d;
  height: 60px;
  display: flex;
   display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  padding: 80px;
  position: fixed;
  top: 0;
  z-index: 1;
}
ul li {
  display: inline-block;
  margin-right: -10px;
  position: relative;
}

ul li::after {
  content: '|';
  position: absolute;
  top: 0;
  right: -15px;
  color: #fdf3ff;
}
.container{
    width: 100%;
    height: 100%;
    background: blue;
}
.box{
    width: 20%;
    height: 300px;
    background: yellow;
    margin: 20px;
}
</style>
