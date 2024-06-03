function initBubbleAnimations() {
    gsap.timeline()
        .from('.bubble1', { duration: 1, opacity: 0, x: 50, y: 50 })
        .from('.bubble2', { duration: 0.7, opacity: 0, x: -50, y: 100 })
        .from('.bubble3', { duration: 0.7, opacity: 0, x: 50, y: 100 })
        .from('.bubble4', { duration: 0.7, opacity: 0, x: -50, y: 100 });
}

// 쉼표를 숫자에 추가
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 카운터 애니메이션을 수행하는 함수
function initCounterAnimation() {
    const counter = { value: 1 }; // 애니메이션 시작 값을 객체에 저장
    const trustedCounter = document.getElementById('trusted-counter');

    gsap.to(counter, {
        value: 25000,
        duration: 4,
        onUpdate: () => {  // 애니메이션 업데이트 시 호출되는 함수
            trustedCounter.textContent = numberWithCommas(Math.round(counter.value)) + "+";
        },
        ease: "none"
    });
}

// ScrollTrigger를 사용하여 스크롤이 내려왔을때 애니메이션이 작동 
function animateCounter(elementId, endValue, format, suffix) {
    const target = document.getElementById(elementId);
    const obj = { val: 1 };

   gsap.to(obj, {
        val: endValue,
        ease: "none",
        duration: 2,
        scrollTrigger: {
            trigger: "#" + elementId,
            start: "top bottom", 
            toggleActions: "play none none none",
            onEnter: () => {
                target.textContent = format(Math.round(obj.val)) + suffix;
            }
        },
        onUpdate: function () {
            target.textContent = format(Math.round(obj.val)) + suffix;
        }
    });
}

//section 4 animation
function initSection4Animation() {
    const isLargeScreen = window.innerWidth > 720;

    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.section_4_content',
            start: 'center center',
            end: '700%',
            scrub: 1,
            ease: 'none',
            pin: true,
            // markers: true
        }
    });

    if (isLargeScreen) {
        timeline
            .set(".section_4_content_text h3", { opacity: 0, y: 50 })
            .set(".section_4_content_text p", { opacity: 0, y: 50 })
            .set(".section_4_content_text button", { opacity: 0, y: 50 })
            .set(".section_4_content .back1", { opacity: 0, y: -50, x: -50 })
            .set(".section_4_content .img1", { opacity: 0, y: 50, x: 50 })
            .set(".section_4_content .back2", { opacity: 0, y: -100 })
            .set(".section_4_content .img2", { opacity: 0, y: 100 })
            .to(".section_4_content_text h3", { opacity: 1, duration: 3, y: 0 })
            .to(".section_4_content_text p", { opacity: 1, duration: 3, y: 0 })
            .to(".section_4_content_text button", { opacity: 1, duration: 3, y: 0 })
            .to(".section_4_content .back1", { opacity: 1, duration: 3, y: 0, x: 0 })
            .to(".section_4_content .img1", { opacity: 1, duration: 3, y: 0, x: 0 })
            .to(".section_4_content .back2", { opacity: 1, duration: 3, y: 0 })
            .to(".section_4_content .img2", { opacity: 1, duration: 3, y: 0 });
    } else {
        timeline
            .set(".section_4_content .back1", { opacity: 0, y: -50, x: -50 })
            .set(".section_4_content .img1", { opacity: 0, y: 50, x: 50 })
            .set(".section_4_content .back2", { opacity: 0, y: -100 })
            .set(".section_4_content .img2", { opacity: 0, y: 100 })
            .set(".section_4_content_text h3", { opacity: 0, y: 50 })
            .set(".section_4_content_text p", { opacity: 0, y: 50 })
            .set(".section_4_content_text button", { opacity: 0, y: 50 })
            .to(".section_4_content .back1", { opacity: 1, duration: 3, y: 0, x: 0 })
            .to(".section_4_content .img1", { opacity: 1, duration: 3, y: 0, x: 0 })
            .to(".section_4_content .back2", { opacity: 1, duration: 3, y: 0 })
            .to(".section_4_content .img2", { opacity: 1, duration: 3, y: 0 })
            .to(".section_4_content_text h3", { opacity: 1, duration: 3, y: 0 })
            .to(".section_4_content_text p", { opacity: 1, duration: 3, y: 0 })
            .to(".section_4_content_text button", { opacity: 1, duration: 3, y: 0 });
    }
}

