'use strict';
{
    const dts = document.querySelectorAll('dt');

    dts.forEach(dt => {
        dt.addEventListener('click', () => {
            // ↓このdtはクリックされたdt
            dt.parentNode.classList.toggle('appear');

            // すべてのdtがelに入る
            dts.forEach(el => {
                // クリックされたdtでないdtならappearクラスを外す
                if(dt !== el){
                    el.parentNode.classList.remove('appear');
                }
            });
        });
    });
}