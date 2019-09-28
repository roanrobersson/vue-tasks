<template>
    <div class="new-task">
        <input type="text" placeholder="Nova tarefa?" maxlength="50" v-model="title" @keydown.enter="newTask()">
        <button @click="newTask()">+</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "",
        }
    },

    methods: {
        newTask () {
            if ( this.title != ''){
                this.$emit('create-new-task', this.title);
                this.title = "";
            }
        }
    }
}
</script>

<style scoped>
    .new-task {
        border: solid 1px white;
        border-radius: 8px;
        margin: 40px;
        display: flex;
    }

    input {
        background-color: #FFF2;
        color: #FFF;
        font: inherit;
        font-size: 32px;
        border: none;
        border-right: 1px solid white;
        padding: 7px 10px;
        width: 500px;
    }

    button {
        background-color: #2196f3;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        color: inherit;
        font-size: 32px;
        border: none;
        margin: none;
        height: 100%;
        width: 50px;
    }
</style>