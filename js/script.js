// Load data dari CSV
d3.csv("data/cities_and_population.csv").then(function(data) {
    
    // Konversi tipe data numerik
    data.forEach(d => {
        d.population = +d.population;  // Ubah string populasi ke angka
        d.x = +d.x;  
        d.y = +d.y;  
    });

    // Filter hanya kota di Uni Eropa
    let euCities = data.filter(d => d.eu === "true");

    // Tampilkan jumlah kota yang telah difilter
    d3.select("#city-count").text(`Jumlah kota di Uni Eropa: ${euCities.length}`);

    // Buat elemen SVG
    const svg = d3.select("svg");

    // Tambahkan lingkaran untuk setiap kota
    svg.selectAll("circle")
        .data(euCities)
        .enter()
        .append("circle")
        .attr("cx", d => d.x)
        .attr("cy", d => d.y)
        .attr("r", d => d.population >= 1000000 ? 8 : 4)  // Radius dinamis
        .attr("fill", "pink");

    // Tambahkan label kota untuk populasi >= 1 juta
    svg.selectAll("text")
        .data(euCities)
        .enter()
        .append("text")
        .attr("x", d => d.x)
        .attr("y", d => d.y - 10)  // Geser label sedikit ke atas
        .text(d => d.population >= 1000000 ? d.city : "")
        .attr("class", "city-label")
        .style("opacity", d => d.population >= 1000000 ? 1 : 0);
    
}).catch(error => console.error("Gagal membaca data:", error));
