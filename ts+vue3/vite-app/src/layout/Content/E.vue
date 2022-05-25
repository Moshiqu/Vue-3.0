<template>
    <div class="box" v-move>
        <div class="header"></div>
        <div class="content"></div>
    </div>
</template>
 
<script lang='ts' setup>
import { Directive, DirectiveBinding } from 'vue';


const vMove: Directive = (el: HTMLElement, binding: DirectiveBinding) => {
    const moveElement: HTMLDivElement = el.firstElementChild as HTMLDivElement
    const mouseDown = (e: MouseEvent) => {
        const X = e.clientX - el.offsetLeft
        const Y = e.clientY - el.offsetTop

        const mouseMove = (e: MouseEvent) => {
            if (e.clientX > 0 && e.clientY > 0 && e.clientX<document.body.offsetWidth &&e.clientY<document.body.offsetHeight) {
                el.style.top = e.clientY - Y + 'px'
                el.style.left = e.clientX - X + 'px'
            }
        }

        document.addEventListener('mousemove', mouseMove)
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', mouseMove)
        })
    }
    moveElement.addEventListener('mousedown', mouseDown)
}
</script>
 
<style lang='less' scoped>
.box {
    width: 300px;
    height: 300px;
    border: 1px solid #ccc;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &>.header {
        background-color: #000;
        width: 100%;
        height: 40px;
        cursor: pointer;
    }

    &>.content {
        background-color: #fff;
        height: calc(300px - 40px);
    }
}
</style>
