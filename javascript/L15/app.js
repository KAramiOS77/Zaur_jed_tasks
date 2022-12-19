// Ele bir funksiya yazin ki, findOccurrences funksiyasina cumle ve herf verim. Hemin cumledeki sozlerde o herf nece dene islenib onu obyekt seklinde gostersin.

function findOccurrences(word, letter) {
  let splitSentence = word.toLowerCase().split(" ");
  return splitSentence.map((elem) => {
    let sum = 0;
    for (let y in elem) {
      if (elem[y] === letter) {
        sum++;
      }
    }
    console.log(`"${elem}":${sum}`);
  });
}
findOccurrences("Hello World", "o");
findOccurrences("Create a nice JUICY function", "c");
findOccurrences("An APPLE a day keeps an Archeologist AWAY...", "a");
