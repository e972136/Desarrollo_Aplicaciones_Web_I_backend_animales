import  {db} from '../db/conn.js';

const getAnimal = async (req,res)=>{
    const sql = 'select * from tbl_animal';
    const result = await db.query(sql);
    res.json(result);
};

const postAnimal = async (req,res)=>{
    const {nombre, sonido} = req.body;
    const params = [nombre, sonido];
    const sql = 'insert into tbl_animal(nombre,sonido) values ($1, $2) returning *';
    const result = await db.query(sql,params);
    res.json(result);
};

const putAnimal = async (req,res)=>{
    const {nombre,sonido}=req.body;
    const {id} = req.params;

    const params =[
        nombre,
        sonido,
        id
    ];

    const sql = `update tbl_animal 
                    set nombre = $1, sonido = $2 
                    where id = $3 returning *`;

    const result = await db.query(sql,params);

    res.json(result);
};

export {
    getAnimal,
    postAnimal,
    putAnimal
};