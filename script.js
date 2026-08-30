function searchService() {


let input = document.getElementById("searchInput").value.toLowerCase().trim();

let cards = document.querySelectorAll(".service-card");

if (input === "") {
    alert("Please enter a service name.");
    return;
}

let found = false;

cards.forEach(function(card) {

    let name = card.querySelector("h3").innerText.toLowerCase();
    let description = card.querySelector("p").innerText.toLowerCase();

    if (name.includes(input) || description.includes(input)) {

        card.style.display = "block";
        found = true;

    } else {

        card.style.display = "none";
    }

});

if (found) {

    document.getElementById("services").scrollIntoView({
        behavior: "smooth"
    });

} else {

    alert("❌ No service found.\n\nTry:\nElectrician\nPlumber\nMechanic\nCleaning\nComputer\nMobile\nTutor\nPainter");

    cards.forEach(function(card) {
        card.style.display = "block";
    });
}


}

function contactUs() {


alert("📞 Contact feature coming soon!");


}