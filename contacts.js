const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.join("db", "contacts.json");
async function listContacts() {
    console.log("listContacts()");
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    console.table(contacts);
}
async function getContactById(contactId) {
    console.log("getContactById(qdggE76Jtbfd9eWJHrssH)");
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    console.log(contacts.find(option => option.id === contactId));
}
  
async function removeContact(contactId) {
    console.log("removeContact(qdggE76Jtbfd9eWJHrssH)");
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    contacts.splice(contacts.findIndex(option => option.id === contactId), 1);
    console.table(contacts);
}
  
async function addContact(name, email, phone) {
    console.log("addContact");
    const newContact = {
        "id": makeid(21),
        "name": name,
        "email": email,
        "phone": phone
    }
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    contacts.splice(0, 0, newContact);
    console.table(contacts);
}
function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

module.exports = { listContacts, getContactById, removeContact, addContact, makeid }