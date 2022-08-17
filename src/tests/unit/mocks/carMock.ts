import { ICar } from "../../../interfaces/ICar";

const carMockCreate:ICar = {
    "buyValue": 3500,
       "color": "red",
      "doorsQty": 2,
       "model": "Uno da Escada",
       "seatsQty": 2,
       "year": 1963
};

const carMockWithId:ICar & { _id:string } = 
    {
        "_id": "62fd3403e8f068104275d3ec",
        "model": "Uno da Escada",
        "year": 1963,
        "color": "red",
        "buyValue": 3500,
        "doorsQty": 2,
        "seatsQty": 2
    };

const allCarsMockWithId: ICar[] & {_id:string}[] = 
    [
        {
            "_id": "62fd3403e8f068104275d3ec",
            "model": "Uno da Escada",
            "year": 1963,
            "color": "red",
            "buyValue": 3500,
            "doorsQty": 2,
            "seatsQty": 2
        },
        {
            "_id": "62fd346de8f068104275d3ef",
            "model": "Jeep Renegade",
            "year": 2020,
            "color": "white",
            "buyValue": 80,
            "doorsQty": 4,
            "seatsQty": 4
        }
    ];

const carMockBodyUpdate:ICar = {
        "buyValue": 4500,
        "color": "blue",
        "doorsQty": 2,
        "model": "Uno turbinado",
        "seatsQty": 4,
        "year": 2000
};

const carMockResponseUpdate:ICar & { _id:string } = {
    "_id": "62fd3403e8f068104275d3ec",
    "buyValue": 4500,
    "color": "blue",
    "doorsQty": 2,
    "model": "Uno turbinado",
    "seatsQty": 4,
    "year": 2000
};

export { carMockCreate, 
    carMockWithId, 
    allCarsMockWithId, 
    carMockBodyUpdate, 
    carMockResponseUpdate };