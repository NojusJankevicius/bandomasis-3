class CarCardComponent {
    constructor(props) {
      this.props = props;
      this.init();
    }

    
    formatPrice = () => {
        const {
            price: { currency, amount },
        } = this.props;
        const USD_EUR = 0.86;
        
      let finalPrice;
      switch (currency) {
        case '$':
          finalPrice = amount * USD_EUR;
          break;
        case '€':
          finalPrice = amount;
          break;
      }
  
      return finalPrice;
    }
  
  
    init = () => {
      const { brand, model, year, imgSrc, fuelTypes, onDelete } = this.props;
  
      this.htmlElement = document.createElement('article');
      this.htmlElement.className = 'card shadow position-relative';
      this.htmlElement.innerHTML = `
      <img src="${imgSrc}"  height="300px" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">${brand} ${model}</h5>
        <div>
            <span>Year:</span>
            ${year}
        </div>
        <div>
            <span>Fuel type:</span>
            ${fuelTypes}
        </div>
        <div>
            <span>Price:</span>
            ${this.formatPrice()} €
        </div>
      </div>
      <button class="btn btn-danger btn-sm position-absolute top-0 end-0 mt-2 me-2">✕</button>`;
      const btn = this.htmlElement.querySelector('.btn');
      btn.addEventListener('click', onDelete);
    }
  }