let imagesToLoad = document.querySelectorAll("img[data-src]");

let imgOptions = {
    threshold: 2,
    rootMargin: "0px 0px 50px 0px"
};

let loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
      image.removeAttribute('data-src');
    };
};

if('IntersectionObserver' in window) {
    let observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        };
      });
    });
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
};