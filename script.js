const counters = document.querySelectorAll(".counter")

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = parseInt(counter.getAttribute('data-target'))
        const centerText = parseInt(counter.innerText)

        const increment = target / 250
        
        if(centerText < target) {
            counter.innerText = `${Math.ceil(centerText + increment ) }`
            setTimeout(updateCounter, 1 )
        }
    }
    updateCounter()
})