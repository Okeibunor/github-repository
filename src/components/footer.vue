<template>
  <div class="footer">
    <ul>
      <li id="copy"><a href="#">© 2021 GitHub, Inc.</a></li>
      <li><a href="#">Terms</a></li>
      <li><a href="#">Privacy</a></li>
      <li><a href="#">Security</a></li>
      <li><a href="#">Status</a></li>
      <li><a href="#">Docs</a></li>
    </ul>
    <a href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
    </a>
    <ul>
      <li><a href="#">Contact Github</a></li>
      <li><a href="#">Pricing</a></li>
      <li><a href="#">API</a></li>
      <li><a href="#">Training</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">About</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Footer",
  }
</script>

<style scoped>
  .footer{
    border-top:  1px solid #eaecef;
    display: grid;
    grid-template-columns: 4.5fr 1fr 4.5fr;
    padding: 25px 0px;
    margin: 20px 8vw;
  }
  .footer ul{
    display: flex;
    justify-content: space-between;
    padding-left: 0px !important;
  }
  .footer ul li{
    list-style-type: none;
  }
  .footer ul li a{
    text-decoration: none;
    color:#0366d6;
    font-size: 12px;
  }
  .footer a{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .footer a svg{
    fill: grey;
    fill-opacity: 0.7;
  }
  #copy a{
    color: grey;
  }
  @media only screen and (max-width: 600px) {
    .footer {
      display: unset;
    }
  }
</style>
