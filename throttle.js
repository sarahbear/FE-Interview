// 节流函数
// 节流函数用于限制函数的调用频率，确保在指定的时间间隔内只调用一次函数。
// 节流函数的实现原理是利用闭包保存上一次调用的时间戳，每次调用函数时判断当前时间与上一次调用时间的差值是否大于等于指定的时间间隔。
// 如果是，则更新上一次调用时间为当前时间，并调用函数。
// 如果不是，则不调用函数。
function throttle(fn, delay) {
    let lastCallTime = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastCallTime >= delay) {
            lastCallTime = now;
            fn.apply(this, args);
        }
    }
}

// 示例：监听滚动事件，节流调用回调函数 1 秒一次
window.addEventListener('scroll', throttle(() => {
    console.log('scroll event');
}, 1000));