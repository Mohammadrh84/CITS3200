// =========================
// QUESTION: What is your age in years?
// =========================

// age slider and number input box js 
const ageSlider = document.getElementById("age-slider");
const ageNumber = document.getElementById("age-number");

ageSlider.addEventListener("input", function () {
    ageNumber.value = ageSlider.value;
});

ageNumber.addEventListener("input", function () {

    let age = Number(ageNumber.value);

    // restricting the age to be between 0 and 100
    if (age > 100) {
        age = 100;
        ageNumber.value = 100;
    }

    if (age < 0) {
        age = 0;
        ageNumber.value = 0;
    }

    
    ageSlider.value = age;
});

// =========================
// QUESTION: Do you consent to participate in this research project?
// =========================

// consent question buttons 
const consentOptions =
    document.querySelectorAll('input[name="consent"]');


consentOptions.forEach(function (option) {

    option.addEventListener("change", function () {

        console.log("Consent selected:", option.value);

    });

});

// =========================
// QUESTION: How old are your children (in years)?
// =========================

const childAgeInputs =
    document.querySelectorAll('.child-age-row input[type="number"]');


childAgeInputs.forEach(function (input) {

    input.addEventListener("input", function () {

        let age = Number(input.value);

        // Stop ages above 100.
        if (age > 100) {
            input.value = 100;
        }

        // Stop ages below 0.
        if (age < 0) {
            input.value = 0;
        }

    });

});