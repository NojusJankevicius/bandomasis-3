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

    deleteCar = id => API.deleteCar(id, this.fetchCars, this.showError)

    fetchCars = () => API.getCars(this.saveData, this.showError);
    showError = err => console.error(err);

    wrapChild = element => {
        const wrapper = document.createElement('div');
        wrapper.className = 'col-12 col-sm-6 col-lg-4 col-xl-3 align-self-stretch';
        wrapper.append(element);
        return wrapper;
      }
    
    init = () => {
        this.state.loading = true;
        this.fetchCars()
        this.htmlElement = document.createElement('div');
        this.htmlElement.className = 'row g-3';

        this.render();
    }

    render = () => {
        const { loading, cars } = this.state;
        if (loading) {
          this.htmlElement.innerHTML = `<div class="text-center"><img src="assets/loading.gif" /></div>`;
        } else if(cars.length > 0){
          this.htmlElement.innerHTML = '';
          const children = cars
          .map(({ id, ...carProps }) => new CarCardComponent({
            ...carProps,
            onDelete: () => this.deleteCar(id)
          }))
          .map(x => x.htmlElement)
          .map(this.wrapChild);
        this.htmlElement.append(...children); 
        } else {
            this.htmlElement.innerHTML = 'Sorry, no items at this moment';
        }
    }
}