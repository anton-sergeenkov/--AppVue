<template>
    <div>
        <button class="btn btn-search" @click="showModal">Вход</button>
        <app-modal-dialog v-if="isVisible" @close="closeModal">
            <template v-slot:header>Custom Header</template>
            <template v-slot:form>
                <form @submit.prevent="checkLogin">
                    <div class="modal-dialog-content">
                        <input v-model="login" type="text" class="modal-dialog-input" placeholder="Введите логин" autofocus required>
                        <input v-model="password" type="text" class="modal-dialog-input" placeholder="Введите пароль" required>
                    </div>
                    <div class="modal-dialog-buttons">
                        <input type="submit" class="btn modal-dialog-btn" value="Вход" :disabled="checkForm">
                        <input type="button" class="btn modal-dialog-btn" value="Отмена" @click="closeModal">
                    </div>
                </form>
            </template>
        </app-modal-dialog>
    </div>
</template>

<script>
import ModalDialog from './ModalDialog.vue'
import {api} from '../../api.js'

export default {
    data() {
        return {
            isVisible: false,
            login: null,
            password: null
        };
    },
    components: {
        'app-modal-dialog': ModalDialog
    },
    methods: {
        showModal() {
            this.isVisible = true;
        },
        closeModal() {
            this.isVisible = false;
        },
        checkLogin() {
            api.authorizate(this.login, this.password)
                .then(result => {
                    alert(result.token);
                    this.closeModal();
                })
                .catch(error => {
                    alert(error.message);
                });
        }
    },
    computed: {
        checkForm() {
            if (this.login && this.password) {
                return false;
            } 
            return true;
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


