<template>
    <draggable 
        class="task-grid" id="task-grid"
        v-model="tasks" group="people"
        animation=250
        fallbackTolerance=3
        @start="drag=true" @end="drag=false"
        >   
        <task v-for="(task, i) in tasks" 
            :key="task.title" :task="task" 
            @task-delete="$emit('task-delete', i)"
            @task-toggle="$emit('task-toggle', i)"
        />
        <span class="no-tasks-message" v-if="tasks.length===0">No task for today :)</span>
    </draggable>
</template>

<script>
import Task from "@/components/Task.vue"
import draggable from 'vuedraggable'

export default {
    components: {
        draggable,
        Task, 
    },
    computed: {     
        tasks: {
            get: function() {
                return this.$store.state.tasks
            },
            set: function(value) {
                this.$store.commit('updateTasks', value)
            }
        },
    },
}
</script>

<style scoped>
    .task-grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    @media (min-width: 576px) {
        .task-grid {
            margin-top: 20px;
            margin: 40px 0 0 0;
        }
    }

    .no-tasks-message {
        font-size: 26px;
        color: #FFF2;
        margin-top: 100px;
    }
    @media (min-width: 576px) {
        .no-tasks-message {
            font-size: 32px;
        }
    }
</style>