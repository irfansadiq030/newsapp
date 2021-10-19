import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import NewsItem from './NewsItem'

export class News extends Component {
    // Creating Articles ARRAY
    article = [
        {
       "source": {
        "id": "reuters",
        "name": "Reuters"
        },
        "author": null,
        "title": "UK watchdog to launch investigation into music streaming - Reuters",
        "description": "Britain's competition regulator said on Tuesday it planned to launch an investigation into music streaming to see whether the role played by platforms such as Spotifycreated a fair deal for consumers.",
        "url": "https://www.reuters.com/business/media-telecom/uk-watchdog-launch-investigation-into-music-streaming-2021-10-19/",
        "urlToImage": "https://www.reuters.com/resizer/-muT5p_MFrOZXF2LtnKyD_y-Bog=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/RGNOQQ6JHRP6PDOSHHVAXHQHII.jpg",
        "publishedAt": "2021-10-19T06:57:00Z",
        "content": "LONDON, Oct 19 (Reuters) - Britain's competition regulator said on Tuesday it planned to launch an investigation into music streaming to see whether the role played by platforms such as Spotifycreate… [+1150 chars]"
        },
        {
       "source": {
        "id": "reuters",
        "name": "Reuters"
        },
        "author": null,
        "title": "Spotify to hire hundreds to drive ad sales in Europe, Australia, Canada - Reuters",
        "description": "Spotify <a href=\"https://www.reuters.com/companies/SPOT.N\" target=\"_blank\">(SPOT.N)</a> is planning to hire hundreds of staff to boost its advertising sales in Europe and elsewhere, as the music streaming service looks to increase revenue from customers who d…",
        "url": "https://www.reuters.com/technology/spotify-hire-hundreds-drive-ad-sales-europe-australia-canada-2021-10-19/",
        "urlToImage": "https://www.reuters.com/resizer/FT3yWtbFXQrDttXMRXdkQ0ofiiY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/C33MWGNELRO35BOPEGHFXIG2VA.jpg",
        "publishedAt": "2021-10-19T05:04:00Z",
        "content": "The Spotify logo is displayed after the stock began selling as a direct listing on the floor of the New York Stock Exchange in New York, U.S., April 3, 2018. REUTERS/Lucas JacksonSTOCKHOLM, Oct 19 (R… [+2482 chars]"
        },
        {
       "source": {
        "id": "reuters",
        "name": "Reuters"
        },
        "author": null,
        "title": "World stocks at 1-month high as bond yields soften - Reuters",
        "description": "World stocks climbed to a one-month high on Tuesday as a rally in technology shares and prospects of solid corporate earnings helped counter concerns about elevated inflationary pressures.",
        "url": "https://www.reuters.com/business/global-markets-wrapup-3-pix-2021-10-19/",
        "urlToImage": "https://www.reuters.com/resizer/x4mR__Y73SBLtyKl9H7Cy6VldZU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/V52IBJMFUFKX5JCW4IDDVBBRUI.jpg",
        "publishedAt": "2021-10-19T08:59:00Z",
        "content": "LONDON, Oct 19 (Reuters) - World stocks climbed to a one-month high on Tuesday as a rally in technology shares and prospects of solid corporate earnings helped counter concerns about elevated inflati… [+2358 chars]"
        },
        {
       "source": {
        "id": "reuters",
        "name": "Reuters"
        },
        "author": null,
        "title": "Russia to go after Google this month with fine of up to 20% of annual turnover - Reuters",
        "description": "Russia said on Tuesday it would this month seek to fine U.S. tech giant Google a percentage of its annual Russian turnover for repeatedly failing to delete content deemed illegal, Moscow's strongest effort yet to rein in foreign tech firms.",
        "url": "https://www.reuters.com/technology/russia-go-after-google-this-month-with-fine-up-20-annual-turnover-2021-10-19/",
        "urlToImage": "https://www.reuters.com/resizer/KR7nAkDOrxwcV5HnoImI6olHVxg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/3GVCFH3QEBLR7K3QWEMDYT23H4.jpg",
        "publishedAt": "2021-10-19T09:54:00Z",
        "content": "The logo of Russia's state communications regulator, Roskomnadzor, is reflected in a laptop screen showing Google start page. May 27, 2021. REUTERS/Maxim ShemetovMOSCOW, Oct 19 (Reuters) - Russia sai… [+2010 chars]"
        },
        {
       "source": {
        "id": "reuters",
        "name": "Reuters"
        },
        "author": null,
        "title": "Developed market equities, U.S. tech, Japan to gain in 2022, fund manager says - Reuters",
        "description": "Developed market equities, including U.S. technology stocks other than the so-called FAANG group, are expected to outperform next year, the global head of multi-asset at PineBridge Investments said.",
        "url": "https://www.reuters.com/business/developed-market-equities-us-tech-japan-gain-2022-fund-manager-says-2021-10-19/",
        "urlToImage": "https://www.reuters.com/resizer/W_8mY6WTKKuMyyYthvq6WFuK9lY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ALKPSTUTXZLNFJ44TLO2OJJ3NQ.jpg",
        "publishedAt": "2021-10-19T09:02:00Z",
        "content": "A man walks past the New York Stock Exchange on the corner of Wall and Broad streets in New York City, New York, U.S., March 13, 2020. REUTERS/Lucas JacksonMUMBAI, Oct 19 (Reuters) - Developed market… [+2179 chars]"
        },
        {
       "source": {
        "id": "reuters",
        "name": "Reuters"
        },
        "author": null,
        "title": "Asian shares track Wall Street higher, China rebounds - Reuters India",
        "description": "Asian shares advanced on Tuesday, supported by a tech-driven Wall Street rally, and a rebound in Chinese markets a day after weak data heightened investor concerns about the world's second-largest economy.",
        "url": "https://www.reuters.com/business/global-markets-wrapup-1-2021-10-19/",
        "urlToImage": "https://www.reuters.com/resizer/x4mR__Y73SBLtyKl9H7Cy6VldZU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/V52IBJMFUFKX5JCW4IDDVBBRUI.jpg",
        "publishedAt": "2021-10-19T02:18:38Z",
        "content": "A man looks at stock market monitors in Taipei January 22, 2008. REUTERS/Nicky LohHONG KONG, Oct 19 (Reuters) - Asian shares advanced on Tuesday, supported by a tech-driven Wall Street rally, and a r… [+2833 chars]"
        },
        {
       "source": {
        "id": "reuters",
        "name": "Reuters"
        },
        "author": null,
        "title": "Tech stocks help Asian markets shake off China blues - Reuters",
        "description": "Asian shares bounced on Tuesday, led by technology names across the region and as Chinese markets clawed back ground lost after disappointing economic data, while the improved investor confidence weighed on the safe-haven dollar.",
        "url": "https://www.reuters.com/business/global-markets-wrapup-2-2021-10-19/",
        "urlToImage": "https://www.reuters.com/resizer/x4mR__Y73SBLtyKl9H7Cy6VldZU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/V52IBJMFUFKX5JCW4IDDVBBRUI.jpg",
        "publishedAt": "2021-10-19T06:36:00Z",
        "content": "A man looks at stock market monitors in Taipei January 22, 2008. REUTERS/Nicky LohHONG KONG, Oct 19 (Reuters) - Asian shares bounced on Tuesday, led by technology names across the region and as Chine… [+2732 chars]"
        },
        {
       "source": {
        "id": null,
        "name": "The Guardian"
        },
        "author": "Emma Beddington",
        "title": "Meditation, vodka and vinegar: can the morning routines of the rich and famous make me a better person?",
        "description": "I am not empowered or optimised by my current morning routine. I am a bleary-eyed doom-scroller. So I spent a month ditching my phone, exercising, journalling and embracing the dawn, to find out what really worksAre morning people better than night owls? I wa…",
        "url": "https://amp.theguardian.com/lifeandstyle/2021/oct/19/meditation-vodka-and-vinegar-can-the-morning-routines-of-the-rich-and-famous-make-me-a-better-person",
        "urlToImage": "https://i.guim.co.uk/img/media/43384c25a867933c16753241d1faa6b23d9c2c62/0_103_3960_2376/master/3960.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=cf0086fae6ea36dd7d780352bc95423c",
        "publishedAt": "2021-10-19T05:00:17Z",
        "content": "Are morning people better than night owls? I was delighted to discover that they are not. The morning morality effect the notion that our capacity to resist lying and cheating dwindles through the da… [+13027 chars]"
        },
        {
       "source": {
        "id": null,
        "name": "The Guardian"
        },
        "author": "Adrian Horton",
        "title": "Beyond Trump jokes: how has late-night comedy fared in the Biden era?",
        "description": "Trump was a boon for ratings and a creative dead-end for liberal political comedy. How shows have moved on has variedSomehow, it’s been almost a year since the advent of late-night television’s post-Trump conundrum – with the end of an administration that was…",
        "url": "https://amp.theguardian.com/tv-and-radio/2021/oct/19/beyond-trump-jokes-late-night-comedy-biden-era",
        "urlToImage": "https://i.guim.co.uk/img/media/fc505580bec63f861b53b28ca94b30f80b71546c/0_0_2560_1536/master/2560.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=65e53ba750d52df0b99fce24bdf4e017",
        "publishedAt": "2021-10-19T06:04:17Z",
        "content": "Somehow, its been almost a year since the advent of late-night televisions post-Trump conundrum with the end of an administration that was both a boon for ratings and a creative dead-end, how would l… [+8128 chars]"
        },
        {
       "source": {
        "id": null,
        "name": "MacRumors"
        },
        "author": "Juli Clover",
        "title": "macOS Monterey and iPadOS 15.1 Release Candidates Limit Safari Color Tab Bar Option to Compact View",
        "description": "With the macOS Monterey and iPadOS 15 release candidates that were seeded to developers today, Apple has eliminated the option to use the Color Tab Bar with the separate tab design in Safari.\n\n\n\nA tab bar with color in Safari 15\n\nIf you want to have a color t…",
        "url": "https://www.macrumors.com/2021/10/18/safari-color-tab-bar-compact-view/",
        "urlToImage": "https://images.macrumors.com/t/aVlhrVKGJT8HZd9OM0akMlO3sKU=/1896x/https://images.macrumors.com/article-new/2021/10/macbook-pro-tab-bar-blending-safari-15.jpg",
        "publishedAt": "2021-10-19T00:52:01Z",
        "content": "With the macOS Monterey and iPadOS 15 release candidates that were seeded to developers today, Apple has eliminated the option to use the Color Tab Bar with the separate tab design in Safari.\r\nA tab … [+1254 chars]"
        },
        {
       "source": {
        "id": null,
        "name": "MacRumors"
        },
        "author": "Tim Hardwick",
        "title": "Apple's 'Unleashed' Event Now Available on YouTube and Events Website",
        "description": "For those who missed Apple's \"Unleashed\" event on Monday, the full 50-minute long keynote can be watched on both YouTube and through Apple's Events webpage.\n\n\n\n \r\n\n\nApple also debuted several new videos during the event, which have also been uploaded to YouTu…",
        "url": "https://www.macrumors.com/2021/10/19/apples-unleashed-event-youtube-events-website/",
        "urlToImage": "https://images.macrumors.com/t/bL0DWgv4paAggpEC8iL03l1MFd8=/1852x/https://images.macrumors.com/article-new/2021/10/10.18.21-event-banner-16X9.jpg",
        "publishedAt": "2021-10-19T09:09:01Z",
        "content": "For those who missed Apple's \"Unleashed\" event on Monday, the full 50-minute long keynote can be watched on both YouTube and through Apple's Events webpage.\r\nApple also debuted several new videos dur… [+289 chars]"
        },
        {
       "source": {
        "id": null,
        "name": "MacRumors"
        },
        "author": "Tim Hardwick",
        "title": "14-inch MacBook Pro Can Fast Charge Via Thunderbolt, But Fast Charge Limited to MagSafe in 16-inch Model",
        "description": "With the debut of the new 14-inch and 16-inch MacBook Pro models, Apple has brought a fast charge capability to the Mac for the first time, allowing users to charge the laptop battery up to 50% in just 30 minutes. \n\n\n\n\n\nBut there's a caveat to this feature th…",
        "url": "https://www.macrumors.com/2021/10/19/16-inch-macbook-pro-fast-charge-magsafe-only/",
        "urlToImage": "https://images.macrumors.com/t/4Y3H6MQPC8bkP3qJWtvCWSih1xE=/1960x/https://images.macrumors.com/article-new/2021/10/macbook-pro-magsafe-3-charging.jpg",
        "publishedAt": "2021-10-19T10:38:50Z",
        "content": "With the debut of the new 14-inch and 16-inch MacBook Pro models, Apple has brought a fast charge capability to the Mac for the first time, allowing users to charge the laptop battery up to 50% in ju… [+1096 chars]"
        },
        {
       "source": {
        "id": null,
        "name": "MacRumors"
        },
        "author": "Sami Fathi",
        "title": "Revamped Apple Maps Rolls Out in Australia",
        "description": "Following a promise of \"later this year\" in June, Apple has officially rolled out its new and updated Apple Maps in Australia. \n\n\n\n\n\nThe new ‌Apple Maps‌ offers richer details in roads, parking lots, parks, buildings, airports, and more, and is part of Apple'…",
        "url": "https://www.macrumors.com/2021/10/19/apple-maps-rolls-out-in-australia/",
        "urlToImage": "https://images.macrumors.com/t/i_cR5GGfJ_CWTcmdwKsVd2zT4hs=/3266x/https://images.macrumors.com/article-new/2021/10/new-apple-maps-australia.png",
        "publishedAt": "2021-10-19T10:01:50Z",
        "content": "Following a promise of \"later this year\" in June, Apple has officially rolled out its new and updated Apple Maps in Australia. \r\nThe new ‌Apple Maps‌ offers richer details in roads, parking lots, par… [+323 chars]"
        },
        {
       "source": {
        "id": null,
        "name": "MacRumors"
        },
        "author": "Sami Fathi",
        "title": "Apple Offering Up to $1,000 of Trade-in for M1 MacBooks Towards Purchase of New MacBook Pros",
        "description": "Apple is offering customers up to $1,000 of trade-in value for the M1 MacBook Pro and ‌M1‌ MacBook Air, giving customers who purchased the first round of Apple silicon Macs an incentive to upgrade to the new, more powerful MacBook Pros.\n\n\n\n\n\nThe new 14-inch a…",
        "url": "https://www.macrumors.com/2021/10/19/m1-macbook-pro-trade-in-values/",
        "urlToImage": "https://images.macrumors.com/t/HH_LvmRqjoIedmKBfFYb8wadtuo=/1600x/https://images.macrumors.com/article-new/2021/10/macbook-pro-2021-side-by-side.jpeg",
        "publishedAt": "2021-10-19T08:58:07Z",
        "content": "Apple is offering customers up to $1,000 of trade-in value for the M1 MacBook Pro and ‌M1‌ MacBook Air, giving customers who purchased the first round of Apple silicon Macs an incentive to upgrade to… [+1140 chars]"
        },
        {
       "source": {
        "id": null,
        "name": "MacRumors"
        },
        "author": "Joe Rossignol",
        "title": "New MacBook Pro Keyboard Has All-Black Design, Full-Size Function Keys, and Touch ID Ring",
        "description": "Apple's new MacBook Pro models unveiled today feature a redesigned keyboard with an all-black design, a row of full-size function keys, and a Touch ID ring that provides a more tactile experience for unlocking the Mac with your finger.\n\n\n\n\n\nThe function keys …",
        "url": "https://www.macrumors.com/2021/10/18/new-macbook-pro-keyboard-design/",
        "urlToImage": "https://images.macrumors.com/t/j52crVbHNinFN5L2Wq-vTWpbWAk=/1600x/https://images.macrumors.com/article-new/2021/10/2021-macbook-pro-keyboard.jpg",
        "publishedAt": "2021-10-19T01:27:00Z",
        "content": "Apple's new MacBook Pro models unveiled today feature a redesigned keyboard with an all-black design, a row of full-size function keys, and a Touch ID ring that provides a more tactile experience for… [+1380 chars]"
        },
        {
       "source": {
        "id": null,
        "name": "MacRumors"
        },
        "author": "Tim Hardwick",
        "title": "Third-Gen AirPods Offer Only 5 Hours' Listening Time With Spatial Audio Enabled",
        "description": "Apple on Monday announced third-generation AirPods, featuring an updated design, improved sound quality, and an extra hour of battery life compared to the second-generation ‌AirPods‌, which offer five hours of listening time. However, what Apple didn't make v…",
        "url": "https://www.macrumors.com/2021/10/19/airpods-3-six-hours-battery-no-spatial-audio/",
        "urlToImage": "https://images.macrumors.com/t/ufglqxvC1j4F0nZ2FnVHTdew8_4=/1600x/https://images.macrumors.com/article-new/2018/02/airpods-3.jpg",
        "publishedAt": "2021-10-19T09:50:44Z",
        "content": "Apple on Monday announced third-generation AirPods, featuring an updated design, improved sound quality, and an extra hour of battery life compared to the second-generation ‌AirPods‌, which offer fiv… [+1433 chars]"
        },
        {
       "source": {
        "id": null,
        "name": "MacRumors"
        },
        "author": "Sami Fathi",
        "title": "16-inch MacBook Pro With M1 Max Chip Is Marginally Heavier Than Same Model Configured With M1 Pro",
        "description": "The new 16-inch MacBook Pro can be configured with either the M1 Pro or ‌M1‌ Max chips. The ‌M1‌ Max chip is the highest-end Apple silicon chip available, and alongside the added performance, the 16-inch MacBook Pro with the ‌M1‌ Max chip comes with another d…",
        "url": "https://www.macrumors.com/2021/10/19/16-inch-macbook-pro-m1-pro-m1-max-weight/",
        "urlToImage": "https://images.macrumors.com/t/KopoktOPiw5FtpYWaChCNWfQSWA=/1600x/https://images.macrumors.com/article-new/2021/10/m1-max.jpg",
        "publishedAt": "2021-10-19T09:25:34Z",
        "content": "The new 16-inch MacBook Pro can be configured with either the M1 Pro or ‌M1‌ Max chips. The ‌M1‌ Max chip is the highest-end Apple silicon chip available, and alongside the added performance, the 16-… [+894 chars]"
        },
        {
       "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "bgriffiths@insider.com (Brent D. Griffiths)",
        "title": "10 Things in Politics: Inside DC's crypto fight",
        "description": "Plus, the FDA plan to let people \"mix-and-match\" booster shots",
        "url": "https://www.businessinsider.com/10-things-in-politics-congress-cryptocurrency-bitcoin",
        "urlToImage": "https://i.insider.com/6169ce3f38c1960018302959?width=1200&format=jpeg",
        "publishedAt": "2021-10-19T09:25:11Z",
        "content": "Welcome back to 10 Things in Politics. Sign up here to receive this newsletter. Plus, download Insider's app for news on the go click here for iOS and here for Android. Send tips to bgriffiths@inside… [+6441 chars]"
        },
        {
       "source": {
        "id": null,
        "name": "Hipertextual"
        },
        "author": "Rubén Chicharro",
        "title": "¿Cómo va a afectar el notch del nuevo MacBook Pro a la experiencia de usuario?",
        "description": "Apple ha decidido incluir un notch en la pantalla de los nuevos MacBook Pro de 14 y 16 pulgadas. La compañía justifica esta muesca con unos marcos un 60% más delgados respecto al modelo del año pasado, así como una una cámara FaceTime de mayor resolución. App…",
        "url": "https://hipertextual.com/2021/10/como-va-a-afectar-el-notch-del-nuevo-macbook-pro-a-la-experiencia-de-usuario",
        "urlToImage": "https://hipertextual.com/wp-content/uploads/2021/10/macbook-pro-001.jpeg",
        "publishedAt": "2021-10-19T09:47:15Z",
        "content": "Apple ha decidido incluir un notch en la pantalla de los nuevos MacBook Pro de 14 y 16 pulgadas. La compañía justifica esta muesca con unos marcos un 60% más delgados respecto al modelo del año pasad… [+2717 chars]"
        },
        {
       "source": {
        "id": null,
        "name": "Hipertextual"
        },
        "author": "Gabriel Erard",
        "title": "Pixel 6, Pixel 6 Pro, ¿y algunas sorpresas?: esto es lo que esperamos del nuevo evento de Google",
        "description": "Este martes 19 de octubre se llevará a cabo el esperado lanzamiento de los nuevos Pixel 6 y Pixel 6 Pro. El evento se enfocará en la presentación definitiva de los mencionados smartphones, de los cuales —honestamente— parece que queda poco por revelar. Las su…",
        "url": "https://hipertextual.com/2021/10/que-esperamos-evento-pixel-6",
        "urlToImage": "https://i1.wp.com/hipertextual.com/wp-content/uploads/2021/10/google-pixel-6.jpg?fit=2500%2C1500&ssl=1",
        "publishedAt": "2021-10-19T06:00:00Z",
        "content": "Este martes 19 de octubre se llevará a cabo el esperado lanzamiento de los nuevos Pixel 6 y Pixel 6 Pro. El evento se enfocará en la presentación definitiva de los mencionados smartphones, de los cua… [+6744 chars]"
        }
    ]
    // Creating Constructor Function
    constructor(){
        super();
        console.log("Constructor Called From News Component");
    }
  render() {
    return (
      <div className="container my-3">
        <h1 className="">Daily News - Top Headlines</h1>
        <div className="row">
            <div className="col-md-4">
                <NewsItem title={"My Title"} description={"test description"} imgUrl="https://static.toiimg.com/photo/69923539.cms"/>
            </div>
            <div className="col-md-4">
                <NewsItem title={"My Title"} description={"test description"}/>
            </div>
            <div className="col-md-4">
                <NewsItem title={"My Title"} description={"test description"}/>
            </div>
        </div>
       
      </div>
    )
  }
}

export default News
