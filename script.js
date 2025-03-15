let clickCount = 0;
$(document).ready(function () {
    $('.container').click(function () {
        clickCount++;
        if (clickCount === 2) {
            window.location.href = 'index1.html'; // เปลี่ยนชื่อไฟล์ตามที่คุณต้องการเปิด
        }
    });
    $('.container').mouseenter(function () {
        $('.card').stop().animate({
            top: '-90px'
        }, 'slow');
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: 0
        }, 'slow');
    });
});
