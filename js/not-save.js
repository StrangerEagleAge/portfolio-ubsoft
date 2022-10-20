// ЗАПРЕТ НА НАЖАТИЕ КЛАВИШ КЛАВИАТУРЫ
document.onkeydown = function (e) {
    if (e.ctrlKey &&
        (e.keyCode === 8 ||
            e.keyCode === 9 ||
            e.keyCode === 13 ||
            e.keyCode === 20 ||
            e.keyCode === 27 ||
            e.keyCode === 32 ||
            e.keyCode === 33 ||

            e.keyCode === 34 ||
            e.keyCode === 35 ||
            e.keyCode === 36 ||
            e.keyCode === 37 ||
            e.keyCode === 38 ||
            e.keyCode === 39 ||

            e.keyCode === 40 ||
            e.keyCode === 44 ||
            e.keyCode === 45 ||
            e.keyCode === 46 ||
            e.keyCode === 48 ||
            e.keyCode === 49 ||

            e.keyCode === 50 ||
            e.keyCode === 51 ||
            e.keyCode === 52 ||
            e.keyCode === 53 ||
            e.keyCode === 54 ||
            e.keyCode === 55 ||

            e.keyCode === 56 ||
            e.keyCode === 57 ||
            e.keyCode === 65 ||
            e.keyCode === 67 ||
            e.keyCode === 68 ||
            e.keyCode === 69 ||

            e.keyCode === 70 ||
            e.keyCode === 71 ||
            e.keyCode === 72 ||
            e.keyCode === 73 ||
            e.keyCode === 74 ||
            e.keyCode === 75 ||

            e.keyCode === 76 ||
            e.keyCode === 77 ||
            e.keyCode === 78 ||
            e.keyCode === 79 ||
            e.keyCode === 80 ||
            e.keyCode === 81 ||

            e.keyCode === 82 ||
            e.keyCode === 83 ||
            e.keyCode === 84 ||
            e.keyCode === 85 ||
            e.keyCode === 86 ||
            e.keyCode === 87 ||

            e.keyCode === 88 ||
            e.keyCode === 89 ||
            e.keyCode === 90 ||
            e.keyCode === 91 ||
            e.keyCode === 92 ||
            e.keyCode === 96 ||

            e.keyCode === 97 ||
            e.keyCode === 98 ||
            e.keyCode === 99 ||
            e.keyCode === 100 ||
            e.keyCode === 101 ||
            e.keyCode === 102 ||

            e.keyCode === 103 ||
            e.keyCode === 104 ||
            e.keyCode === 105 ||
            e.keyCode === 106 ||
            e.keyCode === 107 ||
            e.keyCode === 109 ||

            e.keyCode === 110 ||
            e.keyCode === 111 ||
            e.keyCode === 112 ||
            e.keyCode === 113 ||
            e.keyCode === 114 ||
            e.keyCode === 115 ||

            e.keyCode === 116 ||
            e.keyCode === 117 ||
            e.keyCode === 118 ||
            e.keyCode === 119 ||
            e.keyCode === 120 ||
            e.keyCode === 121 ||

            e.keyCode === 122 ||
            e.keyCode === 123 ||
            e.keyCode === 124 ||
            e.keyCode === 125 ||
            e.keyCode === 126 ||
            e.keyCode === 127 ||

            e.keyCode === 128 ||
            e.keyCode === 129 ||
            e.keyCode === 130 ||
            e.keyCode === 131 ||
            e.keyCode === 132 ||
            e.keyCode === 133 ||

            e.keyCode === 134 ||
            e.keyCode === 135 ||
            e.keyCode === 144 ||
            e.keyCode === 166 ||
            e.keyCode === 167 ||  // Browser Forward
            e.keyCode === 168 ||  // Browser Refresh

            e.keyCode === 169 ||
            e.keyCode === 170 ||
            e.keyCode === 171 ||
            e.keyCode === 172 ||
            e.keyCode === 173 ||
            e.keyCode === 174 ||

            e.keyCode === 175 ||
            e.keyCode === 176 ||
            e.keyCode === 177 ||
            e.keyCode === 178 ||
            e.keyCode === 179 ||
            e.keyCode === 180 ||

            e.keyCode === 181 ||
            e.keyCode === 182 ||
            e.keyCode === 183)) {
        alert('недопустимое значение');
        return false;
    } else {
        return true;
    }
};



// МЕНЮ НА ПРАВУЮ КЛАВИШУ МЫШИ
$(document).ready(function () {
    //Show contextmenu:
    $(document).contextmenu(function (e) {
        //Get window size:
        let winWidth = $(document).width();
        let winHeight = $(document).height();
        //Get pointer position:
        let posX = e.pageX;
        let posY = e.pageY;
        //Get contextmenu size:
        let menuWidth = $(".contextmenu").width();
        let menuHeight = $(".contextmenu").height();
        //Security margin:
        let secMargin = 10;
        //Prevent page overflow:
        if (posX + menuWidth + secMargin >= winWidth
            && posY + menuHeight + secMargin >= winHeight) {
            //Case 1: right-bottom overflow:
            posLeft = posX - menuWidth - secMargin + "px";
            posTop = posY - menuHeight - secMargin + "px";
        }
        else if (posX + menuWidth + secMargin >= winWidth) {
            //Case 2: right overflow:
            posLeft = posX - menuWidth - secMargin + "px";
            posTop = posY + secMargin + "px";
        }
        else if (posY + menuHeight + secMargin >= winHeight) {
            //Case 3: bottom overflow:
            posLeft = posX + secMargin + "px";
            posTop = posY - menuHeight - secMargin + "px";
        }
        else {
            //Case 4: default values:
            posLeft = posX + secMargin + "px";
            posTop = posY + secMargin + "px";
        };
        //Display contextmenu:
        $(".contextmenu").css({
            "left": posLeft,
            "top": posTop
        }).show();
        //Prevent browser default contextmenu.
        return false;
    });
    //Hide contextmenu:
    $(document).click(function () {
        $(".contextmenu").hide();
    });
});




 document.ondragstart = noselect; 
    // запрет на перетаскивание 
    document.onselectstart = noselect; 
    // запрет на выделение элементов страницы 
    document.oncontextmenu = noselect; 
    // запрет на выведение контекстного меню 
    function noselect() {return false;} 