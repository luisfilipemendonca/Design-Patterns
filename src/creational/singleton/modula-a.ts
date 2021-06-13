import { MyDatabaseClassic } from "./db/my-database-classic";

const myDatabaseClassic = MyDatabaseClassic.instance;
myDatabaseClassic.add({ name: "Filipe", age: 29 });
myDatabaseClassic.add({ name: "Luis", age: 23 });
myDatabaseClassic.add({ name: "Mendonça", age: 50 });

export { myDatabaseClassic };

// import { MyDatabaseModule } from "./db/my-database-module";

// const myDatabaseModule = MyDatabaseModule;
// myDatabaseModule.add({ name: "Filipe", age: 29 });
// myDatabaseModule.add({ name: "Luis", age: 23 });
// myDatabaseModule.add({ name: "Mendonça", age: 50 });

// export { myDatabaseModule };
