document.getElementById("show-more").onclick = function() {
    var dots = document.getElementsByClassName("hidden-content");
    var showMore = document.getElementById("show-more");

    for (var i = 0; i < dots.length; i++) {
        if (dots[i].style.display === "none") {
            dots[i].style.display = "inline";
            showMore.innerHTML = "Mostrar menos";
        } else {
            dots[i].style.display = "none";
            showMore.innerHTML = "Mostrar más";
        }
    }
};

function openNewPage() {
    window.location.href = 'new_page.html';
}
