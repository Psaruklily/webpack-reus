import './style1.css';

class SomeModule {
    constructor() {
        console.log('Hello world!')
    }

    test(): void {
        console.log('TEST');
    }
}

export {SomeModule};