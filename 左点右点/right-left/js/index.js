function clickThenMove() {
    function getStyle(el, attr) {
        if (el.currentStyle) {
            return el.currentStyle[attr];
        } else {
            return getComputedStyle(el, null)[attr];
        }
    }
    let items = [...document.querySelectorAll(".item")];
    let item = document.querySelector(".item");
    let warpper = document.querySelector(".warpper");
    let width = parseFloat(getStyle(item, "width"));//获取item的宽度
    let cur_offset = 0;//默认偏移量
    let prev = document.querySelector(".prev");
    let next = document.querySelector(".next");
    items.forEach(item => {
        prev.onclick = function () {
            let rl_offset = cur_offset - width;
            if (rl_offset == 6 * (-width)) {//9-4+1=6
                return
            } else {
                warpper.style.transform = `translateX(${rl_offset}px)`;
                cur_offset = rl_offset;
            }
        };
        next.onclick = function () {
            let rl_offset = cur_offset + width;
            if (cur_offset == 0) {
                return
            } else {
                warpper.style.transform = `translateX(${rl_offset}px)`;
                cur_offset = rl_offset;
            };

        }
    })
}
clickThenMove();