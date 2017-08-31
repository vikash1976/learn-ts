// Run it with tsc --experimentalDecorators --target es5 funcDec.ts

enum LogLevel {
    INFO,
    WARN,
    DEBUG,
    TRACE
}

const logLevel =  LogLevel.DEBUG;

function LogMethod(level: LogLevel): Function {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const originalFunction: Function = descriptor.value;
        descriptor.value = function(...args:any[]) {
            
            if(level >= logLevel) {
                console.log(">> " + propertyKey + " " + JSON.stringify(args));
            }
            originalFunction.apply(this, args);
        }
        
        
    }
} 

class MyDB {
    name = 'Movie Database';

    @LogMethod(LogLevel.DEBUG)
    saveData(data: any) {
        console.log(`Saving data in ${this.name} DB, the content is: ${data.content}`);
    }
}

const myDB = new MyDB();
myDB.saveData({content: "The Race I Won"});