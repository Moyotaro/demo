
$('a').on('click', function (e) {
    e.preventDefault();
    let value = $(this).attr('href');
    console.log(value);
    let text = '';
    if (value === 'name') {
        document.write('<img src=""')
        text = '舟見 朋夜 ';
    } else if (value === 'from') {
        document.write('<img src="/assets/img/IMG_6348.JPG">')
        text = '富山県';
    } else if (value === 'hobby') {
        text = 'ロックフェス・ライブ , マンガ・アニメ';
    } else if (value === 'career') {
        text = '栄養士歴７年, 新米狩りガール';
    } else if (value == 'github')
        text = 'Moyotaro'
    target.innerHTML = text;
})


console.clear();

let el = {};

$('.placeholder').on('click', function (ev) {
  $('.placeholder').css('opacity', '0');
  $('.list_ul').toggle();
});

 $('.list_ul a').on('click', function (ev) {
   ev.preventDefault();
   let index = $(this).parent().index();
   
   $('.placeholder').text( $(this).text() ).css('opacity', '1');
   
   console.log($('.list_ul').find('li').eq(index).html());
   
   $('.list_ul').find('li').eq(index).prependTo('.list_ul');
   $('.list_ul').toggle();   
   
 });


$('select').on('change', function (e) {
  
  // Set text on placeholder hidden element
  $('.placeholder').text(this.value);
  
  // Animate select width as placeholder
  $(this).animate({width: $('.placeholder').width() + 'px' });
  
});

