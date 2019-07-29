$("#year").text(new Date().getFullYear());

$("body").scrollspy({
    target: "#navigation"
});

//Smooth scroll
$("#navigation a").on("click", function (event) {
    if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $("html, body").animate({
                scrollTop: $(hash).offset().top
            },
            800,
            function () {
                window.location.hash = hash;
            }
        );
    }
});

//Allowing collapse to be dismissed when click outside of card-body
$("html body").click(function (e) {
    if (!$(e.target).is(".card-body") && !$(e.target).is(".progress"))
        $(".collapse").collapse("hide");
});