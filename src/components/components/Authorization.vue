<template>
    <div>
        <button class="btn btn-search" @click="serviceLogin">Вход</button>
        <app-dialog-authorization v-if="modalDialog" @close="modalDialog = false"></app-dialog-authorization>
    </div>
</template>

<script>
import DialogAuthorization from './DialogAuthorization.vue'

export default {
    data() {
        return {
            modalDialog: false
        };
    },
    components: {
        'app-dialog-authorization': DialogAuthorization
    },
    methods: {
        serviceLogin() {
            this.modalDialog = true;
        }
    }
}
</script>

<style scoped>
.btn-search {
    background: #fff;
    color: var(--color-accent-dark);
    font-weight: bold;
    text-transform: uppercase;
}
</style>


