
function registerOrmModel(model: Function, data: {tableName: string, dbName: string}) {
    
    model.prototype['tableName'] = data.tableName;
    model.prototype['dbName'] = data.dbName;
    console.log(`Registering to ORM models to  ${data.tableName} of ${data.dbName} + ${model}`);

    
}


function DBEntity (data: {tableName: string, dbName: string}) {
    return (target: Function) => {
        target.prototype['performedBy'] = "Vikash";
        target.prototype['tableName'] = data.tableName;
        registerOrmModel(target, data);
    }
}

@DBEntity({
    tableName : "WorklistTable" ,
    dbName : "ToDoDB"
})
class Worklist {
    private id: string = '1001';
    private state: number = 0;
    private performedBy: string;
    private performedAt: Date;
    
}
console.log(Worklist.prototype);

console.log(new Worklist().performedBy);


