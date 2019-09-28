<template>
    <div class="task-progress">
        <div class="text">{{progress}}%</div>
        <div class="progress" :style="{width: progress + '%'}"></div>
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
    .task-progress {
        font-size: 24px;
        text-align: center;
        border: solid 1px white;
        border-radius: 8px;
        margin-bottom: 15px;
        width: 80%;
        position: relative;
    }

    .text {
        position: absolute; 
        left: 50%;
    }

    .progress {
        border-radius: 8px;
        background-color: #4caf50;
        height: 30px;
    }
</style>