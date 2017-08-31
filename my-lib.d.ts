declare module "mylib" {
    interface AFunction {
        (data: any): any;
    }

    interface myLib {
        aFunc: AFunction;
    }

    export const mylib: myLib;
}