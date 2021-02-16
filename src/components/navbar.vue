<template>
  <Header >
    <nav class="navbar dark" :class="{'light-background':!getDarkMode,'dark-background':getDarkMode}">
        <ul>
          <li>
            <a class="navbar-brand" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
              <svg height="32" class="octicon text-white" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
            </a>
          </li>
          <li><form class="search" action="#">
            <input type="text" placeholder="Search or jump to..." aria-placeholder="Search or jump to...">
            <input type="submit" value="/">
          </form></li>
          <li>
            <a href="https://github.com/pulls">Pull requests</a>
          </li>
          <li><a href="https://github.com/issues">Issues</a></li>
          <li><a href="https://github.com/marketplace">Marketplace</a></li>
          <li><a href="https://github.com/explore">Explore</a></li>
        </ul>
        <ul class="nav-right">
          <li>

            <svg class="octicon octicon-bell" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M8 16a2 2 0 001.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 008 16z"></path><path fill-rule="evenodd" d="M8 1.5A3.5 3.5 0 004.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.018.018 0 00-.003.01l.001.006c0 .002.002.004.004.006a.017.017 0 00.006.004l.007.001h10.964l.007-.001a.016.016 0 00.006-.004.016.016 0 00.004-.006l.001-.007a.017.017 0 00-.003-.01l-1.703-2.554a1.75 1.75 0 01-.294-.97V5A3.5 3.5 0 008 1.5zM3 5a5 5 0 0110 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.518 1.518 0 0113.482 13H2.518a1.518 1.518 0 01-1.263-2.36l1.703-2.554A.25.25 0 003 7.947V5z"></path></svg>
          </li>
          <li>
            <svg class="octicon octicon-plus" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.75 2a.75.75 0 01.75.75V7h4.25a.75.75 0 110 1.5H8.5v4.25a.75.75 0 11-1.5 0V8.5H2.75a.75.75 0 010-1.5H7V2.75A.75.75 0 017.75 2z"></path></svg>
            <span style="color:white" class="dropdown-caret"></span>
          </li>
          <li>
            <img src="https://avatars.githubusercontent.com/u/32412300?s=60&amp;v=4" alt="@Okeibunor" size="20" class="avatar avatar-user avatar--small " height="20" width="20">
            <span style="color:white" class="dropdown-caret"></span>
          </li>
        </ul>
    </nav>
    <nav class="fixed bottom-nav navbar light" :class="{'light-background':!getDarkMode,'dark-background':getDarkMode}">
      <ul>
        <li>
          <a href="#"><svg class="octicon octicon-book UnderlineNav-octicon hide-sm" height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"></path></svg> <span>Overview</span></a>
        </li>
        <li>
          <a href="#" class="active"><svg class="octicon octicon-repo UnderlineNav-octicon hide-sm" height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg><span> Repositories</span> <span class="badge">43</span></a>
        </li>
        <li>
          <a href="#"><svg class="octicon octicon-project UnderlineNav-octicon hide-sm" height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"></path></svg> <span> Projects</span></a>
        </li>
        <li>
          <a href="#"><svg class="octicon octicon-package UnderlineNav-octicon hide-sm" height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.878.392a1.75 1.75 0 00-1.756 0l-5.25 3.045A1.75 1.75 0 001 4.951v6.098c0 .624.332 1.2.872 1.514l5.25 3.045a1.75 1.75 0 001.756 0l5.25-3.045c.54-.313.872-.89.872-1.514V4.951c0-.624-.332-1.2-.872-1.514L8.878.392zM7.875 1.69a.25.25 0 01.25 0l4.63 2.685L8 7.133 3.245 4.375l4.63-2.685zM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432L2.5 5.677zm6.25 8.271l4.625-2.683a.25.25 0 00.125-.216V5.677L8.75 8.432v5.516z"></path></svg><span> Packages</span></a>
        </li>

      </ul>
      <div @click="toggleDarkMode" :class="{'light-toggle':!getDarkMode,'dark-toggle':getDarkMode}" class="btn-toggle">
        <div class="btn-switch" :class="{'toggle-left':!getDarkMode,'toggle-right':getDarkMode}">
          <svg v-if="!getDarkMode" style="fill:yellow;" aria-hidden="true" width="14" height="13" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.52208 7.71754C7.5782 7.71754 10.0557 5.24006 10.0557 2.18394C10.0557 1.93498 10.0392 1.68986 10.0074 1.44961C9.95801 1.07727 10.3495 0.771159 10.6474 0.99992C12.1153 2.12716 13.0615 3.89999 13.0615 5.89383C13.0615 9.29958 10.3006 12.0605 6.89485 12.0605C3.95334 12.0605 1.49286 10.001 0.876728 7.24527C0.794841 6.87902 1.23668 6.65289 1.55321 6.85451C2.41106 7.40095 3.4296 7.71754 4.52208 7.71754Z"></path>
          </svg>
          <svg v-if="getDarkMode" style="fill:white;" aria-hidden="true" width="14" height="13" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.52208 7.71754C7.5782 7.71754 10.0557 5.24006 10.0557 2.18394C10.0557 1.93498 10.0392 1.68986 10.0074 1.44961C9.95801 1.07727 10.3495 0.771159 10.6474 0.99992C12.1153 2.12716 13.0615 3.89999 13.0615 5.89383C13.0615 9.29958 10.3006 12.0605 6.89485 12.0605C3.95334 12.0605 1.49286 10.001 0.876728 7.24527C0.794841 6.87902 1.23668 6.65289 1.55321 6.85451C2.41106 7.40095 3.4296 7.71754 4.52208 7.71754Z"></path>
          </svg>
        </div>
      </div>
    </nav>
  </Header>
