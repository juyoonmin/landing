document.addEventListener('DOMContentLoaded', function () {
    // bubble 애니메이션 
    gsap.timeline()
        .from('.bubble1', { duration: 1, opacity: 0, x: 50, y: 50 })
        .from('.bubble2', { duration: 0.7, opacity: 0, x: -50, y: 100 })
        .from('.bubble3', { duration: 0.7, opacity: 0, x: 50, y: 100 })
        .from('.bubble4', { duration: 0.7, opacity: 0, x: -50, y: 100 });




    // 쉼표를 숫자에 추가
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const counter = { value: 1 };
    const trustedCounter = document.getElementById('trusted-counter');

    gsap.to(counter, {
        value: 25000,
        duration: 4,
        onUpdate: () => {
            trustedCounter.textContent = numberWithCommas(Math.round(counter.value)) + "+";
        },
        ease: "none"
    });

    gsap.registerPlugin(ScrollTrigger);
    // 카운터 애니메이션을 수행하는 함수
    function animateCounter(elementId, endValue, format, suffix) {
        const target = document.getElementById(elementId); // 애니메이션 대상 요소를 ID로 가져옴
        const obj = { val: 1 }; // 애니메이션 시작 값을 객체에 저장

        // GSAP 애니메이션 정의
        gsap.to(obj, {
            val: endValue, // 종료 값 설정
            ease: "none",
            duration: 2,
            scrollTrigger: {
                trigger: "#" + elementId, // 애니메이션 트리거 요소 설정
                start: "top bottom", // 트리거 조건 설정: 요소 상단이 뷰포트 하단에 닿을 때
                toggleActions: "play none none none" // 스크롤 상호작용에 따른 애니메이션 동작 설정
            },
            onUpdate: function () { // 애니메이션 업데이트 시 호출되는 함수
                target.textContent = format(obj.val) + suffix; // 텍스트 콘텐츠를 업데이트
            }
        });
    }

    // 각 카운터에 대한 애니메이션 초기화
    animateCounter('counter-5000', 5000, function (value) {
        return numberWithCommas(Math.round(value));
    }, "+");

    animateCounter('counter-25000', 25000, function (value) {
        return numberWithCommas(Math.round(value));
    }, "+");

    animateCounter('hour-counter', 48, function (value) {
        return Math.round(value);
    }, " hrs");


    // section_4 애니메이션
    // gsap.timeline({
    //     scrollTrigger: {
    //         trigger: '.section_4_content',
    //         start: 'center center',
    //         end: '700%',
    //         scrub: 1,
    //         ease: 'none',
    //         pin: true,
    //         // markers: true
    //     }
    // })
    //     .set(".section_4_content_text h3", { opacity: 0, y: 50 })
    //     .set(".section_4_content_text p", { opacity: 0, y: 50 })
    //     .set(".section_4_content_text button", { opacity: 0, y: 50 })
    //     .set(".section_4_content .back1", { opacity: 0, y: -50, x: -50 })
    //     .set(".section_4_content .img1", { opacity: 0, y: 50, x: 50 })
    //     .set(".section_4_content .back2", { opacity: 0, y: -100 })
    //     .set(".section_4_content .img2", { opacity: 0, y: 100 })


    //     .to(".section_4_content_text h3", { opacity: 1, duration: 3, y: 0 })
    //     .to(".section_4_content_text p", { opacity: 1, duration: 3, y: 0 })
    //     .to(".section_4_content_text button", { opacity: 1, duration: 3, y: 0 })
    //     .to(".section_4_content .back1", { opacity: 1, duration: 3, y: 0, x: 0 })
    //     .to(".section_4_content .img1", { opacity: 1, duration: 3, y: 0, x: 0 })
    //     .to(".section_4_content .back2", { opacity: 1, duration: 3, y: 0 })
    //     .to(".section_4_content .img2", { opacity: 1, duration: 3, y: 0 });
    // gsap.timeline({
    //     scrollTrigger: {
    //         trigger: '.section_4_content2',
    //         start: 'center center',
    //         end: '700%',
    //         scrub: 1,
    //         ease: 'none',
    //         pin: true,
    //         // markers: true
    //     }
    // })
    //     .set(".section_4_content2 .section_4_content_img", { opacity: 0, y: 50 })
    //     .set(".section_4_content2 .img3", { opacity: 0, y: 50 })
    //     .set(".section_4_content2 .section_4_content_text", { opacity: 0, y: 50 })
    //     .set(".section_4_content2 .section_4_content_text h3", { opacity: 0, y: 50 })
    //     .set(".section_4_content2 .section_4_content_text p", { opacity: 0, y: 50 })
    //     .set(".section_4_content2 .section_4_content_text button", { opacity: 0, y: 50 })


    //     .to(".section_4_content2 .section_4_content_img", { opacity: 1, duration: 2, y: 0 })
    //     .to(".section_4_content2 .img3", { opacity: 1, duration: 2, y: 0 })
    //     .to(".section_4_content2 .section_4_content_text", { opacity: 1, duration: 0.1, y: 0 })
    //     .to(".section_4_content2 .section_4_content_text h3", { opacity: 1, duration: 2, y: 0 })
    //     .to(".section_4_content2 .section_4_content_text p", { opacity: 1, duration: 2, y: 0 })
    //     .to(".section_4_content2 .section_4_content_text button", { opacity: 1, duration: 2, y: 0 });



    // swiper

    gsap.timeline({
        scrollTrigger: {
            trigger: '.section_5_text',
            start: 'top center',
        }
    })
        .set(".swiper-slide:nth-child(1) .section_4_content_text", { opacity: 0, })
        .set(".swiper-slide:nth-child(1) .section_4_content_text h3", { opacity: 0, x: -50, })
        .set(".swiper-slide:nth-child(1) .section_4_content_text p", { opacity: 0, x: -50, })
        .set(".swiper-slide:nth-child(1) .section_4_content_text button", { opacity: 0, x: -50, })
        .set(".swiper-slide:nth-child(1) .swiper_imgbox", { opacity: 0, scale: 0.8 })
        .set(".swiper-slide:nth-child(1) .swiper_imgbox img", { opacity: 0, rotation: 0, scale: 0.8 })

        .to(".swiper-slide:nth-child(1) .section_4_content_text", { opacity: 1, duration: 0.5 })
        .addLabel('PStart')
        .to(".swiper-slide:nth-child(1) .section_4_content_text h3", { opacity: 1, duration: 0.7, x: 0 }, 'PStart')
        .to(".swiper-slide:nth-child(1) .swiper_imgbox", { opacity: 1, duration: 0.7, y: 0, x: 0, scale: 1 }, 'PStart')
        .to(".swiper-slide:nth-child(1) .swiper_imgbox img", { opacity: 1, duration: 0.7, y: 0, x: 0, scale: 1 }, 'PStart')
        .to(".swiper-slide:nth-child(1) .swiper_imgbox img", { rotation: 10, duration: 0.7 })
        .to(".swiper-slide:nth-child(1) .section_4_content_text p", { opacity: 1, duration: 0.3, x: 0 })
        .to(".swiper-slide:nth-child(1) .section_4_content_text button", { opacity: 1, duration: 0.3, x: 0 });


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
                        .set(activeSlide.querySelector('.swiper_imgbox'), { opacity: 0, scale: 0.8 })
                        .set(activeSlide.querySelector('.swiper_imgbox img'), { opacity: 0, rotation: 0, scale: 0.8 });

                    tl.to(activeSlide.querySelector('.section_4_content_text'), { opacity: 1, duration: 0.5 })
                        .addLabel('PStart')
                        .to(activeSlide.querySelector('.section_4_content_text h3'), { opacity: 1, duration: 0.7, x: 0 }, 'PStart')
                        .to(activeSlide.querySelector('.swiper_imgbox'), { opacity: 1, duration: 0.7, y: 0, x: 0, scale: 1 }, 'PStart')
                        .to(activeSlide.querySelector('.swiper_imgbox img'), { opacity: 1, duration: 0.7, y: 0, x: 0, scale: 1 }, 'PStart')
                        .to(activeSlide.querySelector('.swiper_imgbox img'), { rotation: 10, duration: 0.7 },)
                        .to(activeSlide.querySelector('.section_4_content_text p'), { opacity: 1, duration: 0.3, x: 0 },)
                        .to(activeSlide.querySelector('.section_4_content_text button'), { opacity: 1, duration: 0.3, x: 0 });

                }
            },
        },
    });



    // section_6

    gsap.timeline({
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

        .to(".step1", { opacity: 1, duration: 1.3, y: 0, }, "<")
        .to(".step2", { opacity: 1, duration: 1.3, y: 0, }, "<0.7")
        .to(".step3", { opacity: 1, duration: 1.3, y: 0, }, "<0.7")

        .to(".se6_bubble1", { opacity: 1, duration: 0.7, y: 0 }, ">")
        .to(".se6_bubble2", { opacity: 1, duration: 0.7, y: 0 }, ">");


        document.getElementById('hamburger').addEventListener('click', function () {
            this.classList.toggle('menu_active');
            document.getElementById('submenubox').classList.toggle('menu_active');
        });

});

