const app = Vue.createApp({
    data() {
        return {
            // buttons: {
            //     menuOpenBtn: null,
            //     menuCloseBtn: null,
            //     cartToggleBtn: null
            // },
            itemPrice : 125,
            ItemInCart: 0,
            itemsToAdd: 0,
        }
    },
    computed: {
        priceCalc () {
            return this.itemPrice * this.ItemInCart;
        }
    },
    mounted() {
        
    },
    methods: {
        increaseCartItem (n) {

            if (n === -1 && this.itemsToAdd < 1) {
                return;
            }

            this.itemsToAdd += n;
        },
        addToCart () {
            // increase the items in the cart
            this.ItemInCart += this.itemsToAdd;

            // resets the items to be added
            this.itemsToAdd = 0;
        },
        deleteItem () {
            // reset the number of items in the cart 
            this.ItemInCart = 0;
        }
    }
});

app.mount('#app');