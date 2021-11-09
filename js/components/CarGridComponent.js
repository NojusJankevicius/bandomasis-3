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
          this.htmlElement.innerHTML = `<div class="text-center"><img src="assets/loading.gif" /></div>`;
        } else {
          this.htmlElement.innerHTML = `        <div class="card card shadow position-relative">
          <img src="https://m.media-amazon.com/images/I/71VEtPLgBxL._AC_SX569_.jpg"  height="300px" class="card-img-top">
          <div class="card-body ">
              <h5 class="card-title">opel žopel</h5>
              <div>
                  <span>Year:</span>
                  2000
              </div>
              <div>
                  <span>Fuel type:</span>
                  gas
              </div>
              <div>
                  <span>Price:</span>
                  600
              </div>
              <button class="btn btn-danger btn-sm position-absolute top-0 end-0 mt-2 me-2">✕</button>
          </div>
      </div>
`

        }
    }
}