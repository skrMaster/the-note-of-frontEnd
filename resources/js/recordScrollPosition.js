<script>
    let last_known_scroll_position = 0
    let ticking = false;

    function doSomething(scroll_pos) {
      // 根据滚动位置做的事
      localStorage.setItem('scroll', scroll_pos)
    }

    function initApplication() {
      window.addEventListener('scroll', function(e) {
      last_known_scroll_position = window.scrollY
    
      if (!ticking) {
          window.requestAnimationFrame(function() {
            doSomething(last_known_scroll_position)
            ticking = false
          })
        
          ticking = true
        }
      })
    }
   
    document.onreadystatechange = function () {
      if (document.readyState === "complete") {
        initApplication();
        if (localStorage.getItem('scroll')) {
          window.scrollTo(0, localStorage.getItem('scroll'))
        }
      }
    }
  </script>
