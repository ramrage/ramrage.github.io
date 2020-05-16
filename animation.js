(function() {
    function randomChar() {
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrst uvwxyz0123456789@!#$%^&*()_+{}:"|?><,.;~1234567890'
        return characters.charAt(Math.floor(Math.random() * characters.length));
     }

     
    function addLowerscoreToContainer(container) {
        container.innerHTML = container.innerHTML + randomChar();
    }
    function cleanContainer(container) {
        container.innerHTML = ' ';
    }

    function setAnimationToContainer(container) {
        var counter = 0;
        function counterHandler() {
            counter += 1;
            if (counter > 10000) {
                counter = 0;
                cleanContainer(container);
            } else {
                addLowerscoreToContainer(container);
            }
            setTimeout(counterHandler, Math.floor(Math.random() * 100));
        }

        setTimeout(counterHandler, Math.floor(Math.random() * 100));
    }


    function animationStart() {
        var animationContainers = document.querySelectorAll('[data-animation-container]');
    
        animationContainers.forEach(function(item) {
            setAnimationToContainer(item);
        });
    }

    document.addEventListener('DOMContentLoaded', animationStart);
})();
