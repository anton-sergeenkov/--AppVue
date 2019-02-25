<template>
    <div>
        <div class="log-in" v-if="!isAuthorized">
            <button class="btn btn-login" @click="showModal">Вход</button>
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
        <div class="log-out" v-else>
            Привет <span class="log-out-name">{{login}}</span>
            <button class="btn btn-login" @click="logOut">Выход</button>
        </div>
    </div>
</template>

<script>
import ModalDialog from './ModalDialog.vue'
import {api} from '../../api.js'

export default {
    data() {
        return {
            isVisible: false,
            isAuthorized: false,
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
                    // alert(result.token);
                    this.isAuthorized = true;
                    this.closeModal();
                })
                .catch(error => {
                    alert(error.message);
                });
        },
        logOut() {
            this.isAuthorized = false;
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
.btn-login {
    background: #fff;
    color: var(--color-accent-dark);
    font-weight: bold;
    text-transform: uppercase;
    margin-left: 15px;
}
.log-out {
    display: flex;
    align-items: center;
}
.log-out-name {
    font-weight: bold;
    margin-left: 5px;
}
</style>
