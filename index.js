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

// import * as products from 'products';

// const i18n = new VueI18n({
//     numberFormats
// });

var vue = new Vue({
    // i18n,
    el: '#vue',
    data: {
        products: {},
        productKeys: [],
        productsArray: [],
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
                text: 'Total',
                value: 'total',
                sortable: false
            },
            {
                text: 'Discount',
                value: 'discount',
                sortable: false
            },
        ], 
        helpheaders: [
            { text: 'Sponsorship Packages, included items: ', sortable: false },
            { text: 'Platinum', sortable: false },
            { text: 'Gold', sortable: false },
            { text: 'Silver', sortable: false } 
        ],
        sponsorship_package_info: [
            {
                name: 'Exhibition Booths',
                sidenote: "(Berlin/NA/ANZA Workshops)",
                Platinum: "9m/12m/12m",
                Gold: "6m",
                Silver: "4.5m/6m/6m"
            },
            {
                name: 'Display Tables',
                sidenote: "(excl. Berlin/NA/ANZA Workshops)",
                Platinum: 2,
                Gold: 1,
                Silver: 1
            },
            {
                name: 'Number of delegates',
                sidenote: "(incl. eSchedule PRO account)",
                Platinum: 2,
                Gold: 1,
                Silver: 1
            },
            {
                name: 'Accompanying person',
                sidenote: "(incl. eSchedule PRO account)",
                Platinum: 2,
                Gold: 1,
                Silver: "No"
            },
            {
                name: 'Recognition as Event Sponsor',
                sidenote: '',
                Platinum: "Yes",
                Gold: "Yes",
                Silver: "Yes"
            },
            {
                name: 'Bag insert',
                sidenote: "(paper/USB/other)",
                Platinum: "Yes",
                Gold: "Yes",
                Silver: "Yes"
            },
            {
                name: 'Full page advertisement in educator catalogue',
                sidenote: '',
                Platinum: "Yes",
                Gold: "Yes",
                Silver: "Yes"
            },
            {
                name: 'Full page advertisement in agent catalogue',
                sidenote: '',
                Platinum: "Yes",
                Gold: "Yes",
                Silver: "No"
            },
            {
                name: 'Literature Display Rack',
                sidenote: '',
                Platinum: 2,
                Gold: 1,
                Silver: "No"
            },
            {
                name: 'Presentation',
                sidenote: "(Berlin 5 -7 pm. ANZA Platinum only - 30min)",
                Platinum: "50 mins",
                Gold: "50 mins",
                Silver: "25 mins"
            },
            {
                name: 'Logo on bag',
                sidenote: '',
                Platinum: "Yes",
                Gold: "No",
                Silver: "No"
            },
            {
                name: 'Logo on eSchedule PRO',
                sidenote: '',
                Platinum: "Yes",
                Gold: "Yes",
                Silver: "Yes"
            },
            {
                name: 'ICEF Monitor advert - Skyscraper',
                sidenote: '',
                Platinum: "30K impressions",
                Gold: "-",
                Silver: "-"
            },
            {
                name: 'ICEF Monitor advert - Rectangle',
                sidenote: '',
                Platinum: "-",
                Gold: "20K impressions",
                Silver: "10K impressions"
            },
        ],
        cart: [], //it starts empty
        adverts: [
            {
                type: 'Adverts',
                choices: [
                    {
                        name: 'Skyscraper',
                        price: 975,
                        quantity: 0,
                        advert: true
                        //possible description?
                    },
                    {
                        name: 'Rectangle',
                        price: 475,
                        quantity: 0,
                        advert: true
                    }
                ]
            },
            {
                type: 'eNewsletter Banner',
                choices: [
                    {
                        name: 'Middle Ad',
                        price: 695,
                        quantity: 0,
                        advert: true
                    },
                    {
                        name: 'Opening Ad',
                        price: 1245,
                        quantity: 0,
                        advert: true
                    }
                ]
            },
            {
                type: 'Package - 20% discount',
                choices: [
                    {
                        name: 'Adverts - Skyscraper & Rectangle',
                        price: 1160,
                        quantity: 0,
                        advert: true
                    },
                    {
                        name: 'Full Package',
                        price: 1160,
                        quantity: 0,
                        advert: true
                    },
                ] 
            }
        ],
        total: 0,
        subitemtotal: 0,
        earlytotal: 0,
        discount: 1,
        saved: 0,
        regularWorkshops: 0,
        limitReached: false,
        earlyRates: true,
        checkout: false,
        checkoutscreen: {},
        selectedWorkshops: [],
        advertModal: false,
        choiceModal: false,
        boothModal: false,
        infoModal: false,
        cartAtBottom: true,
        footerExpanded: false,
        valid: false,
        accountType: 'educator', //can also be 'service_provider' and 'work_and_travel'
        attendBooths: false, //determines whether the user is buying an exhibition booth or another fo
        currentDate: new Date(), //current date
        fullDate: (new Date()).getFullYear() + "" + (new Date()).getMonth() + "" + (new Date()).getDate(), //to determine whether early bird rates apply - collating YY/MM/DD format dates as a single number
        fixer: {}, //with regards to fixer.io
        fixerRates: {},
        allowedCurrencies: ["EUR","GBP","USD","CAD","AUD"],
        currentCurrency: "EUR",
        currencySymbol: "€",
        defaultCurrency: "EUR",
        loaded: false,
        endpoint: "https://dev.live.my.icef.com/api3/allAvailableProducts.php"
    },
    filters: {
        // we change each displayed price to fit the format exemplified on icef.design/main and the icef ratesheet among other places
        moneyify: function( value ) {
            if ( value || value == 0 ) {
                let stringified = parseInt(value).toFixed().toString();
                if ( stringified.length > 3 ) {
                    for ( let i = stringified.length - 1; i >= 0; i-- ){
                        if ( ( stringified.length - i ) % 3 == 0 ){
                            stringified = stringified.substring( 0, i ) + " " + stringified.substring( i, stringified.length );
                        }
                    }
                }
                return stringified;
            }
        }
    },
    methods: {
        // push a table to the cart and update our price accordingly
        addToCart: function (product) {
            let cartitem;
            cartitem = {
                name: product.Event_Name + " Table"
            };
            cartitem.price = parseInt(product.form_edu_rate_regular_eur_1st__c); //make copy of product
            cartitem.quantity = 1;
            this.regularWorkshops++;
            this.earlyRates = false; //remove possibility of early bird rates from other events in products
            if ( product.form_edu_early_rate_active__c && 1 == this.regularWorkshops ){ //EARLYBIRD check... should skip first if if more than one event selected but reset previously added workshops to regular rate.. awkward
                product.selectedearly = true;
                cartitem.price = parseInt(product.form_edu_rate_early_eur_1st__c); 
                this.earlytotal += cartitem.price;
            } else {
                this.earlytotal = 0;
                if ( this.regularWorkshops > 1 ) {
                    this.productsArray.forEach(m => {
                        if ( m.selectedearly ) m.endofearly = true;
                    });
                }
            } //log price of subitem and assign it to copy's price
            this.cart.unshift( cartitem ); //push copy of product into cart
            console.log("Total: ", this.total);
            this.total += cartitem.price;
            product.incart++;
            switch ( this.regularWorkshops ) {
                case 1:
                    this.discount = 1;
                    break;
                case 2:
                    this.discount = 0.82;
                    break;
                case 3:
                    this.discount = 0.8;
                    break;
                case 4:
                    this.discount = 0.77;
                    break;
                case 5:
                    this.discount = 0.75;
                    break;
                default:
                    this.discount = 0.73;
            }
            if ( this.regularWorkshops == 2 ){
                this.cart.forEach(m => {
                    if ( m.selectedearly ) m.price = m.originalprice;
                });
                this.total = this.cart.reduce( ( a, b ) => a.price + b.price );
            }
            // subitem.quantity++;
            // cartitem.quantity++;
        },
        // remove the existence of a given workshop from the cart
        absoluteRemoveFromCart: function (product, selector) {
            if ( product.tables ) {
                while ( product.tables.additionalPeople.quantity > 0 ){
                    this.subitemtotal -= product.tables.additionalPeople.price;
                    product.tables.additionalPeople.quantity--;
                }
                while ( product.tables.schedules.quantity > 0 ){
                    this.subitemtotal -= product.tables.schedules.price;
                    product.tables.schedules.quantity--;
                }
                product.tables.quantity = 0;
                product.incart = 0;
                this.subitemtotal -= product.tables.sponsorship_package.price;
                if ( product.tables.sponsorshipPackageSelected ){                 
                    product.tables.sponsorshipPackageSelected = false;
                }
            } else {
                while ( product.additionalPeople.quantity > 0 ){
                    this.subitemtotal -= product.additionalPeople.price;
                    product.additionalPeople.quantity--;
                }
                while ( product.schedules.quantity > 0 ){
                    this.subitemtotal -= product.schedules.price;
                    product.schedules.quantity--;
                }
                this.products.forEach(m => {
                    if ( m.id == product.id ) {
                        m.incart = 0;
                        m.tables.quantity = 0;
                        if ( m.tables.sponsorshipPackageSelected ){
                            this.subitemtotal -= m.tables.sponsorship_package.price;
                            m.tables.sponsorshipPackageSelected = false;
                            m.tables.sponsorships.platinum.quantity = 0;
                            m.tables.sponsorships.gold.quantity = 0;
                            m.tables.sponsorships.silver.quantity = 0;
                        }
                    }
                });
            }
            let cartIds = this.cart.map( m => m.id );
            var position = cartIds.indexOf( product.id );
            let cartEq = this.cart[position];
            while ( this.cart[position].quantity > 0 ){ //process by which tables are removed and price deduction is applied step by step
                if ( this.cart[position].selectedearly ) this.earlytotal -= cartEq.priceearly;
                else this.total -= cartEq.price;
                this.cart[position].quantity--;
            }
            this.cart.splice( position, 1 );
            this.regularWorkshops--;
            switch( this.regularWorkshops ){
                case 0:
                    this.discount = 1;
                    this.products.forEach(m => {
                        if ( m.selectedearly ) m.selectedearly = false;
                        this.earlyRates = true;
                    });
                    break;
                case 1:
                    this.discount = 1; //resetting this.discount;
                    this.products.forEach(m => {
                        if ( m.selectedearly && m.endofearly ){
                            m.endofearly = false;
                        }
                    });
                    this.cart[0].price = this.cart[0].priceearly;
                    this.cart[0].endofearly = false;
                    this.total = this.cart[0].price; //+ this.subitemtotal;
                    break;
                case 2:
                    this.discount = 0.82;
                    break;
                case 3:
                    this.discount = 0.8;
                    break;
                case 4:
                    this.discount = 0.77;
                    break;
                case 5:
                    this.discount = 0.75;
                    break;
                default:
                    this.discount = 0.73;
            }
        },
        // add a booth to the cart
        addBoothToCart(product, subitem){
            this.cart.forEach(m => {
                if ( m.booths && m.id == product.id ){
                    this.total -= m.price;
                    this.cart = this.cart.filter(n => n.id !== m.id);
                }
                if ( m.notify ){
                    this.cart = this.cart.filter(n => !n.notify);
                }
            })
            if ( product.booths.booths ){
                if ( product.booths.large12 ) product.booths.large12.selected = false;
                if ( product.booths.large10 ) product.booths.large10.selected = false;
                if ( product.booths.medium8 ) product.booths.medium8.selected = false;
                if ( product.booths.medium6 ) product.booths.medium6.selected = false;
                if ( product.booths.std5 ) product.booths.std5.selected = false;
                if ( product.booths.std4 ) product.booths.std4.selected = false;
                if ( product.booths.std3 ) product.booths.std3.selected = false;
                if ( product.booths.displaytable ) product.booths.displaytable.selected = false;
            }
            subitem.selected = true; 
            product.booths.booths = true;
            product.booths.quantity++;
            product.booths.name = subitem.name;
            product.booths.price = subitem.price;
            cartitem = Object.assign( {}, product.booths );
            this.cart.unshift( cartitem );
            this.total += cartitem.price;
        },
        // remove a booth from the cart
        removeBoothFromCart( booth, selector ){
            if ( selector == 'events' ) { //
                this.cart.forEach(m => {
                    if ( m.id == booth.id ){
                        this.total -= m.price;
                        return;
                    }
                })
            }
            else {
                if (booth.price) this.total -= booth.price;
            } //for when we're removing booths from 'remove' buttons next to booth rows
            this.products.forEach(m => {
                if ( m.id == booth.id ){
                    m.booths.quantity = 0;
                    m.selectBoothBoolean = false;
                }
            })
            booth.quantity--;
            this.cart = this.cart.filter( m => m.id !== booth.id && !m.notify );
        },
        // add an advert to the cart
        addAdvert(subitem){
            cartitem = Object.assign( {}, subitem );
            cartitem.quantity++;
            this.cart.unshift( cartitem );
            this.total += cartitem.price;
            this.advertModal = false;
        },
        // remove an advert from the cart
        removeAdvert(advert){
            this.total -= advert.price;
            this.cart = this.cart.filter( m => m.name !== advert.name );
        },
        // add a table for an event to the cart - used in opened events panel after addToCart has been invoked for an event
        addTable: function (tables) {
            tables.quantity++;
            this.cart.forEach(m => {
                if ( m.id == tables.id ){
                    m.quantity++;
                    if ( m.selectedearly ) this.earlytotal += m.price;
                    else this.total += m.price;
                }
            });
        },
        // remove a table from cart - accessed via the minus sign - triggers absoluteRemoveFromCart if the last table for an event has been removed
        removeTable: function (tables) {
            tables.quantity--;
            if ( tables.quantity == 0 ){
                this.absoluteRemoveFromCart(tables);
            }
            else {
                this.cart.forEach(m => {
                    if ( m.id == tables.id ) {
                        m.quantity--;
                        this.total -= m.price;
                    }
                })
            }
        },
        // adds either an extra schedule, an additional person or a subscription package for an event
        addSubItem: function (product, subitem, selector, tier) {
            if ( selector == 'schedules') {
                if ( subitem.quantity >= product.tables.quantity ) {
                    this.limitReached = true;
                    return;
                }
                else this.limitReached = false;
            } 
            if ( selector == 'marketing' ) subitem.name = product.name + " " + subitem.name;
            else if ( selector == 'sponsorship_package' ){
                product.tables.sponsorshipPackageSelected = true;
                this.cart.forEach(m => {
                    if ( m.id == product.id ){
                        if ( m.sponsorshipPackageSelected ) {
                            this.subitemtotal -= m.sponsorship_package.price;
                            m.sponsorship_package.quantity--;
                            switch( tier ){
                                case 'platinum':
                                    product.tables.sponsorships.gold.quantity = 0;
                                    product.tables.sponsorships.silver.quantity = 0;
                                    break;
                                case 'gold':
                                    product.tables.sponsorships.platinum.quantity = 0;
                                    product.tables.sponsorships.silver.quantity = 0;
                                    break;
                                case 'silver':
                                    product.tables.sponsorships.platinum.quantity = 0;
                                    product.tables.sponsorships.gold.quantity = 0;
                                    break;
                            }
                        }
                        else this.total -= m.price;
                        m.sponsorshipPackageSelected = true;
                        m.sponsorship_package.name = subitem.name;
                        m.sponsorship_package.price = subitem.price;
                        m.sponsorship_package.quantity = subitem.quantity + 1;
                        this.earlytotal = 0;
                    }
                });
            }
            this.subitemtotal += subitem.price;
            subitem.quantity++;
            if ( selector == 'schedules' && subitem.quantity > 1 ){
                this.cart.forEach(m => {
                    if ( m.id == product.id ){
                        m.quantity = Math.floor( ( subitem.quantity / 2 ) + 1);
                        if ( m.selectedearly ) this.earlytotal += m.price;
                        this.total += m.price;
                        // this.subitemtotal += m.price;
                    }
                });
            }
        },
        // removes either a sponsorship package, an additional schedule or an additional person for an event
        removeSubItem: function (product, subitem, selector) {
            subitem.quantity--;
            this.subitemtotal -= subitem.price;
            if ( selector == 'sponsorship_package' ) {
                this.cart.forEach(m => {
                    if ( m.id == product.id ){
                        m.sponsorshipPackageSelected = false;
                        if ( m.earlyrateselected ) this.earlytotal += m.priceearly;
                        else this.total += m.price;
                    }
                })
            }
            if ( selector == 'schedules' ){
                this.cart.forEach(m => {
                    if ( m.id == product.id ) {
                        m.quantity = Math.floor( ( subitem.quantity / 2 )+1 );
                        if ( subitem.quantity == 1 || subitem.quantity == 0 ) m.quantity = 1;
                        if ( subitem.quantity !== 0 ) this.subitemtotal -= m.price;
                    }
                });
                if ( this.cart.length == 1 && this.cart[0].selectedearly ) {
                    this.cart[0].price = this.cart[0].priceearly;
                }
            }
        },
        // we exit the calculator screen and go into checkout
        gotoCheckout() {
            document.getElementById("cart-bottom-screen").style.display = "none";
            // this.selectedWorkshops will be listed in the checkout screen in blocks containing the titles of each workshop you've indicated you're attending
            this.cart.forEach(m => {
                if ( m.sponsorshipPackageSelected ) {
                    this.selectedWorkshops.push( m.sponsorship_package.name );
                }
                else this.selectedWorkshops.push( m.name );

                if ( m.schedules && m.schedules.quantity > 0 ) {
                    this.selectedWorkshops.push( m.schedules.name );
                }
                if ( m.additionalPeople && m.additionalPeople.quantity > 0 ) {
                    this.selectedWorkshops.push( m.additionalPeople.name )
                }
            })

            this.checkout = true;

            document.getElementById("main-wrapper").style.display = "none";
            document.getElementById("checkout").style.display = "block";
        },
        // we return to the calculator screen from checkout (if we want to add a new item etc.)
        goBackFromCheckout() {
            this.selectedWorkshops = [];
            this.checkout = false;

            document.getElementById("main-wrapper").style.display = "block";
            document.getElementById("checkout").style.display = "none";
            document.getElementById("cart-bottom-screen").style.display = "block";
            document.getElementById("cart-bottom-screen").style.height = "10%";
        },
        //we allow a user to start adding exhibition booths to the cart instead of our regular products
        changeMode() {
            this.attendBooths = !this.attendBooths;
        },
        expandFooter(){
            this.footerExpanded = !this.footerExpanded;
            document.getElementById("bottom-fade").style.display = this.footerExpanded ? "none" : "block"; 
        },
        closeAdvertModal() {
            this.advertModal = false;
        },
        showBoothOptions(product) {
            product.selectBoothBoolean = true;
            if ( product.booths.priceOnly ) {
                this.addBoothToCart( product, product.booths.displaytable );
            }
            if ( this.cart.length == 0 ){
                let empty = {
                    booths: true,
                    notify: true,
                    id: product.id,
                    name: '',
                    price: '',
                    quantity: ''
                };
                this.cart.unshift( empty );
            }
        },
        setBaseCurrency( baseCurrency ) {
            this.currentCurrency = baseCurrency;
            switch( baseCurrency ){
                case 'EUR':
                    this.currencySymbol = "€";
                    break;
                case 'GBP':
                    this.currencySymbol = "£";
                    break;
                case 'USD':
                    this.currencySymbol = "$";
                    break;
                case 'CAD':
                    this.currencySymbol = "$";
                    break;
                case 'AUD':
                    this.currencySymbol = "$";
            }
            axios.get('https://data.fixer.io/api/latest?access_key=2a8bbb1fd33e5a65dc1404de3d7bd38b&base='+baseCurrency)
            .then(response => {
                this.fixer = response.data;
                this.fixerRates = this.fixer.rates;
                if ( typeof fx !== "undefined " && fx.rates ) {
                    fx.rates = this.fixer.rates;
                    fx.base = this.fixer.base;
                }
                // else {
                //     var fxSetup = {
                //         rates: this.fixer.rates,
                //         base: this.fixer.base
                //     };
                // }
                this.setCurrencies();
            });
        },
        setCurrencies(){
            this.productsArray.forEach(m => {
                // if ( this.fullDate < m.earlybirdends ) m.earlyRate = true;
                // m.price = m.originalprice;
                // m.priceearly = m.originalpriceearly;
                // m.tables.price = m.tables.originalprice;
                // m.tables.priceearly = m.tables.originalpriceearly;
                // m.tables.schedules.price = m.tables.schedules.originalprice;
                // m.tables.additionalPeople.price = m.tables.additionalPeople.originalprice;

                // m.tables.sponsorships.platinum.price = m.tables.sponsorships.platinum.originalprice;
                // m.tables.sponsorships.gold.price = m.tables.sponsorships.gold.originalprice;
                // m.tables.sponsorships.silver.price = m.tables.sponsorships.silver.originalprice;

                // if ( m.booths ) {
                //     if ( m.booths.priceLowest ) m.booths.priceLowest = m.booths.priceLowest;
                //     if ( m.booths.priceHighest ) m.booths.priceHighest = m.booths.priceHighest;
                //     if ( m.booths.priceOnly ) m.booths.priceOnly = m.booths.originalPriceOnly;

                //     if ( m.booths.large12 ) m.booths.large12.price = m.booths.large12.originalprice;
                //     if ( m.booths.large10 ) m.booths.large10.price = m.booths.large10.originalprice;
                //     if ( m.booths.medium8 ) m.booths.medium8.price = m.booths.medium8.originalprice;
                //     if ( m.booths.medium6 ) m.booths.medium6.price = m.booths.medium6.originalprice;
                //     if ( m.booths.std5 ) m.booths.std5.price = m.booths.std5.originalprice;
                //     if ( m.booths.std4 ) m.booths.std4.price = m.booths.std4.originalprice;
                //     if ( m.booths.std3 ) m.booths.std3.price = m.booths.std3.originalprice;
                //     if ( m.booths.displaytable ) m.booths.displaytable.price = m.booths.displaytable.originalprice;
                // }

                // m.tables.marketing_and_sponsorships.forEach(n => {
                //     n.types.forEach(p => {
                //         p.price = p.originalprice;
                //     });
                // });

                // m.currencyDisclaimer = '';
                // if ( m.currency !== this.fixer.base ) {
                //     m.currencyDisclaimer = "Converted from " + m.currency;

                //     m.priceearly = parseInt(fx.convert(m.priceearly, {
                //         from: m.currency,
                //         to: this.fixer.base
                //     }).toFixed());

                //     m.price = parseInt(fx.convert(m.price, {
                //         from: m.currency,
                //         to: this.fixer.base
                //     }).toFixed());

                //     if ( m.tables ) {
                //         m.tables.price = parseInt( fx.convert( m.tables.price, {
                //             from: m.currency,
                //             to: this.fixer.base
                //         }).toFixed());
                //         m.tables.priceearly = parseInt( fx.convert( m.tables.priceearly, {
                //             from: m.currency,
                //             to: this.fixer.base
                //         }).toFixed());

                //         m.tables.schedules.price = parseInt( fx.convert( m.tables.schedules.price, {
                //             from: m.currency,
                //             to: this.fixer.base
                //         }).toFixed());

                //         m.tables.additionalPeople.price = parseInt( fx.convert( m.tables.additionalPeople.price, {
                //             from: m.currency,
                //             to: this.fixer.base
                //         }).toFixed());

                //         m.tables.sponsorships.platinum.price = parseInt( fx.convert( m.tables.sponsorships.platinum.price, {
                //             from: m.currency,
                //             to: this.fixer.base
                //         }).toFixed());

                //         m.tables.sponsorships.gold.price = parseInt( fx.convert( m.tables.sponsorships.gold.price, {
                //             from: m.currency,
                //             to: this.fixer.base
                //         }).toFixed());

                //         m.tables.sponsorships.silver.price = parseInt( fx.convert( m.tables.sponsorships.silver.price, {
                //             from: m.currency,
                //             to: this.fixer.base
                //         }).toFixed());

                //         m.tables.marketing_and_sponsorships.forEach(n => {
                //             n.types.forEach(p => {
                //                 p.price = parseInt(fx.convert(p.price, {
                //                     from: m.currency,
                //                     to: this.fixer.base
                //                 }).toFixed());
                //             });
                //         });
                //     }

                //     if ( m.booths.priceHighest && m.booths.priceLowest ) {
                //         m.booths.priceHighest = parseInt(fx.convert( m.booths.priceHighest, {
                //             from: m.currency,
                //             to: this.fixer.base
                //         }).toFixed());

                //         m.booths.priceLowest = parseInt(fx.convert( m.booths.priceLowest, {
                //             from: m.currency,
                //             to: this.fixer.base
                //         }).toFixed());

                //         if ( m.booths.large12 ) {
                //             m.booths.large12.price = parseInt(fx.convert( m.booths.large12.price, {
                //                 from: m.currency,
                //                 to: this.fixer.base
                //             }).toFixed()); 
                //         }

                //         if ( m.booths.large10 ) {
                //             m.booths.large10.price = parseInt(fx.convert( m.booths.large10.price, {
                //                 from: m.currency,
                //                 to: this.fixer.base
                //             }).toFixed()); 
                //         }

                //         if ( m.booths.medium8 ) {
                //             m.booths.medium8.price = parseInt(fx.convert( m.booths.medium8.price, {
                //                 from: m.currency,
                //                 to: this.fixer.base
                //             }).toFixed()); 
                //         }

                //         if ( m.booths.medium6 ) {
                //             m.booths.medium6.price = parseInt(fx.convert( m.booths.medium6.price, {
                //                 from: m.currency,
                //                 to: this.fixer.base
                //             }).toFixed()); 
                //         }

                //         if ( m.booths.std5 ) {
                //             m.booths.std5.price = parseInt(fx.convert( m.booths.std5.price, {
                //                 from: m.currency,
                //                 to: this.fixer.base
                //             }).toFixed()); 
                //         }

                //         if ( m.booths.std4 ) {
                //             m.booths.std4.price = parseInt(fx.convert( m.booths.std4.price, {
                //                 from: m.currency,
                //                 to: this.fixer.base
                //             }).toFixed()); 
                //         }

                //         if ( m.booths.std3 ) {
                //             m.booths.std3.price = parseInt(fx.convert( m.booths.std3.price, {
                //                 from: m.currency,
                //                 to: this.fixer.base
                //             }).toFixed()); 
                //         }

                //         if ( m.booths.displaytable ) {
                //             m.booths.displaytable.price = parseInt(fx.convert( m.booths.displaytable.price, {
                //                 from: m.currency,
                //                 to: this.fixer.base
                //             }).toFixed()); 
                //         }
                //     }
                // }
            });
        },
        // we convert all price values to the selected currency
        changeBaseCurrency() {
            this.setBaseCurrency( event.target.innerText );
        },
        // this doesn't fulfill a function beyond switching out of the checkout screen yet
        confirmQuote(){
            document.getElementById("checkout").style.display = "none";
            document.getElementById("post-checkout").style.display = "block";
        },
        callEndpoint(url) {
            fetch(url).then(data => {
                return data.json();
            })
            .then(res => {
                this.fillProductsArray(res);
            })
        },
        fillProductsArray(products){
            this.productKeys = Object.keys(products);
            for (let i = 0; i < this.productKeys.length; i++){
                let event = products[this.productKeys[i]];
                this.productsArray.push(event);
            }
            this.loaded = true;
        }
    },
    beforeMount(){
        this.callEndpoint(this.endpoint);
        this.setBaseCurrency( this.defaultCurrency );
    },
    mounted(){
    }
})