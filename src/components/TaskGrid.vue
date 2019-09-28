<template>
    <div class="task-grid">
        <task v-for="(task, i) in tasks" 
            :key="task.title" :task="task" 
            @task-delete="$emit('task-delete', i)"
            @task-toggle="$emit('task-toggle', i)"
        />
        <span class="no-tasks-message" v-if="tasks.length===0">Nenhuma tarefa para hoje :)</span>
    </div>
</template>

<script>
import Task from "@/components/Task.vue"

export default {
    components: {Task, },
    
    props: {
        tasks: {
            type: Array,
            default: () => {return []},
            required: true,
        }
    },

}
</script>

<style scoped>
    .task-grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 0 100px;
    }

    .no-tasks-message {
        font-size: 32px;
        color: #FFF2;
        margin-top: 100px;
    }
</style>