const hello: string = 'Hello';
let showName: string = 'World';

const handleClick = () => {
    showName = showName + '!';
    alert(`${hello}, ${showName}`);
};

// HTMLの要素を取得
const btnHelloElement = document.getElementById('btnHello');

// ボタンが存在する場合、クリックイベントを設定
if (btnHelloElement) {
    btnHelloElement.addEventListener('click', handleClick);
}
