document.addEventListener("DOMContentLoaded", function () {
  const btnTopo = document.getElementById("btn-topo");

  if (btnTopo) {
    window.addEventListener("scroll", function () {
      btnTopo.style.display = window.scrollY > 300 ? "block" : "none";
    });

    btnTopo.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
