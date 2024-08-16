//HTMLドキュメントが読み込み完了した時にコンソールに表示される
$(window).on('load',()=>{
  console.log('loadイベントが発生しました');
});

//画面をスクロールした時にコンソールに表示される
$(window).on('scroll',()=>{
  console.log('scrollイベントが発生しました');
});