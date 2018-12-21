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
        //totals
        total: 0,
        subitemtotal: 0,
        earlytotal: 0,
        //currency-related
        fixer: {}, 
        fixerRates: {},
        allowedCurrencies: ["EUR","GBP","USD","CAD","AUD"],
        currentCurrency: "EUR",
        currencySymbol: "€",
        defaultCurrency: "EUR",
        //products-related
        endpoint: "https://dev.live.my.icef.com/api3/allAvailableProducts.php",
        products: {},
        productKeys: [],
        productsArray: [],
        originalProductsArray: [],
        //discount-related
        discount: 1,
        regularWorkshops: 0,
        earlyRates: true,
        //cart-related
        cartAtBottom: true,
        footerExpanded: false,
        //modals
        advertModal: false,
        choiceModal: false,
        boothModal: false,
        infoModal: false,
        //checkout-related
        checkout: false,
        selectedWorkshops: [],
        validEmail: false,
        //other
        limitReached: false,
        loaded: false,
        attendBooths: false,
        accountType: 'educator', //can be 'educator', 'exhibitor' and 'work_and_travel'  
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
        //on load functions
        callEndpoint( url ) {
            fetch( url ).then(data => {
                return data.json();
            })
            .then(res => {
                this.products = res;
                this.activateFixer( res );
            })
        },
        activateFixer( ) {
            axios.get(
                'https://data.fixer.io/api/latest?access_key=2a8bbb1fd33e5a65dc1404de3d7bd38b&base='
                + this.currentCurrency )
            .then(response => {
                this.fixer = response.data;
                this.fixerRates = this.fixer.rates;

                if ( typeof fx !== "undefined " && fx.rates ) {
                    fx.rates = this.fixer.rates;
                    fx.base = this.fixer.base;
                }
                else {
                    var fxSetup = {
                        rates: this.fixer.rates,
                        base: this.fixer.base
                    };
                }
                this.fillProductsArray( this.products );
            });
        },
        fillProductsArray( products ) {
            this.productKeys = Object.keys( products );
            this.productKeys.forEach(a => {
                let event = products[ a ];
                if ( event.products ) {
                    let eventKeys = Object.keys( event.products );
                    event.products.marketing_and_sponsorships = [];
                    event.products.marketingItemCount = 0;
                    eventKeys.forEach(m => {
                        if ( m == "Workshop Sponsorship" ){
                            event.products.sponsorships = event.products[m];
                            let sponsorshipKeys = Object.keys( event.products.sponsorships );
                            sponsorshipKeys.forEach(n => {
                                if ( n == "Platinum Sponsorship  - Recognition as event sponsor" ) {
                                    event.products.sponsorships.platinum = event.products.sponsorships[n];
                                    event.products.sponsorships.platinum.price = this.setSponsorshipPackagePrice( event.Event_Name, "platinum" );
                                } else if ( n == "Gold Sponsorship  - Recognition as event sponsor" ) {
                                    event.products.sponsorships.gold = event.products.sponsorships[n];
                                    event.products.sponsorships.gold.available = 0;
                                    event.products.sponsorships.gold.price = this.setSponsorshipPackagePrice( event.Event_Name, "gold" );
                                } else if ( n == "Silver Sponsorship  - Recognition as event sponsor" ) {
                                    event.products.sponsorships.silver = event.products.sponsorships[n];
                                    event.products.sponsorships.silver.price = this.setSponsorshipPackagePrice( event.Event_Name, "silver" );
                                }
                            })
                        }
                        else {
                            let newProduct = this.createMarketingItem ( m, event, event.products.marketing_and_sponsorships);
                            let newProductKeys = Object.keys( newProduct ), item;
                            if ( m == "Workshop Bag Inserts/Tags" ) {
                                newProductKeys.forEach(n => {
                                    item = this.createMarketingSubItem( n, m, newProduct[n], event );
                                    if ( n == "Bag insert - non-paper (agent bag)" ) {
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "non-paper-agent-bag" );
                                        newProduct.items.push( item );
                                    }
                                    else if ( n == "Bag insert - non-paper  (educator bag)" ) {
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "non-paper-edu-bag" );
                                        newProduct.items.push( item );
                                    }
                                    else if ( n == "Bag insert - paper (agent bag)" ) {
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "paper-agent-bag" );
                                        newProduct.items.push( item );
                                    }
                                    else if ( n == "Bag insert - paper (educator bag)" ) {
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "paper-edu-bag" );
                                        newProduct.items.push( item );
                                    }
                                    else if (n == "Bag tags (agent bags)") {
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "bag-tags" );
                                        newProduct.items.push( item );
                                    }
                                    else if (n == "Bag tags (provider bags)") {
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "bag-tags" );
                                        newProduct.items.push( item );
                                    }
                                })
                            }
                            else if ( m == "Workshop Catalogue/Guide" ){
                                newProductKeys.forEach(n => {
                                    item = this.createMarketingSubItem( n, m, newProduct[n], event );
                                    if ( n == "Full page advertisement (agent)" ) {
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "full-page-ad" );
                                        newProduct.items.push( item );
                                    }
                                    else if ( n == "Full page advertisement (educator)" ) {
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "full-page-ad" );
                                        newProduct.items.push( item );
                                    }
                                    else if ( n == "Half page advertisement (agent)" ) {
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "half-page-ad" );
                                        newProduct.items.push( item );
                                    }
                                    else if ( n == "Half page advertisement (educator)" ) {
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "half-page-ad" );
                                        newProduct.items.push( item );
                                    }
                                    else if ( n == "Inside back cover (agent)" ) {
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "inside-back-cover" );
                                        newProduct.items.push( item );
                                    }
                                    else if ( n == "Inside back cover (educator)" ) {
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "inside-front-cover" );
                                        newProduct.items.push( item );
                                    }
                                    else if ( n == "Inside front cover (agent)" ) {
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "inside-front-cover" );
                                        newProduct.items.push( item );
                                    }
                                    else if ( n == "Inside front cover (educator)" ) {
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "inside-front-cover" );
                                        newProduct.items.push( item );
                                    }
                                    else if ( n == "Outside back cover (agent)" ) {
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "outside-back-cover" );
                                        newProduct.items.push( item );
                                    }
                                    else if ( n == "Outside back cover (educator)" ) {
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "outside-back-cover" );
                                        newProduct.items.push( item );
                                    }
                                })
                            }
                            else if ( m == "Workshop Display Advertising" ) {
                                newProductKeys.forEach(n => {
                                    item = this.createMarketingSubItem( n, m, newProduct[n], event );
                                    if ( n == "Literature Display Rack" ) {
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "lit-display-rack" );
                                        newProduct.items.push( item );
                                    }
                                })
                            }
                            else if ( m == "Workshop Lounges/Hub" ) {
                                newProductKeys.forEach(n => {
                                    item = this.createMarketingSubItem( n, m, newProduct[n], event );
                                    if ( n == "Agent lounge in dedicated room" ) {
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "dedicated-room-agent" );
                                        newProduct.items.push( item );
                                    }
                                })
                            }
                            else if ( m == "Workshop Merchandising" ) {
                                newProductKeys.forEach(n => {
                                    item = this.createMarketingSubItem( n, m, newProduct[n], event );
                                    if ( n == "Hotel Key cards/sleeves" ) {
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "key-cards" );
                                        newProduct.items.push( item );
                                    }
                                    else if (n == "Logo on catalogue USB sticks" ) {
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "usb-logos" );
                                        newProduct.items.push( item );
                                    }
                                    else if (n == "Neck cords") {
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "neck-cords" );
                                        newProduct.items.push( item );
                                    }
                                    else if (n == "Pens and note pads") {
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "note-pads" );
                                        newProduct.items.push( item );
                                    }
                                })
                            }
                            else if ( m == "Workshop Receptions" ) {
                                newProductKeys.forEach(n => {
                                    item = this.createMarketingSubItem( n, m, newProduct[n], event );
                                    if ( n == "Refreshment break sponsorship - Day 1" ) {
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "refreshment-reception" );
                                        newProduct.items.push( item );
                                    }
                                    else if ( n == "Refreshment break sponsorship - Day 2" ) {
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "refreshment-reception" );
                                        newProduct.items.push( item );
                                    }
                                    else if ( n == "Refreshment break sponsorship - Registration Day" ) {
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "refreshment-reception" );
                                        newProduct.items.push( item );
                                    }
                                    else if ( n == "Welcome reception sponsorship" ) {
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "welcome-reception" );
                                        newProduct.items.push( item );
                                    }
                                    else if ( n == "Workshop Dinner Reception sponsorship" ) {
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "dinner-reception" );
                                        newProduct.items.push( item );
                                    }
                                    else if ( n == "Workshop lunch sponsorship - Day 1" ) {
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "lunch-reception" );
                                        newProduct.items.push( item );
                                    }
                                    else if ( n == "Workshop lunch sponsorship - Day 2" ) {
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "lunch-reception" );
                                        newProduct.items.push( item );
                                    }
                                })
                            }
                            event.products.marketing_and_sponsorships.push( newProduct );
                        }
                    })
                }
                if ( this.currentCurrency !== event.form_edu_available_currency__c ) {
                    event = this.setCurrencyChange( event );
                }
                else event.currencyDisclaimer = '';
                event.tablesQuantity = 0;
                event.schedulesQuantity = 0;
                event.additionalPeopleQuantity = 0;

                event.incart = false;
                this.productsArray.push( event );
            });
            this.originalProductsArray = this.productsArray;
            this.loaded = true;
        },
        createMarketingItem( title, object ) {
            let marketingItem = object.products[title];
            marketingItem.title = title;
            marketingItem.quantity = 0;
            marketingItem.items = [];
            return marketingItem;
        },
        createMarketingSubItem( title, category, object, event ) {
            object.title = title;
            object.category = category;
            object.quantity = 0;
            object.eventId = event.eventId;
            return object;
        },
        changeCurrency( price, oldCurrency, newCurrency ) {
            return parseInt(
                fx.convert(price, {
                    from: oldCurrency,
                    to: newCurrency
                }).toFixed()
            )
        },
        setCurrencyChange( m ) {
            let oldCurrency = "USD;CAD" ? "USD" : m.form_edu_available_currency__c;
            switch ( oldCurrency ) {
                case 'AUD':
                    m.form_edu_rate_early_aud_1st__c = this.changeCurrency( m.form_edu_rate_early_aud_1st__c, oldCurrency, this.currentCurrency );
                    m.form_edu_rate_early_aud_2nd__c = this.changeCurrency( m.form_edu_rate_early_aud_2nd__c, oldCurrency, this.currentCurrency );
                    m.form_edu_rate_early_aud_acc__c = this.changeCurrency( m.form_edu_rate_early_aud_acc__c, oldCurrency, this.currentCurrency );
                    m.form_edu_rate_regular_aud_1st__c = this.changeCurrency( m.form_edu_rate_regular_aud_1st__c, oldCurrency, this.currentCurrency );
                    m.form_edu_rate_regular_aud_1st__c = this.changeCurrency( m.form_edu_rate_regular_aud_2nd__c, oldCurrency, this.currentCurrency );
                    m.form_edu_rate_regular_aud_acc__c = this.changeCurrency( m.form_edu_rate_regular_aud_acc__c, oldCurrency, this.currentCurrency );
                    
                    m.currencyDisclaimer = "Converted from AUD";
                    break;

                case 'USD;CAD':
                    m.form_edu_rate_early_usd_1st__c = this.changeCurrency( m.form_edu_rate_early_usd_1st__c, oldCurrency, this.currentCurrency );
                    m.form_edu_rate_early_usd_2nd__c = this.changeCurrency( m.form_edu_rate_early_usd_2nd__c, oldCurrency, this.currentCurrency );
                    m.form_edu_rate_early_usd_acc__c = this.changeCurrency( m.form_edu_rate_early_usd_acc__c, oldCurrency, this.currentCurrency );
                    m.form_edu_rate_regular_usd_1st__c = this.changeCurrency( m.form_edu_rate_regular_usd_1st__c, oldCurrency, this.currentCurrency );
                    m.form_edu_rate_regular_usd_1st__c = this.changeCurrency( m.form_edu_rate_regular_usd_2nd__c, oldCurrency, this.currentCurrency );
                    m.form_edu_rate_regular_usd_acc__c = this.changeCurrency( m.form_edu_rate_regular_usd_acc__c, oldCurrency, this.currentCurrency );

                    m.currencyDisclaimer = "Converted from USD;CAD";
                    break;

                case 'EUR':
                    m.form_edu_rate_early_eur_1st__c = this.changeCurrency( m.form_edu_rate_early_eur_1st__c, oldCurrency, this.currentCurrency );
                    m.form_edu_rate_early_eur_2nd__c = this.changeCurrency( m.form_edu_rate_early_eur_2nd__c, oldCurrency, this.currentCurrency );
                    m.form_edu_rate_early_eur_acc__c = this.changeCurrency( m.form_edu_rate_early_eur_acc__c, oldCurrency, this.currentCurrency );
                    m.form_edu_rate_regular_eur_1st__c = this.changeCurrency( m.form_edu_rate_regular_eur_1st__c, oldCurrency, this.currentCurrency );
                    m.form_edu_rate_regular_eur_1st__c = this.changeCurrency( m.form_edu_rate_regular_eur_2nd__c, oldCurrency, this.currentCurrency );
                    m.form_edu_rate_regular_eur_acc__c = this.changeCurrency( m.form_edu_rate_regular_eur_acc__c, oldCurrency, this.currentCurrency );

                    m.currencyDisclaimer = "Converted from EUR";
            }
            if ( m.products ) {
                m.products.marketing_and_sponsorships.forEach(n => {
                    n.items.forEach(p => {
                        p.price = this.changeCurrency( p.price, oldCurrency, this.currentCurrency );
                    })
                })
                if ( m.products.sponsorships ) {
                    m.products.sponsorships.platinum.price = this.changeCurrency( m.products.sponsorships.platinum.price, oldCurrency, this.currentCurrency );
                    m.products.sponsorships.gold.price = this.changeCurrency( m.products.sponsorships.gold.price, oldCurrency, this.currentCurrency );
                    
                    m.products.sponsorships.silver.price = this.changeCurrency( m.products.sponsorships.silver.price, oldCurrency, this.currentCurrency );
                }
                
            }
            return m;
        },
        setSponsorshipPackagePrice( eventTitle, item ) {
            let segmentedTitle = eventTitle.split(" "), event;
            if ( segmentedTitle.indexOf("Berlin") !== -1 ) {
                event = "Berlin";
            }
            else if ( segmentedTitle.indexOf("ANZA") !== -1 ) {
                event = "ANZA";
            }
            else event = "Other";
            switch( item ) {
                case ( "platinum" ):
                    return event == "Berlin" || event == "ANZA" ? 22000 : 16000;
                case ( "gold" ):
                    if (event == "Berlin") return 16000;
                    else if (event == "ANZA") return 14000;
                    else return 11000;
                case ( "silver" ):
                    if (event == "Berlin") return 10000;
                    else if (event == "ANZA") return 9000;
                    else return 8000;
                case ( "non-paper-agent-bag" ):
                case ( "non-paper-edu-bag" ):
                    return event == "Berlin" || event == "ANZA" ? 2200 : 1800;
                case ( "paper-agent-bag" ):
                case ( "paper-edu-bag" ):
                    return event == "Berlin" ? 1100 : 900;
                case ( "bag-tags" ):
                    if ( event == "Berlin" ) return 3800;
                    else if (event == "ANZA") return 2000;
                    else return 2200;
                case ( "full-page-ad" ):
                    if ( event == "Berlin" ) return 1400;
                    else if ( event == "ANZA" ) return 1700;
                    else return 1100;
                case ( "half-page-ad" ):
                    if ( event == "Berlin" ) return 950;
                    else if ( event == "ANZA" ) return 1150;
                    else return 750;
                case ( "inside-back-cover" ):
                case ( "inside-front-cover" ):
                    if ( event == "Berlin" ) return 240;
                    else if ( event == "ANZA" ) return 2000;
                    else return 1850;
                case ( "outside-back-cover" ):
                    return event == "Berlin" || event == "ANZA" ? 2900 : 2150;
                case ( "lit-display-rack" ):
                    if ( event == "Berlin" ) return 1300;
                    else if ( event == "ANZA" ) return 1200;
                    else return 1000;
                case ( "dedicated-room-agent" ):
                    if ( event == "Berlin" ) return 7600;
                    else if ( event == "ANZA" ) return 5000;
                    else return 5400;
                case ( "key-cards" ):
                    return event == "Berlin" ? 3800 : 3300;
                case ( "usb-logos" ):
                    if (event == "Berlin") return 2900;
                case ( "neck-cords" ):
                    return event == "Berlin" || event == "ANZA" ? 6500 : 3900;
                case ( "note-pads" ):
                    if ( event == "Berlin" ) return 3900;
                    else if ( event == "ANZA" ) return 2000;
                    else return 2300;
                case ( "refreshment-reception" ):
                    return event == "Berlin" || event == "ANZA" ? 4000 : 2500;
                case ( "welcome-reception" ):
                    if ( event == "Berlin" ) return 5000;
                    else if ( event == "ANZA" ) return 6000;
                    else return 3500;
                case ( "dinner-reception" ):
                    return event == "Berlin" || event == "ANZA" ? 9000 : 5000;
                case ( "lunch-reception" ):
                    return event == "Berlin" || event == "ANZA" ? 4000 : 2500;
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
            if ( this.productsArray.length ) {
                this.productsArray = [];
                this.fillProductsArray( this.products );
            }
            
        },
        // push a table to the cart and update our price accordingly
        addToCart( product ) {
            let cartitem = {}, schedulePrice, addPeoplePrice;
            cartitem.name = product.Event_Name + " Table"
            cartitem.quantity = 1;
            cartitem.eventId = product.eventId;
            cartitem.schedules = {
                eventId: product.eventId,
                defaultCurrency: product.form_edu_available_currency__c,
                name: product.Event_Name + " Schedule",
                price: schedulePrice,
                quantity: 0
            }
            cartitem.additionalPeople = {
                eventId: product.eventId,
                defaultCurrency: product.form_edu_available_currency__c,
                name: product.Event_Name + " Additional People",
                price: addPeoplePrice,
                quantity: 0
            }
            cartitem.products = [];
            cartitem.sponsorship = {};
            cartitem.sponsorshipSelected = false;
            cartitem.advert = false;
            this.regularWorkshops++;
            if ( product.form_edu_early_rate_active__c && 1 == this.regularWorkshops ){ //EARLYBIRD check... should skip first if if more than one event selected but reset previously added workshops to regular rate.. awkward
                product.selectedearly = true;
                switch ( product.form_edu_available_currency__c ) {
                    case 'EUR':
                        cartitem.price = parseInt( product.form_edu_rate_early_eur_1st__c );
                        schedulePrice = parseInt(product.form_edu_rate_early_eur_2nd__c);
                        addPeoplePrice = parseInt(product.form_edu_rate_early_eur_acc__c);
                        break;
                    case 'AUD':
                        cartitem.price = parseInt( product.form_edu_rate_early_aud_1st__c );
                        schedulePrice = parseInt(product.form_edu_rate_early_aud_2nd__c);
                        addPeoplePrice = parseInt(product.form_edu_rate_early_aud_acc__c);
                        break;
                    case 'USD':
                        cartitem.price = parseInt( product.form_edu_rate_early_usd_1st__c );
                        schedulePrice = parseInt(product.form_edu_rate_early_usd_2nd__c);
                        addPeoplePrice = parseInt(product.form_edu_rate_early_usd_acc__c);
                        break;
                }
                 
                this.total = 0;
                this.earlytotal += cartitem.price;
            } else {
                switch( product.form_edu_available_currency__c ) {
                    case 'EUR':
                        cartitem.price = parseInt(product.form_edu_rate_regular_eur_1st__c); 
                        schedulePrice = parseInt(product.form_edu_rate_regular_eur_2nd__c);
                        addPeoplePrice = parseInt(product.form_edu_rate_regular_eur_acc__c);
                        break;
                    case 'AUD':
                        cartitem.price = parseInt(product.form_edu_rate_regular_aud_1st__c); 
                        schedulePrice = parseInt(product.form_edu_rate_regular_aud_2nd__c);
                        addPeoplePrice = parseInt(product.form_edu_rate_regular_aud_acc__c);
                        break;
                    case 'USD;CAD':
                        cartitem.price = parseInt(product.form_edu_rate_regular_usd_1st__c); 
                        schedulePrice = parseInt(product.form_edu_rate_regular_usd_2nd__c);
                        addPeoplePrice = parseInt(product.form_edu_rate_regular_usd_acc__c);
                }
                this.earlytotal = 0;
                if ( this.regularWorkshops > 1 ) {
                    this.productsArray.forEach(m => {
                        if ( m.selectedearly ) {
                            m.endofearly = true;
                            this.total = this.cart.reduce( ( a, b ) => a.price + b.price );
                        }
                    });
                }
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
                this.total += cartitem.price;
            } 
            this.earlyRates = false; //remove possibility of early bird rates from other events in products
            this.cart.unshift( cartitem ); //push copy of product into cart
            product.tablesQuantity++;
            product.incart = true;

            // if ( this.regularWorkshops == 2 ){
            //     this.cart.forEach(m => {
            //         if ( m.selectedearly ) m.price = m.originalprice;
            //     });
            //     this.total = this.cart.reduce( ( a, b ) => a.price + b.price );
            // }
            // subitem.quantity++;
            // cartitem.quantity++;
        },
        // remove the existence of a given workshop from the cart
        absoluteRemoveFromCart( product, selector ) {
            if ( selector == 'events' ){
                while ( product.additionalPeopleQuantity > 0 ){
                    // this.subitemtotal -= product.additionalPeople.price;
                    product.additionalPeopleQuantity--;
                }
                while ( product.wtScheduleQuantity > 0 ){
                    // this.subitemtotal -= product.schedules.price;
                    product.wtScheduleQuantity--;
                }
                product.incart = false;
                product.products.sponsorships.platinum.pressed = false;
                product.products.sponsorships.gold.pressed = false;
                product.products.sponsorships.silver.pressed = false;
            }
            else {
                this.productsArray.forEach(m => {
                    if ( m.eventId == product.eventId ) {
                        m.incart = false;
                    }
                })
            }
            this.cart.forEach(m => {
                if ( m.eventId == product.eventId ) {
                    console.log(m);
                    while ( m.schedules.quantity > 0 ) {
                        m.schedules.quantity--;
                        this.subitemtotal -= m.schedules.price;
                    }
                    while ( m.additionalPeople.quantity > 0 ) {
                        m.additionalPeople.quantity--;
                        this.subitemtotal -= m.additionalPeople.price;
                    }
                    m.products.forEach(n => {
                        while ( n.quantity > 0 ){
                            n.quantity--;
                            this.total -= n.price;
                        }
                    })
                    if ( m.sponsorshipSelected ) {
                        this.total -= m.sponsorship.price;
                    }
                    else {
                        while ( m.quantity > 0 ){
                            m.quantity--;
                            this.total -= m.price;
                        }
                    }
                }
            });
            this.cart = this.cart.filter( m => m.eventId !== product.eventId );
            this.regularWorkshops--;
            switch( this.regularWorkshops ){
                case 0:
                    this.discount = 1;
                    this.productsArray.forEach(m => {
                        if ( m.selectedearly ) m.selectedearly = false;
                        this.earlyRates = true;
                    });
                    break;
                case 1:
                    this.discount = 1; //resetting this.discount;
                    this.productsArray.forEach(m => {
                        if ( m.selectedearly && m.endofearly ){
                            m.endofearly = false;
                        }
                    });
                    // this.cart[0].price = this.cart[0].priceearly;
                    // this.cart[0].endofearly = false;
                    // this.total = this.cart[0].price; //+ this.subitemtotal;
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
        // add a table for an event to the cart - used in opened events panel after addToCart has been invoked for an event
        filterEvents() {
            let searchString = document.getElementById("events-search").value;
            this.productsArray = this.originalProductsArray.filter(m => m.Event_Name.toUpperCase().includes(searchString.toUpperCase()))
        },
        addTable(product) {
            product.tablesQuantity++;
            this.cart.forEach(m => {
                if ( m.eventId == product.eventId ){
                    m.quantity++;
                    if ( m.selectedearly ) this.earlytotal += m.price;
                    this.total += m.price;
                }
            });
        },
        // remove a table from cart - accessed via the minus sign - triggers absoluteRemoveFromCart if the last table for an event has been removed
        removeTable: function (product) {
            product.tablesQuantity--;
            if ( product.tablesQuantity == 0 ){
                this.absoluteRemoveFromCart(product, 'events');
            }
            else {
                this.cart.forEach(m => {
                    if ( m.eventId == product.eventId ) {
                        m.quantity--;
                        this.total -= m.price;
                    }
                })
            }
        },
        // adds either an extra schedule, an additional person or a subscription package for an event
        addSubItem( product, selector, tier ) {
            switch( selector ){
                case 'schedules':
                    if ( product.schedulesQuantity >= product.tablesQuantity ) return;
                    else {
                        product.schedulesQuantity++;
                        this.cart.forEach(m => {
                            if ( m.eventId == product.eventId ){
                                m.schedules.quantity++;
                                this.subitemtotal += m.schedules.price;
                                return;
                            }
                        })
                        
                    }
                    break;
                case 'add_people':
                    product.additionalPeopleQuantity++;
                    this.cart.forEach(m => {
                        if ( m.eventId == product.eventId ){
                            m.additionalPeople.quantity++;
                            this.subitemtotal += m.additionalPeople.price;
                            return;
                        }
                    })
                    break;
                case 'sponsorship_package':
                    console.log(product);
                    let category = "Workshop Sponsorship";
                    this.cart.forEach(m => {
                        if ( m.eventId == product.eventId ){
                            if ( !m.sponsorshipSelected ){
                                this.total -= m.price;
                                m.sponsorshipSelected = true;
                            }
                            else this.total -= m.sponsorship.price;
                            if ( m.sponsorship.type == tier ){
                                m.sponsorshipSelected = false;
                                this.total += m.price;
                                if ( tier == 'platinum' ) product.products.sponsorships.platinum.pressed = false;
                                else if ( tier == 'gold' ) product.products.sponsorships.gold.pressed = false;
                                else if ( tier == 'platinum' ) product.products.sponsorships.gold.pressed = false;
                                return;
                            }
                            else {
                                m.sponsorship = {
                                    quantity: 1,
                                    eventId: product.eventId,
                                    type: tier
                                }
                                switch ( tier ) {
                                    case 'platinum':
                                        m.sponsorship.name = product.Event_Name + " platinum sponsorship";
                                        m.sponsorship.price = product.products[category].platinum.price;
                                        product.products.sponsorships.platinum.pressed = true;
                                        product.products.sponsorships.gold.pressed = false;
                                        product.products.sponsorships.silver.pressed = false;
                                        break;
                                    case 'gold':
                                        m.sponsorship.name = product.Event_Name + " gold sponsorship";
                                        m.sponsorship.price = product.products[category].gold.price;
                                        product.products.sponsorships.gold.pressed = true;
                                        product.products.sponsorships.platinum.pressed = false;
                                        product.products.sponsorships.silver.pressed = false;
                                        break;
                                    case 'silver':
                                        m.sponsorship.name = product.Event_Name + " silver sponsorship";
                                        m.sponsorship.price = product.products[category].siver.price;
                                        product.products.sponsorships.silver.pressed = true;
                                        product.products.sponsorships.platinum.pressed = false;
                                        product.products.sponsorships.gold.pressed = false;
                                }
                                this.total += m.sponsorship.price;
                            }
                        }
                    })
            }
        },
        // removes either a sponsorship package, an additional schedule or an additional person for an event
        removeSubItem( product, selector ) {
            if ( selector == 'schedules' ) {
                product.schedulesQuantity--;
                this.cart.forEach(m => {
                    if ( m.eventId == product.eventId ) {
                        m.schedules.quantity--;
                        this.subitemtotal -= m.schedules.price;
                        return;
                    }
                })
            }
            else if ( selector == 'add_people' ) {
                product.additionalPeopleQuantity--;
                this.cart.forEach(m => {
                    if ( m.eventId == product.eventId ) {
                        m.additionalPeople.quantity--;
                        this.subitemtotal -= m.additionalPeople.price;
                        return;
                    }
                })
            }
            else if ( selector == 'sponsorship_package' ) {
                this.cart.forEach(m => {
                    if ( m.id == product.id ){
                        m.sponsorshipPackageSelected = false;
                        if ( m.earlyrateselected ) this.earlytotal += m.priceearly;
                        else this.total += m.price;
                    }
                })
            }
            // if ( selector == 'schedules' ){
            //     this.cart.forEach(m => {
            //         if ( m.id == product.id ) {
            //             m.quantity = Math.floor( ( subitem.quantity / 2 )+1 );
            //             if ( subitem.quantity == 1 || subitem.quantity == 0 ) m.quantity = 1;
            //             if ( subitem.quantity !== 0 ) this.subitemtotal -= m.price;
            //         }
            //     });
            //     if ( this.cart.length == 1 && this.cart[0].selectedearly ) {
            //         this.cart[0].price = this.cart[0].priceearly;
            //     }
            // }
        },
        addMarketingItem( product, item ) {
            let productItem = {
                name: product.Event_Name + " " + item.title,
                price: item.price,
                eventId: item.eventId,
                pId: item.pId,
                quantity: 1
            }
            item.quantity++;
            this.cart.forEach(m => {
                if ( m.eventId == productItem.eventId ) {
                    m.products.push( productItem );
                }
            })
            this.total += item.price;
        },
        addMarketingItemFromPanel( product, item ){
            item.quantity++;
            this.cart.forEach(m => {
                if ( m.eventId == product.eventId ) {
                    m.products.forEach(n => {
                        if ( n.pId == item.pId ) {
                            n.quantity++;
                            this.total += n.price;
                        }
                    })
                }
            })
        },
        removeMarketingItemFromPanel(product, item){
            item.quantity--;
            this.cart.forEach(m => {
                if ( m.eventId == product.eventId ) {
                    m.products.forEach(n => {
                        if ( n.pId == item.pId ) {
                            n.quantity--;
                            if ( n.quantity == 0 ) m.products = m.products.filter(m => m.pId !== item.pId); 
                            this.total -= n.price;
                        }
                    })
                }
            })
        },
        // add an advert to the cart
        addAdvert( subitem ){
            cartitem = Object.assign( {}, subitem );
            cartitem.quantity++;
            this.cart.unshift( cartitem );
            this.total += cartitem.price;
            this.advertModal = false;
        },
        // remove an advert from the cart
        removeAdvert( advert ){
            this.total -= advert.price;
            this.cart = this.cart.filter( m => m.name !== advert.name );
        },
        // add a booth to the cart
        addBoothToCart( product, subitem ){
            this.cart.forEach(m => {
                if ( m.booths && m.id == product.id ){
                    this.total -= m.price;
                    this.cart = this.cart.filter(n => n.id !== m.id);
                }
                if ( m.notify ) this.cart = this.cart.filter(n => !n.notify);
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
                if ( booth.price ) this.total -= booth.price;
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
        showBoothOptions( product ) {
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
        // we convert all price values to the selected currency
        changeBaseCurrency() {
            this.setBaseCurrency( event.target.innerText );
        },
        // this doesn't fulfill a function beyond switching out of the checkout screen yet
        confirmQuote(){
            document.getElementById("checkout").style.display = "none";
            document.getElementById("post-checkout").style.display = "block";
        },
    },
    beforeMount(){
        this.callEndpoint( this.endpoint );
        this.setBaseCurrency( this.defaultCurrency );
    },
})