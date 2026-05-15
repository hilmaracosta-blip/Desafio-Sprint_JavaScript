

//carousel

//Array storage class
let carouselArr = [];
let currentIndex = 0;
let timer; 



//class Carousel
class Carousel {
constructor(image, title, url) {
        this.image = image;
        this.title = title;
        this.url = url;
    }
    
      
    static Start(arr) {
        carouselArr = arr;
        this.ShowItem(); // Mostra o primeiro item
        this.ResetTimer(); // Inicia o temporizador automático
    }

    static ResetTimer() {
        clearInterval(timer);
        timer = setInterval(() => {
            this.Next();
        }, 2000);
    }

    static Next() {
        currentIndex = (currentIndex + 1) % carouselArr.length;
        this.ShowItem();
        this.ResetTimer(); 
    }

    static Prev() {
        // Vai para o anterior (e volta para o fim se estiver no início)
        currentIndex = (currentIndex - 1 + carouselArr.length) % carouselArr.length;
        this.ShowItem();
        this.ResetTimer();
    }

    static ShowItem() {
        const carouselDiv = document.getElementById("carousel");
        const titleDiv = document.getElementById("carousel-title");

        if (carouselArr.length > 0) {
            const item = carouselArr[currentIndex];

            // Atualiza a imagem e os estilos
            carouselDiv.style.backgroundImage = `url('img/${item.image}')`;
            carouselDiv.style.backgroundSize = "contain"; 
            carouselDiv.style.backgroundRepeat = "no-repeat";
            carouselDiv.style.backgroundPosition = "center";
            carouselDiv.style.height = "860px";

            // Atualiza o título e o link
            titleDiv.innerHTML = `<a href="${item.url}" style="text-decoration: none; color: #003478;">${item.title}</a>`;
        }
    }
}