<template>
  <div>
    <div class="container">
    <div class="profile">
      <Profile
        :avatar_url="getUser.avatar_url"
        :name="getUser.name"
        :login="getUser.login"
        :bio="getUser.bio"
        :followers="getUser.followers"
        :following="getUser.following"
        :location="getUser.location"
        :company="getUser.company"
        />
    </div>
    <div class="cards">
      <div class="searchForm">
        <input class="form-control" type="text" placeholder="Find a repository...">
        <button class="btn">Type: <b>All <span class="dropdown-caret"></span></b></button>
        <button class="btn">Language: <b>All <span class="dropdown-caret"></span></b></button>
        <button class="btn btn-green"><svg class="octicon octicon-repo" height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg> New</button>
      </div>
      <Repository
        v-for="repo in getAllRepos"
        v-bind:key="repo.id"
        v-bind:title="repo.name"
        v-bind:body="repo.description"
        v-bind:update="repo.updated_at"
        v-bind:htmlUrl="repo.html_url"
      ></Repository>
    </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Footer from '@/components/footer.vue'
import Repository from '@/components/repository.vue'
import Profile from '@/components/Profile.vue'
export default {
  data:function(){
    return {
      repos:[],
      isDarkMode:false
    }
  },
  methods:{
    toggleDarkMode(){
      this.isDarkMode = !this.isDarkMode;
    }
  },
  components:{
    Repository,
    Profile,
    Footer
  },
  computed:{
    ...mapGetters(["getAllRepos","getUser"])
  },
  beforeMount() {
    this.$store.dispatch("fetchAllRepos");
    this.$store.dispatch("fetchSingleUser");
  },
}
</script>

<style scoped>
.container{
  display: flex;
  padding: 10px 8vw;
}
.profile{
  width: 25%;
  padding-right: 30px;
}
.cards{
  width: 75%;
}

.searchForm{
  margin: 20px auto;
  display: grid;
  grid-template-columns: 5fr 1.5fr 2fr 1fr;
  grid-column-gap: 10px;
}
.searchForm .form-control{
  padding: 5px 12px;
  font-size: 14px;
  line-height: 20px;
  color: #24292e;
  vertical-align: middle;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: right 8px center;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  outline: none;
  box-shadow: inset 0 1px 0 rgba(225,228,232,.2);
}
.searchForm .btn{
  color: #24292e;
  background-color: #fff;
  border:1px solid rgba(27,31,35,0.15);
  border-radius: 6px;
  box-shadow: 0 1px 0 rgba(27,31,35,0.04),inset 0 1px 0 hsla(0,10%,100%,0.25);
  transition: .2s cubic-bezier(.3,0,.5,1);
  transition-property: color,background-color,border-color;
}
.searchForm .btn:active{
  outline: none !important;
}
.searchForm .btn:hover{
  background-color: whitesmoke;
}
.btn-green{
  background-color: #2ea44f !important;
  color: white !important;
}
.btn-green svg{
  vertical-align: bottom;
  fill: white;
}
</style>
