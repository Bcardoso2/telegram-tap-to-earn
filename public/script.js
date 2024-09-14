document.addEventListener('DOMContentLoaded', function () {
    const tapButton = document.getElementById('tap-button');
    const plusOne = document.getElementById('plus-one');

    tapButton.addEventListener('click', function () {
        // Animate the +1 element
        plusOne.classList.remove('animate-plus-one'); // Reset animation
        const randomX = Math.random() * (tapButton.clientWidth - plusOne.offsetWidth);
        const randomY = Math.random() * (tapButton.clientHeight - plusOne.offsetHeight);

        plusOne.style.left = `${randomX}px`;
        plusOne.style.top = `${randomY}px`;
        plusOne.style.opacity = 1;
        plusOne.classList.add('animate-plus-one');

        // Update points
        fetch('/earn', { method: 'POST' })
            .then(response => response.json())
            .then(data => {
                document.getElementById('points').textContent = `Points: ${data.points}`;
            });
    });
});
