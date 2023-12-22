class IndexPage {
  constructor() {
    this.mySVG = document.getElementById('toggleMenu');
    this.optionsMenu = document.querySelectorAll('.navgation a');

    this.mySVG.addEventListener('click', this.toggleMenu.bind(this));
  }

  toggleMenu() {
    this.optionsMenu.forEach((option) => {
      option.classList.toggle('show');
      option.classList.toggle('hidden');
    });
  }
}

// menu.toggleMenu();
const menu = new IndexPage();
