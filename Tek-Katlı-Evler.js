

 const imgs = [
    "./images/1.png", 
    "./images/2.png", 
    "./images/3.png",
    "./images/4.png", 
    "./images/5.png", 
    "./images/6.png",
    "./images/7.png", 
    "./images/8.png", 
    "./images/9.png",
    "./images/10.png", 
    "./images/11.png", 
    "./images/12.png",
    "./images/13.png", 
    "./images/14.png", 
    "./images/15.png",
    "./images/16.png", 
    "./images/17.png", 
    "./images/18.png",
    "./images/19.png", 
    "./images/20.png", 
    "./images/21.png",
    "./images/22.png", 
    "./images/23.png", 
    "./images/24.png",
    "./images/25.png", 
    "./images/26.png", 
    "./images/27.png",
    "./images/28.png", 
    "./images/29.png", 
    "./images/30.png",
    "./images/31.png", 
    "./images/32.png", 
    "./images/33.png",
    "./images/34.png", 
    "./images/35.png", 
    "./images/36.png",
    "./images/37.png"]


    
    
    lod()

    function lod(){
                    
                    setTimeout(lod, 1000)
    
                if (document.images) {
                    img1 = new Image();
                    img1.src = "./images/1.png";
                    img2 = new Image();
                    img2.src = "./images/2.png";
                    img3 = new Image();
                    img3.src = "./images/3.png";
                    img4 = new Image();
                    img4.src = "./images/4.png";
                    img5 = new Image();
                    img5.src = "./images/5.png";
                    img6 = new Image();
                    img6.src = "./images/6.png";
                    img7 = new Image();
                    img7.src = "./images/7.png";
                    img8 = new Image();
                    img8.src = "./images/8.png";
                    img9 = new Image();
                    img9.src = "./images/9.png";
                    img10 = new Image();
                    img10.src = "./images/10.png";
                    img11 = new Image();
                    img11.src = "./images/11.png";
                    img12 = new Image();
                    img12.src = "./images/12.png";
                    img13 = new Image();
                    img13.src = "./images/13.png";
                    img14 = new Image();
                    img14.src = "./images/14.png";
                    img15 = new Image();
                    img15.src = "./images/15.png";
                    img16 = new Image();
                    img16.src = "./images/16.png";
                    img17 = new Image();
                    img17.src = "./images/17.png";
                    img18 = new Image();
                    img18.src = "./images/18.png";
                    img19 = new Image();
                    img19.src = "./images/19.png";
                    img20 = new Image();
                    img20.src = "./images/20.png";
                    img21 = new Image();
                    img21.src = "./images/21.png";
                    img22 = new Image();
                    img22.src = "./images/22.png";
                    img23 = new Image();
                    img23.src = "./images/23.png";
                    img24 = new Image();
                    img24.src = "./images/24.png";
                    img25 = new Image();
                    img25.src = "./images/25.png";
                    img26 = new Image();
                    img26.src = "./images/26.png";
                    img27 = new Image();
                    img27.src = "./images/27.png";
                    img28 = new Image();
                    img28.src = "./images/28.png";
                    img29 = new Image();
                    img29.src = "./images/29.png";
                    img30 = new Image();
                    img30.src = "./images/30.png";
                    img31 = new Image();
                    img31.src = "./images/31.png";
                    img32 = new Image();
                    img32.src = "./images/32.png";
                    img33 = new Image();
                    img33.src = "./images/33.png";
                    img34 = new Image();
                    img34.src = "./images/34.png";
                    img35 = new Image();
                    img35.src = "./images/35.png";
                    img36 = new Image();
                    img36.src = "./images/36.png";
                    img37 = new Image();
                    img37.src = "./images/37.png";
                    
                }
                

            }
            








document.addEventListener("DOMContentLoaded", function(){
        
    {myVar = setTimeout(showPagex, 1500);}
    {myVar = setTimeout(showPage, 1000);}
    
    
    function showPage() {
    document.getElementById("LoadingID").style.opacity = "0%";}
    
    function showPagex() {
    document.getElementById("LoadingID").style.display = "none";}  
    
    
    
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    

                    
    




   
    {
    $('[lang="tr"]').show();
    $('[lang="en"]').hide();
    $('[lang="ar"]').hide();}    
   
    var lang=localStorage.getItem('lang');
    localStorage.getItem('lang');   
    if(lang==("en")){
    $('[lang="en"]').show();
    $('[lang="tr"]').hide();
    $('[lang="ar"]').hide();}
    
    
    if(lang==("tr")){
    $('[lang="tr"]').show();
    $('[lang="en"]').hide();
    $('[lang="ar"]').hide();}
    
    if(lang==("ar")){
    $('[lang="ar"]').show();
    $('[lang="en"]').hide();
    $('[lang="tr"]').hide();}});


    


    
    $(document).ready(function () {
        $('#switch-lang-en').click(function() {
            $('[lang="tr"]').hide();
            $('[lang="en"]').show();
            $('[lang="ar"]').hide();
            localStorage.setItem('lang', 'en');
        });
    });
    

    $(document).ready(function () {
        $('#switch-lang-tr').click(function() {
            $('[lang="tr"]').show();
            $('[lang="en"]').hide();
            $('[lang="ar"]').hide();
            localStorage.setItem('lang', 'tr');
        });
    });


    $(document).ready(function () {
        $('#switch-lang-ar').click(function() {
            $('[lang="ar"]').show();
            $('[lang="en"]').hide();
            $('[lang="tr"]').hide();
            localStorage.setItem('lang', 'ar');
        });
    });

    
    
    
    function setIMG(IMGURL) {
            
            
        var imglink=IMGURL
                   
        
        $('.imgXX').css({'content' : 'url(' + imglink + ')'});
        $('.backgrund').css({'opacity': '100%'});
        $('.backgrund').css({'z-index': '1000'});
        
       

        
    }

       document.querySelector(".closex").addEventListener("click", close, false);
       
       document.querySelector(".backgrund-black").addEventListener("click", close, false);
    
    
        function close() {
        
        
        {myVar  = setTimeout(zindex, 300);}
        
        
        $('.backgrund').css({'opacity': '0%'});
        }

        
        
        
        function zindex() {
            $('.backgrund').css({'z-index': '-1000'});



        }


        




var numpar = 0
var stop = false





function setSpeed (){
    stop = true

    var imgNumpar = document.querySelector(".D3D-SCALL").value;
    
    imgNumpar-=1
    
    var imgxx = document.querySelector(".M-3D-IMG");
    
    var myvar = imgs.at(imgNumpar);
    
    imgxx.style.content='url('+ myvar +')'

    
    

    
    
}

    var numperx = 0
    function start3D (){
    if(stop==false){
        
    if( numperx < 37 ){
        
    document.querySelector(".D3D-SCALL").value= numperx
        
    var imgxx = document.querySelector(".M-3D-IMG");

    var myvarx = imgs.at(numperx);
        
    imgxx.style.content='url('+ myvarx +')'
        
    numperx ++
        
            }else {numperx = 1}
        
            setTimeout(start3D, 500);}
        
        }



        start3D ()


