
    (function(){
      const previousEl = document.getElementById('previous');
      const currentEl = document.getElementById('current');
      const keys = document.querySelectorAll('button.key');

      let current = ''; 
      let previous = ''; 

      const isOperator = ch => /[+\-*/]/.test(ch);

      function updateDisplay(){
        previousEl.textContent = previous;
        currentEl.textContent = current || '0';
      }

      function appendValue(val){
        if (current === '0' && val === '0') return;
        if (val === '.' ){
          const tokens = current.split(/[\+\-\*\/\(\)]/);
          const last = tokens[tokens.length-1];
          if (last.includes('.')) return;
          if (last === '') current += '0';
        }
        current += val;
        updateDisplay();
      }

      function clearAll(){
        current = '';
        previous = '';
        updateDisplay();
      }

      function backspace(){
        if (!current) return;
        current = current.slice(0, -1);
        updateDisplay();
      }

      function safeEvaluate(expr){
        if (!/^[0-9+\-*/().\s]+$/.test(expr)) throw new Error('Invalid characters');
        if (/\*\*|\/\/|;\s*/.test(expr)) throw new Error('Invalid operator sequence');
        const sanitized = expr.replace(/×/g, '*').replace(/÷/g, '/');
        const fn = new Function('return (' + sanitized + ')');
        return fn();
      }

      function compute(){
        if (!current) return;
        try {
          const result = safeEvaluate(current);
          previous = current + ' =';
          current = String(result);
        } catch (e){
          current = 'Error';
        }
        updateDisplay();
      }

      keys.forEach(btn => {
        btn.addEventListener('click', () => {
          const val = btn.getAttribute('data-value');
          const action = btn.getAttribute('data-action');
          if (action === 'clear'){
            clearAll();
            return;
          }
          if (action === 'back'){
            backspace();
            return;
          }
          if (action === 'equals'){
            compute();
            return;
          }
          if (val !== null){
            appendValue(val);
          }
        });
      });

      window.addEventListener('keydown', (e) => {
        const key = e.key;
        if (/^[0-9]$/.test(key)) { appendValue(key); e.preventDefault(); return; }
        if (key === '.') { appendValue('.'); e.preventDefault(); return; }
        if (key === '+' || key === '-' || key === '*' || key === '/') { appendValue(key); e.preventDefault(); return; }
        if (key === '(' || key === ')') { appendValue(key); e.preventDefault(); return; }
        if (key === 'Enter' || key === '=') { compute(); e.preventDefault(); return; }
        if (key === 'Backspace') { backspace(); e.preventDefault(); return; }
        if (key === 'Escape') { clearAll(); e.preventDefault(); return; }
      });

      clearAll();
    })();