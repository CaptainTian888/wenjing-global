document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('lang-btn');
    const elementsToTranslate = document.querySelectorAll('[data-lang-zh]');
    let isEnglish = false;

    // 根据当前语言设置文本内容
    const setLanguage = (isEnglish) => {
        elementsToTranslate.forEach(el => {
            const langKey = isEnglish ? 'data-lang-en' : 'data-lang-zh';
            if (el.dataset[langKey.replace('data-lang-', '')]) {
                el.textContent = el.dataset[langKey.replace('data-lang-', '')];
            }
        });
    };

    // 初始化语言
    setLanguage(isEnglish);

    // 切换语言按钮点击事件
    langBtn.addEventListener('click', () => {
        isEnglish = !isEnglish;
        setLanguage(isEnglish);
        // 更改按钮文本
        langBtn.textContent = isEnglish ? 'EN / 中文' : '中文 / EN';
    });
});