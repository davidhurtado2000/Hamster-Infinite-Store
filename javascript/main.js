document.addEventListener("DOMContentLoaded", function () {
    const dvdLogo = document.getElementById('logoDVD');
    const dvdContainer = document.getElementById('containerDVD');

    let posX = 0;
    let posY = 0;
    let velocityX = 2;
    let velocityY = 2;
    const logoWidth = dvdLogo.offsetWidth;
    const logoHeight = dvdLogo.offsetHeight;
    dvdLogo.style.position = 'absolute';
    dvdLogo.style.zIndex = '9999';
    function moveLogo() {
        const containerWidth = dvdContainer.clientWidth;
        const containerHeight = dvdContainer.clientHeight;

        // Update position
        posX += velocityX;
        posY += velocityY;


        if (posX + logoWidth >= containerWidth || posX <= 0) {
            velocityX = -velocityX;
        }
        if (posY + logoHeight >= containerHeight || posY <= 0) {
            velocityY = -velocityY;
        }
        dvdLogo.style.left = posX + 'px';
        dvdLogo.style.top = posY + 'px';

        requestAnimationFrame(moveLogo);
    }

    moveLogo();
});

//Code was made but not working or showing in the website, next class check the javascript code to make sure it works properly :<

$(document).ready(function() {
    function getRandomImage() {
        const images = [
            'https://imgs.search.brave.com/s78qguc4Yk0JyxBgYTVqxRWbTwReBispf9HvLO46F1o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzQzLzY3Lzk1/LzM2MF9GXzI0MzY3/OTU0MV92VmVVaElt/WWdBVVY3aTVjZG0y/dzZ4V1hZR0pBdEtU/Zi5qcGc',
            'https://imgs.search.brave.com/95tpap_vFD-BA7f7ji0tIrleT2LqYgl360Had3lk-EQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/OWo5bG1kcTdmZG45/MS5qcGc_d2lkdGg9/NjQwJmNyb3A9c21h/cnQmYXV0bz13ZWJw/JnM9ZTIzMDc3ZTFh/NmJjMWJkYzRhZjM0/Y2E1NTJiMzE0ZGQ2/OGYxMDNiZQ',
            'https://imgs.search.brave.com/Bt4h44-x39qvt0ONt0LfA1yJNtAntDjx3dvaMSylNFs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzAyL2E0/LzliLzAyYTQ5YmNh/MmZlNzI5MTk0ZDJi/ZjYwMzYxNmJjNmQy/LmpwZw',
            'https://th.bing.com/th/id/OIP.3iuWIcInNSgtPvpr-mmBewHaHl?w=180&h=184&c=7&r=0&o=5&pid=1.7',
            'https://th.bing.com/th/id/OIP.x-bjOfN--kr4HBSsiVi4RgHaE9?w=276&h=184&c=7&r=0&o=5&pid=1.7',
            'https://th.bing.com/th/id/OIP.AMV30Qg-aybJUhfFqqwwYAHaD4?w=309&h=180&c=7&r=0&o=5&pid=1.7',
            'https://th.bing.com/th/id/OIP.ViVnk9dDJcxTF3bN7Zb4uAHaD5?w=331&h=180&c=7&r=0&o=5&pid=1.7'
        ];
        return images[Math.floor(Math.random() * images.length)];
    }

    function getRandomPrice() {
        return Math.floor(Math.random() * 9991) + 10; // Random price between $10 and $100
    }

    function getRandomDescription() {
        const descriptions = [
            'this guys a fatty.',
            'chonker guy.',
            'fater hamper.'
        ];
        return descriptions[Math.floor(Math.random() * descriptions.length)];
    }

    function fetchImages() {
        for (let i = 0; i < 9; i++) {
            $('#imagegal').append(`
                <div class="col-md-4">
                    <div class="card">
                        <img src="${getRandomImage()}" class="card-img-top" alt="Image">
                        <div class="card-body">
                            <p class="card-text" style = "color: black;">${getRandomDescription()}</p>
                            <p class="card-text" style = "color: black;"><strong>Price: $${getRandomPrice()}</strong></p>
                            <button class="btn btn-primary" style="position: absolute; bottom: 10px; right: 10px;">Buy Now</button>
                        </div>
                    </div>
                </div>
            `);
        }
    }

    // Fetch initial images
    fetchImages();

    // Fetch more images on scroll - This is the one responsible to make the infinite effect
    $(window).scroll(function() {
        if ($(window).scrollTop() + $(window).height() >= $(document).height() - 10) {
            fetchImages();
        }
    });
});
