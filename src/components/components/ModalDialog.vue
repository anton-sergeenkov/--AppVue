<template>
<transition name="fade">
    <div class="modal-dialog-wrapper" @click="checkClose" ref="wrapper">
        <div class="modal-dialog">
            <div class="modal-dialog-header">
                <slot name="header">Default Header</slot>
            </div>
            <div class="modal-dialog-form">
                <slot name="form">Default Form</slot>
            </div>
        </div>
    </div>
</transition>
</template>

<script>
export default {
    methods: {
        close() {
            this.$emit('close');
        },
        checkClose(event) {
            if (event.target == this.$refs.wrapper) {
                this.close();
            }
        },
        handleEscapeKey(e) {
            if (e.keyCode === 27) {
                this.close();
            }
        }
    },
    mounted() {
        if (typeof document !== 'undefined') {
            document.body.addEventListener('keyup', this.handleEscapeKey);
        }
    },
    destroyed() {
        if (typeof document !== 'undefined') {
            document.body.removeEventListener('keyup', this.handleEscapeKey);
        }
    }
}
</script>

<style scoped>
.modal-dialog-wrapper  {
    --color-bg-wrapper:  rgba(0,0,0,0.3);
    --color-bg-form:     #fff;
    --color-bg-header:   #304a58;
    --color-light:       #eee;

    --color-bg-btn:      #e6eef7;
    --color-btn:         #1867c0;

    --color-bg-disabled: #afafaf;
    --color-disabled:    #7e7e7e;

    --font-header:       20px;
    --font-input:        15px;
    --padding:           20px;
}
.modal-dialog-wrapper {
    display: flex;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background: var(--color-bg-wrapper);
}
.modal-dialog {
    width: 400px;
    position: relative;
    margin: auto;
    border-radius: 2px;
    background: var(--color-bg-form);
    box-shadow: 0px 5px 5px 0px var(--color-bg-wrapper);
}
.modal-dialog-header {
    font-size: var(--font-header);
    background: var(--color-bg-header);
    color: #fff;
    padding: var(--padding);
}

/* transition  */
.fade-enter-active, .fade-leave-active {
    transition: opacity .4s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>

<style>
.modal-dialog-content {
    padding: calc(var(--padding) + 10px) var(--padding);
}
.modal-dialog-buttons {
    display: flex;
    justify-content: flex-end;
    padding: var(--padding);
    border-top: 2px solid var(--color-light);
}
.modal-dialog-input {
    width: 100%;
    border: none;
    font-family: inherit;
    font-size: var(--font-input);
    padding: 15px;
    margin: 5px 0px;
    background: var(--color-light);
    border-radius: 2px;
    border-bottom: 2px solid transparent;
    outline: none;
}
.modal-dialog-wrapper .modal-dialog-btn {
    margin-left: 10px;
    font-weight: 600;
    color: var(--color-btn);
    text-transform: uppercase;
    background: var(--color-bg-btn);
    transition: 0.4s;
    border-bottom: 2px solid transparent;
}
.modal-dialog-input:focus, .modal-dialog-btn:focus, .modal-dialog-btn:hover {
    border-bottom: 2px solid var(--color-bg-wrapper);
}
.modal-dialog-btn[disabled] {
    background: var(--color-bg-disabled);
    color: var(--color-disabled);
}
</style>