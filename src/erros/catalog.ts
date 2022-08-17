export enum ErrorTypes {
  CarNotFound = 'CarNotFound',
  InvalidMongoId = 'InvalidMongoId',
}
  
  type ErrorResponseObject = { 
    message: string;
    httpStatus: number
  };
    
export type ErrorCatalog = {
  [key in ErrorTypes]: ErrorResponseObject
    
};
    
export const errorCatalog: ErrorCatalog = {
  CarNotFound: {
    message: 'Object not found',
    httpStatus: 404,
  },
  InvalidMongoId: {
    message: 'Id must have 24 hexadecimal characters',
    httpStatus: 400,
  },
};