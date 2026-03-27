document.querySelectorAll('.faq-acc-el-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
        const parentElement = trigger.closest('.faq-acc-el');
        const panel = parentElement.querySelector('.faq-acc-el-descr-frame');
        const svg = trigger.querySelector('svg');
        const isOpen = parentElement.classList.contains('open');

        const plusIcon = `
<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24.7065 14.1175C24.7065 14.3515 24.6135 14.576 24.4481 14.7415C24.2826 14.9069 24.0582 14.9999 23.8241 14.9999H15.0006V23.8234C15.0006 24.0574 14.9077 24.2819 14.7422 24.4473C14.5767 24.6128 14.3523 24.7058 14.1183 24.7058C13.8842 24.7058 13.6598 24.6128 13.4943 24.4473C13.3289 24.2819 13.2359 24.0574 13.2359 23.8234V14.9999H4.41238C4.17837 14.9999 3.95394 14.9069 3.78846 14.7415C3.62299 14.576 3.53003 14.3515 3.53003 14.1175C3.53003 13.8835 3.62299 13.6591 3.78846 13.4936C3.95394 13.3281 4.17837 13.2352 4.41238 13.2352H13.2359V4.41165C13.2359 4.17764 13.3289 3.95321 13.4943 3.78773C13.6598 3.62226 13.8842 3.5293 14.1183 3.5293C14.3523 3.5293 14.5767 3.62226 14.7422 3.78773C14.9077 3.95321 15.0006 4.17764 15.0006 4.41165V13.2352H23.8241C24.0582 13.2352 24.2826 13.3281 24.4481 13.4936C24.6135 13.6591 24.7065 13.8835 24.7065 14.1175Z" fill="white" />
</svg>`;

        const minusIcon = `
<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24.7065 14.1177C24.7065 14.3517 24.6135 14.5761 24.4481 14.7416C24.2826 14.9071 24.0582 15.0001 23.8241 15.0001H4.41238C4.17837 15.0001 3.95394 14.9071 3.78846 14.7416C3.62299 14.5761 3.53003 14.3517 3.53003 14.1177C3.53003 13.8837 3.62299 13.6593 3.78846 13.4938C3.95394 13.3283 4.17837 13.2354 4.41238 13.2354H23.8241C24.0582 13.2354 24.2826 13.3283 24.4481 13.4938C24.6135 13.6593 24.7065 13.8837 24.7065 14.1177Z" fill="white" />
</svg>`;

        if (!isOpen) {
            parentElement.classList.add('open');
            panel.style.maxHeight = panel.scrollHeight + 'px';
            svg.outerHTML = minusIcon;
        } else {
            parentElement.classList.remove('open');
            panel.style.maxHeight = '0';
            svg.outerHTML = plusIcon;
        }
    });
});