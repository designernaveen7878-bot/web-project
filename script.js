const form = document.getElementById("booking-form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    alert("Appointment Submitted Successfully!");

    form.reset();
  });
}
