
// Chuyển ảnh
const slider = document.querySelector(".Picture");
const images = document.querySelectorAll(".Picture img");
let counter = 0;

function previousSlide() {
    counter--;
    if (counter < 0) {
        counter = images.length - 1;
    }
    updateSlider();
}

function nextSlide() {
    counter++;
    if (counter == images.length) {
        counter = 0;
    }
    updateSlider();
}

function updateSlider() {
    const offset = -counter * 644; //chiều rộng của mỗi ảnh
    slider.style.transform = `translateX(${offset}px)`;
}
setInterval(nextSlide, 5000); // Tự động chuyển đổi mỗi 5 giây







// giohang
const img = document.querySelectorAll(".themgiohang")

img.forEach(function(themgiohang,index){ 
    themgiohang.addEventListener("click",function(event){
        var imgItem = event.target;
        var themgh = imgItem.parentElement
        var column = themgh.parentElement
        var hover = column.parentElement
        var row = hover.parentElement
        var rowimg = row.querySelector("img").src
        var rowname = row.querySelector(".namesp").innerText
        //rowpre
        var rowpreElement = row.querySelector(".Pre-Order-Now");
        var rowpre = rowpreElement ? rowpreElement.innerText : null;
        //rowbonus
        var rowbonusElement = row.querySelector(".Bonus-Included");
        var rowbonus = rowbonusElement ? rowbonusElement.innerText : null;
        // rowcan
        var rowcanElement = row.querySelector(".Cannot-be-Combined");
        var rowcan = rowcanElement ? rowcanElement.innerText : null;
        // rowre
        var rowreElement = row.querySelector(".Rerelease");
        var rowre = rowreElement ? rowreElement.innerText : null;

        var rowgia = row.querySelector(".money").innerText

        addcart(rowimg, rowname, rowpre, rowbonus, rowcan, rowgia, rowre)
    })
})

// giohangct
const img1 = document.querySelectorAll(".themgiohangct")

img1.forEach(function(themgiohangct,index){ 
    themgiohangct.addEventListener("click",function(event){
        var imgItem = event.target;
        var themgh = imgItem.parentElement
        var column = themgh.parentElement
        var hover = column.parentElement
        var row = hover.parentElement
        var rowimg = row.querySelector("img").src
        var rowname = row.querySelector(".namesp").innerText
        //rowpre
        var rowpreElement = row.querySelector(".Pre-Order-NowCT");
        var rowpre = rowpreElement ? rowpreElement.innerText : null;
        //rowbonus
        var rowbonusElement = row.querySelector(".Bonus-IncludedCT");
        var rowbonus = rowbonusElement ? rowbonusElement.innerText : null;
        // rowcan
        var rowcanElement = row.querySelector(".Cannot-be-CombinedCT");
        var rowcan = rowcanElement ? rowcanElement.innerText : null;
        // rowre
        var rowreElement = row.querySelector(".RereleaseCT");
        var rowre = rowreElement ? rowreElement.innerText : null;

        var rowgia = row.querySelector(".money").innerText

        addcart(rowimg, rowname, rowpre, rowbonus, rowcan, rowgia, rowre)
    })
})



// Them vao gio hang 
function addcart(rowimg, rowname, rowpre, rowbonus, rowcan, rowgia, rowre) {
    var addtr = document.createElement("tr");
    var cartItem = document.querySelectorAll("tbody tr")
    for( var i = 0; i < cartItem.length; i++){
        var productT = document.querySelectorAll(".rname")
        if(productT[i].innerHTML == rowname){      
            alert("Sản phẩm đã có trong giỏ hàng")
            return
        }
    }
    var trcontent;
    if (rowbonus !== null ) {
        trcontent = '<tr class="hang2"><td class="imgcart"><div ><img src="'+rowimg+'" alt="Lỗi ảnh!"></div></td><td><div class="nameremove"><div ><a class = "rname" href="">'+rowname+'</a></div><div class="Pre-Order-Now sizenhan">'+rowpre+'</div><div class="Bonus-Included sizenhan">'+rowbonus+'</div><div class="Cannot-be-Combined sizenhan">'+rowcan+'</div></div></td><td class = "moneygh"><div>¥</div><div class = "gia">'+rowgia+'</div></td><td><input class="sodem" type="number" value="1" min="0"></td><td class = "delete">Xoá</td></tr>';
    }
    if(rowbonus == null) {
        trcontent = '<tr class="hang2"><td class="imgcart"><a href=""><img src="'+rowimg+'" alt="Lỗi ảnh!"></a></td><td><div class="nameremove"><div ><a class = "rname" href="">'+rowname+'</a></div><div class="Pre-Order-Now sizenhan">'+rowpre+'</div><div class="Cannot-be-Combined sizenhan">'+rowcan+'</div></div></td><td class = "moneygh"><div>¥</div><div class = "gia">'+rowgia+'</div></td><td><input class="sodem" type="number" value="1" min="0"></td><td class = "delete">Xoá</td></tr>';
    }
    if(rowcan == null || rowre !== null){
        trcontent = '<tr class="hang2"><td class="imgcart"><a href=""><img src="'+rowimg+'" alt="Lỗi ảnh!"></a></td><td><div class="nameremove"><div ><a class = "rname" href="">'+rowname+'</a><div class="pre-rere"><div class="Pre-Order-Now sizenhan">'+rowpre+'</div><div class="Rerelease sizenhan">'+rowre+'</div></div><div class="Cannot-be-Combined sizenhan">'+rowcan+'</div></div></td><td class = "moneygh"><div>¥</div><div class = "gia">'+rowgia+'</div></td><td><input class="sodem" type="number" value="1" min="0"></td><td class = "delete">Xoá</td></tr>';  
    }
    addtr.innerHTML = trcontent;
    var cartTable = document.querySelector("tbody");
    cartTable.append(addtr);

    delecterCart()
    carttotal()
    Tangsoluong()
}
 


