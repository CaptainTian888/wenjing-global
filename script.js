document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('lang-btn');
    const navLinks = document.querySelectorAll('.nav-links a');
    const pages = document.querySelectorAll('.page-section');
    const elementsToTranslate = document.querySelectorAll('[data-lang-zh]');

    // 检查本地存储是否有语言设置，如果没有，默认为中文
    let isEnglish = localStorage.getItem('isEnglish') === 'true';
    if (isEnglish) {
        langBtn.textContent = 'EN / 中文';
    } else {
        langBtn.textContent = '中文 / EN';
    }

    // 根据当前语言设置文本内容
    const setLanguage = (isEnglish) => {
        elementsToTranslate.forEach(el => {
            const langKey = isEnglish ? 'data-lang-en' : 'data-lang-zh';
            if (el.dataset[langKey.replace('data-lang-', '')]) {
                el.textContent = el.dataset[langKey.replace('data-lang-', '')];
            }
        });
    };

    // 导航功能：根据URL哈希值显示相应页面
    const navigateTo = (hash) => {
        pages.forEach(page => {
            page.classList.remove('active');
        });
        const targetPage = document.querySelector(hash);
        if (targetPage) {
            targetPage.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    // 监听导航链接点击事件
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetHash = link.getAttribute('href');
            navigateTo(targetHash);
        });
    });

    // 监听URL哈希变化
    window.addEventListener('hashchange', () => {
        const hash = window.location.hash || '#home';
        navigateTo(hash);
    });

    // 初始化页面显示
    const initialHash = window.location.hash || '#home';
    navigateTo(initialHash);
    setLanguage(isEnglish);

    // 语言切换按钮点击事件
    langBtn.addEventListener('click', () => {
        isEnglish = !isEnglish;
        // 将语言设置保存到本地存储
        localStorage.setItem('isEnglish', isEnglish);
        setLanguage(isEnglish);
        // 更改按钮文本
        langBtn.textContent = isEnglish ? 'EN / 中文' : '中文 / EN';
    });
});
