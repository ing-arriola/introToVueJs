var app= new Vue({
    el: '#app',//Name of the referenced element in the HTML
    data: {
        product: 'Diskman',//Data to be displayed
        description: 'The best portable music player :)',
        image: './images/diskman-sony.jpg', //Image ti be displayed
        inventory:8,
        sale:true,
        details: ["Unlimited antishock","High sound quality","Long battery life","Rechargeable battery"],
        variants: [
            {
                variantId:001,
                variantBrand:"Sony"
            },
            {
                variantId:002,
                variantBrand:"Philips"
            }
        ]
    }
    
})