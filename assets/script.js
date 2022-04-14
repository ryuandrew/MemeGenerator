//create function to pass thru arguments (name and url)
//fetch name and url for the meme image from an api
//display image by calling the name from a drop down menu
//make a variable for the name of an image and have it display on the drop down menu
//the drop down menu will consist of the top i meme [0,1,2,...,i]
//when we select the name of the meme from the drop down menu, click a button to display on page
//then we want to input a text to show up on the image to create a meme. need a button
//when another image is selected the text will reset
//second api: show random dad joke on refresh

//set the height of the img to be same. using javascript to find image dimensions
//div is set to flex. flex direction column. justify content = space between. set a div to contain the img and adjust size

var memeUrl = 'https://api.imgflip.com/get_memes'
var submitButton = $('#submit')
var uploadTextButtonEl = $('#uploadText')
var topTextEl = $('#topText')
var bottomTextEl = $('#bottomText')
var jokeUrl = "https://icanhazdadjoke.com";
var dadJoke = $('#dadJoke')

//fetching data from api
fetch(memeUrl).then(function(response) {
    return response.json()
}).then(function(data) {
    var memeList = $('#memeList')
    // console.log(data.data.memes[0].url)

    //grabbing the name and url of the image 
    for (var i = 0; i < 25; i++) {
        var buttonInfo = data.data.memes[i].name  //image name from api
        var buttonUrl = data.data.memes[i].url  //image url from api
        var optionEl = $('<option>')  //create a new tag. <select> tag needs an <option> tag as a child
        optionEl.attr('value', buttonInfo)  //create an attribute for image name
        optionEl.attr('data-url', buttonUrl)  //create an attribute for image url
        optionEl.text(buttonInfo)  //text content for the dropdown
        memeList.append(optionEl)  //append to the select tag in html
        // console.log(buttonInfo)
    }
})

//fetching data from api
fetch(jokeUrl, { 
    // method: 'GET',
    headers: {
      "Accept" : "application/json" 
    }
  }).then(function(response) {
return response.json()
}).then(function(data) {
console.log(data)
dadJoke.text(data.joke)
})

//upload text when the submit button is clicked
function submitButtonHandler(event) {
    event.preventDefault()
    uploadTextHandler()
    var memeUrl = $('#memeUrl')

    console.log($(this).find(':selected').text()) //submitButtonHandler targets the form, goes thru the form elements and find what was selected. When found, grab the text attribute
    memeUrl.attr('src', $(this).find(':selected').attr('data-url')) //grabbing the url from the selected attribute which was defined above. Then update the src attribute value
}

//display the input text for topText and bottomText
function uploadTextHandler() {
    var topInput = topTextEl.val()
    var bottomInput = bottomTextEl.val()
    console.log(topInput)
    console.log(bottomInput)
    
    var displayTopText = $('#displayTopText')
    var displayBottomText = $('#displayBottomText')
    displayTopText.text(topInput)
    displayBottomText.text(bottomInput)

    //clearing the text values
    topTextEl.val("")
    bottomTextEl.val("")
}

function displayText(event) {
    event.preventDefault()
    var displayTopTextFinal = $('#displayTopText')
    var displayBottomTextFinal = $('#displayBottomText')
}

submitButton.on("submit", submitButtonHandler)
submitButton.on("submit", displayText)
uploadTextButtonEl.on('click', uploadTextHandler)

