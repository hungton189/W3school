var index = 1;
showSlide(index);


function  showSlide(n)
{
    var dots = document.getElementsByClassName("dot");
    var slides = document.getElementsByClassName("slide");
    if(n<1) n=3;
    if(n>3) n=1;
    //ẩn slide đang hiển thị
    for(let slide of slides)
    {
        slide.style.display = "none";
    }
    //reset các nút về chế độ bình thường
    for(let dot of dots)
    {
        dot.classList.remove("active");
    }
    //hiển thị slide n
    slides[n-1].style.display = "block";
    //hiển thị nút tròn n
    dots[n-1].classList.add("active");
    //cho index bắng số trang hiện tại của slide
    index = n;
}

function plusSlide(n)
{
    index +=n;
    showSlide(index);
}

function currentSlide(n)
{
    index=n;
    showSlide(index);
}

setInterval(function()
{
    index+=1;
    showSlide(index);
},5000);