// Sử dụng thư viện slick slider
$(document).ready(function () {
    $('.images-slider').slick({
        // các thuộc tính của thư viện slick slider
        infinite: true, // true: lặp lại, false: không lặp lại
        slidesToShow: 4, // số lượng ảnh hiển thị
        slidesToScroll: 1, // số lượng ảnh cuộn
        arrows: true, // true: hiển thị 2 nút next, prev, false: ẩn 2 nút next, prev
        draggable: true, // true: kéo được, false: không kéo được
        prevArrow: // nút prev
            `<button type='button' class='slick-prev pull-left slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
        nextArrow: // nút next
            `<button type='button' class='slick-next pull-right slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
        dots: true, // true: hiển thị dấu chấm, false: ẩn dấu chấm
        responsive: [
            // các breakpoint
            {
                // tối đa 1300.98px thì hiển thị 3 ảnh
                breakpoint: 1300.98,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                // tối đa 878.98px thì hiển thị 2 ảnh
                breakpoint: 878.98,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                // tối đa 676.98px thì hiển thị 1 ảnh
                breakpoint: 676.98,
                settings: {
                    infinite: false,
                    dots: false,
                    arrows: false,
                    slidesToShow: 1
                }
            },
        ],
        autoplay: true, // true: tự động chạy, false: không tự động chạy
        autoplaySpeed: 2000, // thời gian chạy 
    });
});