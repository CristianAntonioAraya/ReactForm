

export const Slide = () => {
    const LoginSlide = document.getElementById('LoginSlide'); // Is a ref of login slide container
    const LoginSlideButton = document.getElementById('LoginSlideButton');

    const SignSlide = document.getElementById('SignSlide');
    const RegisterSlideButton = document.getElementById('RegisterSlideButton');

    const slide = document.getElementById('square-slide');
    const skew = document.getElementById('skew-slide');

    const form = document.getElementById('form')
    const form2 = document.getElementById('form2')

    LoginSlideButton.addEventListener('click', () => {
        slide.classList.toggle('square');
        skew.classList.toggle('skew');
        LoginSlide.classList.toggle('show');
        SignSlide.classList.toggle('show');
        form.classList.toggle('behind');
        form.classList.toggle('front');
        setTimeout(() => {
            form2.classList.toggle('behind');
            form2.classList.toggle('front');
        }, 800);
        
    })
    RegisterSlideButton.addEventListener('click', () => {
        slide.classList.toggle('square');
        skew.classList.toggle('skew');
        LoginSlide.classList.toggle('show');
        SignSlide.classList.toggle('show');
        form2.classList.toggle('front');
        form2.classList.toggle('behind');
        setTimeout(() => {
            form.classList.toggle('behind');
            form.classList.toggle('front');
        }, 800);
        
    })
}