</template>

<script>
import { mapGetters } from 'vuex';
  export default {
    name:"Navbar",
    computed:{
      ...mapGetters(["getDarkMode"])
    },
    mounted(){
      window.onscroll = function() {myFunction()};
      let navbar = document.querySelector('.bottom-nav');
      let sticky = navbar.offsetTop;

      function myFunction() {
        if (window.pageYOffset >= sticky) {
          navbar.classList.add("sticky")
        } else {
          navbar.classList.remove("sticky");
        }
      }
    },
    methods:{
      toggleDarkMode(){
        this.$store.dispatch("toggleDarkMode");
      }
    }

  }
</script>

<style lang="css" scoped>
  .btn-toggle{
    display: flex;
    vertical-align: middle;
    justify-content: center;
    width: 70px;
    height: 35px;
  }
  .btn-switch{
    width: 100%;
    display: flex;
    align-items: center;
    transition: all .2s linear;
  }

  .light-toggle{
    background: white;
    border: 1px solid grey;
    border-radius: 20px;
  }
  .dark-toggle{
    background: rgb(204, 74, 204);
    border: 1px solid rgb(204,74,204);
    border-radius: 20px;
  }
  .light-toggle svg{
    background: black;
    padding: 10px;
    border-radius: 50%;
  }
  .dark-toggle svg {
    border-radius: 50%;
    background: rgb(110, 5, 75);
    padding: 10px;
  }
  .avatar{
    border-radius: 50%;
    vertical-align: middle;
  }
  .toggle-left{
    transform: translateX(0%);

  }
  .toggle-right{
    transform: translateX(50%);
    overflow:hidden;
  }
  .navbar{
    display: flex;
    justify-content: space-between;
  }

  .navbar ul{
    display: flex;
    justify-content: space-evenly;
  }
  .navbar.dark.light-background{
    padding: 0px 30px 0px 0px;
    background-color: #24292e !important;
  }
  .navbar.dark.dark-background{
    padding: 0px 30px 0px 0px;
    background-color: #161b22 !important;
  }
  .navbar.light.dark-background a{
    color: rgba(255, 255, 255, 0.952) !important;
  }
  .navbar.dark a{
    font-size: 15px;
    font-weight: bold;
    color: #ffffff;
  }
  .navbar.light{
    background-color: #ffffff;
    border-bottom: .5px solid #eaecef;
    display: grid;
    grid-template-columns: 6fr 1fr;
  }
  .navbar.light.dark-background{
    border-bottom: .5px solid rgba(255, 255, 255, 0.24);
  }
  .navbar.light ul{
    margin: 5vh auto 0px;
  }
  .navbar.light div{
    margin: auto;
  }
  .navbar.light a{
    color:#24292e;
    font-size: 14px;
    display: inline-block;
    border-bottom-width: 3px;
    border-bottom-style: solid;
    border-bottom-color: transparent;
    padding: 12px 12px;
  }
  .navbar.light a.active{
    outline-offset: -1px;
    border-bottom-color:  #f9826c !important;
    font-weight: bold;
  }
  .navbar.light a:hover{
    outline-offset: -1px;
    border-bottom-color:grey;
  }
  .navbar.sticky{
    position: fixed;
    top: 0%;
    width:100%;
  }
  li{
    list-style-type: none;
    margin: auto 6px;
  }
  a{
    text-decoration: none;
  }
  .btn{
    border: 1px solid #ffffff;
    border-radius: 5px;
    padding: 8px 10px;
  }
  .text-white{
    color: #fff !important;
  }
  .octicon{
    vertical-align: text-bottom;
    fill: #fff;
  }
  .UnderlineNav-octicon{
    color:#959da5;
    fill:#959da5;
  }
  .search input[type=text]{
    background-color:#24292e;
    padding: 5px 10px;
    border:1px solid rgba(128, 128, 128, 0.404) !important;
    width: 17vw;
    color: white;
    font-size: 16px;
    outline: white;
    border-radius: 6px;
  }
  .search input[type=submit]{
    background-color:#24292e;
    color: white;
    border-radius: 2px;
    border: 1px solid grey;
    margin: auto -5px;
    transform: translateX(-100%);
  }

  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    font-size: 14px;
    color: rgba(255, 255, 255, 0.644);
  }
  ::-moz-placeholder { /* Firefox 19+ */
    font-size: 14px;
  }
  :-ms-input-placeholder { /* IE 10+ */
    font-size: 14px;
  }
  :-moz-placeholder { /* Firefox 18- */
    font-size: 14px;
  }
  .badge{
    background-color: #d1d4da80;
    padding: 3px 6px;
    font-size: 12px;
    border-radius: 10px;
  }
  .icon-chevron-down-mktg{

  }
</style>

