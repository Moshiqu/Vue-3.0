<template>
    <button @click="flag = !flag">switch</button>
    <div style="display: flex">
        <transition :duration="{ enter: 1000, leave: 800 }" enter-active-class="animate__animated animate__zoomInDown"
            leave-active-class="animate__animated animate__hinge">
            <div class="box" v-if="flag"></div>
        </transition>
        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <div class="box2" v-if="flag"></div>
        </transition>
    </div>

</template>

<script lang="ts" setup>
import { ref } from 'vue';
import 'animate.css';
import { gsap } from 'gsap'

const flag = ref(false)

const beforeEnter = (el: Element) => {
    gsap.set(el, {
        width: 0,
        height: 0
    });
}

const enter = (el: Element, done: GSAPCallback) => {
    gsap.to(el, {
        width: 200,
        height: 200,
        onComplete: done
    });
}

const afterEnter = (el: Element) => {

}


</script>

<style lang="less" scoped>
.box,
.box2 {
    width: 200px;
    height: 200px;
    background-color: red;
}

.box2 {
    margin-left: 30px
}
</style>