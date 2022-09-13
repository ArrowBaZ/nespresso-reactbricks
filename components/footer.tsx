import React from 'react'
import {fetchPages} from 'react-bricks/frontend'
import {Helmet} from "react-helmet";

class Footer extends React.Component {
  render() {

  fetchPages('abe73a3a-2943-41dd-88c0-e6d6000cb96f', {type: 'page'}).then((data) => {
    console.log(data)
  })
  fetchPages('abe73a3a-2943-41dd-88c0-e6d6000cb96f', { type: 'blog' }).then((data) => {
    console.log(data)
  })

    return (
        <div id="page-builder-8a680e58-fc47-748c-e39f-29c29b5638ae"></div>
    <Helmet>

    <script id="page-builder-data-8a680e58-fc47-748c-e39f-29c29b5638ae" type="application/json">{`
        {
    "id": "page-builder-8a680e58-fc47-748c-e39f-29c29b5638ae",
    "version": "latest",
    "created": "",
    "name": "/at/en/hq-page-builder?template=next-v1-footer",
    "preload": {
        "nb-footer-logos": {
            "style": "/shared_res/agility/next-components/footer-logos/v1.1/css/footer-logos.css",
            "modern": "/shared_res/agility/next-components/footer-logos/v1.1/index.es.min.js",
            "legacy": "/shared_res/agility/next-components/footer-logos/v1.1/index.legacy.min.js",
            "deps": [
                "nb-foundations",
                "nb-container",
                "nb-icon"
            ]
        },
        "nb-foundations": {
            "style": "/shared_res/agility/next-components/foundations/v1.1/css/foundations.css",
            "modern": "/shared_res/agility/next-components/foundations/v1.1/index.es.min.js",
            "legacy": "/shared_res/agility/next-components/foundations/v1.1/index.legacy.min.js"
        },
        "nb-container": {
            "style": "/shared_res/agility/next-components/container/v1.1/css/container.css",
            "modern": "/shared_res/agility/next-components/container/v1.1/index.es.min.js",
            "legacy": "/shared_res/agility/next-components/container/v1.1/index.legacy.min.js"
        },
        "nb-icon": {
            "style": "/shared_res/agility/next-components/icon/v1.1/css/icon.css",
            "modern": "/shared_res/agility/next-components/icon/v1.1/index.es.min.js",
            "legacy": "/shared_res/agility/next-components/icon/v1.1/index.legacy.min.js"
        },
        "nb-footer-links": {
            "style": "/shared_res/agility/next-components/footer-links/v1.1/css/footer-links.css",
            "modern": "/shared_res/agility/next-components/footer-links/v1.1/index.es.min.js",
            "legacy": "/shared_res/agility/next-components/footer-links/v1.1/index.legacy.min.js",
            "deps": [
                "nb-foundations",
                "nb-container",
                "nb-icon"
            ]
        },
        "nb-footer-bottom": {
            "style": "/shared_res/agility/next-components/footer-bottom/v1.1/css/footer-bottom.css",
            "modern": "/shared_res/agility/next-components/footer-bottom/v1.1/index.es.min.js",
            "legacy": "/shared_res/agility/next-components/footer-bottom/v1.1/index.legacy.min.js",
            "deps": [
                "nb-foundations",
                "nb-container",
                "nb-icon",
                "nb-dropdown"
            ]
        },
        "nb-dropdown": {
            "style": "/shared_res/agility/next-components/dropdown/v1.1/css/dropdown.css",
            "modern": "/shared_res/agility/next-components/dropdown/v1.1/index.es.min.js",
            "legacy": "/shared_res/agility/next-components/dropdown/v1.1/index.legacy.min.js"
        }
    },
    "components": [
        {
            "uuid": "nb-footer-logos-487f14b5-7ccd-9d77-6fa1-a4dcaddf65a2",
            "module": "nb-footer-logos",
            "tag": "nb-footer-logos",
            "folder": "/shared_res/agility/next-components/footer-logos/",
            "version": "1.1.1",
            "minHeight": "72",
            "minHeightMobile": "96",
            "variations": [
                {
                    "index": 0,
                    "properties": {
                        "campaign": {
                            "id": "new-footer",
                            "creative": "before_footer_logos",
                            "name": "new-footer",
                            "position": "footer"
                        },
                        "copywriting": {
                            "heading": "100% Secure Payments",
                            "size": "24",
                            "is_app_download": "false",
                            "items": [
                                {
                                    "label": "Mastercard",
                                    "icon": "mastercard-card",
                                    "image": "",
                                    "link": "/{market}/{lang}/payment-methods",
                                    "target_blank": ""
                                },
                                {
                                    "label": "Visa",
                                    "icon": "visa-card",
                                    "image": "",
                                    "link": "/{market}/{lang}/payment-methods",
                                    "target_blank": ""
                                },
                                {
                                    "label": "American Express",
                                    "icon": "amex-card",
                                    "image": "",
                                    "link": "/{market}/{lang}/payment-methods",
                                    "target_blank": ""
                                },
                                {
                                    "label": "Paypal",
                                    "icon": "paypal-card",
                                    "image": "",
                                    "link": "/{market}/{lang}/payment-methods",
                                    "target_blank": ""
                                },
                                {
                                    "label": "Apple pay",
                                    "icon": "apple-pay",
                                    "image": "",
                                    "link": "/{market}/{lang}/payment-methods",
                                    "target_blank": ""
                                }
                            ]
                        }
                    },
                    "personalisation": null
                }
            ]
        },
        {
            "uuid": "nb-footer-links-e9b16c81-87de-7c84-f42d-883bd0a33b91",
            "module": "nb-footer-links",
            "tag": "nb-footer-links",
            "folder": "/shared_res/agility/next-components/footer-links/",
            "version": "1.1.1",
            "minHeight": "100",
            "minHeightMobile": "100",
            "variations": [
                {
                    "index": 0,
                    "properties": {
                        "campaign": {
                            "id": "new-footer",
                            "creative": "before_footer_links",
                            "name": "new-footer",
                            "position": "footer"
                        },
                        "copywriting": {
                            "heading": "Bottom page links",
                            "columns": [
                                {
                                    "heading": "Products",
                                    "links": [
                                        {
                                            "label": "Coffee",
                                            "link": "/{market}/{lang}/order/capsules/vertuo",
                                            "target_blank": ""
                                        },
                                        {
                                            "label": "Machines",
                                            "link": "/{market}/{lang}/order/machines/vertuo",
                                            "target_blank": ""
                                        },
                                        {
                                            "label": "Accessories",
                                            "link": "/{market}/{lang}/order/accessories/original",
                                            "target_blank": ""
                                        },
                                        {
                                            "label": "Benefits",
                                            "link": "/{market}/{lang}/benefits",
                                            "target_blank": ""
                                        },
                                        {
                                            "label": "My Subscription",
                                            "link": "/{market}/{lang}/coffee-subscription",
                                            "target_blank": ""
                                        },
                                        {
                                            "label": "Easy Order",
                                            "link": "/{market}/{lang}/standing-orders",
                                            "target_blank": ""
                                        }
                                    ]
                                },
                                {
                                    "heading": "About Nespresso",
                                    "links": [
                                        {
                                            "label": "Store Locator",
                                            "link": "/{market}/{lang}/store-locator",
                                            "target_blank": ""
                                        },
                                        {
                                            "label": "Coffee Expertise",
                                            "link": "/{market}/{lang}/coffee-expertise",
                                            "target_blank": ""
                                        },
                                        {
                                            "label": "Our Choices",
                                            "link": "/{market}/{lang}/our-choices",
                                            "target_blank": ""
                                        },
                                        {
                                            "label": "Recycling Solutions",
                                            "link": "/{market}/{lang}/recycling",
                                            "target_blank": ""
                                        },
                                        {
                                            "label": "Nespresso & You",
                                            "link": "/{market}/{lang}/benefits",
                                            "target_blank": ""
                                        },
                                        {
                                            "label": "Careers",
                                            "link": "/careers/?m={market}&l={lang}#/",
                                            "target_blank": "true"
                                        },
                                        {
                                            "label": "Nespresso Professional",
                                            "link": "/pro/{market}/{lang}/",
                                            "target_blank": "true"
                                        }
                                    ]
                                },
                                {
                                    "heading": "Assistance",
                                    "links": [
                                        {
                                            "label": "Nespresso Services",
                                            "link": "/{market}/{lang}/services",
                                            "target_blank": ""
                                        },
                                        {
                                            "label": "Machine Assistance",
                                            "link": "/{market}/{lang}/machine-assistance",
                                            "target_blank": ""
                                        },
                                        {
                                            "label": "Order Tracking",
                                            "link": "/{market}/{lang}/track-your-order",
                                            "target_blank": ""
                                        },
                                        {
                                            "label": "FAQ",
                                            "link": "/{market}/{lang}/service-faq",
                                            "target_blank": ""
                                        }
                                    ]
                                }
                            ],
                            "contact": {
                                "heading": "Contact us",
                                "links": [
                                    {
                                        "label": "Chat with us",
                                        "link": "#live-chat",
                                        "icon": "live-chat",
                                        "phone": "",
                                        "sublabel_first_line": "",
                                        "sublabel_second_line": "",
                                        "target_blank": ""
                                    },
                                    {
                                        "label": "Original Line",
                                        "link": "tel:+410800555253",
                                        "icon": "phone",
                                        "phone": "0800 55 52 53",
                                        "sublabel_first_line": "Available 24/7",
                                        "sublabel_second_line": "Free call from a landline",
                                        "target_blank": ""
                                    },
                                    {
                                        "label": "Vertuo Line",
                                        "link": "tel:+410800555253",
                                        "icon": "phone",
                                        "phone": "0800 55 52 53",
                                        "sublabel_first_line": "Available 24/7",
                                        "sublabel_second_line": "Free call from a landline",
                                        "target_blank": ""
                                    }
                                ]
                            }
                        }
                    },
                    "personalisation": null
                }
            ]
        },
        {
            "uuid": "nb-footer-logos-da899aed-dbc4-316b-cb35-08d72a483839",
            "module": "nb-footer-logos",
            "tag": "nb-footer-logos",
            "folder": "/shared_res/agility/next-components/footer-logos/",
            "version": "1.1.1",
            "minHeight": "72",
            "minHeightMobile": "96",
            "variations": [
                {
                    "index": 0,
                    "properties": {
                        "campaign": {
                            "id": "new-footer",
                            "creative": "before_footer_logos",
                            "name": "new-footer",
                            "position": "footer"
                        },
                        "copywriting": {
                            "heading": "Security",
                            "size": "64",
                            "is_app_download": "false",
                            "items": [
                                {
                                    "label": "Ebit 2020",
                                    "icon": "",
                                    "image": "/shared_res/agility/next-components/assets/footer-logos/ebit-2020.png",
                                    "link": "",
                                    "target_blank": ""
                                }
                            ]
                        }
                    },
                    "personalisation": null
                }
            ]
        },
        {
            "uuid": "nb-footer-logos-a9771505-9e1b-4a3f-8ef1-28b97e433dcf",
            "module": "nb-footer-logos",
            "tag": "nb-footer-logos",
            "folder": "/shared_res/agility/next-components/footer-logos/",
            "version": "1.1.1",
            "minHeight": "72",
            "minHeightMobile": "96",
            "variations": [
                {
                    "index": 0,
                    "properties": {
                        "campaign": {
                            "id": "new-footer",
                            "creative": "before_footer_logos",
                            "name": "new-footer",
                            "position": "footer"
                        },
                        "copywriting": {
                            "heading": "Order faster on the app",
                            "size": "24",
                            "is_app_download": "true",
                            "items": [
                                {
                                    "label": "Download Nespresso App for Android on Google Play",
                                    "icon": "android",
                                    "image": "",
                                    "link": "",
                                    "target_blank": ""
                                },
                                {
                                    "label": "Download Nespresso App for IOS on Apple Store",
                                    "icon": "apple",
                                    "image": "",
                                    "link": "",
                                    "target_blank": ""
                                },
                                {
                                    "label": "Download Nespresso App for Huawei on AppGallery",
                                    "icon": "huawei",
                                    "image": "",
                                    "link": "",
                                    "target_blank": ""
                                }
                            ]
                        }
                    },
                    "personalisation": null
                }
            ]
        },
        {
            "uuid": "nb-footer-bottom-58090504-2de4-86e7-b3d8-4da7c6ca8303",
            "module": "nb-footer-bottom",
            "tag": "nb-footer-bottom",
            "folder": "/shared_res/agility/next-components/footer-bottom/",
            "version": "1.1.1",
            "minHeight": "105",
            "minHeightMobile": "560",
            "variations": [
                {
                    "index": 0,
                    "properties": {
                        "copywriting": {
                            "languages": {
                                "country": {
                                    "label_a11y": "Website country location is",
                                    "label_country": "Switzerland",
                                    "icon": "",
                                    "location_link": {
                                        "label": "Go to country location page",
                                        "link": "/{market}/{lang}/country"
                                    }
                                },
                                "dropdown": {
                                    "label_dropdown": "Language",
                                    "aa_description": "You can select different sorting values from this listbox. To interact with this listbox press SPACE or ENTER key.",
                                    "aa_listbox_description": "You can navigate through the options using UP or DOWN arrows keys. To exit this listbox press ESCAPE key.",
                                    "aa_select_description": "To select this option press SPACE or ENTER key."
                                },
                                "langs": [
                                    {
                                        "code": "en",
                                        "label": "English"
                                    },
                                    {
                                        "code": "fr",
                                        "label": "French"
                                    },
                                    {
                                        "code": "de",
                                        "label": "German"
                                    },
                                    {
                                        "code": "it",
                                        "label": "Italian"
                                    }
                                ]
                            },
                            "big_links": [
                                {
                                    "label": "Legal Mentions",
                                    "link": "/{market}/{lang}/legal",
                                    "target_blank": ""
                                },
                                {
                                    "label": "Contact",
                                    "link": "/{market}/{lang}/service-customer-care",
                                    "target_blank": ""
                                },
                                {
                                    "label": "Nespresso Professional",
                                    "link": "/pro/{market}/{lang}/",
                                    "target_blank": "true"
                                }
                            ],
                            "small_links": [
                                {
                                    "label": "Cookies",
                                    "link": "/{market}/{lang}/legal#evidon-options-panel",
                                    "script": "true",
                                    "target_blank": ""
                                },
                                {
                                    "label": "Accessibility",
                                    "link": "/{market}/{lang}/accessibility",
                                    "script": "false",
                                    "target_blank": ""
                                },
                                {
                                    "label": "Sitemap",
                                    "link": "/{market}/{lang}/sitemap",
                                    "script": "false",
                                    "target_blank": ""
                                }
                            ],
                            "socials": {
                                "heading": "Follow Nespresso on",
                                "links": [
                                    {
                                        "label": "Facebook",
                                        "link": "https://www.facebook.com/Nespresso",
                                        "icon": "facebook"
                                    },
                                    {
                                        "label": "Twitter",
                                        "link": "https://www.twitter.com/nespresso",
                                        "icon": "twitter"
                                    },
                                    {
                                        "label": "Instagram",
                                        "link": "https://www.instagram.com/nespresso",
                                        "icon": "instagram"
                                    },
                                    {
                                        "label": "Youtube",
                                        "link": "https://www.youtube.com/user/nespresso",
                                        "icon": "youtube"
                                    },
                                    {
                                        "label": "Pinterest",
                                        "link": "https://www.pinterest.com/nespresso/",
                                        "icon": "pinterest"
                                    }
                                ]
                            },
                            "page_top": "Top of the page",
                            "homepage_label": "Nespresso home page",
                            "copyright": "Nestlé Nespresso S.A.",
                            "copyright_a11y": "Copyright"
                        },
                        "campaign": {
                            "id": "new-footer",
                            "name": "new-footer",
                            "creative": "before_footer_bottom",
                            "position": "new-footer"
                        }
                    },
                    "personalisation": null
                }
            ]
        }
    ]
}`}</script>
    <script type="text/javascript">{`
    window.nwc = window.nwc || {}
    window.nwc.projects = window.nwc.projects || []
    window.nwc.projects.push(JSON.parse(document.getElementById('page-builder-data-8a680e58-fc47-748c-e39f-29c29b5638ae').innerHTML))
`}</script>
    <script type="text/javascript">{`(function (p, a, g, e, b, u, i, l, d, r) {
    p[b] = p[b] || {}
    if (p[b].loading) {return} else if (p[b].loaded) {
        p[b].ready()
        return
    }
    p[b].loading = 1
    p[b].ready = function () {
        p[b].loading = 0
        p[b].loaded = 1
        p[b].load()
    }
    u = a.createElement(g)
    i = a.getElementsByTagName(g)[0]
    u.async = 1
    u.src = e
    u.onload = p[b].ready
    i.parentNode.insertBefore(u, i)
    })(window, document, 'script', '/shared_res/agility/page-builder/assets/js/nwc.min.js', 'nwc')`}</script>
        </Helmet>
    )
  }
}

export default Footer
