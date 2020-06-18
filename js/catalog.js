let block1 = document.querySelector('.slider');
let block2 = document.querySelector('.slider1');
let block3 = document.querySelector('.slider2');

document.querySelector('#button1').onclick = ()=> {
    block1.classList.remove('displayNone');
    block2.classList.add('displayNone');
    block3.classList.add('displayNone');
};

document.querySelector('#button2').onclick = ()=> {
    block1.classList.add('displayNone');
    block2.classList.remove('displayNone');
    block3.classList.add('displayNone');
};

document.querySelector('#button3').onclick = ()=> {
    block1.classList.add('displayNone');
    block2.classList.add('displayNone');
    block3.classList.remove('displayNone');
};

var multiItemSlider = (function () {
    return function (selector, config) {
        var
            _mainElement = document.querySelector(selector), // основный элемент блока
            _sliderWrapper = _mainElement.querySelector('.slider__wrapper'), // обертка для .slider-item
            _sliderItems = _mainElement.querySelectorAll('.slider__item'), // элементы (.slider-item)
            _sliderControls = _mainElement.querySelectorAll('.slider__control'), // элементы управления
            _sliderControlLeft = _mainElement.querySelector('.slider__control_left'), // кнопка "LEFT"
            _sliderControlRight = _mainElement.querySelector('.slider__control_right'), // кнопка "RIGHT"
            _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), // ширина обёртки
            _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width), // ширина одного элемента
            _positionLeftItem = 0, // позиция левого активного элемента
            _transform = 0, // значение транфсофрмации .slider_wrapper
            _step = _itemWidth / _wrapperWidth * 100, // величина шага (для трансформации)
            _items = []; // массив элементов
        // наполнение массива _items
        _sliderItems.forEach(function (item, index) {
            _items.push({item: item, position: index, transform: 0});
        });

        var position = {
            getMin: 0,
            getMax: _items.length - 1,
        }

        var _transformItem = function (direction) {
            if (direction === 'right') {
                if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) >= position.getMax) {
                    return;
                }
                if (!_sliderControlLeft.classList.contains('slider__control_show')) {
                    _sliderControlLeft.classList.add('slider__control_show');
                }
                if (_sliderControlRight.classList.contains('slider__control_show') && (_positionLeftItem + _wrapperWidth / _itemWidth) >= position.getMax) {
                    _sliderControlRight.classList.remove('slider__control_show');
                }
                _positionLeftItem++;
                _transform -= _step;
            }
            if (direction === 'left') {
                if (_positionLeftItem <= position.getMin) {
                    return;
                }
                if (!_sliderControlRight.classList.contains('slider__control_show')) {
                    _sliderControlRight.classList.add('slider__control_show');
                }
                if (_sliderControlLeft.classList.contains('slider__control_show') && _positionLeftItem - 1 <= position.getMin) {
                    _sliderControlLeft.classList.remove('slider__control_show');
                }
                _positionLeftItem--;
                _transform += _step;
            }
            _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
        }

        // обработчик события click для кнопок "назад" и "вперед"
        var _controlClick = function (e) {
            if (e.target.classList.contains('slider__control')) {
                e.preventDefault();
                var direction = e.target.classList.contains('slider__control_right') ? 'right' : 'left';
                _transformItem(direction);
            }
        };

        var _setUpListeners = function () {
            // добавление к кнопкам "назад" и "вперед" обрботчика _controlClick для событя click
            _sliderControls.forEach(function (item) {
                item.addEventListener('click', _controlClick);
            });
        }

        // инициализация
        _setUpListeners();

        return {
            right: function () { // метод right
                _transformItem('right');
            },
            left: function () { // метод left
                _transformItem('left');
            }
        }

    }
}());

let sliderForBlock1 = multiItemSlider('.slider');
let sliderForBlock2 = multiItemSlider('.slider1');
let sliderForBlock3 = multiItemSlider('.slider2');



$(function () {
    //zoom img onclick
    $(".zoom-small").click(function () {
        $(".hover-buttons").css("visibility", "hidden");
        $(".overlay").addClass("active");
        $(".popup").addClass("active");

        var activeImg = $(this).attr("href");
        $(activeImg).fadeIn();
    });
    //close img onclick
    $(".close").click(function () {
        $(".overlay").removeClass("active");
        $(".popup").removeClass("active");
        $(".full-image").hide();
        $(".hover-buttons").css("visibility", "visible");
    });

    $(document).on("click", ".overlay", function () {
        $(".overlay").removeClass("active");
        $(".popup").removeClass("active");
        $(".full-image").hide();
        $(".hover-buttons").css("visibility", "visible");
    });

    $(".overlay").click(function () {
        $(".overlay").removeClass("active");
        $(".popup").removeClass("active");
        $(".full-image").hide();
        $(".hover-buttons").css("visibility", "visible");
    });
});