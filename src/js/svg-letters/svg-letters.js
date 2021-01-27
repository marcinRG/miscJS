export class SvgLetters {
    constructor() {
        this.input1Line = document.querySelector('#form-text-1');
        this.input2Line = document.querySelector('#form-text-2');
    }

    run() {
        console.log('svg letters running');
    }

}

const svgLetters = new SvgLetters();
svgLetters.run();