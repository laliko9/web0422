// 준비 이벤트
$(()=>{
    // 슬라이드

        $(function(){
            let idx = 0;
            setInterval(autoSlide, 2000);


            function autoSlide(){
                console.log("idx",idx);
                // idx 0 ->1-> 2->0
                // 삼항(조건)연산자
                // 조건  ?   참: 거짓 
                (idx === 2) ? idx = 0 : idx++;

                // fade-in (나타내기)->opacity:1
                //fade-out(사라지기)->opacity:
                // 1in, 0out-> 2 in ,1out-> 0in,2out
                $("#slide li").eq(idx).fadeIn ({opacity: 1},1000,function(){
                    if(idx=== 0) idx =3;
                    $("#slide li").eq(idx-1).fadeOut(1000);
                    if(idx===3) idx = 0;
//    animate 는 opacity 를 써줘야 한다. fadein/fadeout  은 opacity  기능을 가지고 있다. 사라졌다고 나타났다가하는 오퍼서티 
// 1000은 1초 
                
        
        });
    }
    // 모달 팝업
    
    // 공지사항의 첫 번째 li를 클릭하면
    $(".notice li").eq(0).click(()=>{
        $("#modal").css({display: "block"});
    });

    $("button").click(()=>{
        $("#modal").css({display: "none"});

    }); //모달 팝업 끝

});