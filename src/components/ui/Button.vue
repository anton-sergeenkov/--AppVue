<template>
    <button :class="classes" class="ui-btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        theme: { type: String, default: 'primary' },
        size:  { type: String, default: 'sm' },
        block: { type: Boolean }
    },
    computed: {
        classes() {
            return {
                ['ui-btn--'+this.size]: true, 
                ['ui-btn--'+this.theme]: true,
                'ui-btn--block': this.block
            };
        }
    }
}
</script>

<style scoped>
.ui-btn {
    --color-bg-btn:      #e6eef7;
    --color-btn:         #1867c0;
    --color-bg-disabled: #afafaf;
    --color-disabled:    #7e7e7e;
    --color-bg-wrapper:  rgba(0,0,0,0.3);
    --color-accent-dark: #e9c057;
    --color-dark:        #304a58;
}
.ui-btn {
    padding: 10px 15px;
    border-radius: 3px;
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-family: inherit;
    display: block;
    transition: 0.4s;
}

.ui-btn--xs    { font-size: 10px; }
.ui-btn--sm    { font-size: 14px; }
.ui-btn--md    { font-size: 17px; }
.ui-btn--lg    { font-size: 20px; }
.ui-btn--block { width: 100%; }

/*----------------------------------------
PRIMARY 
----------------------------------------*/
.ui-btn--primary {
    background: #fff;
}
.ui-btn--primary-active {
    background-image: linear-gradient(to right, #e2f87c, #d6f567, #c8f151, #b9ee38, #a8eb12);
}

/*----------------------------------------
SECONDARY 
----------------------------------------*/
.ui-btn--secondary {
    border: 1px solid var(--color-dark);
}
.ui-btn--secondary:hover {
    background: #fff;
}

/*----------------------------------------
MENU 
----------------------------------------*/
.ui-btn--menu {
    background: #fff;
    color: var(--color-accent-dark);
    font-weight: bold;
    text-transform: uppercase;
}

/*----------------------------------------
FORM 
----------------------------------------*/
.ui-btn--form  {
    font-weight: bold;
    color: var(--color-btn);
    text-transform: uppercase;
    background: var(--color-bg-btn);
    border-bottom: 2px solid transparent;
}
.ui-btn--form[disabled] {
    background: var(--color-bg-disabled);
    color: var(--color-disabled);
}
.ui-btn--form:focus, .ui-btn--form:hover {
    border-bottom: 2px solid var(--color-bg-wrapper);
}
.ui-btn--form[disabled]:focus, .ui-btn--form[disabled]:hover {
    border-bottom: 2px solid transparent;
}
</style>