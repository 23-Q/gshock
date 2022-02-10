//-------------------slide-----------------------


function removeC (){
  for (let i = 0; i<4; i++){
    $('.diagonal').removeClass('change'+i);
  };
};

function removeTitle (){
  $('.tec-title,.tec-text,.des-title,.des-text').css('display','none');
  $('.main-title,.main-text').css('display','none');
};

function timeC(a,b){
  $('.time').removeClass(a);
  $('.time').addClass(b);
};

let 현재슬라이드 = 0;

for (let i = 0; i<4; i++){
  $('.btn-change').eq(i).click(function(){  //슬라이트버튼
    $('.main-slide').css('transform','translateY(-0'+(i*48)+'vw)');
    removeC();
    removeTitle();
    $('.main-title,.main-text').css('display','block');
    $('.diagonal').addClass('change'+i);
    현재슬라이드 = i;
    if(현재슬라이드 === 1){
      timeC('','time_black');
    }else{
      timeC('time_black');
    };
  });
};

function desTecBtn (a,b){ //디자인 테크 버튼
  $('.main-slide').css('transform','translateY(-' + a +'vw)');
  removeC();
  removeTitle();
  timeC('time_black');
  $(b).css('display','block');
  $('.diagonal').addClass('change3');
};

$('.d-btn').click(function(){
  desTecBtn(192,'.des-title,.des-text');
});

$('.t-btn').click(function(){
  desTecBtn(240,'.tec-title,.tec-text');
});



//--------------------gallery----------------------

$(window).on("scroll", function() {
  var $sec0 = $('.bg').eq(0).offset().top;
  var $sec1 = $('.bg').eq(1).offset().top;
  var $sec2 = $('.bg').eq(2).offset().top;
  var $sec3 = $('.bg').eq(3).offset().top;
  var $sec4 = $('.bg').eq(4).offset().top;
  var $sec5 = $('.bg').eq(5).offset().top;
  var $sec6 = $('.bg').eq(6).offset().top;
  var $sec7 = $('.bg').eq(7).offset().top;
  var $sec8 = $('.bg').eq(8).offset().top;

  var modelTag = [
    'GMW-B5000TR-9',
    'MTG-B2000PH',
    'MTG-B2000BS',
    'GG-B100',
    'SG-Series',
    'GST-B400-1A',
    'HC-Series',
    'GMW-B5000PB'
  ];


for(let i=0; i<8; i++){
  if ($(this).scrollTop() > eval("$sec"+i) & $(this).scrollTop() < eval("$sec"+(i+1))){
    $('.gallery').addClass('back-' + i);
    $('.g-img').eq(i).addClass('b-b');
    $('.gallery').css('transform','translateX(-' + (i*29.95) + 'vw)');
    $(".text-m p").eq(0).text('#0'+ (i +1));
    $(".text-m p").eq(1).text(modelTag[i]);
   }else{
    $('.gallery').removeClass('back-' + i);
    $('.g-img').eq(i).removeClass('b-b');
    };
  };

  if ($(this).scrollTop() > $sec0 & $(this).scrollTop() < $sec8){
    $(".text-m p").addClass('p-block');
  }else{
    $(".text-m p").removeClass('p-block');
  };
});

//----스크롤top 버튼, scroll down 표시

$(window).scroll(function() {
  if ($(this).scrollTop() > $('.bg').eq(0).offset().top) {
    $('.MOVE_TOP_BTN').show();
    $('.MOVE_TOP_BTN').addClass('block');
  } else {
    $('.MOVE_TOP_BTN').hide();
    $('.MOVE_TOP_BTN').removeClass('block');
  };
});

$(window).scroll(function() {
  if ($(this).scrollTop() > $('.bg').eq(0).offset().top && $(this).scrollTop() < $('.bg').eq(1).offset().top) {
    $('.scroll-down-mark').show();
    $('.scroll-down-mark').addClass('block');
  } else {
    $('.scroll-down-mark').hide();
    $('.scroll-down-mark').removeClass('block');
  };
});

$(".MOVE_TOP_BTN").click(function() {
  $('html, body').animate({
    scrollTop : 0
  },);
  return false;
});