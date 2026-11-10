// HTMLの要素を取得
const numberArea = document.querySelector('#number');
const message = document.querySelector('#message');
const drawButton = document.querySelector('#drawButton');

// ラッキーナンバーを表示する関数
const drawNumber = () => {

    // 1～99のランダムな数字を作成
    const luckyNumber = Math.floor(
        Math.random() * 99
    ) + 1;

    // 数字を表示
    numberArea.textContent = luckyNumber;

    // 数字に合わせてメッセージを変更
    if (luckyNumber >= 80) {

        message.textContent = '今日は最高の運勢！';

    } else if (luckyNumber >= 50) {

        message.textContent = '良いことがありそう！';

    } else if (luckyNumber >= 20) {

        message.textContent = '落ち着いて過ごそう！';

    } else {

        message.textContent = '小さな幸せを探してみよう！';

    }

    // 数字のアニメーション
    numberArea.animate(
        [
            {
                opacity: 0,
                transform: 'scale(0.5)'
            },
            {
                opacity: 1,
                transform: 'scale(1)'
            }
        ],
        {
            duration: 500,
            easing: 'ease-out'
        }
    );

};

// ボタンを押したとき
drawButton.addEventListener('click', () => {

    drawNumber();

});