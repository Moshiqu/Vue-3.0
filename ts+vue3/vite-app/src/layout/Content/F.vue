<template>
    <div>
        <img src="../../assets/logo.png" alt="logo" id="img" width="300" height="300">
    </div>
</template>
 
<script lang='ts' setup>
import useBase64 from '../../hooks'

useBase64({ el: '#img' }).then(res=>{
    console.log(res.baseUrl);
})
</script>
 
<style lang='less' scoped>
</style>
