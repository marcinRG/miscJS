export class SvgExample {
    constructor() {
        this.intervalLength = 5000;
        this.showJunior = true;
        this.svg1 = document.querySelector('svg.svg-1');
        this.intervalId = null;
        this.changeDisplayedItem = this.changeDisplayedItem.bind(this);
    }

    run() {
        console.log('run');
        this.intervalId = window.setInterval(this.changeDisplayedItem, this.intervalLength);
    }

    close() {
        window.clearInterval(this.intervalId);
        console.log('close');
    }

    changeDisplayedItem() {
        if (this.showJunior) {
            changeClassToJunior(this.svg1);
            this.showJunior = false;
        } else {
            changeClassToSenior(this.svg1);
            this.showJunior = true;
        }
    }

}

function changeClassToJunior(element) {
    element.classList.remove('senior');
    element.classList.add('junior');
    element.getBoundingClientRect();
    element.offsetWidth;
}

function changeClassToSenior(element) {
    element.classList.remove('junior');
    element.classList.add('senior');
    element.getBoundingClientRect();
    element.offsetWidth;
}

const svgExample = new SvgExample();
svgExample.run();
