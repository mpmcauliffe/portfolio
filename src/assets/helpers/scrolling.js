

const scrolling = (y) => {
    setTimeout(() => {

        window.scrollTo(0, window.scrollY > y ? window.scrollY - 10 : window.scrollY + 10)
        
        if (window.scrollY - 10 < y && window.scrollY + 10 > y)  {
            window.scrollTo(0, y)
            return
        } else {
            scrolling(y)
        }
    }, 1)
}

export default scrolling
