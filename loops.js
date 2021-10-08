///////////////////////////////
//// Assignment Code Setup ////
///////////////////////////////

const getNextWordWords = ['apple', 'celery', 'watermelon', 'papaya', 'carrot', 'blackberry', 'onion', 'strawberry'];
let nextWordIndex = 0;
function getNextWord()
{
	if (nextWordIndex < getNextWordWords.length)
	{
		const wordToReturn = getNextWordWords[nextWordIndex];
		nextWordIndex++;
		return wordToReturn;
	}
	else
	{
		return "";
	}
}

/////////////////////////////////////
//// Don't modify anything above ////
/////////////////////////////////////



// while Loops
let nextWord = getNextWord();
const bannedWords = ['carrot', 'celery', 'onion'];
// 1.a) Create a "while" loop that checks to see if "nextWord" does not equal an
//      empty string "". If the "nextWord" variable is not empty, log its contents
//      to the console.
// 1.b) Then call the "getNextWord" function again at the end of the loop's
//      instructions and store its new value in "nextWord"


// 2) Inside (1)'s loop, before you log the word to the console, check to see
//    if the word is a banned word in the "bannedWords" array. If it is, don't
//    log the word to the console.
//
//    Note: There is an array function that allows you to find if an item in
//          the array exists


// for Loops
const characters = "xhLxVmribfjavIZLuDqGhxHwqEsEaVeuxjzYilVEPHdgrvlRUhQOVVsNtCSXVeXhgdoLewVtoamQdIixRWxbzrYBFnJZQHHVxSFgYAxPeTYeIvkEgMIkFPqSXApiVEMisBPSmQyKhNbfHpFjVBZqGCWjCIGiyoruQEbpWtkQYJyVFFNHlLaOHACtfkrCzRMuVHWAGQBGmaViRZGeSfheooBIVoRDmFkMEJOGIZuWVpzKFWvOsPZCQHJYSZwsyhrXahKMBVSQPHEdKJNokxWXsveSpHogUUUpeOzcyMQxYCYKStoRqvkWBEZUEwcUoOOpIFGTXxjEClTxvcQkheivGtFnwdtHMWKjYUTKNWUEXjHIYDAPuHVUmIAeUySkHgrPqUfWUJKnTdiCTuhJcmseVeiPlBHduTKu$xzwqIwHpaTRetDHBErPXVeQPIMKulUBwCuzHKhdnIJAvvqAZXvBzVjTQnkmEWEiIezQktPJdFRIObYdJMpPMVyvMlClIeTHAbMfmzwKsIFDFdYEnKHzPtXAlWoRPBkNDLUhuNYJMmFRABauqyXFsDCMuNhWFkajjRFJVPIMpLPJNxJdwbfRuqhwpIaLXvFdNkEpNvgrtDIFZCRYqtjiOmklgtTFGHNVyoACaYACAajBkmVzmxTeZlhTJaFfmMXvbxbcMDcGrdGaHWZHbEFPRUgfRrJofsfHMXlsTEkrDTwXfyiNzhVrKPUhgXxnacNjgcMJXVPNFOBekJBlhnMxeQwPnqeOkfhYSJLtMpTdzdFfimwffpSydfjqYWwllNGolQaLccmrhDNFuQFVfZgauZlQUZvnZclqemozMziWmQypLRspayiDDCFfdgabbUsTDbFbtxPfEkVfYRaIoJjfSpcCuBhapSgmDfTfIQfqULcTVGSbEDHAkLBTaReKvsiHnohvauZiNJSfWRAVeTXNVwMQMQfKXdznBmEPUvPdzfRdNOfXZapmmVcqSMLxiCoQuIwlhPMYLDXcvOIGBneYzaXmtoyltnqBabWzVwqPvSkyHlDEwpEgyiTObzNgyxhhutUGbQWvjWSSlGEaerQhUXRLLJZYJHwhoYGheWBBigaDDeBrhgrdOltqKGKuqNwtpgUnIgKiZNDmWZnbnnRMyrUBQWzhHoznMGqlDONEGScsUyINPyFrGNtaaEBIYWDnLjmgYdusmeLwfvZKxrmpTmXOvFEjFhOkITbaZZbFMXhSgqTYFehGCaiOcYiebozebHqhwMkHlZAdVBUiYfuHnZoqTSeesGcJdNbheutjrJjyDLdfuHSdhVONHawvRPGBnSbQeVrIxxmyqmRbRUtxuUtinNGxyrVMjiKhTtquQBXtSjHEZWHSUpePrpvFXvcAbvSelaBgbpXvmquVwUNdBSgctXCaGZegQnWPisnkwYQNpVHQbramqSLtdaRIIIftnRQJXyWBJBomjhDKIBZtNJDSrrXrhsFMTRSUAANAhuLnimVQVUSMGYUTVdZQtoCDurzuQBeqMiBfOmoQCAhYjsmEslzkpbkYuwhTTXVVsIUEmzzrjBGOfyDywvHjFeGuUlnmxFkiqIsNUJaufMNLZbHSwCdXiHYcOaslFFOEvVDSnZcJxypDtuZxTgATvUCSHaAZjkPZbsDiBflcOczrMBsQuhYiDCndbwnmbxDhnuFxYhqlgVrVBtNmzNCpsqtSASHqLYFxLOKTmMSRGrGzaxsbrImbgQNhafBSsoXuhsMTNsAUmRTnEmPQDUyDFvKRmwuqSNeaxeLxHrkfgkMwHgLulhXjFSjmiBSQEKyGOXIcsFlJztJERPfyuuLFgJQuCTigDIsClPYHrbTwPULikSTIAUDlOKEgaoRVpBVIveCQvGsNPQZzANCVIaZoUnATcOghWUaFCivHqyokFvnCzPBHbZVayRDNBBPoIsbedynNENgjHDskdrfbynxErXTKDIpExyPsBGzoULCqkjJyjHgtBBLxIlsQYkqNUsbwZDikDiBC";
let dollarSymbolIndex;
// 2) Create a for loop that loops through the "characters" string and checks each
//    letter to see if it is a "$" dollar symbol. Store the current index in the
//    "dollarSymbolIndex" variable
//
//    Note: You are not allowed to use the "indexOf" function to get the index


// 3) Inside (2)'s for loop, use a "break" keyword to exit the loop after finding
//    and storing the index. This reduces the amount of time it takes to complete
//    the function


// for...of Loops
// 4) Retrieve ALL of the "p" tag elements out of the DOM and store the collection in
//    a new variable with a unique identifier


// 5) Use a "for...of" loop to iterate through each "p" element retrieved out of
//    the DOM and stored in your variable, and set each background color to "salmon"


// 6) Inside (4)'s "for...of" loop, check to see if each "p" element's text content
//    contains more than 800 characters. If a "p" element's text content does not
//    contain more than 800 characters, set its background color to "skyblue" instead


// Multidimensional Arrays
const multidimensionalArray = [['cat','dog'], ['turtle', 'snake']];
// 7) Use a "for" loop inside another "for" loop to print out each value in each
//    sub-array to the console.


