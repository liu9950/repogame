// 等待DOM完全加载
document.addEventListener('DOMContentLoaded', function() {
    // 添加加载动画
    const loadingBar = document.createElement('div');
    loadingBar.classList.add('loading-bar');
    document.body.appendChild(loadingBar);
    
    // 添加主题切换按钮
    const themeToggle = document.createElement('button');
    themeToggle.classList.add('theme-toggle');
    themeToggle.innerHTML = '🌓';
    themeToggle.setAttribute('aria-label', '切换暗黑/明亮模式');
    document.body.appendChild(themeToggle);
    
    // 添加返回顶部按钮
    const backToTop = document.createElement('div');
    backToTop.classList.add('back-to-top');
    backToTop.innerHTML = '↑';
    backToTop.setAttribute('aria-label', '返回顶部');
    document.body.appendChild(backToTop);
    
    // 检查用户之前的主题偏好
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkMode)) {
        document.body.classList.add('dark-mode');
    }
    
    // 主题切换事件
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });
    
    // 滚动事件处理
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    // 返回顶部事件
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // 为每个特性单元格添加悬停效果
    const featureCells = document.querySelectorAll('.feature-cell');
    featureCells.forEach(cell => {
        cell.addEventListener('mouseenter', function() {
            this.style.color = getComputedStyle(document.documentElement).getPropertyValue('--accent-color');
        });
        
        cell.addEventListener('mouseleave', function() {
            this.style.color = getComputedStyle(document.documentElement).getPropertyValue('--highlight-color');
        });
    });
    
    // 为常见问题添加展开/折叠功能
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.question');
        const answer = item.querySelector('.answer');
        
        if (question && answer) {
            question.style.cursor = 'pointer';
            
            // 初始化状态
            answer.style.maxHeight = answer.scrollHeight + 'px';
            
            question.addEventListener('click', function() {
                const isOpen = answer.style.maxHeight !== '0px';
                
                if (isOpen) {
                    answer.style.maxHeight = '0px';
                    answer.style.opacity = '0';
                    question.classList.add('collapsed');
                } else {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    answer.style.opacity = '1';
                    question.classList.remove('collapsed');
                }
            });
        }
    });
    
    // 为表格行添加悬停效果
    const tableRows = document.querySelectorAll('table tr:not(:first-child)');
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.backgroundColor = document.body.classList.contains('dark-mode') 
                ? 'rgba(255, 255, 255, 0.05)' 
                : 'rgba(0, 0, 0, 0.05)';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });
    
    // 为任务卡片添加点击展开详情功能
    const tasks = document.querySelectorAll('.task');
    tasks.forEach(task => {
        task.addEventListener('click', function() {
            const proTip = this.querySelector('.pro-tip');
            if (proTip) {
                proTip.classList.toggle('highlight');
                if (proTip.classList.contains('highlight')) {
                    proTip.style.fontWeight = 'bold';
                    proTip.style.transform = 'scale(1.05)';
                    proTip.style.transition = 'all 0.3s ease';
                } else {
                    proTip.style.fontWeight = '';
                    proTip.style.transform = '';
                }
            }
        });
    });

    // 添加脉冲动画到图标
    const addPulseEffect = () => {
        const icons = document.querySelectorAll('h2');
        icons.forEach(icon => {
            icon.firstChild.nodeType === 3 && icon.firstChild.textContent.trim().startsWith('🌐', '👻', '⚠️', '🎯', '🚀') ?
                icon.firstChild.textContent.trim().substring(0, 2).classList.add('icon-pulse') : null;
        });
    };
    
    // 尝试添加脉冲效果
    setTimeout(addPulseEffect, 1000);
}); 