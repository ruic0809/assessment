'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');


/**
 * 指定した要素の子どもを全て削除する
 * @param {HTMLElement} element HTMLの要素
 */
function removeAllChildren(element) {
    while (element.firstChild) { // result-area になにかタグがある限りループ
        element.removeChild(element.firstChild);
        }
}

/**
 * //診断処理を実行して、指定した要素に結果を表示する
 * 指定した要素に診断結果用のタグを設定する
 * @param {HTMLElement} element HTMLの要素
 */
function appendAssessmentResult (element, result) {
    // result-area に h3 タグで"診断結果"とうい文字を表示
    const h3 = document.createElement('h3'); // h3 タグを作る
    h3.innerText = '診断結果'; // h3 タグに'診断結果'の文字列を設定
    element.appendChild(h3); // result-area に h3 変数を設定

// 診断結果を実行
    // const result = assessment(userName);


// result-areaにpタグで診断結果を表示
    const p = document.createElement('p');
    p.innerText = result;
    element.appendChild(p);
}

// assessmentButton.onclick = function () {
assessmentButton.onclick = () => {
    let userName = userNameInput.value;
    // if (userName.length === 0) {
    if (!userName) {
    // 名前の入力がなかったので処理を中断
    return;
    }


// すでにある診断結果を削除する処理
    removeAllChildren(resultDivided);
    removeAllChildren(tweetDivided);
    // const result = assessment(userName);
    // appendAssessmentResult(resultDivided, result;
    appendAssessmentResult(resultDivided, assessment(userName));
    // appendAssessmentResult(resultDivided);
}

// while (resultDivided.firstChild) { // result-area になにかタグがある限りループ
// resultDivided.removeChild(resultDivided.firstChild);
// }
    // console.log(userName);
    // TO DO 診断機能の実装

// // result-area に h3 タグで"診断結果"とうい文字を表示
// const h3 = document.createElement('h3'); // h3 タグを作る
// h3.innerText = '診断結果'; // h3 タグに'診断結果'の文字列を設定
// resultDivided.appendChild(h3); // result-area に h3 変数を設定

// // 診断結果を実行
// const result = assessment(userName);
// // result-areaにpタグで診断結果を表示
// const p = document.createElement('p');
// p.innerText = result;
// resultDivided.appendChild(p);
// }

const answer = [
    '{userName}のいいところは声です。{userName}の特徴的な声は皆を惹きつけ、心に残ります。',
    '{userName}のいいところはまなざしです。{userName}に見つめられた人は、気になって仕方がないでしょう。',
    '{userName}のいいところは情熱です。{userName}の情熱に周りの人は感化されます。',
    '{userName}のいいところは厳しさです。{userName}の厳しさがものごとをいつも成功に導きます。',
    '{userName}のいいところは知識です。博識な{userName}を多くの人が頼りにしています。',
    '{userName}のいいところはユニークさです。{userName}だけのその特徴が皆を楽しくさせます。',
    '{userName}のいいところは用心深さです。{userName}の洞察に、多くの人が助けられます。',
    '{userName}のいいところは見た目です。内側から溢れ出る{userName}の良さに皆が気を惹かれます。',
    '{userName}のいいところは決断力です。{userName}がする決断にいつも助けられる人がいます。',
    '{userName}のいいところは思いやりです。{userName}に気をかけてもらった多くの人が感謝しています。',
    '{userName}のいいところは感受性です。{userName}が感じたことに皆が共感し、わかりあうことができます。',
    '{userName}のいいところは節度です。強引すぎない{userName}の考えに皆が感謝しています。',
    '{userName}のいいところは好奇心です。新しいことに向かっていく{userName}の心構えが多くの人に魅力的に映ります。',
    '{userName}のいいところは気配りです。{userName}の配慮が多くの人を救っています。',
    '{userName}のいいところはその全てです。ありのままの{userName}自身がいいところなのです。',
    '{userName}のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる{userName}が皆から評価されています。'
];

/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param {string} userName
 * @return {string} 診断結果
*/
function assessment(userName) {
    // userName (文字列) を数値(漢字だと5桁) に変換
    
    // すべての文字を足し算する
        let userNameNumber = 0
        for (let i = 0; i < userName.length; i++) {
            userNameNumber += userName.charCodeAt(i);
    }
    // let userNameNumber = userName.charCodeAt(0) + userName.charCodeAt(1);
    
    // 回答結果の範囲 (0-15) に変換
    let answerNumber = userNameNumber % answer.length;
    // 診断結果
    let result = answer[answerNumber];
    return result.replace(/\{userName\}/g, userName);
    // 診断結果
}


        console.assert(
            assessment('太郎') ===  '太郎のいいところは決断力です。太郎がする決断にいつも助けられる人がいます。', /* 確認したいこと*/
            '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。' /* エラー時のコメント*/
        );

        console.assert(
            assessment('太郎') === assessment('太郎'),
            '入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。'
        );

// console.log(assessment('太郎'));
// console.log(assessment('次郎'));
// console.log(assessment('太郎'));