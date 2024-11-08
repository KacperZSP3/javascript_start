let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

// Add a new contact
contacts.push({
    name: "Maisie Haley",
    phone: "0913 531 3030",
    email: "risus.Quisque@urna.ca"
});

console.log(contacts.length)

// Display the first contact
console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);

// Display the last contact
console.log(`${contacts[contacts.length - 1].name} / ${contacts[contacts.length - 1].phone} / ${contacts[contacts.length - 1].email}`);

// Asking for a new contact
let newName = prompt("Podaj imię nowego kontaktu:");
let newPhone = prompt("Podaj numer telefonu nowego kontaktu:");
let newEmail = prompt("Podaj adres email nowego kontaktu:");

// Adding new contact at the end
contacts.push({name: newName, phone: newPhone, newEmail: newEmail});

// Displaying first and last contact from the list
console.log("Pierwszy kontakt:", contactList[0]);
console.log("Ostatni kontakt:", contactList[contactList.length - 1]);