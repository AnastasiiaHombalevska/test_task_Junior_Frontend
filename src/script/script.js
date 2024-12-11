const luckyBtn = document.querySelector('.lucky');

function changeLogo() {
  const googleLogo = document.querySelector('.google-logo');
  if (googleLogo) {
    googleLogo.classList.add('hidden');
  }

  const oddityLogo = document.querySelector('.oddity-logo');
  if (oddityLogo) {
    oddityLogo.classList.add('visible');
    oddityLogo.classList.remove('hidden');
  }
}

luckyBtn.addEventListener('click', changeLogo);
