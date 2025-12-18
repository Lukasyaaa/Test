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
    const selectList = document.querySelector(".select_item-menu__list")
    const selectOpener = document.querySelector(".select_item-menu__opener");
    if(select && selectContainer && selectList && selectOpener){
        selectOpener.addEventListener("click", () => {
            select.classList.toggle("_active");
            if(select.classList.contains("_active")){
                selectContainer.style.height = selectList.offsetHeight + "px";
            } else {
                selectContainer.style.height = "0px";
            }
        })
    }

    const opener = document.querySelector(".menu__burger");
    const closer = document.querySelector(".header__closer");
    const header = document.querySelector(".header");
    if(header && opener && closer){
        opener.addEventListener("click", () => {
            header.classList.add("_active");
            document.body.classList.add("_locked");
        });
        closer.addEventListener("click", () => {
            header.classList.remove("_active");
            document.body.classList.remove("_locked");
        });
    }
})