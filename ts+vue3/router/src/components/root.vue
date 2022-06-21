<template>
    <div>
        <router-link to="/user1">/user1</router-link>
        <router-link to="/user2" style="margin-left:30px">/user2</router-link>
        <router-link to="/beforeGuard" style="margin-left:30px">前置守卫</router-link>
    </div>
    <hr>
    <div>
        <router-view></router-view>
        <router-view name="bbb"></router-view>
        <router-view name="ccc"></router-view>
    </div>
</template>

<script lang="ts" setup></script>

<style>
</style>