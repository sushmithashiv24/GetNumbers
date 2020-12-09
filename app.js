//get the button
var btnTranslate = document.querySelector('#btn-translate');

//get the input
var txtInput = document.querySelector('#text-input');

var finalInput = document.querySelector('#answ');

//get the output
var outputDiv = document.querySelector('#output');

var outputDivone = document.querySelector('#output1');


//get the Server URL
var serverURL = "https://api.funtranslations.com/translate/numbers.json";

var numberTranslate  = document.querySelector('#number-translate');




let n1 = Math.floor(Math.random()*10+1);

let n2 = Math.floor(Math.random()*10+1);

let ans = n1+n2;

document.querySelector('#v1').value = n1;
document.querySelector('#v2').value = n2;

function jsGame()
{
    var result = document.querySelector('#answ');
    if(result.value== ans)
    {
        alert('Well done, correct');
    }
    else{
        alert('correct answer is'+ ans);
    }


}


//define translation function
function getTranslationURL(input)
{
    return serverURL + "?" + "text=" + input;

}

//Handle Error
function ErrorHandler(error)
{
    console.log('Error with the server');
    alert('Check the server connection!');
}




//ClickHandler
function clickHandlerone()
{
    //1. read the input text
var inputText = finalInput.value;
    //2. Go and fetch the URL
fetch(getTranslationURL(inputText)).
    //3. convert url into response.json
                                then(response => response.json()).
                                //4. output it 
                                                    // then(json => console.log(json.contents.translated))
                                                      then(json =>
                                                        {
                                                            var translatedText = json.contents.translated;
                                                            outputDivone.innerText = translatedText;
                                                        })
                                                         //5.Handle Error
                                                                .catch(ErrorHandler);
}

numberTranslate.addEventListener("click" , clickHandlerone);



//ClickHandler
function clickHandler()
{
    //1. read the input text
var inputText = txtInput.value;
    //2. Go and fetch the URL
fetch(getTranslationURL(inputText)).
    //3. convert url into response.json
                                then(response => response.json()).
                                //4. output it 
                                                    // then(json => console.log(json.contents.translated))
                                                      then(json =>
                                                        {
                                                            var translatedText = json.contents.translated;
                                                            outputDiv.innerText = translatedText;
                                                        })
                                                         //5.Handle Error
                                                                .catch(ErrorHandler);
}




//Call the button event 
btnTranslate.addEventListener("click" , clickHandler);