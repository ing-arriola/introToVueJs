var app= new Vue({
    el: '#app',//Name of the referenced element in the HTML
    data: {
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
        ],
        cart:0
    },
    computed: {
        title() {
            return this.product + ' ' + this.brand
        },
        image(){
            return this.variants[this.selectedVariable].variantImage
        }
    },
    methods:{
        addToCart:function() {
            this.cart+=1
            if(this.cart>1){
                this.remove=false
            }
        },
        updateProduct:function(index){
            this.selectedVariable=index
            
        },
        removeFromCart:function(){
            if (this.cart>0) {
                this.cart-=1    
                this.remove=false
            }else{
                this.remove=true
            }
            
        }
    }
    
})