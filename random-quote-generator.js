 const imagesQuotes = [
    {
       image: "img/quote1.jpg",
       quote: "Believe something and the Universe is on its way to being changed. Because you've changed, by believing. Once you've changed, other things start to follow. Isn't that the way it works?",
       author: "Diane Duane"
   },
    {
       image: "img/quote2.jpg",
       quote: "Any sufficiently advanced technology is indistinguishable from magic.",
       author: "Arthur C. Clarke"
   },
    {
       image: "img/quote3.jpg",
       quote: "Magic exists. Who can doubt it, when there are rainbows and wildflowers, the music of the wind and the silence of the stars? Anyone who has loved has been touched by magic. It is such a simple and such an extraordinary part of the lives we live.",
       author: "Nora Roberts"

   },
    {
       image: "img/quote4.jpg",
       quote: "Children see magic because they look for it.",
       author: "Childhood Pal"
   },
    {
       image: "img/quote5.jpg",
       quote: "It's still magic even if you know how it's done",
       author: "Terry Pratchett"
   },
    {
       image: "img/quote6.jpg",
       quote: "I do believe in an everyday sort of magic - the inexplicable connectedness we sometimes experience with places, people, works of art and the like; the eerie appropriateness of moments of synchronicity; the whispered voice, the hidden presence, when we think we're alone.",
       author: "Charles de Lint"
   },
    {
       image: "img/quote7.jpg",
       quote: "Magic is believing in yourself, if you can do that, you can make anything happen.",
       author: "Johann Wolfgang von Goethe"
   },
    {
       image: "img/quote8.jpg",
       quote: "Magic 's just science that we don't understand yet.",
       author: "Arthur C. Clarke"
   }
];

 const picHolder = document.getElementById("picHolder");
 const quote = document.getElementById("quote");
 const author = document.getElementById("author");
 const img = document.createElement("img");
 const qa = document.getElementById("qa");

 function imageRandom(arr) {

    qa.style.visibility = 'visible';
    const arrLen = arr.length;
    let randomQuote;

    for (var i = 0; i < arrLen; i++) {
       randomQuote = Math.floor(Math.random() * arrLen);
       img.src = arr[randomQuote].image;
       picHolder.appendChild(img);
       quote.textContent = arr[randomQuote].quote;
       author.textContent = arr[randomQuote].author;
    }
    return picHolder, quote, author;
 }
