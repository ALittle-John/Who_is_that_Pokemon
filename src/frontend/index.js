class IndexPage {
  constructor() {
    this.mySVG = document.getElementById('imageMenu');
    this.optionsMenu = document.querySelectorAll('.navgation a');

    this.mySVG.addEventListener('click', this.toggleMenu.bind(this));
  }

  toggleMenu() {
    this.optionsMenu.forEach((option) => {
      option.classList.toggle('show');
    });
  }
}

const menu = new IndexPage();
