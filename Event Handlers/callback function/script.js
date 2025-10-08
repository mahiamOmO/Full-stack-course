var oakParagraph = document.querySelector('#oakParagraph');

function toggleBackground() {
    oakParagraph.classList.toggle('oakParagraph');
}

oakParagraph.addEventListener('click', toggleBackground);