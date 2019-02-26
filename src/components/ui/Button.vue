<template>
    <button :class="className">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        className: String
    }
}
</script>

<style scoped>
button {
    --color-bg-btn:      #e6eef7;
    --color-btn:         #1867c0;
    --color-bg-disabled: #afafaf;
    --color-disabled:    #7e7e7e;
    --color-bg-wrapper:  rgba(0,0,0,0.3);
    --font-small:        14px;
}
button {
    padding: 10px 15px;
    border-radius: 3px;
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-family: inherit;
    font-size: var(--font-small);
    display: block;
}

.form[disabled] {
    background: var(--color-bg-disabled);
    color: var(--color-disabled);
}
.form  {
    margin-left: 10px;
    font-weight: 600;
    color: var(--color-btn);
    text-transform: uppercase;
    background: var(--color-bg-btn);
    transition: 0.4s;
    border-bottom: 2px solid transparent;
}
.form:focus, .form:hover {
    border-bottom: 2px solid var(--color-bg-wrapper);
}
.form[disabled]:focus, .form[disabled]:hover {
    border-bottom: 2px solid transparent;
}
</style>
