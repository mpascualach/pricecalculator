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

const i18n = new VueI18n({
    numberFormats
});

var vue = new Vue({
    i18n,
    data: {
        products: [{
            id: 1,
            name: "ANZA",
            priceearly: 5600,
            originalpriceearly: 5600,
            selectedearly: false,
            endofearly: false,
            price: 6900,
            originalprice: 6900, //this is going to be subject to change with respect to the copies of it that'll appear in the cart
            currency: "AUD",
            description: "ANZA Workshop description text goes here",
            earlybirdends: 20200320,
            earlyRate: false,
            incart: 0,
            quantity: 0,
            subtotal: 0,
            selectBoothBoolean: false,
            boothselected: false,
            workandtravel: true,
            tables: {
                id: 1,
                name: "ANZA Table",
                discount: 1, //1 means there is no discount applied
                price: 6900,
                originalprice: 6900,
                priceearly: 5600,
                quantity: 0,
                sponsorshipPackageSelected: false,
                schedules: {
                    id: 1,
                    name: "ANZA Additional Schedule",
                    quantity: 0,
                    price: 2400,
                    originalprice: 2400,
                },
                additionalPeople: {
                    id: 1,
                    name: "ANZA Additional Person",
                    quantity: 0,
                    price: 990,
                    originalprice: 990,
                },
                sponsorships: {
                    platinum: {
                        id: 1,
                        name: "ANZA Platinum Sponsorship Package",
                        price: 22000,
                        originalprice: 22000,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                    gold: {
                        id: 1,
                        name: "ANZA Gold Sponsorship Package",
                        price: 14000,
                        originalprice: 14000,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                    silver: {
                        id: 1,
                        name: "ANZA Silver Sponsorship Package",
                        price: 9000,
                        originalprice: 9000,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                },
                sponsorship_package: {
                    tier: '',
                    name: '',
                    price: 0,
                    quantity: 0
                },
                marketing_and_sponsorships: [
                    {
                        id: 1,
                        name: 'Advertisement in Educator/Agent Catalogue',
                        types: [
                            {
                                name: 'Inside cover',
                                price: 2000,
                                originalprice: 2000,
                                quantity: 0,
                            },
                            {
                                name: 'Outside cover',
                                price: 2900,
                                originalprice: 2900,
                                quantity: 0
                            },
                            {
                                name: 'Full page',
                                price: 1700,
                                originalprice: 1700,
                                quantity: 0
                            },
                            {
                                name: 'Half page',
                                price: 1100,
                                originalprice: 1100,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 1,
                        name: "Display advertising",
                        types: [
                            {
                                name: 'Lift doors',
                                price: 6000,
                                originalprice: 6000,
                                quantity: 0
                            },
                            {
                                name: 'Intro-Point Sponsorship',
                                price: 2200,
                                originalprice: 2200,
                                quantity: 0,
                            },
                            {
                                name: 'Advertising Panel',
                                price: 1600,
                                originalprice: 1600,
                                quantity: 0
                            },
                            {
                                name: 'Literature Display Rack',
                                price: 1200,
                                originalprice: 1200,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 1,
                        name: "Merchandise Sponsorship",
                        types: [
                            {
                                name: 'Note pads',
                                price: 2000,
                                originalprice: 2000,
                                quantity: 0
                            },
                            {
                                name: 'Pens',
                                price: 2000,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Bag insert - paper',
                                price: 900,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Bag insert - paper',
                                price: 2200,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Bag tags',
                                price: 2000,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Catalogue USB Memory cards',
                                price: 2900,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Key card sleeves',
                                price: 3300,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Neck cords',
                                price: 6500,
                                originalprice: 2400,
                                quantity: 0
                            },
                        ]
                    },
                    {
                        id: 1,
                        name: "Hospitality Sponsorship",
                        types: [
                            {
                                name: 'Coffee & tea break',
                                price: 4000,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Lunch',
                                price: 4000,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Welcome reception',
                                price: 6000,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Dinner reception',
                                price: 9000,
                                originalprice: 2400,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 1,
                        name: "Services Sponsorship",
                        types: [
                            {
                                name: 'Internet hub',
                                price: 3000,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Wireless internet service',
                                price: 2000,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Agent hotel room drop',
                                price: 4000,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Agent lounge - dedicated room',
                                price: 5000,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Agent lounge - dedicated area',
                                price: 5400,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Registration - agents',
                                price: 3500,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Registration - providers',
                                price: 3500,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Registration - both',
                                price: 3500,
                                originalprice: 2400,
                                quantity: 0
                            },
                        ]
                    },
                    {
                        id: 1,
                        name: "Presentations",
                        types: [
                            {
                                name: '50 minute slot',
                                price: 690,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: '25 minute slot',
                                price: 490,
                                originalprice: 2400,
                                quantity: 0
                            },
                        ]
                    },
                ]
            },
            booths: {
                id: 1,
                quantity: 0,
                price: 0,
                originalprice: 2400,
                name: '',
                description: '',
                large12: {
                    id: 3,
                    name: "ANZA Exhibition Booth 12m²",
                    quantity: 0,
                    price: 12000,
                    originalprice: 2400,
                    description: "Includes 2 people & 2 schedules"
                },
                large10: {
                    id: 3,
                    name: "ANZA Exhibition Booth 10m²",
                    quantity: 0,
                    price: 9000,
                    originalprice: 2400,
                    description: "Includes 2 people & 2 schedules"
                },
                medium8: {
                    id: 3,
                    name: "ANZA Exhibition Booth 8m²",
                    quantity: 0,
                    price: 8000,
                    originalprice: 2400,
                    description: "Includes 1 people & 1 schedule"
                },
                medium6: {
                    id: 3,
                    name: "ANZA Exhibition Booth 6m²",
                    quantity: 0,
                    price: 6000,
                    originalprice: 2400,
                    description: "Includes 1 people & 1 schedule"
                },
                std5: {
                    id: 3,
                    name: "ANZA Exhibition Booth 4.5m²",
                    quantity: 0,
                    price: 5500,
                    originalprice: 2400,
                    description: "Includes 1 people & 1 schedule"
                },
                std4: {
                    id: 3,
                    name: "ANZA Exhibition Booth 4m²",
                    quantity: 0,
                    price: 5000,
                    originalprice: 2400,
                    description: "Includes 1 people & 1 schedule"
                },
                std3: {
                    id: 3,
                    name: "ANZA Exhibition Booth 3m²",
                    quantity: 0,
                    price: 4400,
                    originalprice: 2400,
                    description: "Includes 1 people & 1 schedule"
                }
            },
            work_and_travel: {
                id: 1,
                name: "ANZA Work and Travel",
                price: 6900,
                originalprice: 2400,
                quantity: 0,
                schedules: {
                    id: 1,
                    name: "ANZA Work and Travel Schedule",
                    quantity: 0,
                    price: 2400,
                    originalprice: 2400,
                },
                additionalPeople: {
                    id: 1,
                    name: "ANZA Work and Travel Additional Person",
                    quantity: 0,
                    price: 900,
                    originalprice: 2400,
                },
            },
            additional: []
        },
        {
            id: 2,
            name: "Berlin",
            priceearly: 3900,
            selectedearly: false,
            endofearly: false,
            price: 4400,
            originalprice: 2400,
            currency: "EUR",
            description: "Berlin Workshop description text goes here",
            earlybirdends: 20190311,
            earlyRate: false,
            incart: 0,
            quantity: 0,
            subtotal: 0,
            boothselected: false,
            workandtravel: true,
            tables: {
                id: 2,
                name: "Berlin Table",
                discount: 1,
                price: 4400,
                originalprice: 4400,
                priceearly: 3900,
                quantity: 0,
                schedules: {
                    id: 2,
                    name: "Berlin Additional Schedule",
                    quantity: 0,
                    price: 2400,
                    originalprice: 2400,
                },
                additionalPeople: {
                    id: 2,
                    name: "Berlin Additional Person",
                    quantity: 0,
                    price: 990,
                    originalprice: 2400,
                },
                sponsorships: {
                    platinum: {
                        id: 2,
                        name: "Berlin Platinum Sponsorship Package",
                        price: 22000,
                        originalprice: 2400,
                        qty: 0,
                    },
                    gold: {
                        id: 2,
                        name: "Berlin Gold Sponsorship Package",
                        price: 16000,
                        originalprice: 2400,
                        qty: 0,
                    },
                    silver: {
                        id: 2,
                        name: "Berlin Silver Sponsorship Package",
                        price: 10000,
                        originalprice: 2400,
                        qty: 0,
                    },
                },
                marketing_and_sponsorships: [
                    {
                        id: 2,
                        name: 'Advertisement in Educator/Agent Catalogue',
                        types: [{
                                name: 'Inside cover',
                                price: 2000,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Outside cover',
                                price: 2900,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Full page',
                                price: 1700,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Half page',
                                price: 1100,
                                originalprice: 2400,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: "Display advertising",
                        types: [{
                                name: 'Lift doors',
                                price: 6000,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Intro-Point Sponsorship',
                                price: 2200,
                                originalprice: 2400,
                                quantity: 0,
                            },
                            {
                                name: 'Advertising Panel',
                                price: 1600,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Literature Display Rack',
                                price: 1200,
                                originalprice: 2400,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: "Merchandise Sponsorship",
                        types: [{
                                name: 'Note pads',
                                price: 2000,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Pens',
                                price: 2000,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Bag insert - paper',
                                price: 900,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Bag insert - paper',
                                price: 2200,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Bag tags',
                                price: 2000,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Catalogue USB Memory cards',
                                price: 2900,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Key card sleeves',
                                price: 3300,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Neck cords',
                                price: 6500,
                                originalprice: 2400,
                                quantity: 0
                            },
                        ]
                    },
                    {
                        id: 1,
                        name: "Hospitality Sponsorship",
                        types: [{
                                name: 'Coffee & tea break',
                                price: 4000,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Lunch',
                                price: 4000,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Welcome reception',
                                price: 6000,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Dinner reception',
                                price: 9000,
                                originalprice: 2400,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: "Services Sponsorship",
                        types: [{
                                name: 'Internet hub',
                                price: 3000,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Wireless internet service',
                                price: 2000,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Agent hotel room drop',
                                price: 4000,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Agent lounge - dedicated room',
                                price: 5000,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Agent lounge - dedicated area',
                                price: 5400,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Registration - agents',
                                price: 3500,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Registration - providers',
                                price: 3500,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Registration - both',
                                price: 3500,
                                originalprice: 2400,
                                quantity: 0
                            },
                        ]
                    },
                    {
                        id: 2,
                        name: "Presentations",
                        types: [{
                                name: '50 minute slot',
                                price: 690,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: '25 minute slot',
                                price: 490,
                                originalprice: 2400,
                                quantity: 0
                            },
                        ]
                    },
                ]
            },
            booths: {
                id: 2,
                quantity: 0,
                price: 0,
                name: '',
                description: '',
                large12: {
                    id: 2,
                    name: "Berlin Exhibition Booth 12m²",
                    quantity: 0,
                    price: 12000,
                    originalprice: 2400,
                    description: "Includes 2 people & 2 schedules"
                },
                large10: {
                    id: 2,
                    name: "Berlin Exhibition Booth 10m²",
                    quantity: 0,
                    price: 9000,
                    originalprice: 2400,
                    description: "Includes 2 people & 2 schedules"
                },
                medium8: {
                    id: 2,
                    name: "Berlin Exhibition Booth 8m²",
                    quantity: 0,
                    price: 8000,
                    originalprice: 2400,
                    description: "Includes 1 people & 1 schedule"
                },
                medium6: {
                    id: 2,
                    name: "Berlin Exhibition Booth 6m²",
                    quantity: 0,
                    price: 6000,
                    originalprice: 2400,
                    description: "Includes 1 people & 1 schedule"
                },
                std5: {
                    id: 2,
                    name: "Berlin Exhibition Booth 4.5m²",
                    quantity: 0,
                    price: 5500,
                    originalprice: 2400,
                    description: "Includes 1 people & 1 schedule"
                },
                std4: {
                    id: 2,
                    name: "Berlin Exhibition Booth 4m²",
                    quantity: 0,
                    price: 5000,
                    originalprice: 2400,
                    description: "Includes 1 people & 1 schedule"
                },
                std3: {
                    id: 2,
                    name: "Berlin Exhibition Booth 3m²",
                    quantity: 0,
                    price: 4400,
                    originalprice: 2400,
                    description: "Includes 1 people & 1 schedule"
                }
            },
            additional: []
        },
        {
            id: 3,
            name: "Beijing",
            price: 4400,
            originalprice: 2400,
            priceearly: 3900,
            selectedearly: false,
            endofearly: false,
            currency: "EUR",
            description: "Beijing Workshop description text goes here",
            earlybirdends: 20190311,
            earlyRate: false,
            incart: 0,
            quantity: 0,
            subtotal: 0,
            boothselected: false,
            workandtravel: false,
            tables: {
                id: 3,
                name: "Beijing Table",
                discount: 1,
                price: 4400,
                originalprice: 4400,
                priceearly: 3900,
                quantity: 0,
                schedules: {
                    id: 3,
                    name: "Beijing Additional Schedule",
                    discount: 1,
                    quantity: 0,
                    price: 2400,
                    originalprice: 2400,
                },
                additionalPeople: {
                    id: 3,
                    name: "Beijing Additional Person",
                    discount: 1,
                    quantity: 0,
                    price: 990,
                    originalprice: 2400,
                },
                sponsorships: {
                    platinum: {
                        id: 3,
                        name: "Beijing Platinum Sponsorship Package",
                        price: 16000,
                        originalprice: 2400,
                        qty: 0,
                    },
                    gold: {
                        id: 3,
                        name: "Beijing Gold Sponsorship Package",
                        price: 11000,
                        originalprice: 2400,
                        qty: 0,
                    },
                    silver: {
                        id: 3,
                        name: "Beijing Silver Sponsorship Package",
                        price: 8000,
                        originalprice: 2400,
                        qty: 0,
                    },
                },
                marketing_and_sponsorships: [
                    {
                        id: 3,
                        name: 'Advertisement in Educator/Agent Catalogue',
                        types: [{
                                name: 'Inside cover',
                                price: 2000,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Outside cover',
                                price: 2900,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Full page',
                                price: 1700,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Half page',
                                price: 1100,
                                originalprice: 2400,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 3,
                        name: "Display advertising",
                        types: [{
                                name: 'Lift doors',
                                price: 6000,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Intro-Point Sponsorship',
                                price: 2200,
                                originalprice: 2400,
                                quantity: 0,
                            },
                            {
                                name: 'Advertising Panel',
                                price: 1600,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Literature Display Rack',
                                price: 1200,
                                originalprice: 2400,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 3,
                        name: "Merchandise Sponsorship",
                        types: [{
                                name: 'Note pads',
                                price: 2000,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Pens',
                                price: 2000,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Bag insert - paper',
                                price: 900,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Bag insert - paper',
                                price: 2200,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Bag tags',
                                price: 2000,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Catalogue USB Memory cards',
                                price: 2900,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Key card sleeves',
                                price: 3300,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Neck cords',
                                price: 6500,
                                originalprice: 2400,
                                quantity: 0
                            },
                        ]
                    },
                    {
                        id: 3,
                        name: "Hospitality Sponsorship",
                        types: [{
                                name: 'Coffee & tea break',
                                price: 4000,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Lunch',
                                price: 4000,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Welcome reception',
                                price: 6000,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Dinner reception',
                                price: 9000,
                                originalprice: 2400,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 3,
                        name: "Services Sponsorship",
                        types: [{
                                name: 'Internet hub',
                                price: 3000,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Wireless internet service',
                                price: 2000,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Agent hotel room drop',
                                price: 4000,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Agent lounge - dedicated room',
                                price: 5000,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Agent lounge - dedicated area',
                                price: 5400,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Registration - agents',
                                price: 3500,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Registration - providers',
                                price: 3500,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Registration - both',
                                price: 3500,
                                originalprice: 2400,
                                quantity: 0
                            },
                        ]
                    },
                    {
                        id: 3,
                        name: "Presentations",
                        types: [{
                                name: '50 minute slot',
                                price: 690,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: '25 minute slot',
                                price: 490,
                                originalprice: 2400,
                                quantity: 0
                            },
                        ]
                    },
                ]
            },
            booths: {
                id: 3,
                quantity: 0,
                price: 0,
                name: '',
                description: '',
                large12: {
                    id: 3,
                    name: "Beijing Exhibition Booth 12m²",
                    quantity: 0,
                    price: 12000,
                    originalprice: 2400,
                    description: "Includes 2 people & 2 schedules"
                },
                large10: {
                    id: 3,
                    name: "Beijing Exhibition Booth 10m²",
                    quantity: 0,
                    price: 9000,
                    originalprice: 2400,
                    description: "Includes 2 people & 2 schedules"
                },
                medium8: {
                    id: 3,
                    name: "Beijing Exhibition Booth 8m²",
                    quantity: 0,
                    price: 8000,
                    originalprice: 2400,
                    description: "Includes 1 people & 1 schedule"
                },
                medium6: {
                    id: 3,
                    name: "Beijing Exhibition Booth 6m²",
                    quantity: 0,
                    price: 6000,
                    originalprice: 2400,
                    description: "Includes 1 people & 1 schedule"
                },
                std5: {
                    id: 3,
                    name: "Beijing Exhibition Booth 4.5m²",
                    quantity: 0,
                    price: 5500,
                    originalprice: 2400,
                    description: "Includes 1 people & 1 schedule"
                },
                std4: {
                    id: 3,
                    name: "Beijing Exhibition Booth 4m²",
                    quantity: 0,
                    price: 5000,
                    originalprice: 2400,
                    description: "Includes 1 people & 1 schedule"
                },
                std3: {
                    id: 3,
                    name: "Beijing Exhibition Booth 3m²",
                    quantity: 0,
                    price: 4400,
                    originalprice: 2400,
                    description: "Includes 1 people & 1 schedule"
                }
            },
            additional: []
        },
        {
            id: 4,
            name: "Miami",
            price: 6900,
            originalprice: 2400,
            priceearly: 3900,
            selectedearly: false,
            endofearly: false,
            currency: "AUD",
            description: "Miami Workshop description text goes here",
            earlybirdends: 20180311,
            earlyRate: false,
            incart: 0,
            quantity: 0,
            subtotal: 0,
            boothselected: false,
            workandtravel: false,
            tables: {
                id: 4,
                name: "Miami Table",
				discount: 0,
                price: 4400,
                originalprice: 4400,
                priceearly: 3900,
                quantity: 0,
                schedules: {
                    id: 4,
                    name: "Miami Additional Schedule",
                    discount: 0,
                    quantity: 0,
                    price: 2400,
                    originalprice: 2400,
                },
                additionalPeople: {
                    id: 4,
                    name: "Miami Additional Person",
                    discount: 0,
                    quantity: 0,
                    price: 990,
                    originalprice: 2400,
                },
                sponsorships: {
                    platinum: {
                        id: 4,
                        name: "Miami Platinum Sponsorship Package",
                        price: 16000,
                        originalprice: 2400,
                        qty: 0,
                    },
                    gold: {
                        id: 4,
                        name: "Miami Gold Sponsorship Package",
                        price: 11000,
                        originalprice: 2400,
                        qty: 0,
                    },
                    silver: {
                        id: 4,
                        name: "Miami Silver Sponsorship Package",
                        price: 8000,
                        originalprice: 2400,
                        qty: 0,
                    },
                },
                marketing_and_sponsorships: [
                    {
                        id: 4,
                        name: 'Advertisement in Educator/Agent Catalogue',
                        types: [{
                                name: 'Inside cover',
                                price: 2000,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Outside cover',
                                price: 2900,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Full page',
                                price: 1700,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Half page',
                                price: 1100,
                                originalprice: 2400,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 4,
                        name: "Display advertising",
                        types: [{
                                name: 'Lift doors',
                                price: 6000,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Intro-Point Sponsorship',
                                price: 2200,
                                originalprice: 2400,
                                quantity: 0,
                            },
                            {
                                name: 'Advertising Panel',
                                price: 1600,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Literature Display Rack',
                                price: 1200,
                                originalprice: 2400,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 4,
                        name: "Merchandise Sponsorship",
                        types: [{
                                name: 'Note pads',
                                price: 2000,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Pens',
                                price: 2000,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Bag insert - paper',
                                price: 900,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Bag insert - paper',
                                price: 2200,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Bag tags',
                                price: 2000,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Catalogue USB Memory cards',
                                price: 2900,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Key card sleeves',
                                price: 3300,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Neck cords',
                                price: 6500,
                                originalprice: 2400,
                                quantity: 0
                            },
                        ]
                    },
                    {
                        id: 4,
                        name: "Hospitality Sponsorship",
                        types: [
                                {
                                name: 'Coffee & tea break',
                                price: 4000,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Lunch',
                                price: 4000,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Welcome reception',
                                price: 6000,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Dinner reception',
                                price: 9000,
                                originalprice: 2400,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 4,
                        name: "Services Sponsorship",
                        types: [{
                                name: 'Internet hub',
                                price: 3000,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Wireless internet service',
                                price: 2000,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Agent hotel room drop',
                                price: 4000,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Agent lounge - dedicated room',
                                price: 5000,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Agent lounge - dedicated area',
                                price: 5400,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Registration - agents',
                                price: 3500,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Registration - providers',
                                price: 3500,
                                originalprice: 3500,
                                quantity: 0
                            },
                            {
                                name: 'Registration - both',
                                price: 3500,
                                originalprice: 3500,
                                quantity: 0
                            },
                        ]
                    },
                    {
                        id: 4,
                        name: "Presentations",
                        types: [{
                                name: '50 minute slot',
                                price: 690,
                                originalprice: 3500,
                                quantity: 0
                            },
                            {
                                name: '25 minute slot',
                                price: 490,
                                originalprice: 3500,
                                quantity: 0
                            },
                        ]
                    },
                ]
            },
            booths: {
                id: 4,
                quantity: 0,
                price: 0,
                name: '',
                description: '',
                large12: {
                    id: 4,
                    name: "Miami Exhibition Booth 12m²",
                    quantity: 0,
                    price: 12000,
                    originalprice: 12000,
                    description: "Includes 2 people & 2 schedules"
                },
                large10: {
                    id: 4,
                    name: "Miami Exhibition Booth 10m²",
                    quantity: 0,
                    price: 9000,
                    originalprice: 9000,
                    description: "Includes 2 people & 2 schedules"
                },
                medium8: {
                    id: 4,
                    name: "Miami Exhibition Booth 8m²",
                    quantity: 0,
                    price: 8000,
                    originalprice: 8000,
                    description: "Includes 1 people & 1 schedule"
                },
                medium6: {
                    id: 4,
                    name: "Miami Exhibition Booth 6m²",
                    quantity: 0,
                    price: 6000,
                    originalprice: 6000,
                    description: "Includes 1 people & 1 schedule"
                },
                std5: {
                    id: 4,
                    name: "Miami Exhibition Booth 4.5m²",
                    quantity: 0,
                    price: 5500,
                    originalprice: 5500,
                    description: "Includes 1 people & 1 schedule"
                },
                std4: {
                    id: 4,
                    name: "Miami Exhibition Booth 4m²",
                    quantity: 0,
                    price: 5000,
                    originalprice: 5000,
                    description: "Includes 1 people & 1 schedule"
                },
                std3: {
                    id: 4,
                    name: "Miami Exhibition Booth 3m²",
                    quantity: 0,
                    price: 4400,
                    originalprice: 4400,
                    description: "Includes 1 people & 1 schedule"
                }
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
        advertModal: false,
        choiceModal: false,
        boothModal: false,
        infoModal: false,
        accountType: 'educator', //can also be 'service_provider' and 'work_and_travel'
        attendBooths: false, //determines whether the user is buying an exhibition booth or another fo
        currentDate: new Date(), //current date
        fullDate: (new Date()).getFullYear() + "" + (new Date()).getMonth() + "" + (new Date()).getDate(), //to determine whether early bird rates apply - collating YY/MM/DD format dates as a single number
        fixer: {}, //with regards to fixer.io
        fixerRates: {},
        allowedCurrencies: ["EUR","GBP","USD","CAD","AUD"],
        defaultCurrency: "EUR",
        currencySymbol: "€"
    },
    methods: {
        addToCart: function (product, subitem, selector) {
            let cartitem;
            if ( selector && selector == 'booths' ) {
                product.booths.booths = true;
                product.booths.quantity++;
                product.booths.name = subitem.name;
                product.booths.price = subitem.price;
                cartitem = Object.assign({}, product.booths);
                this.cart.push(cartitem);
                this.total += cartitem.price;
                console.log("Cart: ", this.cart);
            }
            else if (selector == 'adverts'){
                cartitem = Object.assign({}, subitem);
                console.log(cartitem);
                cartitem.quantity++;
                this.cart.push(cartitem);
                this.total += cartitem.price;
                this.advertModal = false;
            }
            else {
                cartitem = Object.assign({}, subitem); //make copy of product
                this.regularWorkshops++;
                this.earlyRates = false; //remove possibility of early bird rates from other events in products
                this.cart.push(cartitem); //push copy of product into cart
                if( this.fullDate < product.earlybirdends && 1 == this.regularWorkshops && selector !== 'work_and_travel' ){ //EARLYBIRD check... should skip first if if more than one event selected but reset previously added workshops to regular rate.. awkward
                    cartitem.selectedearly = true;
                    product.selectedearly = true;
                    cartitem.price = subitem.priceearly; 
                    this.earlytotal += cartitem.price;
                } else {
                    this.earlytotal = 0;
                    cartitem.price = subitem.price;
                    if ( this.regularWorkshops > 1 ) {
                        this.products.forEach(m => {
                            if ( m.selectedearly ) m.endofearly = true;
                        });
                    }
                } //log price of subitem and assign it to copy's price
                this.total += cartitem.price;
                product.incart++;
                switch (this.regularWorkshops) {
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
                    this.total = this.cart.reduce((a,b)=>a.price + b.price);
                }
                subitem.quantity++;
                cartitem.quantity++;
            }  
        },
        absoluteRemoveFromCart: function (product) {
            if (product.tables) {
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
                    }
                });
            }
            let cartIds = this.cart.map(m => m.id);
            var position = cartIds.indexOf(product.id);
            let cartEq = this.cart[position];
            console.log("Cartitem: ", this.cart[position]);
            while ( this.cart[position].quantity > 0 ){ //process by which tables are removed and price deduction is applied step by step
                if ( this.cart[position].selectedearly ) this.earlytotal -= cartEq.priceearly;
                else this.total -= cartEq.price;
                this.cart[position].quantity--;
            }
            this.cart.splice(position, 1);
            this.regularWorkshops--;
            switch(this.regularWorkshops){
                case 0:
                    this.discount = 1;
                    this.products.forEach(m => {
                        if (m.selectedearly) m.selectedearly = false;
                        this.earlyRates = true;
                    })
                    break;
                case 1:
                    this.discount = 1; //resetting this.discount;
                    this.products.forEach(m => {
                        if (m.selectedearly && m.endofearly){
                            m.endofearly = false;
                        }
                    })
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
        addTable: function (product) {
            product.quantity++;
            if ( product.selectedearly ) this.earlytotal += product.price;
            else this.total += product.price;
            this.total += product.price;
        },
        removeTable: function (cartitem) {
            cartitem.quantity--;
            if ( cartitem.selectedearly ) this.earlytotal -= cartitem.price;
            else this.total -= cartitem.price;
            if ( cartitem.quantity == 0 ){
                this.products.forEach(m => {
                    if ( m.id == cartitem.id ){
                        this.absoluteRemoveFromCart(m);
                    }
                });
            }
        },
        addSubItem: function (product, subitem, selector) {
            if ( selector == 'schedules' && subitem.quantity > product.quantity && subitem.quantity > product.tables.quantity ) {
                this.limitReached = true;
                return;
            }
            if ( selector == 'marketing' ) subitem.name = product.name + " " + subitem.name;
            else if ( selector == 'sponsorship_package' ){
                this.cart.forEach(m => {
                    if ( m.id == product.id ){
                        m.sponsorshipPackageSelected = true;
                        m.sponsorship_package.name = subitem.name;
                        m.sponsorship_package.price = subitem.price;
                        m.sponsorship_package.quantity = subitem.quantity + 1;
                        this.total -=  m.price;
                        this.earlytotal = 0;
                    }
                });
            }
            this.subitemtotal += subitem.price;
            subitem.quantity++;
            if ( selector == 'schedules' && subitem.quantity > 1 ){
                this.cart.forEach(m => {
                    if (m.id == product.id){
                        m.quantity = Math.floor((subitem.quantity / 2) + 1);
                        if (m.selectedearly) this.earlytotal += m.price;
                        this.total += m.price;
                        // this.subitemtotal += m.price;
                    }
                });
            }
        },
        removeSubItem: function (product, subitem, selector) {
            subitem.quantity--;
            this.subitemtotal -= subitem.price;
            if ( selector == 'schedules' ){
                this.cart.forEach(m => {
                    if ( m.id == product.id ) {
                        m.quantity = Math.floor( (subitem.quantity / 2 )+1 );
                        if ( subitem.quantity == 1 || subitem.quantity == 0 ) m.quantity = 1;
                        if ( subitem.quantity !== 0 ) this.subitemtotal -= m.price;
                    }
                });
                if ( this.cart.length == 1 && this.cart[0].selectedearly ) {
                    this.cart[0].price = this.cart[0].priceearly;
                }
            }
        },
        gotoCheckout(){
            this.checkoutScreen = Object.assign({}, this.cart);
            document.getElementById("main-wrapper").style.display = "none";
            document.getElementById("checkout").style.display = "block";
        },
        changeMode(){
            this.attendBooths = !this.attendBooths;
        },
        showBoothOptions(product){
            product.selectBoothBoolean = true;
        },
        setBaseCurrency(baseCurrency){
            console.log(baseCurrency)
            switch(baseCurrency){
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
                this.products.forEach(m => {
                    if (this.fullDate < m.earlybirdends) m.earlyRate = true;
                    m.price = m.originalprice;
                    m.priceearly = m.originalpriceearly;
                    m.tables.price = m.tables.originalprice;
                    m.currencyDisclaimer = '';
                    if (m.currency !== this.fixer.base) {
                        m.currencyDisclaimer = "Converted from " + m.currency;
                        m.earlyprice = (m.originalpriceearly * this.fixerRates[m.currency]).toFixed();
                        m.price = (m.originalprice * this.fixerRates[m.currency]).toFixed();
                        m.tables.price = (m.tables.price * this.fixerRates[m.currency]).toFixed();
                    }
                });
            });
        },
        changeBaseCurrency(){
            this.setBaseCurrency(event.target.innerText)
        }
    },
    beforeMount(){
        this.setBaseCurrency(this.defaultCurrency);
    }
}).$mount('#vue');

//everything below this line will apply to multiple workshop discounts:

// if (Date.now() > new Date(product.earlybirdends)) {
//     new Date(product.earlybirdends)
//   
// }



