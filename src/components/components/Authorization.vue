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
                            <input type="submit" class="btn modal-dialog-btn" value="Вход" :disabled="!isFormValid">
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
import {localStorageService} from '../../services/LocalStorageService.js'

export default {
    data() {
        return {
            isVisible: false,
            isAuthorized: false,
            login: '',
            password: ''
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
                    this.isAuthorized = true;
                    this.closeModal();
                    localStorageService.putValue('authorizate', this.login);
                })
                .catch(error => {
                    alert(error.message);
                });
        },
        logOut() {
            this.isAuthorized = false;
            localStorageService.removeValue('authorizate');
        }
    },
    computed: {
        isFormValid() {
            return this.login.length > 0 && this.password.length > 0;
        }
    },
    created() {
        var value = localStorageService.getValue('authorizate');
        if (value) {
            this.isAuthorized = true;
            this.login = value;
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
