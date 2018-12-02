<template>
    <div class="container">
        <Task v-for="item in taskList" v-bind=item :key=item.key />
  </div>
</template>

<script>
import Task from './components/Task.vue';

import taskList from './fixtures/taskList';

export default {
    name: 'app',
    components: {
        Task,
    },
    data: () => ({
        taskList,
    }),
};
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
