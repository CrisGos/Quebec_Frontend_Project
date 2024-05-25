    function nextSection(currentSection) {
        const section = document.querySelector(`#section${currentSection}`);
        if (validateSection(section)) {
            section.classList.add('slide-out-left');
            section.addEventListener('animationend', function () {
                section.classList.add('hidden');
                section.classList.remove('slide-out-left');
                const nextSection = document.querySelector(`#section${currentSection + 1}`);
                nextSection.classList.remove('hidden');
                nextSection.classList.add('slide-in-right');
                nextSection.addEventListener('animationend', function () {
                    nextSection.classList.remove('slide-in-right');
                }, { once: true });
            }, { once: true });
        }
    }


    function prevSection(currentSection) {
        const section = document.querySelector(`#section${currentSection}`);
        section.classList.add('slide-out-right');
        section.addEventListener('animationend', function () {
            section.classList.add('hidden');
            section.classList.remove('slide-out-right');
            const prevSection = document.querySelector(`#section${currentSection - 1}`);
            prevSection.classList.remove('hidden');
            prevSection.classList.add('slide-in-left');
            prevSection.addEventListener('animationend', function () {
                prevSection.classList.remove('slide-in-left');
            }, { once: true });
        }, { once: true });
    }

    function validateSection(section) {
        const inputs = section.querySelectorAll('input');
        for (let input of inputs) {
            if (!input.checkValidity()) {
                input.reportValidity();
                return false;
            }
        }
        return true;
    }

    // Prevent form submission for demo purposes
    document.querySelector('#multiStepForm').addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Formulario enviado correctamente!');
    });