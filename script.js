
// ================= IMAGE SLIDER =================

let slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function changeSlide() {

    // Remove active class from current image
    slides[currentSlide].classList.remove("active");

    // Move to next image
    currentSlide++;

    // If last image reached, start again
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    // Add active class to next image
    slides[currentSlide].classList.add("active");
}


// Change image every 3 seconds
if (slides.length > 0) {
    setInterval(changeSlide, 3000);
}


// ================= CONTACT FORM =================

let bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let name = document.getElementById("name").value;

        alert(
            "Thank you " + name +
            "! Your travel enquiry has been submitted."
        );

        bookingForm.reset();

    });

}

// ================= PAGE LOAD MESSAGE + STATISTICS COUNTER =================

window.addEventListener("load", function() {

    console.log("Teja Tours & Travels Website Loaded Successfully");


    // ================= STATISTICS COUNTER =================

    let counters = document.querySelectorAll(".counter");

    counters.forEach(function(counter) {

        let target = Number(counter.getAttribute("data-target"));

        let duration = 2000;

        let startTime = performance.now();


        function updateCounter(currentTime) {

            let elapsed = currentTime - startTime;

            let progress = Math.min(elapsed / duration, 1);

            let current = Math.floor(progress * target);

            counter.textContent = current.toLocaleString();


            if (progress < 1) {

                requestAnimationFrame(updateCounter);

            } else {

                counter.textContent = target.toLocaleString();

            }

        }


        requestAnimationFrame(updateCounter);

    });

});

