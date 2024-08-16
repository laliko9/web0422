// 준비 이벤트
$(()=>{

    // 모달 팝업
    
    // 공지사항의 첫 번째 li를 클릭하면
    $(".notice li").eq(0).click(()=>{
        $("#modal").css({display: "block"});
    });

    $("button").click(()=>{
        $("#modal").css({display: "none"});

    }); //모달 팝업 끝

});