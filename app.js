class ToyotaCar {
    constructor() {
        this.isRunning = false;
    }

    start() {
        this.isRunning = true;
        this.updateDisplay();
    }

    stop() {
        this.isRunning = false;
        this.updateDisplay();
    }

    setBrand(brand) {
        this.brandName = brand;
        this.updateDisplay();
    }

    updateDisplay() {
        const carDisplay = document.getElementById('carDisplay');
        if (!this.element) {
            this.element = document.createElement('div');
            this.element.className = 'car-info';
            carDisplay.appendChild(this.element);
        }
        
        this.element.innerHTML = `
            <h2>${this.brandName || 'Unknown Car'}</h2>
            <p>Status: ${this.isRunning ? 'Running' : 'Stopped'}</p>
            <button onclick="this.closest('.car-info').car.start()">Start</button>
            <button onclick="this.closest('.car-info').car.stop()">Stop</button>
        `;
        this.element.car = this;
    }
}

// Create car instances
let fortuner = new ToyotaCar();
fortuner.setBrand("Fortuner");

let lexus = new ToyotaCar();
lexus.setBrand("Lexus");
 
