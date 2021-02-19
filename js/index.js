'use strict'
const mq = window.matchMedia('(max-width: 1280px)')

// basket
const basketTitle = $('.js-basket-title');

const basketClickHandler = () => {
    basketTitle.on('click', function () {
        $(this).parent().toggleClass('active')
        $(this).next().slideToggle()
    })
}

// carousel
const initSwiperCarousel = () => {
    const swiper = new Swiper('.js-init-header-carousel', {
        loop : true
    })
}

// popup menu
const menuItem = $('.js-has-child');

const handleMenuItemClick = () => {
    menuItem.on('click', function () {
        const $this = $(this)
        const thisItemPopup = $this.parent().find('.main-nav__popup')
        $this.parent().toggleClass('active')
        $this.parent().siblings().removeClass('active')
        $this.parent().siblings().find('.main-nav__popup').removeAttr('style');

        if (!mq.matches) {
            if ( window.innerWidth < thisItemPopup.offset().left + thisItemPopup.innerWidth() ) {
                thisItemPopup.css({ 'left' : 'initial', 'right' : '0' })
            } else {
                thisItemPopup.css({ 'left' : '0px', 'right' : 'initial' })
            }
        } else {
            $this.next().slideToggle()
        }


        $(document).on('click', (e) => {
            if ( !$(e.target).closest($this.parent()).length ) {
                $this.parent().removeClass('active')
            }
        })
    })
}

// burger menu
const openBtn = $('.js-burger-open');
const closeBtn = $('.js-burger-close');
const burgerBg = $('.js-burger-bg');
const burger = $('.js-burger');

const burgerToggle = () => {
    openBtn.on('click', () => {
        burger.addClass('active')
    })

    closeBtn.on('click', () => {
        burger.removeClass('active')
    })

    burgerBg.on('click', () => {
        burger.removeClass('active')
    })
}

// call all function
$(() => {
    basketClickHandler()
    initSwiperCarousel()
    handleMenuItemClick()
    burgerToggle()
})