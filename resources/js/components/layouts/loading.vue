<template>
    <div class="loading">
        <div class="route-loading-animation" v-if="animationVisible">
            <i class="fa fa-spinner fa-spin"></i>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'loading',

    data() {
        return {
            animationVisible: true,
        };
    },
    beforeMount() {
        this.animationVisible = true;
    },
    mounted() {
        if (this.animationVisible) {
            this.animationVisible = false;
        }
    },
};
</script>
  
<style>
.route-loading-animation {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
}

.fa-spinner {
    font-size: 5em;
    color: white;
}
</style>
  