function initSection4Content2Animation() {
    gsap.timeline({
        scrollTrigger: {
            trigger: '.section_4_content2',
            start: 'center center',
            end: '700%',
            scrub: 1,
            ease: 'none',
            pin: true,
            // markers: true
        }
    })
        .set(".section_4_content2 .section_4_content_img", { opacity: 0, y: 50 })
        .set(".section_4_content2 .img3", { opacity: 0, y: 50 })
        .set(".section_4_content2 .section_4_content_text", { opacity: 0, y: 50 })
        .set(".section_4_content2 .section_4_content_text h3", { opacity: 0, y: 50 })
        .set(".section_4_content2 .section_4_content_text p", { opacity: 0, y: 50 })
        .set(".section_4_content2 .section_4_content_text button", { opacity: 0, y: 50 })
        .to(".section_4_content2 .section_4_content_img", { opacity: 1, duration: 2, y: 0 })
        .to(".section_4_content2 .img3", { opacity: 1, duration: 2, y: 0 })
        .to(".section_4_content2 .section_4_content_text", { opacity: 1, duration: 0.1, y: 0 })
        .to(".section_4_content2 .section_4_content_text h3", { opacity: 1, duration: 2, y: 0 })
        .to(".section_4_content2 .section_4_content_text p", { opacity: 1, duration: 2, y: 0 })
        .to(".section_4_content2 .section_4_content_text button", { opacity: 1, duration: 2, y: 0 });
}

// swiper animation 첫화면
function initSwiperAnimation() {
    gsap.timeline({
        scrollTrigger: {
            trigger: '.section_5_text',
            start: 'top center',
        }
    })
        .set(".swiper-slide:nth-child(1) .section_4_content_text", { opacity: 0 })
        .set(".swiper-slide:nth-child(1) .section_4_content_text h3", { opacity: 0, x: -50 })
        .set(".swiper-slide:nth-child(1) .section_4_content_text p", { opacity: 0, x: -50 })
        .set(".swiper-slide:nth-child(1) .section_4_content_text button", { opacity: 0, x: -50 })
        .set(".swiper-slide:nth-child(1) .swiper_imgback", { opacity: 0, rotation: 0, scale: 0.8 })
        .set(".swiper-slide:nth-child(1) .swiper_imgback img", { opacity: 0, rotation: 0, scale: 0.8 })
        .to(".swiper-slide:nth-child(1) .section_4_content_text", { opacity: 1, duration: 0.5 })
        .addLabel('PStart')
        .to(".swiper-slide:nth-child(1) .section_4_content_text h3", { opacity: 1, duration: 0.7, x: 0 }, 'PStart')
        .to(".swiper-slide:nth-child(1) .swiper_imgback", { opacity: 1, duration: 0.7, y: 0, x: 0, scale: 1 }, 'PStart')
        .to(".swiper-slide:nth-child(1) .swiper_imgback img", { opacity: 1, duration: 0.7, y: 0, x: 0, scale: 1 }, 'PStart')
        .addLabel('PEnd')
        .to(".swiper-slide:nth-child(1) .swiper_imgback", { rotation: 10, duration: 0.5 }, 'PEnd')
        .to(".swiper-slide:nth-child(1) .swiper_imgback img", { rotation: -10, duration: 0.5 }, 'PEnd')
        .to(".swiper-slide:nth-child(1) .section_4_content_text p", { opacity: 1, duration: 0.5, x: 0 }, 'PEnd')
        .to(".swiper-slide:nth-child(1) .section_4_content_text button", { opacity: 1, duration: 0.5, x: 0 });
}

