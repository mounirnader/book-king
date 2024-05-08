document.addEventListener("DOMContentLoaded", function() {
    const f1 = document.querySelector(".f1");
    const f2 = document.querySelector(".f2");
    const f3 = document.querySelector(".f3");

    f1.addEventListener("toggle", function() {
        if (f1.open) {
            f2.open = false;
            f3.open = false;
        }
    });

    f2.addEventListener("toggle", function() {
        if (f2.open) {
            f1.open = false;
            f3.open = false;
        }
    });

    f3.addEventListener("toggle", function() {
        if (f3.open) {
            f1.open = false;
            f2.open = false;
        }
    });
});
