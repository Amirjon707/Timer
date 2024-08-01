const hPlus = document.querySelector('.hPlus')
const mPlus = document.querySelector('.mPlus')
const sPlus = document.querySelector('.sPlus')
const hMinus = document.querySelector('.hMinus')
const mMinus = document.querySelector('.mMinus')
const sMinus = document.querySelector('.sMinus')
const hh = document.querySelector('.hh')
const mm = document.querySelector('.mm')
const ss = document.querySelector('.ss')
const BtnStart = document.querySelector('.start')
const BtnStop = document.querySelector('.stop')
const BtnClear = document.querySelector('.clear')
const dots = document.querySelectorAll('.dot')

let h = 0
let m = 0
let s = 0
let inter

const zero = (n) => {
    return n < 10 ? '0' + n : n
}

hPlus.onclick = () => {
    h++
    hh.innerHTML = zero(h)
}

mPlus.onclick = () => {
    m++
    mm.innerHTML = zero(m)
}

sPlus.onclick = () => {
    s++
    ss.innerHTML = zero(s)
}

hMinus.onclick = () => {
    if (h != 0) {
        h--
        hh.innerHTML = zero(h)
    }
}

mMinus.onclick = () => {
    if (m != 0) {
        m--
        mm.innerHTML = zero(m)
    }
}

sMinus.onclick = () => {
    if (s != 0) {
        s--
        ss.innerHTML = zero(s)
    }
}
const audio = new Audio('./sound/sound.mp3');

BtnStart.onclick = () => {
    BtnStart.disabled = true
    hPlus.disabled = true
    mPlus.disabled = true
    sPlus.disabled = true
    hMinus.disabled = true
    mMinus.disabled = true
    sMinus.disabled = true
    
    inter = setInterval(() => {
        
        if (s != 0 || m != 0 || h != 0) {
            if (s != 0) {
                s--
                ss.innerHTML = zero(s)
            } else if (s == 0 && m != 0) {
                m--
                s = 59
                ss.innerHTML = zero(s)
                mm.innerHTML = zero(m)
            } else {
                h--
                m = 59
                s = 59
                hh.innerHTML = zero(h)
                ss.innerHTML = zero(s)
                mm.innerHTML = zero(m)
            }
        } else {
            dots[0].style.animation = `none`
            dots[1].style.animation = `none`

            clearInterval(inter)

            hPlus.disabled = false
            mPlus.disabled = false
            sPlus.disabled = false
            hMinus.disabled = false
            mMinus.disabled = false
            sMinus.disabled = false
            BtnStart.disabled = false

            const count = 200,
                defaults = {
                    origin: { y: 0.7 },
                };

            function fire(particleRatio, opts) {
                confetti(
                    Object.assign({}, defaults, opts, {
                        particleCount: Math.floor(count * particleRatio),
                    })
                );
            }

            fire(0.25, {
                spread: 26,
                startVelocity: 55,
            });

            fire(0.2, {
                spread: 60,
            });

            fire(0.35, {
                spread: 100,
                decay: 0.91,
                scalar: 0.8,
            });

            fire(0.1, {
                spread: 120,
                startVelocity: 25,
                decay: 0.92,
                scalar: 1.2,
            });

            fire(0.1, {
                spread: 120,
                startVelocity: 45,
            });
        }

        audio.play();

        dots[0].style.animation = `dot 1s infinite ease-in`
        dots[1].style.animation = `dot 1s infinite ease-in`




    }, 1000)
}

BtnStop.onclick = () => {
    clearInterval(inter)
    hPlus.disabled = false
    mPlus.disabled = false
    sPlus.disabled = false
    hMinus.disabled = false
    mMinus.disabled = false
    sMinus.disabled = false
    BtnStart.disabled = false

    dots[0].style.animation = `none`
    dots[1].style.animation = `none`
}

BtnClear.onclick = () => {
    clearInterval(inter)
    hPlus.disabled = false
    mPlus.disabled = false
    sPlus.disabled = false
    hMinus.disabled = false
    mMinus.disabled = false
    sMinus.disabled = false
    BtnStart.disabled = false

    dots[0].style.animation = `none`
    dots[1].style.animation = `none`

    h = 0
    m = 0
    s = 0
    ss.innerHTML = zero(s)
    mm.innerHTML = zero(m)
    hh.innerHTML = zero(h)
}