var xValues = ["Pedro", "Vinicios", "Mayara", "Maessio", "Tenório", "Paternezi", "Solange", "Daniel", "Sonia", "Monica"];
var yValues = [55, 49, 44, 24, 40, 30, 23, 40, 50, 30];
var barColors = ["red", "green", "blue", "orange", "purple", "pink", "black", "Violet", "Teal", "gold"];

new Chart("myChart", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
    options: {
        legend: { display: false },
        title: {
            display: true,
            text: "Top 10 maiores doadores"
        }
    }
});
