<template>
    <div class="test">
        <div>Message: {{message}}</div>
        <div>count: {{count}}</div>
        <div>doubleCount: {{doubleCount}}</div>
        <div>AddEvent: <button @click="add">增加Count值</button></div>
    </div>
</template>

<script>
    import {computed, ref} from 'vue'
    export default {
        name: 'TestComponent',
        setup(){
            const message = 'hello world';
            const count = ref(1);
            const doubleCount = computed(()=> count.value * 2);
            const add = () => {
                count.value++
            };
            return {
                message,
                count,
                doubleCount,
                add
            }
        }
    }
</script>

<style scoped lang="scss">
    .test {
        color: red
    }
</style>
