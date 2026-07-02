document.addEventListener('DOMContentLoaded', () => {
    const contrastButton = document.getElementById('btn-contrast');
    const body = document.body;

    if (!contrastButton) {
        return;
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        contrastButton.setAttribute('aria-pressed', 'true');
        contrastButton.textContent = 'Restaurar Cores ☀️';
    } else {
        contrastButton.setAttribute('aria-pressed', 'false');
    }

    contrastButton.addEventListener('click', () => {
        const isDarkMode = body.classList.toggle('dark-mode');

        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        contrastButton.setAttribute('aria-pressed', String(isDarkMode));
        contrastButton.textContent = isDarkMode ? 'Restaurar Cores ☀️' : 'Inverter Cores 🌗';
    });
});
