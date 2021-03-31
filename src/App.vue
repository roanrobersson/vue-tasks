<template>
	<div id="app">
		<div class="main-navbar">
            <h1 class="main-navbar-title">Tarefas</h1>
        </div>
        <TaskProgress :progress="progress"/>
        <TaskForm @create-new-task="createNewTask($event)"/>
        <TaskGrid
            @task-delete="taskDelete($event)"
            @task-toggle="taskToggle($event)"
        />
	</div>
</template>

<script>
import TaskProgress from "@/components/TaskProgress.vue"
import TaskForm from "@/components/TaskForm.vue"
import TaskGrid from "@/components/TaskGrid"

export default {
    components: {TaskProgress, TaskForm, TaskGrid},

    created: function() {
        const json = localStorage.getItem('tasks');
        this.tasks = JSON.parse(json) || [];
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
        tasksDoneCount() { return this.tasks.filter(arr => !arr.pending).length },
		progress() { 
            return this.tasks.length === 0 ? 0 : Math.round( 100 / this.tasks.length * this.tasksDoneCount);
        },
	},
    
    watch: {
        tasks: {
            deep: true,
            handler() {
                localStorage.setItem('tasks', JSON.stringify(this.tasks));
            }
        }
    },

    methods: {
        createNewTask(taskTitle) { 
            if ( this.tasks.find(arr => arr.title === taskTitle) === undefined) {
                this.tasks.push({
                    title: taskTitle,
                    pending: true,
                })
            }
        },
        
        taskDelete(i) {
            this.tasks.splice(i, 1);
        },

        taskToggle(i) {
            this.tasks[i].pending = !this.tasks[i].pending;
        },
    }
}
</script>

<style>
* {
    box-sizing: border-box;
    user-select: none;
}

h1, h2, h3 {
    margin: 0;
}

body {
    font-family: 'Lato', sans-serif;
    background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
    color: #FFF;
    margin: 0;
}

.main-navbar {
    text-align: center;
}


.main-navbar-title {
    margin-top: 10px;
    font-weight: 300;
    font-size: 2rem;
}
@media (min-width: 576px) {
    .main-navbar-title {
        margin-top: 20px;
        font-size: 3rem;
    }
}
</style>
