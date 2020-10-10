<template>
    <ul>
        <li
                v-for="post in posts"
                :key="post.id"
        >
            <div>{{post.title}}</div>
            <div class="likes">{{post.likes}} likes</div>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'Posts',
        props: {
          posts: Array,
        },
    }
</script>

<style scoped>

    ul {
        list-style: none;
        padding-left: 0;
    }

    li {
        padding: 20px;
        border: 1px solid gray;
        border-radius: 4px;
        margin-bottom: 10px;
        position: relative;
    }

    .likes {
        position: absolute;
        bottom: 0;
        right: 0;
    }

</style>
