const animals = require("./animals") ;
const connection = require("./mongoConnection");

const main = async () => {

    const Sasha = await animals.create("Sasha", "Dog");
    console.log(Sasha);

    const Lucy = await animals.create("Lucy", "Dog");

    const allanimal = await animals.getAll()
    console.log(allanimal)

    const Duke = await animals.create("Duke", "Walrus");
    console.log(Duke);

    const update1 = await animals.rename(Sasha._id, "Sashita")
    console.log(update1)

    const remove1 = await animals.remove(Lucy._id)

    const logall = await animals.getAll()
    console.log(logall)


    const db = await connection();
    await db.serverConfig.close();
    
}

main().catch(error => {
    console.log(error);
  });
