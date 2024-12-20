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

// Prompt user for new contact details
const name = prompt("Enter the name of the new contact:");
const phone = prompt("Enter the phone number of the new contact:");
const email = prompt("Enter the email of the new contact:");

// Add the new contact to the end of the list
contacts.push({
    name: name,
    phone: phone,
    email: email
});

// Display the total number of contacts
console.log(`Total contacts: ${contacts.length}`);

// Display the first contact
console.log(`First contact: ${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);

// Display the last contact (the newly added one)
console.log(`Last contact: ${contacts[contacts.length - 1].name} / ${contacts[contacts.length - 1].phone} / ${contacts[contacts.length - 1].email}`);
