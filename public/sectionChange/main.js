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


//image validator and dys
    document.querySelector('#imageUpload').addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file && file.type === 'image/jpeg' ||file && file.type === 'image/png') {
            const reader = new FileReader();
            reader.onload = function(e) {
                document.querySelector('#imagePreview').src = e.target.result;
            }
            reader.readAsDataURL(file);
        } else {
            alert('Por favor, seleccione una imagen en formato JPG.');
        }
    });