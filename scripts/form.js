// Script for handling the contact form

document.addEventListener("DOMContentLoaded", () => {
    const meetingYes = document.getElementById("fMeetingYes");
    const meetingNo = document.getElementById("fMeetingNo");
    const manyPeopleLabel = document.querySelector("label[for='fManyPeople']");
    const manyPeopleInput = document.getElementById("fManyPeople");

    const tourismYes = document.getElementById("fTourismYes");
    const tourismNo = document.getElementById("fTourismNo");
    const interestsLabel = document.querySelector("label[for='fInterests']");
    const interestsInput = document.getElementById("fInterests");

    // Handle checkboxes
    function toggleCheckboxes(checkbox, otherCheckbox) {
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                otherCheckbox.checked = false;
            }
        });
    }

    // Handle showing/hiding "For how many people?"
    function toggleManyPeopleInput() {
        if (meetingYes.checked) {
            manyPeopleLabel.style.display = "block";
            manyPeopleInput.style.display = "block";
        } else {
            manyPeopleLabel.style.display = "none";
            manyPeopleInput.style.display = "none";
        }
    }

    // Handle showing/hiding "What are your interests?"
    function toggleInterestInput() {
        if (tourismYes.checked) {
            interestsLabel.style.display = "block";
            interestsInput.style.display = "block";
        } else {
            interestsLabel.style.display = "none";
            interestsInput.style.display = "none";
        }
    }

    // Attach event listeners for meeting checkboxes
    toggleCheckboxes(meetingYes, meetingNo);
    toggleCheckboxes(meetingNo, meetingYes);
    toggleCheckboxes(tourismYes, tourismNo);
    toggleCheckboxes(tourismNo, tourismYes);

    // Attach event listener for showing/hiding secondary inputs
    meetingYes.addEventListener("change", toggleManyPeopleInput);
    meetingNo.addEventListener("change", toggleManyPeopleInput);
    tourismYes.addEventListener("change", toggleInterestInput);
    tourismNo.addEventListener("change", toggleInterestInput);

    toggleManyPeopleInput();
    toggleInterestInput();

    toggleCheckboxes(tourismYes, tourismNo);
    toggleCheckboxes(tourismNo, tourismYes);
});
