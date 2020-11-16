function animateValue(obj, start, end, duration) {
    // let str = "m2";
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// const obj = document.getElementsByClassName("value");
// changed to getElementById due to diversity of use
const obj = document.getElementById("value");
const obj2 = document.getElementById("value1");
const obj3 = document.getElementById("value2");

animateValue(obj, 0, 0, 3000);
animateValue(obj2, 0, 65000, 3000);
animateValue(obj3, 0, 250, 3000);

