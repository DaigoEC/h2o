document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("proyectosBarChart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"],
      datasets: [
        {
          label: "Proyectos",
          data: [2, 2, 12, 3, 8, 16, 5, 14, 6],
          backgroundColor: "rgba(73, 178, 230, 0.7)",
          borderColor: "rgba(73, 178, 230, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      animation: {
        duration: 1200,
        easing: "easeOutBounce",
      },
      plugins: {
        legend: { display: false },
        title: {
          display: true,
          text: "Producción Científica por Año",
          color: "#222",
          font: { size: 18 },
        },
      },
      scales: {
        x: {
          ticks: { color: "#222", font: { size: 14 } },
          grid: { display: false },
        },
        y: {
          beginAtZero: true,
          ticks: { color: "#222", font: { size: 14 } },
          grid: { color: "rgba(73,178,230,0.1)" },
        },
      },
    },
  });
});