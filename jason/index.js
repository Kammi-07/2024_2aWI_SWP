let person = ["Olaf", "Sven", "Hugo"];
let score = [{
    name: "Olaf",
    points: 50
}, {
    name: "Sven",
    points: 55
}, {
    name: "Hugo",
    points: 43
}
];
function displayScores() {
    let html = "";
    score.forEach((element) => {
        html += "<div class='scores'>" + element.name + ": " + element.points + "</div>"
    })
    console.log(html);
    document.getElementById("scores").innerHTML = html;
}
displayScores();