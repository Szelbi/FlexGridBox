/**
 * Funstion is not mine. Just using it.
 * https://stackoverflow.com/questions/34123706/create-dummy-text-using-javascript
 */


/**
 * Returns rangom text string
 * @param {int} maxWords 
 */
export function randomTextgenerator(maxWords = 100) {
    var words = ["the sky", "above", "the port", "was", "the color of television", "tuned", "to", "a dead channel", "all", "this happened", "more or less", "I", "had", "the story", "bit by bit", "from various people", "and", "as generally", "happens", "in such cases", "each time", "it", "was", "a different story", "it", "was", "a pleasure", "to", "burn"],
        punctuation = [".", ","],
        text = "",
        phrase,
        punc,
        count = 0,
        nextCapital = true;
    while (count < maxWords) {
        phrase = words[Math.floor(Math.random() * words.length)]
        text += nextCapital ? phrase[0].toUpperCase() + phrase.slice(1) : phrase;
        nextCapital = false;
        if (Math.random() > .8) {
            punc = punctuation[Math.floor(Math.random() * punctuation.length)];
            if (punc === ".") nextCapital = true;
            text += punc;
        }
        text += " ";
        count = text.match(/\S+/g).length;
    }
    return text;
}