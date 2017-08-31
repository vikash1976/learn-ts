import { ExportedClass } from './modules';

class Consumer {

    logMe() {
        console.log(new ExportedClass().className);
    }
}

new Consumer().logMe();