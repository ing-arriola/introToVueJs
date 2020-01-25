var app= new Vue({
    el: '#app',//Name of the referenced element in the HTML
    data: {
        product: 'Diskman',//Data to be displayed
        description: 'The best portable music player :)',
        image: './images/d-e225.jpg', //Image ti be displayed
        inventory:8,
        sale:true,
        details: ["Unlimited antishock","High sound quality","Long battery life","Rechargeable battery"],
        variants: [
            {
                variantId:001,
                variantBrand:"D-E225",
                variantImage:"./images/d-e225.jpg"
            },
            {
                variantId:002,
                variantBrand:"D-E011",
                variantImage:"./images/d-ej011.jpg"
            }
        ],
        cart:0
    },
    methods:{
        addToCart:function() {
            this.cart+=1
        },
        updateProduct:function(variantImage){
            this.image=variantImage
        },
        removeFromCart:function(){
            if (this.cart>0) {
                this.cart-=1    
            }
            
        }
    }
    
})