// sum tien
function carttotal(){
    var cartItem = document.querySelectorAll("tbody tr")
    var totalC = 0
    for (var i = 0; i < cartItem.length; i++){
        var inputValue = cartItem[i].querySelector("input").value
        var productPrice = cartItem[i].querySelector(".gia").innerHTML  
        totalA = inputValue * productPrice * 1000
        totalC = totalC + totalA
    }

    totalB = totalC.toLocaleString('de-De')
    var cartTotalA = document.querySelector(".sum")
    cartTotalA.innerHTML = totalB
    thaydoisl()
}


// xoa cart
function delecterCart(){
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i = 0; i < cartItem.length; i++){
        var productT = document.querySelectorAll(".delete")
        productT[i].addEventListener("click",function(event){
            var cartDelete = event.target
            var cartDeleteT = cartDelete.parentElement
            cartDeleteT.remove()
            carttotal()
            Tangsoluong()
        })      
    }   
}

// Them so luong
function thaydoisl(){
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i = 0; i < cartItem.length; i++){
        var inputValue = cartItem[i].querySelector(".sodem")
        inputValue.addEventListener("change", function(){
            carttotal()
            Tangsoluong()
        })
    }
}


// tang so luong
function Tangsoluong(){
    var cartItem = document.querySelectorAll("tbody tr")
    var totalM = 0
    for (var i = 0; i < cartItem.length; i++){
        var inputValue = parseInt(cartItem[i].querySelector("input").value, 10);
        totalM = totalM + inputValue 
    }
    var cartquantityM = document.querySelector(".soluong")
    cartquantityM.innerHTML = totalM
    var cartquantityM = document.querySelector(".soluongcart")
    cartquantityM.innerHTML = totalM
}


// an hien
const an = document.querySelector(".imggh")
const show = document.querySelector(".show")

show.addEventListener("click",function(){  
    document.querySelector(".checkouthight").style.left = "575px"
})

an.addEventListener("click",function(){  
    document.querySelector(".checkouthight").style.left = "-100%"
})



// Chitiet
const sliderCT = document.querySelector(".PictureCT");
const imagesCT = document.querySelectorAll(".PictureCT img");
let counterCT = 0;

function Giam() {
    counterCT--;
    if (counterCT < 0) {
        counterCT = imagesCT.length - 1;
    }
    Capnhat();
}

function Tang() {
    counterCT++;
    if (counterCT == imagesCT.length) {
        counterCT = 0;
    }
    Capnhat();
}

function Capnhat() {
    const offset = -counterCT * 516; //chiều rộng của mỗi ảnh
    sliderCT.style.transform = `translateX(${offset}px)`;
}




// Chuyển trang
const between2 = document.querySelector('.between2left');
const trangso2 = document.querySelector('.trang2');
const trang1 = document.querySelector('.sotrang1');
const trang2 = document.querySelector('.sotrang2');


trang1.addEventListener('click', function() {
    between2.style.opacity = '1';
    trangso2.style.opacity = '0';
    trangso2.style.zIndex = '1';
    trang1.classList.add('selecttrang');
    trang2.classList.remove('selecttrang');
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Sử dụng 'smooth' nếu muốn cuộn mượt
    });
});

trang2.addEventListener('click', function() {
    between2.style.opacity = '0';
    trangso2.style.opacity = '1';
    trangso2.style.zIndex = '2';
    trang2.classList.add('selecttrang');
    trang1.classList.remove('selecttrang');
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Sử dụng 'smooth' nếu muốn cuộn mượt
    });
});