// swiper animation
function initSwiper() {
    const swiper = new Swiper('.swiper', {
        keyboard: true,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            slideChangeTransitionStart: function () {
                const activeSlide = document.querySelector('.swiper-slide-active');
                if (activeSlide) {
                    const tl = gsap.timeline();

                    tl.set(activeSlide.querySelector('.section_4_content_text'), { opacity: 0 })
                        .set(activeSlide.querySelector('.section_4_content_text h3'), { opacity: 0, x: -50 })
                        .set(activeSlide.querySelector('.section_4_content_text p'), { opacity: 0, x: -50 })
                        .set(activeSlide.querySelector('.section_4_content_text button'), { opacity: 0, x: -50 })
                        .set(activeSlide.querySelector('.swiper_imgback'), { opacity: 0, rotation: 0, scale: 0.8 })
                        .set(activeSlide.querySelector('.swiper_imgback img'), { opacity: 0, rotation: 0, scale: 0.8 })
                        .to(activeSlide.querySelector('.section_4_content_text'), { opacity: 1, duration: 0.5 })
                        .addLabel('PStart')
                        .to(activeSlide.querySelector('.section_4_content_text h3'), { opacity: 1, duration: 0.7, x: 0 }, 'PStart')
                        .to(activeSlide.querySelector('.swiper_imgback'), { opacity: 1, duration: 0.7, y: 0, x: 0, scale: 1 }, 'PStart')
                        .to(activeSlide.querySelector('.swiper_imgback img'), { opacity: 1, duration: 0.7, y: 0, x: 0, scale: 1 }, 'PStart')
                        .addLabel('PEnd')
                        .to(activeSlide.querySelector('.swiper_imgback'), { rotation: 10, duration: 0.5 }, 'PEnd')
                        .to(activeSlide.querySelector('.swiper_imgback img'), { rotation: -10, duration: 0.5 }, 'PEnd')
                        .to(activeSlide.querySelector('.section_4_content_text p'), { opacity: 1, duration: 0.5, x: 0 }, 'PEnd')
                        .to(activeSlide.querySelector('.section_4_content_text button'), { opacity: 1, duration: 0.5, x: 0 });
                }
            },
        },
    });
}

// section 6 animation
let section6Trigger;

function initSection6Animation() {
    if (section6Trigger) {
        section6Trigger.kill(); 
    }

    if (window.innerWidth >= 880) {
        section6Trigger = gsap.timeline({
            scrollTrigger: {
                trigger: '.section_6_content',
                start: 'center center',
                end: '700%',
                scrub: 1,
                ease: 'none',
                pin: true,
                // markers: true,
            }
        })
        .set(".section_6_img", { opacity: 0, y: 50, scale: 0.8 })
        .set(".se6_img", { opacity: 0, y: 50, scale: 0.8 })
        .set(".se6_bubble1", { opacity: 0, y: 50 })
        .set(".se6_bubble2", { opacity: 0, y: 50 })
        .set(".step1", { opacity: 0, y: -50 })
        .set(".step2", { opacity: 0, y: -50 })
        .set(".step3", { opacity: 0, y: -50 })
        .to(".section_6_img", { opacity: 1, duration: 2, y: 0, scale: 1 })
        .to(".se6_img", { opacity: 1, duration: 2, y: 0, scale: 1 }, "<")
        .to(".step1", { opacity: 1, duration: 1.3, y: 0 }, "<")
        .to(".step2", { opacity: 1, duration: 1.3, y: 0 }, ">")
        .to(".se6_bubble1", { opacity: 1, duration: 0.7, y: 0 }, "<")
        .to(".se6_bubble2", { opacity: 1, duration: 0.7, y: 0 }, "<0.7")
        .to(".step3", { opacity: 1, duration: 1.3, y: 0 }, "<0.7");
    }
}

// 햄버거 메뉴
function initHamburgerMenu() {
    document.getElementById('hamburger').addEventListener('click', function () {
        this.classList.toggle('menu_active');
        document.getElementById('submenubox').classList.toggle('menu_active');
    });
}

// 크기 조정 시 애니메이션을 다시 초기화하는 함수
function reinitializeAnimations() {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // 모든 ScrollTrigger 제거
    initSection4Animation(); // section 4 애니메이션 다시 초기화
    initSection4Content2Animation(); // section 4 content 2 애니메이션 다시 설정
    animateCounter('counter-5000', 5000, numberWithCommas, "+");
    animateCounter('counter-25000', 25000, numberWithCommas, "+");
    animateCounter('hour-counter', 48, Math.round, " hrs");
    initSwiperAnimation();
    initSwiper();
    initSection6Animation(); // section 6 애니메이션 다시 설정
    ScrollTrigger.refresh(); // ScrollTrigger 새로고침
}

// 창 크기 조절 시 애니메이션을 다시 초기화
window.addEventListener('resize', reinitializeAnimations);

document.addEventListener('DOMContentLoaded', function () {
    initBubbleAnimations();
    initCounterAnimation();
    animateCounter('counter-5000', 5000, numberWithCommas, "+");
    animateCounter('counter-25000', 25000, numberWithCommas, "+");
    animateCounter('hour-counter', 48, Math.round, " hrs");
    initSection4Animation();
    initSection4Content2Animation();
    initSwiperAnimation();
    initSwiper();
    initSection6Animation();
    initHamburgerMenu();
    ScrollTrigger.refresh();
});