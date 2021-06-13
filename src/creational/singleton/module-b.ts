import { MyDatabaseClassic } from "./db/my-database-classic";
import { myDatabaseClassic as myDatabaseClassicFromModule } from "./modula-a";

const myDatabaseClassic = MyDatabaseClassic.instance;
myDatabaseClassic.add({ name: "Filipe", age: 29 });
myDatabaseClassic.add({ name: "Luis", age: 23 });
myDatabaseClassic.add({ name: "Mendonça", age: 18 });
myDatabaseClassic.show();

console.log(myDatabaseClassicFromModule === myDatabaseClassic);

// import { MyDatabaseModule } from "./db/my-database-module";
// import { myDatabaseModule as myDatabaseModuleFromModule } from "./modula-a";

// const myDatabaseModule = MyDatabaseModule;
// myDatabaseModule.add({ name: "Filipe", age: 29 });
// myDatabaseModule.add({ name: "Luis", age: 23 });
// myDatabaseModule.add({ name: "Mendonça", age: 18 });
// myDatabaseModule.show();

// console.log(myDatabaseModuleFromModule === myDatabaseModule);
