<template>
    <div class="task-progress-container">
        <div class="task-progress">
            <span class="task-progress-text">{{progress}}%</span>
            <div class="task-progress-bar" :style="{width: progress + '%'}"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        progress: {
            type: Number,
            default: 0,
            required: true,
        }
    }
}
</script>

<style scoped>
    .task-progress-container {
        display: flex;
        justify-content: center;
        position: relative;
        margin: 15px 50px 0 50px;
    }
    
    .task-progress {
        width: 100%;
        max-width: 1000px;
        border: solid 1px white;
        border-radius: 8px;
        text-align: center;
    }

    .task-progress-text {
        position: absolute;
        font-size: 16px;
    }
    @media (min-width: 576px) {
        .task-progress-text {
            font-size: 24px;
        }
    }
    .task-progress-bar {
        border-radius: 8px;
        background-color: #4caf50;
        height: 20px;
    }
    @media (min-width: 576px) {
        .task-progress-bar {
            height: 30px;
        }
    }
</style>