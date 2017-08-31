
declare module "mylodash" {
    interface FirstFunction {
        (data: any): any;
    }

    interface myLodash {
        first: FirstFunction;
    }

    export const _: myLodash;
}