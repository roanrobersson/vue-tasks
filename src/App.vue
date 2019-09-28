<template>
	<div id="app">
		<h1>Tarefas</h1>
        <TaskProgress :progress="progress"/>
        <NewTask @create-new-task="createNewTask($event)"/>
        <TaskGrid :tasks="tasks" 
            @task-delete="taskDelete($event)"
            @task-toggle="taskToggle($event)"
        />
	</div>
</template>

<script>
import TaskProgress from "@/components/TaskProgress.vue"
import NewTask from "@/components/NewTask.vue"
import TaskGrid from "@/components/TaskGrid"

export default {
    components: {TaskProgress, NewTask, TaskGrid},

    created: function() {
        const json = localStorage.getItem('tasks');
        this.tasks = JSON.parse(json) || [];
    },

    data() {
        return {
			tasks: [],
        }
    },

    computed: {
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
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
