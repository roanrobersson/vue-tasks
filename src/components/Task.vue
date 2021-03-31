<template>
    <div class="task" :class="taskClass"  @click="$emit('task-toggle', task)">
        <div class="task-header">
            <div class="task-delete-button" 
                :class="taskClass"
                @click.stop="$emit('task-delete', task)">
                x
            </div>
        </div>
        <div class="task-body">
            <span class="task-text" :class="taskClass">{{ task.title }}</span>
        </div>
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
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 150px;
    padding: 10px;
    cursor: pointer;
    user-select: none;   
    border-radius: 8px;
    margin-top: 10px;
}
@media (min-width: 576px) {
    .task {
        width: 350px;
        margin: 10px;
    }
}

.task-header {
    display: flex;
    justify-content: flex-end;
}

.task-delete-button {
    font-size: 13px;
    text-align: center;
    border-radius: 10px;
    width: 20px;
    height: 20px;
    top: 10px;
    right: 10px;
}

.task-body {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 2;
}

.task-text {
    max-width: 308px;
    font-size: 32px;
    font-weight: 100;
    line-height: 33px;
    overflow-wrap: break-word; 
}

.task.pending {
    background-color: #f44336;
    border-left: 12px solid #b73229;
}

.task.done {
    background-color: #4caf50;
    border-left: 12px solid #0a8f08;
}

.task-text .done {
    text-decoration: line-through;
}

.task-delete-button.done {
    background-color: #0a8f08;
}

.task-delete-button.pending {
    background-color: #b73229;
}
</style>