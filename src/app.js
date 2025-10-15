const oberver = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("showLeft")
        }else{
            entry.target.classList.remove("showLeft")
        }
    })

}, {})

const oberve = document.querySelectorAll(".nav-title, .nav-links, .hero-article, .sell-nft, .features-container, .hot-nfts-container, .card-section article, .view-more, .people-card, footer, .best-seller-heading")
oberve.forEach((el) => {
    oberver.observe(el)
})



const oberverRight = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("showRight")
        }
        else{
            entry.target.classList.remove("showRight")
        }
    })
})

const observeRight = document.querySelectorAll(".nav-btn-container, .hero-container")
observeRight.forEach((el) => {
    oberverRight.observe(el)
})

