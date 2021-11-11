

export const Slide = () => {
    const btn = document.getElementById('btn');
    const btn2 = document.getElementById('btn2')
    const slide = document.getElementById('square-slide');
    const skew = document.getElementById('skew-slide');
    btn.addEventListener('click', () => {
        slide.classList.toggle('square');
        skew.classList.toggle('skew');
        btn.classList.toggle('show');
        btn2.classList.toggle('show');
    })
    btn2.addEventListener('click', () => {
        slide.classList.toggle('square');
        skew.classList.toggle('skew');
        btn.classList.toggle('show');
        btn2.classList.toggle('show');
    })
}