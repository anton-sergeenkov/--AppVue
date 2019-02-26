<template>
    <input :class="className">
</template>

<script>
export default {
    props: {
        className: String
    }
}
</script>

<style scoped>
input {
    --color-bg-wrapper:  rgba(0,0,0,0.3);
    --font-input:        15px;
    --color-light:       #eee;
}
input[type="text"] {
    width: 100%;
    border: none;
    font-family: inherit;
    font-size: var(--font-input);
    padding: 15px;
    border-radius: 2px;
    outline: none;
}
.form {
    margin: 5px 0px;
    background: var(--color-light);
    border-bottom: 2px solid transparent;
}
.form:focus {
    border-bottom: 2px solid var(--color-bg-wrapper);
}
</style>
