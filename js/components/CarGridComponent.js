class FurnitureGridComponent {
    constructor() {
      this.htmlElement = document.createElement('div');
      this.state = {
        cars: [],
        loading: false
      };
      this.init();
    }

    saveData = cars => {
        this.state = { cars, loading: false};

        this.render()
    }

    showError = err => console.error(err);

    init = () => {
        API.getCars(this.saveData, this.showError)
        this.render();
    }

    render = () => {
        if (this.state.cars.length === 0) {
          this.htmlElement.innerHTML = `<div class="text-center">siunčiama...</div>`;
        } else {
          this.htmlElement.innerHTML = `<div class="text-center">parsiųsta!</div>`

        }
    }
}