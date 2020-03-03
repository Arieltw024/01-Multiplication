
var wrap = document.querySelector('.wrap');

// 乘數
for (var i = 2; i <= 9; i++) {
    
    // 新增卡片節點
    var card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = '<div class="number">'+i+'</div>';
    
    // 被乘數
    for (var sum = 1; sum <= 9; sum++) {
        var formula = document.createElement('div');
        formula.classList.add('formula');
        formula.textContent = i + ' x ' + sum + ' = ' + i * sum;
        card.appendChild(formula);
    }
    wrap.appendChild(card);
}