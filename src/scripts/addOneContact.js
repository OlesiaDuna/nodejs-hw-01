import { generateContacts } from './generateContacts.js';

export const addOneContact = async () => {
  await generateContacts();
};

addOneContact(1);
