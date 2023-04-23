type Person = {
  name: string;
  code: string | number;
  description?: string;
};

const newPerson: Person = {
  code: 'H',
  name: 'Kevin',
};

type ServiceResponse = string | number | null | undefined;
let response: ServiceResponse;

type UserCharges = 'admin' | 'normal' | 'superUser';
let response1: UserCharges;
