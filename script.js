function generate() {
    var quotes = {
        "- Deepak Chopra" : '“Sex is always about emotions. Good sex is about free emotions; bad sex is about blocked emotions.”',

        "― Madeline Miller" : '“Bury us, and mark our names above. Let us be free.”',

        "― John Galsworthy" : '“Life calls the tune, we dance.”'
    }

    var authors = Object.keys(quotes);

   var author = authors[Math.floor(Math.random()*authors.length)]

   var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;




}