let count;

    if(localStorage.getItem('count') === null) {
        count = 0;
    }
    else {
        count = localStorage.getItem('count');
    }

    document.querySelector('h2').textContent = count;

    function increase() {
        count++;
        localStorage.setItem('count', count);
        document.querySelector('h2').textContent = count;
    }

    function decrease() {
        count--;
        localStorage.setItem('count', count);
        document.querySelector('h2').textContent = count;
    }

    function reset() {
        count = 0;
        localStorage.setItem('count', count);
        document.querySelector('h2').textContent = count;
    }

    document.querySelector('.increase').addEventListener('click', increase);

    document.querySelector('.decrease').addEventListener('click', decrease);

    document.querySelector('.reset').addEventListener('click', reset);

