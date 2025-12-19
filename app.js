document.addEventListener("DOMContentLoaded", () => {
    const blocks = document.querySelectorAll(".blocks__item");
    if(window.innerWidth <= 768){
         if(window.innerWidth > 480) {
            Array.from({length: (blocks.length - 4) / 2}).forEach((_, i) => {
                blocks[blocks.length - i - 1].classList.add("_possibly-hidden");
            });
        } else {
            Array.from({length: blocks.length - 4}).forEach((_, i) => {
                blocks[blocks.length - i - 1].classList.add("_possibly-hidden");
            });
        }

        const showMore = document.querySelector(".blocks__show");
        const blocksContainer = document.querySelector(".blocks__inner");
        if(showMore && blocksContainer){
            showMore.addEventListener("click", () =>{
                blocksContainer.classList.toggle("_show-hidden");
            });
        }
    }    

    const select = document.querySelector(".select_item-menu");
    const selectContainer = document.querySelector(".select_item-menu__container");
    const selectList = document.querySelector(".select_item-menu__list");
    const selectLinks = document.querySelectorAll(".select_item-menu__link a");
    const selectOpener = document.querySelector(".select_item-menu__opener");
    if(select && selectContainer && selectList && selectOpener && selectLinks.length !== 0){
        selectOpener.addEventListener("click", () => {
            select.classList.toggle("_active");
            if(select.classList.contains("_active")){
                selectContainer.style.height = selectList.offsetHeight + "px";
            } else {
                selectContainer.style.height = "0px";
            }
        })
        selectLinks[0].addEventListener("focus", () => {
            select.classList.add("_active");
            selectContainer.style.height = selectList.offsetHeight + "px";
        });
        selectLinks[selectLinks.length - 1].addEventListener("blur", () => {
            select.classList.remove("_active");
            selectContainer.style.height = "0px";
        });
    }

    const opener = document.querySelector(".menu__burger");
    const closer = document.querySelector(".header__closer");
    const header = document.querySelector(".header");
    if(header && opener && closer){
        const allActiveEls = document.querySelectorAll("a, button, input");
        const menuActiveEls = document.querySelectorAll(".menu a, .menu button:not(.burger), .header__closer");
        const firstMenuEl = menuActiveEls[0];
        const lastMenuEl = menuActiveEls[menuActiveEls.length - 1];

        const outherActiveEls = [...allActiveEls].filter(el => ![...menuActiveEls].includes(el));

        const afterHeaderOpener = outherActiveEls[[...outherActiveEls].findIndex( el => el === opener) + 1];

        if(window.innerWidth <= 768){
            menuActiveEls.forEach(el => el.tabIndex = -1);
        }

        const openHeader = (need = false) =>{
            header.classList.add("_active");
            document.body.classList.add("_locked");

            outherActiveEls.forEach(el => el.tabIndex = -1);
            menuActiveEls.forEach(el => el.tabIndex = 0);

            if(need && firstMenuEl) firstMenuEl.focus();
        }

        const closeHeader = (need = false) => {
            header.classList.remove("_active");
            document.body.classList.remove("_locked");

            outherActiveEls.forEach(el => el.tabIndex = 0);
            menuActiveEls.forEach(el => el.tabIndex = -1);

            if(need && afterHeaderOpener) afterHeaderOpener.focus();
        }

        opener.addEventListener("click", openHeader);
        opener.addEventListener("blur", () => openHeader(true));
        closer.addEventListener("click", closeHeader);
        if(lastMenuEl){
            lastMenuEl.addEventListener("blur", () => closeHeader(true));
        }
    }
})