Vue.component('product',{
props:{
    premium:{
        type: Boolean,
        required:true
    }
}
,
template:`<div class="product">
        <!-- This div contains two divs: One for the image and another for the info -->            
            <div class="product-image">
                <img v-bind:src="image"> <!-- v-bind Dinamically binds an attribute to an expression  -->
            </div>
            
            <div class="product-info">
                <h1>
                    {{ title }}
                </h1>
                <p> {{description}} </p>
                <p v-if="inventory >10" > IN STOCK</p>
                <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out!!!</p>
                <p v-else> OUT OF STOCK </p>
                <p v-if="sale">ON SALE!!</p>
                <p>Shipping: {{ shipping }}</p>
                <div>
                    <ul>
                        <li v-for='detail in details'> {{detail}} </li>
                    </ul>
                </div>
                <div v-for="(variant, index) in variants" 
                     :keys="variant.variantId"
                     class="color-box"
                     :style="{backgroundColor:variant.variantColor}"
                     >
                    <p @mouseover="updateProduct(index)" >
                        {{variant.variantBrand}}
                    </p>
                </div>
                
                <button v-on:click="addToCart" 
                        :disabled="!sale"
                        :class="{disabledButton: !sale}"
                        >Add to cart</button>
                
                <br>
                <button v-on:click="removeFromCart"
                        :disabled="remove"
                        :class="{disabledButton: remove}">
                        Remove from cart</button>

                
            </div>
        </div>
`
,

data(){
    return{

        product: 'Discman',//Data to be displayed
        brand:'Sony',
        description: 'The best portable music player :)',
        //image: './images/d-e225.jpg', //Image ti be displayed
        selectedVariable:0,
        inventory:8,
        remove:false,
        sale:true,
        details: ["Unlimited antishock","High sound quality","Long battery life","Rechargeable battery"],
        variants: [
            {
                variantId:001,
                variantBrand:"D-E225",
                variantImage:"./images/d-e225.jpg",
                variantColor:"grey",
                variatnQuantity:10
            },
            {
                variantId:002,
                variantBrand:"D-E011",
                variantImage:"./images/d-ej011.jpg",
                variantColor:"black",
                variatnQuantity:0
            }
        ]

    }

},
methods:{

    addToCart() {
        this.$emit('add-to-cart', this.variants[this.selectedVariable].variantId)
        
    },
    updateProduct(index){
        this.selectedVariable=index
        
    },
    removeFromCart(){
        this.$emit('remove-from-cart',this.variants[this.selectedVariable].variantId)
    }

},
computed:{
    title() {
        return this.product + ' ' + this.brand
    },
    image(){
        return this.variants[this.selectedVariable].variantImage
    },
    shipping(){
        if(this.premium){
            return "Free"
        }else{
            return "$2.99"
        }
    }
}

}

)

var app= new Vue({
    el: '#app',//Name of the referenced element in the HTML
    data:{
        premium:true,
        cart:[]
    },
    methods:{
        updateCart(id){
            this.cart.push(id)
            if(this.cart.length>1){
                this.remove=false
            }
        },
        removeItem(id){
            if (this.cart.length>0) {
                this.cart.splice(this.cart.indexOf(id),1)
                this.remove=false
            }else{
                this.remove=true
            }
        }
    }
})