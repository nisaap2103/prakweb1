function imgPicker(){
    let picker = document.getElementById("selectImg").value;
    let images = document.getElementById("imgFigure");

    if (picker == "padang") {
        images.src = "img/rendang.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar rendang.jpg";
        alert("Ini adalah gambar rendang.jpg");
    } else if (picker == "palembang") {
        images.src = "img/pempek.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar pempek.jpg";
        alert("Ini adalah gambar pempek.jpg");
    } else if (picker == "jogja") {
        images.src = "img/gudeg.png";
        images.width = 300;
        images.alt = "Ini adalah gambar gudeg.png";
        alert("Ini adalah gambar gudeg.png");
    } else if (picker == "bali") {
        images.src = "img/betutu.png";
        images.width = 300;
        images.alt = "Ini adalah gambar betutu.png";
        alert("Ini adalah gambar betutu.png");
    } else if (picker == "papua") {
        images.src = "img/papeda.png";
        images.width = 300;
        images.alt = "Ini adalah gambar papeda.png";
        alert("Ini adalah gambar papeda.png");
    } else if (picker == "banjarmasin") {
        images.src = "img/soto.png";
        images.width = 300;
        images.alt = "Ini adalah gambar soto.png";
        alert("Ini adalah gambar soto.png");
    } else if (picker == "betawi") {
        images.src = "img/kerak telor.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar kerak telor.jpg";
        alert("Ini adalah gambar kerak telor.jpg.png");
    } else if (picker == "solo") {
        images.src = "img/tengkleng.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar tengkleng.jpg";
        alert("Ini adalah gambar tengkleng.jpg");
    } else {
        alert("Gagal");
    }
}