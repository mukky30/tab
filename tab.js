// ↓即時関数。どのJavaでも入れておく
(()=>{
const $doc = document;
const $tab = $doc.getElementById('js-tab');
const $nav = $tab.querySelectorAll('[data-nav]')
const $content = $tab.querySelectorAll('[data-content]')
// querySelectorAllはHTMLの中から条件に当てはまるやつを取得できる

const init = () => {
    $content[0].style.display = 'block';

};
init();

// クリックイベント
const handleclick = (e) => {
    e.preventDefault();

    // ↓クリックされたnavとそのデータを取得
   
    const $this = e.target;
    // クリックされた要素を持ってこれる
    const targetVal = $this.dataset.nav;
    //dataset.(属性名)でデータ属性が取ってこれる

    // 対象外のnav、contentを全て一旦リセットする（別のタブを開く時とりあえ前に開いてたタブを閉じる）
    let index = 0;
    while(index < $nav.length){
        $content[index].style.display = 'none';
        $nav[index].classList.remove('is-active');
        // is-activeをremoveする
        index++;
    }

    // ↓動的にコンテンツを取得する
    
    $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';
    // targetvalが0だったら0のdata₋contentを取ってくる。１なら１ってなる。
    $nav[targetVal].classList.add('is-active');
    // クリックされたらis-activeが追加されるようになり、is-activeが付いてるのはcssで黒色と決めているからクリックすると黒になる
};

// 全nav要素に対して関数を適応
let index = 0;
while(index < $nav.length){
    $nav[index].addEventListener('click', (e) => handleclick(e));
    index++;
}
// ループ文を使うことで0にも1にも2にも命令が適応される
})();
