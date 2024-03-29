// Bogus journal entries
const journalEntryOne = {
    journalDate: "10/2/19",
    conceptsCovered: ".push",
    journalEntry: "Learned about the .push method",
    mood: "Meh"
}

const journalEntryTwo = {
    journalDate: "10/3/19",
    conceptsCovered: ".punch",
    journalEntry: "Learned about the .punch method",
    mood: "Meh"
}

const journalEntryThree = {
    journalDate: "10/4/19",
    conceptsCovered: ".pooch",
    journalEntry: "Learned about the .pooch method",
    mood: "Meh"
}

// Declaring an empty array for journal entries
const journalEntries = []

// Adding new objects to journalEntries array with .push
journalEntries.push(journalEntryOne)
journalEntries.push(journalEntryTwo)
journalEntries.push(journalEntryThree)

// console logging Journal Entries to make sure it works
console.log("Journal Entries", journalEntries)

const entryLog = document.querySelector(".entryLog")

const renderJournalEntries = (entries) => {
    entries.forEach((entry) => { 
        entryLog.innerHTML += 
        `
    <section>
        <h3>${entry.conceptsCovered}</h3>
        <p>${entry.journalEntry}</p>
        <p>${entry.mood}</p>
        <p>${entry.journalDate}</p>
      </section>`
    })
} 
renderJournalEntries(journalEntries)