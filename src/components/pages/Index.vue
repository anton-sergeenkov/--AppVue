<template>
    <div class="wrapper">
        <v-carousel>
            <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
        </v-carousel>
    </div>
</template>

<script>
export default {
    data () {
        return {
            items: [
                {src: 'https://images.unsplash.com/photo-1480365334925-2aee561aa28e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=773&q=80'},
                {src: 'https://images.unsplash.com/photo-1480365501497-199581be0e66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'},
                {src: 'https://images.unsplash.com/photo-1518890414976-bb41382be43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'},
                {src: 'https://images.unsplash.com/photo-1500630417200-63156e226754?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'}       
            ]
        }
    }
}
</script>