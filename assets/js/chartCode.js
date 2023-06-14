var ctx = document.getElementById("mainChart").getContext("2d");
var myChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: ["Option 1", "", "Option 2", "", "Option 3", "", "Option 4", "", "Option 5"],
        datasets: [
            {
                data: [25, 10, 2, 38, 30, 70, 60, 80, 20, 5],
                fill: true,
                borderColor: '#1A6BAF',
                backgroundColor: '#1A6BAF',
                tension: 0.3,
            },
            {
                data: [10, 16, 30, 50, 70, 44, 80, 50, 48, 68],
                fill: true,
                borderColor: '#8cb5d7',
                backgroundColor: 'rgba(26, 107, 175, 0.5)',
                tension: 0.3,
            },
        ],
    },
    options: {
        radius: 0,
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
        },
        animation: {
            duration: 2500,
            easing: "easeInOutBounce",
        },
    },
});
