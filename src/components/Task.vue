<template>
    <div class="task" :class="taskClass" @click="$emit('task-toggle', task)">
        <span class="task-delete" 
            :class="taskClass"
            @click.stop="$emit('task-delete', task)">
            x
        </span>
        <span class="task-title" :class="taskClass">{{ task.title }}</span>
    </div>
</template>

<script>
export default {
    props: {
        task: {
            type: Object,
            required: true,
        }
    },

    computed: {
        taskClass() {
            return this.task.pending ? 'pending' : 'done';
        },
    }

}
</script>

<style scoped>
    .task {
        border-radius: 8px;
        margin: 10px;
        box-sizing: border-box;
        width: 350px;
        height: 150px;
        cursor: pointer;
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;  
        user-select: none;      
    }

    .task-title {
        font-size: 32px;
        font-weight: 100;
        align-self: center;
    }

    .task-delete {
        font-size: 13px;
        text-align: center;
        border-radius: 10px;
        position: absolute;
        width: 20px;
        height: 20px;
        top: 10px;
        right: 10px;

    }

    .task.pending {
        background-color: #f44336;
        border-left: 12px solid #b73229;
    }

    .task.done {
        background-color: #4caf50;
        border-left: 12px solid #0a8f08;
    }

    .task-title.done {
        text-decoration: line-through;
    }

    .task-delete.done {
        background-color: #0a8f08;
    }

    .task-delete.pending {
        background-color: #b73229;
    }
</style>