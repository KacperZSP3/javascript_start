// 1. Utworzenie obiektu opisującego wydarzenie
let event = {
    title: "Koncert zespołu X",
    date: "2024-06-15",
    location: "Warszawa"
};

console.log(event.title);
console.log(event.date);
console.log(event.location);

// 2. Zadeklarowanie pustego obiektu i dodanie danych uczestnika
let participant = {};
participant.name = "Jan Kowalski";
participant.email = "jan.kowalski@example.com";

console.log(participant.name);
console.log(participant.email);

// 3. Tworzymy naszą małą listę wydarzeń
let eventsList = [
    { title: "Koncert zespołu Y", date: "2024-07-20", location: "Kraków" },
    { title: "Festiwal Filmowy", date: "2024-08-05", location: "Gdańsk" },
    { title: "Wystawa Sztuki", date: "2024-09-10", location: "Wrocław" }
];

// 4. Dodanie nowego wydarzenia do listy
eventsList.push({ title: "Seminarium o JavaScript", date: "2024-10-15", location: "Łódź" });
console.log(eventsList.length);


// 5. Użycie metody slice, aby skopiować dwa ostatnie wydarzenia
let lastTwoEvents = eventsList.slice(-2);
console.log(lastTwoEvents);

// 6. Usunięcie pierwszego wydarzenia
eventsList.shift();
console.log(eventsList.length);


// 7. Wyświetlenie wszystkich dat wydarzeń
eventsList.forEach(event => console.log(event.date));
