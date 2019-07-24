$("#year").text(new Date().getFullYear());

$("body").scrollspy({
    target: "#navigation"
});

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

$("html body").click(function (e) {
    if (!$(e.target).is(".card-body"))
        $(".collapse").collapse("hide");
})