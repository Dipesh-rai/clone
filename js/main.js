const nav_items = [
    {
        name: "music+video",
    },
    {
        name: "store"
    },
    {
        name: "tour"
    },
    {
        name: "subscribe"
    },
]

const navbar = document.querySelector("#navbar")

const nav = nav_items.map((items) => (
    `<li><a href="">${items.name}</a></li>`
)).join("")
navbar.innerHTML = nav;

// for banner
const baner = [
    {
        image: "images/BMHeader.jpg"
    }
]
const banner_image = document.getElementById('banner_image')
const banner_img = baner.map((item) => (
    `<img src="${item.image}" alt="">`
)).join("")

banner_image.innerHTML = banner_img;

//  media_icon
const media_items = [
    {
        icon: "<i class='fa-brands fa-facebook-f'></i>"
    },
    {
        icon: "<i class='fa-brands fa-x-twitter'></i>",
    },
    {
        icon: "<i class='fa-brands fa-instagram'></i>",
    },
    {
        icon: "<i class='fa-brands fa-spotify'></i>",
    },
    {
        icon: "<i class='fa-brands fa-apple'></i>",
    },
    {
        icon: "<i class='fa-brands fa-apple'></i>",
    },
    {
        icon: "<i class='fa-brands fa-soundcloud'></i>"
    }
]
const media = document.querySelector("#media")

const media_data = media_items.map((media_item) => (
    `<span><a href="" class="text-white">${media_item.icon}</a></span>`
)).join("")

media.innerHTML = media_data;


const copyright_content = [
    {
        copyright_name: "Privacy Policy "
    },
    {
        copyright_name: "Terms of Use"
    },
    {
        copyright_name: "Cookies Policy "
    },
    {
        copyright_name: " Cookies Settings"
    }
]
const copyright_href=document.querySelector("#copyright_href");
const copyright_data=copyright_content.map((copyright_items) =>(
    `<p>| </p><a href="">${copyright_items.copyright_name}</a>`
)).join("")
copyright_href.innerHTML=copyright_data;


