const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-right",
    prevEl: ".swiper-button-left",
  },
});

ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [37.160165, -8.611954],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 16,
        type: 'yandex#satellite'
    });
}
