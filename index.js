Vue.config.debug = true;

const numberFormats = {
    'en-US': {
        currency: {
            style: 'currency', currency: 'EUR'
        }
    },
    'en-AU': {
        currency: {
            style: 'currency', currency: 'AUD', currencyDisplay: 'symbol'
        }
    }
};

const i18n = new VueI18n({
    numberFormats
});

var vue = new Vue({
    i18n,
    data: {
        products: [{
            id: 1,
            name: "ANZA",
            priceearly: 3400,
            price: 6900,
            currency: "AUD",
            description: "ANZA Workshop description text goes here",
            earlybirdends: 20200320,
            incart: 0,
            quantity: 0,
            subtotal: 0,
            tables: {
                id: 1,
                name: "ANZA Table",
                price: 6900,
                priceearly: 5600,
                quantity: 0,
                schedules: {
                    id: 1,
                    name: "ANZA Additional Schedule",
                    quantity: 0,
                    price: 2400
                },
                additionalPeople: {
                    id: 1,
                    name: "ANZA Additional Person",
                    quantity: 0,
                    price: 990
                },
            },
            additional: []
        },
        {
            id: 2,
            name: "Berlin",
            priceearly: 3900,
            price: 4400,
            currency: "EUR",
            description: "Berlin Workshop description text goes here",
            earlybirdends: 20190311,
            incart: 0,
            quantity: 0,
            subtotal: 0,
            tables: {
                id: 2,
                name: "Berlin Table",
                price: 4400,
                priceearly: 3900,
                quantity: 0,
                schedules: {
                    id: 2,
                    name: "Berlin Additional Schedule",
                    quantity: 0,
                    price: 2400
                },
                additionalPeople: {
                    id: 2,
                    name: "Berlin Additional Person",
                    quantity: 0,
                    price: 990
                },
            },
            additional: []
        },
        {
            id: 3,
            name: "Beijing",
            price: 4400,
            priceearly: 3900,
            currency: "EUR",
            description: "Beijing Workshop description text goes here",
            earlybirdends: 20190311,
            incart: 0,
            quantity: 0,
            subtotal: 0,
            tables: {
                id: 2,
								name: "Beijing Table",
								discount: 0,
                price: 4400,
                priceearly: 3900,
                quantity: 0,
                schedules: {
                    id: 2,
                    name: "Beijing Additional Schedule",
										discount: 0,
                    quantity: 0,
                    price: 2400
                },
                additionalPeople: {
                    id: 2,
                    name: "Beijing Additional Person",
										discount: 0,
                    quantity: 0,
                    price: 990
                },
            },
            additional: []
        },
        {
            id: 4,
            name: "Miami",
            price: 6900,
            priceearly: 3900,
            currency: "AUD",
            description: "Miami Workshop description text goes here",
            earlybirdends: 20190311,
            incart: 0,
            quantity: 0,
            subtotal: 0,
            tables: {
                id: 2,
                name: "Miami Table",
								discount: 0,
                price: 4400,
                priceearly: 3900,
                quantity: 0,
                schedules: {
                    id: 2,
                    name: "Miami Additional Schedule",
										discount: 0,
                    quantity: 0,
                    price: 2400
                },
                additionalPeople: {
                    id: 2,
                    name: "Miami Additional Person",
										discount: 0,
                    quantity: 0,
                    price: 990
                },
            },
            additional: []
        }],
        addons: [
            {
                product: "Additional Person",
                price: 1280,
                min: 0,
                max: null,
                description: "Additional attendee without a schedule"
            }
        ],
        headers:[
            { text: 'Name', value: 'name', sortable: false },
            {
                text: 'Price',
                value: 'price',
                sortable: false,
            },
            {
                text: 'Qty',
                value: 'qty',
                sortable: false
            },
            {
                text: 'SubTotal',
                value: 'subTotal',
                sortable: false
            },
            {
                text: 'Discount',
                value: 'discount',
                sortable: false
            },
            {
                text: 'Total',
                value: 'total',
                sortable: false
            },
        ], 
        cart: [], //it starts empty
				total: 0,
				subitemtotal: 0,
				earlytotal: 0,
				discount: 1,
        saved: 0,
        regularWorkshops: 0,
        limitReached: false,
        checkout: false
    },
    methods: {
        addToCart: function (product, subitem, selector) {
					var d = new Date();
					var fulldate = d.getFullYear()+d.getMonth()+d.getDate();//this currently adds not strings together
					console.log(fulldate);
					console.log(product.earlybirdends);
					var cartitem = Object.assign({}, subitem); //make copy of product
					this.regularWorkshops++;
					this.cart.push(cartitem); //push copy of product into cart
						if( fulldate < product.earlybirdends || 1 == this.regularWorkshops){ //EARLYBIRD check... should skip first if if more than one event selected but reset previously added workshops to regular rate.. awkward
							cartitem.price = subitem.priceearly 
							this.earlytotal = cartitem.price
						} else {
							cartitem.price = subitem.price
							this.earlytotal = cartitem.price

						} //log price of subitem and assign it to copy's price
            cartitem.subtotal = subitem.price; //do same for subtotal (this one's subject to change)
						product.incart++;
						switch (this.regularWorkshops) {
								case 2:
										this.discount = 0.82;
										break;
								case 3:
										this.discount = 0.8;
										break;
								case 4:
										this.discount * 0.77;
										break;
								case 5:
										this.discount * 0.75;
										break;
								default:
										this.discount * 0.73;
            }
            // else this.total += subitem.price;
            this.total += cartitem.subtotal;
            subitem.quantity++;
            cartitem.quantity++;
        },
        removeFromCart: function (cartitem) {
            console.log(cartitem);
            //search for corresponding product copy in cart and remove it from cart (via filter?)


            // product.incart--;
            // product.attendance.schedules--;
            // this.total -= product.price;
            // if (product.incart == 0) {
            //     this.absoluteRemoveFromCart(product);
            // }
        },
        addTable: function (product) {
            product.quantity++;
            this.total += product.price;
            console.log(product);
        },
        removeTable: function (product) {
            product.quantity--;
            if (product.quantity == 0){
                this.absoluteRemoveFromCart(product);
            }
            else this.total -= product.price;
        },
        addSubItem: function (product, subitem, selector) {
            if (selector == 'schedules' && subitem.quantity > product.quantity && subitem.quantity > product.tables.quantity){
                this.limitReached = true;
                return;
            }
            subitem.quantity++;
            this.subitemtotal += subitem.price;
            if (selector == 'schedules' && subitem.quantity > 1){
                this.cart.forEach(m => {
                    if (m.id == product.id){
                        m.quantity = Math.floor((subitem.quantity / 2) + 1);
                        this.subitemtotal += m.price;
                    }
                });
            }
        },
        removeSubItem: function (product, subitem, selector) {
            subitem.quantity--;
            this.subitemtotal -= subitem.price;
            if (selector == 'schedules'){
                this.cart.forEach(m => {
                    if (m.id == product.id) {
                        m.quantity = Math.floor((subitem.quantity / 2)+1);
                        if (subitem.quantity == 1 || subitem.quantity == 0) m.quantity = 1;
                        if (subitem.quantity !== 0) this.subitemtotal -= m.price;
                    }
                });
            }
        },
        absoluteRemoveFromCart: function (product){
            if (product.tables){
                product.tables.additionalPeople.quantity = 0;
                product.tables.schedules.quantity = 0;
                product.tables.quantity = 0;
                product.incart = 0;
            }
            else {
                product.additionalPeople.quantity = 0;
                product.schedules.quantity = 0;
                this.products.forEach(m => {
                    if (m.id == product.id){
                        m.incart = 0;
                        m.tables.quantity = 0;
                    }
                });
            }
						this.total -= product.price;
						this.subitemtotal -= product.price;
            var position = this.cart.indexOf(product);
            this.cart.splice(position, 1);
            this.regularWorkshops--;
        },
        gotoCheckout(){
            this.checkout = true;
            console.log("Checkout: ", this.checkout)
        }
    }
}).$mount('#vue');

//everything below this line will apply to multiple workshop discounts:

// if (Date.now() > new Date(product.earlybirdends)) {
//     new Date(product.earlybirdends)
//   
// }



