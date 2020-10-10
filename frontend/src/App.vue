<template>
    <div id="app">
        <Header></Header>
        <Posts
            :posts="posts"
        ></Posts>
    </div>
</template>

<script>

    import Header from './components/Header'
    import Posts from './components/Posts'

    import {getPosts} from "./api";

    export default {
        name: 'App',
        components: {
            Header,
            Posts
        },
        data(){
          return {
              posts: []
          }
        },
        created() {
            // Faire les appels ajax pour récupérer le listing de posts
            getPosts().then((posts) => {
                this.posts = posts
            })

        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
