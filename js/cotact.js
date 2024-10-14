document.addEventListener("DOMContentLoaded", () => {
    const btn_use_services = document.getElementById("btn-use-services");
    const btn_join_team = document.getElementById("btn-join-team");
    const form_use_services = document.getElementById("service-form");
    const form_join_team = document.getElementById("join-team-form");

    const hideAllForms = () => {
        form_use_services.classList.remove('active');
        form_join_team.classList.remove('active');
    };

    
    btn_use_services.addEventListener('click', (event) => {
        event.preventDefault();
        hideAllForms();
        form_use_services.classList.add('active');
    });

    btn_join_team.addEventListener('click', (event) => {
        event.preventDefault();
        hideAllForms();
        form_join_team.classList.add('active');
    });
});

//____________________________________________________________________________________________________
document.addEventListener("DOMContentLoaded", () => {

    const form_valid = document.querySelectorAll('.form-valid');
    const input_elements = document.querySelectorAll('.input');
    const input_emails = document.querySelectorAll('.input-email');
    const submit_messages = document.querySelectorAll('.submit-message'); // Отримуємо всі елементи з класом submit-message
    
  
    function validateEmail(email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    
    function isEmailFromAnotherCountry(email) {
        let re = /\.co$/; 
        return re.test(String(email).toLowerCase());
    }

    form_valid.forEach((form, index) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            
            submit_messages[index].innerHTML = "";

            const inputs = form.querySelectorAll('.input');
            const email_input = input_emails[index];  
            let emailVal = email_input.value;
            let emptyInputs = Array.from(inputs).filter(input => input.value === '');

            inputs.forEach(function(input) {
                if (input.value === '') {
                    input.classList.add('error');
                    console.log('Input not filled');
                } else {
                    input.classList.remove('error');
                }
            });

            if (emptyInputs.length !== 0) {
                return false; 
            }

            if (!validateEmail(emailVal)) {
                console.log('Email not valid');
                email_input.classList.add('error');
                return false; 
            } else {
                email_input.classList.remove('error');
            }

            if (isEmailFromAnotherCountry(emailVal)) {
                console.log('Email from another country');
                email_input.classList.add('error');
                return false;
            } else {
                email_input.classList.remove('error');
            }

            submit_messages[index].innerHTML = "<h3>Форму надіслано</h3>";
            form.reset(); 
        });
    });
});


