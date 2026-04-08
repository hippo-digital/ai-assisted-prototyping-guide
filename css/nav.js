// Mobile sidebar toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.menu-toggle');
  var sidebar = document.querySelector('.sidebar');
  var overlay = document.querySelector('.sidebar-overlay');

  if (toggle && sidebar) {
    toggle.addEventListener('click', function () {
      sidebar.classList.toggle('sidebar--open');
      if (overlay) overlay.classList.toggle('sidebar-overlay--visible');
    });

    if (overlay) {
      overlay.addEventListener('click', function () {
        sidebar.classList.remove('sidebar--open');
        overlay.classList.remove('sidebar-overlay--visible');
      });
    }
  }

  // Copy to clipboard for code blocks
  var codeBlocks = document.querySelectorAll('.code-block');

  codeBlocks.forEach(function (block) {
    var button = block.querySelector('.code-copy-btn');
    if (!button) return;

    button.addEventListener('click', function () {
      var code = block.querySelector('code');
      var text = code ? code.innerText : block.innerText;

      function markCopied() {
        button.textContent = 'Copied';
        button.classList.add('code-copy-btn--copied');
        setTimeout(function () {
          button.textContent = 'Copy';
          button.classList.remove('code-copy-btn--copied');
        }, 2000);
      }

      function fallback() {
        try {
          var textarea = document.createElement('textarea');
          textarea.value = text;
          textarea.style.position = 'fixed';
          textarea.style.opacity = '0';
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
          markCopied();
        } catch (e) {}
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(markCopied).catch(fallback);
      } else {
        fallback();
      }
    });
  });
});
