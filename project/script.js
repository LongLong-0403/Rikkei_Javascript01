const btn = document.querySelector(".btn");
const container = document.querySelector(".container");

// load luôn (không cần window.onload)
const savedMode = localStorage.getItem("mode");

if (savedMode === "dark") {
    container.classList.add("dark");
    btn.textContent = "☀️";
} else {
    btn.textContent = "🌙";
}

btn.addEventListener("click", function () {
    container.classList.toggle("dark");

    if (container.classList.contains("dark")) {
        btn.textContent = "☀️";
        localStorage.setItem("mode", "dark");
    } else {
        btn.textContent = "🌙";
        localStorage.setItem("mode", "light");
    }
});