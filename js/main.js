let imageList = document.querySelectorAll('.content img')
console.log(imageList)

// 定义初始状态
function initStatus() {
    imageList.forEach((item, i) => {
        item.style.transition = 'all 0.3s ease'
        let offset = 100 // 偏移距离
        let blur = 10    // 模糊度
        let percent = 0  // 默认百分比
        let offsetValue = (offset / (imageList.length - i)) * percent
        let blurValue = Math.pow((i / imageList.length - percent), 2) * blur
        // 
        item.style.setProperty('--offset', `${offsetValue}px`)
        item.style.setProperty('--blur', `${blurValue}px`)
    })
    setTimeout(() => {
        imageList.forEach(item => {
            item.style.transition = ''
        })
    }, 300)
}
initStatus()

document.querySelector('.content').addEventListener('mousemove', function(e) {
    let progress = e.clientX / window.outerWidth
    let percent = progress.toFixed(2)
    // 
    imageList.forEach((item, i) => {
        let offset = 100 // 偏移距离
        let blur = 10    // 模糊度
        /**
         * 关于偏移距离
         * [ 初始偏移距离 / ( 数组length - 图片index ) ] * 百分比
         * 这里将数组长度减去图片index；即 index 值越大，偏移量越大，反之则越小
         */
        /**
         * 关于模糊度
         * 越往左，percent无限趋近于0，index值越小的模糊度越小，index值越大的模糊度越大
         * 越往右，percent无限趋近于1，index值越小的模糊度越大，index值越大的模糊度越小
         */
        let offsetValue = (offset / (imageList.length - i)) * percent
        let blurValue = Math.pow((i / imageList.length - percent), 2) * blur
        // 
        item.style.setProperty('--offset', `${offsetValue}px`)
        item.style.setProperty('--blur', `${blurValue}px`)
    })
})

document.querySelector('.content').addEventListener('mouseout', function(e) {
    initStatus()
})

// 眨眼部分
function handleBlink() {
    setInterval(() => {
        document.querySelectorAll('.content img')[1].src = './images/bilibili-autumn-2_1.png'
        setTimeout(() => {
            document.querySelectorAll('.content img')[1].src = './images/bilibili-autumn-2_2.png'
        }, 120)
        setTimeout(() => {
            document.querySelectorAll('.content img')[1].src = './images/bilibili-autumn-2.png'
        }, 250)
    }, 5000)
}
handleBlink()