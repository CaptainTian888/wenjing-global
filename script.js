document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('lang-btn');
    const elementsToTranslate = document.querySelectorAll('[data-lang-zh], [data-lang-en]');
    const titles = {
        'zh': '稳金国际供应链',
        'en': 'Wenjin Global Supply Chain'
    };
    
    // 检查本地存储是否有语言设置，如果没有，默认为中文
    let isEnglish = localStorage.getItem('isEnglish') === 'true';

    // 根据当前语言设置文本内容和按钮文本
    const setLanguage = (isEnglish) => {
        elementsToTranslate.forEach(el => {
            const langKey = isEnglish ? 'data-lang-en' : 'data-lang-zh';
            const translation = el.getAttribute(langKey);
            if (translation) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translation;
                } else {
                    el.textContent = translation;
                }
            }
        });
        
        // 特别处理按钮本身的文本
        langBtn.textContent = isEnglish ? '中文 / EN' : 'EN / 中文';

        // 动态设置网站标题
        document.title = isEnglish ? titles.en : titles.zh;
    };

    // 初始化页面语言
    setLanguage(isEnglish);

    // 切换语言按钮点击事件
    langBtn.addEventListener('click', () => {
        isEnglish = !isEnglish;
        // 将语言设置保存到本地存储
        localStorage.setItem('isEnglish', isEnglish);
        setLanguage(isEnglish);
    });
});
