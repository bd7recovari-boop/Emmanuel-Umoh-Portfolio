
    const form = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    const cvBtn = document.getElementById('downloadCvBtn');
    const cvPopup = document.getElementById('cvPopup');
    const closePopupBtn = document.getElementById('closePopupBtn');
    const successPopup = document.getElementById('successPopup');
    const closeSuccessPopupBtn = document.getElementById('closeSuccessPopupBtn');

    if (form) {
        form.noValidate = true;

        form.addEventListener('submit', function (event) {
            event.preventDefault();

            if (successPopup) {
                successPopup.classList.add('show');
            }

            if (formStatus) {
                formStatus.className = 'form-status';
                formStatus.textContent = '';
            }

            form.reset();
        });
    }

    if (cvBtn && cvPopup && closePopupBtn) {
        cvBtn.addEventListener('click', function (event) {
            event.preventDefault();
            cvPopup.classList.add('show');
        });

        closePopupBtn.addEventListener('click', function () {
            cvPopup.classList.remove('show');
        });

        cvPopup.addEventListener('click', function (event) {
            if (event.target === cvPopup) {
                cvPopup.classList.remove('show');
            }
        });
    }

    if (successPopup && closeSuccessPopupBtn) {
        closeSuccessPopupBtn.addEventListener('click', function () {
            successPopup.classList.remove('show');
        });

        successPopup.addEventListener('click', function (event) {
            if (event.target === successPopup) {
                successPopup.classList.remove('show');
            }
        });
    }

