<template>
    <div>
        <div class="log-in" v-if="!isAuthorized">
            <ui-button color="menu" @click.native="showModal" class="btn-login">Вход</ui-button>
            <app-modal-dialog v-if="isVisible" @close="closeModal">
                <template v-slot:header>Custom Header</template>
                <template v-slot:form>
                    <form @submit.prevent="checkLogin">
                        <div class="modal-dialog-content">
                            <ui-input color="form" v-model="login" type="text" placeholder="Введите логин" autofocus required></ui-input>
                            <ui-input color="form" v-model="password" type="password" placeholder="Введите пароль" required></ui-input>
                        </div>
                        <div class="modal-dialog-buttons">
                            <ui-button color="form" type="submit" :disabled="!isFormValid" class="btn-form">Вход</ui-button>
                            <ui-button color="form" type="cancel" @click.native.prevent="closeModal" class="btn-form">Отмена</ui-button>
                        </div>
                    </form>
                </template>
            </app-modal-dialog>
        </div>
        <div class="log-out" v-else>
            Привет <span class="log-out-name">{{login}}</span>
            <ui-button color="menu" @click.native="logOut" class="btn-login">Выход</ui-button>
        </div>
    </div>
</template>

<script>
import ModalDialog from '../ui/ModalDialog.vue'
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
.btn-form {
    margin-left: 10px;
}
.modal-dialog-content {
    padding: 30px 20px;
}
.modal-dialog-buttons {
    display: flex;
    justify-content: flex-end;
    padding: 20px;
    border-top: 2px solid var(--color-light);
}
</style>
