<template>
    <div>
        <NavBar class="is-fixed-top" :onClickAdd=onClickAdd />
        <div class="section main-section">
            <div class="container">
                <Task
                    v-for="item in taskList"
                    v-bind=item
                    v-model=item.completed
                    @setCompleted=setCompleted
                    :key=item.id
                />
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Task from './components/Task.vue';

import taskList from './fixtures/taskList';

export default {
    name: 'app',
    components: {
        NavBar,
        Task,
    },
    data: () => ({
        taskList,
    }),
    methods: {
        onClickAdd() {
            this.taskList.unshift({
                title: 'hi',
            });
        },
        setCompleted(id) {
            const task = this.taskList.find((task) => task.id === id);
            task && (task.completed = true);
        }
    }
};
</script>

<style lang="scss">
@import '~bulma';

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
.main-section {
    margin-top: $navbar-height;
}
</style>
