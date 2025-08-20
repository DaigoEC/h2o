document.addEventListener("DOMContentLoaded", () => {
  // Carousel text overlay logic
  const carouselTexts = ["41st IAHR World Congress (IAHR2025) will be held from 22-27 June 2025 at the Singapore EXPO", "XXXI Congreso Latinoamericano de Hidráulica. Oct 1 al 4 de 2024. Universidad de Medellín, Colombia", "Visita técnica fábrica y laboratorio de hidráulica e hidrología GUNT, Hamburgo, Alemania, marzo 2024", "Visita Universidad Politecnica de Valencia, Valencia, España, del 25 al 27 octubre 2023","Cairo Water Week, 29th October – 2nd November 2023. Action on Water Adaptation for Sustainability","40th IAHR World Congress in Vienna, Austria, from August 21st to 25th, 2023.","Congreso de Agricultura Digital, 24 al 28 de octubre 2022, Talca, Chile"];
  const carouselTextSpan = document.getElementById("carousel-text");
  window.updateCarouselText = (idx) => {
    if (carouselTextSpan) carouselTextSpan.textContent = carouselTexts[idx];
  };
  const images = document.querySelectorAll("#custom-carousel .carousel-img");
  const prevBtn = document.getElementById("carousel-prev");
  const nextBtn = document.getElementById("carousel-next");
  const indicators = document.getElementById("carousel-indicators");
  let current = 0;
  let interval = null;

  const showImage = (idx) => {
    images.forEach((img, i) => {
      img.style.display = i === idx ? "block" : "none";
    });
    if (typeof window.updateCarouselText === "function") {
      window.updateCarouselText(idx);
    }
    renderIndicators(idx);
  };

  const renderIndicators = (idx) => {
    indicators.innerHTML = "";
    for (let i = 0; i < images.length; i++) {
      const dot = document.createElement("span");
      dot.style.display = "inline-block";
      dot.style.width = "12px";
      dot.style.height = "12px";
      dot.style.margin = "0 4px";
      dot.style.borderRadius = "50%";
      dot.style.background = i === idx ? "#49b2e6" : "#ccc";
      dot.style.cursor = "pointer";
      dot.onclick = () => {
        current = i;
        showImage(current);
        resetInterval();
      };
      indicators.appendChild(dot);
    }
  };

  const nextImage = () => {
    current = (current + 1) % images.length;
    showImage(current);
  };

  const prevImage = () => {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
  };

  const resetInterval = () => {
    if (interval) clearInterval(interval);
    interval = setInterval(nextImage, 4000);
  };

  prevBtn.onclick = () => {
    prevImage();
    resetInterval();
  };
  nextBtn.onclick = () => {
    nextImage();
    resetInterval();
  };
  showImage(current);
  resetInterval();
});