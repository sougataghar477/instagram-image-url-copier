console.clear();
/*for styling tooltip*/

const tooltip = document.createElement('SPAN');
tooltip.classList.add('tooltip');
tooltip.textContent = 'copied';

/*for reddit*/

var holdAlt = false;
window.addEventListener('keydown', (e) => {
  if (e.key === 'Control') {
    holdAlt = true;
  }
});

window.addEventListener('keyup', (e) => {
  if (e.key === 'Control') {
    holdAlt = false;
  }
});

document.body.addEventListener('contextmenu', (e) => {
  if (holdAlt === true) {
    e.preventDefault();

    navigator.clipboard.writeText(e.target.src);
    // tooltip.style.left = e.target.offsetLeft + 40 + 'px';
    tooltip.style.right = e.target.offsetLeft - 20 + 'px';
    e.target.parentNode.appendChild(tooltip);
    setTimeout(() => {
      e.target.parentNode.children[1].remove();
    }, 1500);
  }
});

/*for ig*/

document.body.addEventListener('click', copyImgsrc);

function copyImgsrc(e) {
  if (
    e.target.previousElementSibling.children[0].tagName === 'IMG' &&
    e.target.children.length === 0
  ) {
    const pic = e.target.previousElementSibling.children[0];
    const imgRect = pic.getBoundingClientRect();
    var url = pic.src;
    navigator.clipboard.writeText(url);

    const rectbottom = imgRect.height + 55;
    if (imgRect.top > 0 && imgRect.top <= 55) {
      tooltip.style.top = 'auto';
      tooltip.style.bottom = '120px';
    }

    if (imgRect.top < 0 && imgRect.top <= -55) {
      tooltip.style.top = 'auto';
      tooltip.style.bottom = '1px';
    }

    e.target.appendChild(tooltip);
    setTimeout(() => {
      e.target.children[0].remove();
    }, 1500);
  }
}

/*for vsco */
document.body.addEventListener('contextmenu', (e) => {
  if (e.target.tagName === 'IMG') {
    navigator.clipboard.writeText(e.target.src);
  }
});
