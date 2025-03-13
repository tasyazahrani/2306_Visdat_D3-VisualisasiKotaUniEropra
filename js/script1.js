// Memuat file CSV secara otomatis dari URL atau lokasi tertentu
d3.csv("data/sandwiches.csv").then(function(data) {
    
    // Konversi tipe data numerik
    data.forEach(d => {
        d.price = +d.price;  // Ubah harga dari string ke angka
    });

    // Buat elemen SVG
    const svg = d3.select("svg");
    svg.selectAll("*").remove(); 

    // Skala radius berdasarkan ukuran sandwich
    const radiusScale = d3.scaleOrdinal()
        .domain(["small", "large"])
        .range([20, 40]); // Small = 20px, Large = 40px

    // Skala warna berdasarkan harga
    const colorScale = d3.scaleThreshold()
        .domain([7.00])
        .range(["green", "yellow"]); 

    // Tambahkan lingkaran berdasarkan data sandwich
    svg.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", (d, i) => i * 85 + 50) 
        .attr("cy", 100) 
        .attr("r", d => radiusScale(d.size))
        .attr("fill", d => colorScale(d.price))
        .attr("stroke", "black")
        .attr("stroke-width", 1);

    // Tambahkan label nama sandwich
    svg.selectAll("text")
        .data(data)
        .enter()
        .append("text")
        .attr("x", (d, i) => i * 85 + 50)
        .attr("y", 160) 
        .text(d => d.name)
        .attr("class", "city-label")
        .style("text-anchor", "middle")
        .style("font-size", "12px");

}).catch(error => console.error("Gagal membaca data:", error));
