<template>
<transition name="fade">
    <div :class="classes" class="ui-toast" @click="$emit('close')">
        <slot></slot>
    </div>
</transition>
</template>

<script>
export default {
    props: {
        theme:    { type: String, default: 'primary' },
        position: { type: String, default: 'top' },
        duration: { type: Number, default: 3500 }
    },
    computed: {
        classes() {
            return {
                ['ui-toast--'+this.theme]: true, 
                ['ui-toast--'+this.position]: true
            };
        }
    },
    created() {
        setTimeout(() => { 
            this.$emit('close');
        }, this.duration);
    }
}
</script>

<style scoped>
.ui-toast {
    position: fixed;
    max-width: 80%;
    padding: 15px 20px;
    z-index: 200;
    font-size: 14px;
    text-align: center;
    border-radius: 5px;
    border-top: 4px solid rgba(0,0,0,0.12);
}

/*----------------------------------------
THEME 
----------------------------------------*/
.ui-toast--primary {
    color: #fff;
    background: rgba(0,0,0,0.7);
}
.ui-toast--success {
    color: #fff;
    background: #4caf50;
}
.ui-toast--info {
    color: #fff;
    background: #2196f3;
}
.ui-toast--warning {
    color: #fff;
    background: #fb8c00;
}
.ui-toast--error {
    color: #fff;
    background: #ff5252;
}

/*----------------------------------------
POSITION 
----------------------------------------*/
.ui-toast--top {
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
}
.ui-toast--center {
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
}
.ui-toast--bottom {
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%); 
}
.ui-toast--left-bottom {
    bottom: 25px;
    left: 25px;
}

/*----------------------------------------
TRANSITION 
----------------------------------------*/
.fade-enter-active, .fade-leave-active {
    transition: opacity .4s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
