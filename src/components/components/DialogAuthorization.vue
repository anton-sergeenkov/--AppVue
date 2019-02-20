<template>
    <transition name="fade">
        <div class="wrapper">
            <div class="form" @keyup.esc="close">
                <div class="header">Авторизация</div>
                <form @submit.prevent="checkLogin">
                    <div class="content">
                        <input v-model="login" type="text" class="input" placeholder="Введите логин" autofocus required>
                        <input v-model="password" type="text" class="input" placeholder="Введите пароль" required>
                    </div>
                    <div class="buttons">
                        <input type="submit" class="btn btn-input" value="Вход">
                        <input type="button" class="btn btn-input" value="Отмена" @click="close">
                    </div>
                </form>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            login: null,
            password: null
        }
    },
    methods: {
        checkLogin() {
            this.authorization()
                .then(result => {
                    alert(result);
                    this.close();
                })
                .catch(error => alert(error.message));
        },
        authorization() {
            var login = this.login;
            var password = this.password;
            var promise = new Promise(function(resolve, reject) {
                if ( (login == 'admin') && (password == '123'))  { 
                    resolve('Успешно');
                } else { 
                    reject(new Error('Неверный логин или пароль'));
                }
            });
            return promise;
        },
        close() {
            this.$emit('close');
        }
    }
}
</script>

<style scoped>
.wrapper {
    --color-bg-wrapper: rgba(0,0,0,0.3);
    --color-bg-form: #fff;
    --color-bg-header: #304a58;
    --color-light: #eee;
    --font-header: 20px;
    --font-main: 16px;
    --padding: 20px;
    --color-btn: #1867c0;
    --color-bg-btn: #e6eef7;
}
.wrapper {
	display: flex;
	width: 100%;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
    z-index: 100;
    background: var(--color-bg-wrapper);
}
.form {
	width: 400px;
    position: relative;
	margin: auto;
    border-radius: 2px;
    background: var(--color-bg-form);
	box-shadow: 0px 5px 5px 0px var(--color-bg-wrapper);
}
.header {
    font-size: var(--font-header);
    background: var(--color-bg-header);
    color: #fff;
    padding: var(--padding);
}
.content {
    padding: calc(var(--padding) + 10px) var(--padding);
}
.input {
	width: 100%;
    border: none;
	font-family: inherit;
	font-size: var(--font-main);
	padding: 15px;
	margin: 5px 0px;
    background: var(--color-light);
    border-radius: 2px;
    outline: none;
}
.buttons {
    display: flex;
    justify-content: flex-end;
    padding: var(--padding);
    border-top: 2px solid var(--color-light);
}
.btn-input {
    margin-left: 10px;
    font-weight: 600;
    color: var(--color-btn);
    text-transform: uppercase;
    background: var(--color-bg-btn);
}
.fade-enter-active, .fade-leave-active {
    transition: opacity .4s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
