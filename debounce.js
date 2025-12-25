// 防抖函数
// 防抖函数用于限制函数的调用频率，确保在指定的时间间隔内只调用一次函数。
// 防抖函数的实现原理是利用闭包保存定时器 ID，每次调用函数时先清除之前的定时器，然后设置一个新的定时器。
// 如果在指定的时间间隔内没有调用函数，则会调用函数。
function debounce(fn, delay) {
    let timerId;
    return function (...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    }
}

// 示例：监听输入事件，防抖调用回调函数 500 毫秒一次
const input = document.getElementById('input');
input.addEventListener('input', debounce((e) => {
    console.log(e.target.value);
}, 500));