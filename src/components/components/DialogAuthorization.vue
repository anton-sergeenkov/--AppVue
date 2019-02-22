<template>
<transition name="fade">
    <div class="wrapper" @click="checkClose" ref="wrapper">
        <div class="form">
            <div class="header">Авторизация</div>
            <form @submit.prevent="checkLogin">
                <div class="content">
                    <input v-model.trim="login" type="text" class="input" placeholder="Введите логин" autofocus required>
                    <input v-model.trim="password" type="text" class="input" placeholder="Введите пароль" required>
                </div>
                <div class="buttons">
                    <input type="submit" class="btn btn-input" value="Вход" :disabled="checkForm">
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
    computed: {
        checkForm() {
            if (this.login && this.password) {
                return false;
            } 
            return true;
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
.wrapper {
    --color-bg-wrapper:  rgba(0,0,0,0.3);
    --color-bg-form:     #fff;
    --color-bg-header:   #304a58;
    --color-light:       #eee;

    --color-bg-btn:      #e6eef7;
    --color-btn:         #1867c0;

    --color-bg-disabled: #a5a198;
    --color-disabled:    #646464;

    --font-header:       20px;
    --font-input:        15px;
    --padding:           20px;
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
    font-size: var(--font-input);
    padding: 15px;
    margin: 5px 0px;
    background: var(--color-light);
    border-radius: 2px;
    border-bottom: 2px solid transparent;
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
    transition: 0.4s;
    border-bottom: 2px solid transparent;
}
.input:focus, .btn-input:focus, .btn-input:hover {
    border-bottom: 2px solid var(--color-bg-wrapper);
}
.btn-input[disabled] {
    background: var(--color-bg-disabled);
    color: var(--color-disabled);
}

/* transition  */
.fade-enter-active, .fade-leave-active {
    transition: opacity .4s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
