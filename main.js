import './sass/style.scss'

window.onload = () => {
  document.querySelectorAll('[data-svg]').forEach(svg => {
    fetch(svg.dataset.svg).then(res => {
      console.log(res)
      svg.innerHTML = res;
    });
  })
}