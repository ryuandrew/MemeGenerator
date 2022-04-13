//create function to pass thru arguments (name and url)
    //this fcn will change the image on the page
    //grab the image display (current meme.src="html") so the src changes and display on top


var memeUrl = 'https://api.imgflip.com/get_memes'
// var dropDownContainer = $('#dropDownContainer')
var submitButton = $('#submit')

//fetching data from api
fetch(memeUrl).then(function(response) {
    return response.json()
}).then(function(data) {
    var memeList = $('#memeList')
    
    // console.log(data.data.memes[0].url)

    //grabbing the name and url of the image. 
    for (var i = 0; i < 25; i++) {
        var buttonInfo = data.data.memes[i].name  //image name from api
        var buttonUrl = data.data.memes[i].url  //image url from api
        var optionEl = $('<option>')  //create a new tag
        optionEl.attr('value', buttonInfo)  //create an attribute for image name
        optionEl.attr('data-url', buttonUrl)  //create an attribute for image url
        optionEl.text(buttonInfo)  //text content for the dropdown
        memeList.append(optionEl)  //append to the select tag in html
            //call a function with parameters with meme name and url

        // console.log(buttonInfo)
    }
})

//event handler 
function submitButtonHandler(event) {
    event.preventDefault()
    var memeUrl = $('#memeUrl')

    console.log($(this).find(':selected').text()) //part of the form. what was selected.
    memeUrl.attr('src', $(this).find(':selected').attr('data-url')) //grabbing the attribute from the selected
}

// delete start
$(document).ready(function() {
    $('#meme-controls').on('keyup','#top-text-input', function() {
        $('#top-text').text($(this).val());
    });
    $('#meme-controls').on('keyup','#btm-text-input', function() {
        $('#btm-text').text($(this).val());
    });
    $('#meme-samples').on('click','img', function() {
      $('#meme').empty().append($(this).data('src'));
    });
  });
// delete end



var uploadTextButtonEl = $('#uploadText')
var topTextEl = $('#topText')
var bottomTextEl = $('#bottomText')

$(document).ready(function() {
    // console.log(topTextEl.value)
    // console.log(bottomTextEl)
    uploadTextButtonEl.on('click', function() {
        var topInput = topTextEl.val()
        var bottomInput = bottomTextEl.val()
        console.log(topInput)
        console.log(bottomInput)
        
        var displayTopText = $('#displayTopText')
        var topTextOutput = $('<topTextOutput>')
        topTextOutput.text(topInput)
        displayTopText.append(topTextOutput)

        var displayBottomText = $('#displayBottomText')
        var BottomTextOutput = $('<BottomTextOutput>')
        BottomTextOutput.text(bottomInput)
        displayBottomText.append(BottomTextOutput)
    })
})


function displayText(event) {
    event.preventDefault()
    var displayTopTextFinal = $('#displayTopText')
    var displayBottomTextFinal = $('#displayBottomText')
}


var jokeUrl = "https://icanhazdadjoke.com/";
var displayJoke = $('displayJoke')

// fetch(jokeUrl).then(function(response) {
//     return response.json()
// }).then(function(data) {
//     console.log(data)
// })


// function getJoke() {
//     var jokeUrl = "https://icanhazdadjoke.com/";
//     var options = { 
//         method: 'GET',
//         headers: {
//           "Accept" : "application/json" 
//         }
//       };
  
//     // make a GET request to the dad joke API
//     var dadJokeJSON = UrlFetchApp.fetch(jokeUrl,options);
//     var dadJokeText = dadJokeJSON.getContentText();
//     var dadJokeObject = JSON.parse(dadJokeText);
//     var joke = dadJokeObject.value['joke'];
   
  
//     // log the joke that you retrieved
//     Logger.log(joke);
      
//   }




  

// //fetching data from api
// fetch(memeUrl).then(function(response) {
//     return response.json()
// }).then(function(data) {
//     var memeList = $('#memeList')
    
//     // console.log(data.data.memes[0].url)

//     //grabbing the name and url of the image. 
//     for (var i = 0; i < 25; i++) {
//         var buttonInfo = data.data.memes[i].name  //image name from api
//         var buttonUrl = data.data.memes[i].url  //image url from api
//         var optionEl = $('<option>')  //create a new tag
//         optionEl.attr('value', buttonInfo)  //create an attribute for image name
//         optionEl.attr('data-url', buttonUrl)  //create an attribute for image url
//         optionEl.text(buttonInfo)  //text content for the dropdown
//         memeList.append(optionEl)  //append to the select tag in html
//             //call a function with parameters with meme name and url

//         // console.log(buttonInfo)
//     }
// })













submitButton.on("submit", submitButtonHandler)
submitButton.on("submit", displayText)














    //set the height of the img to be same. using javascript to find image dimensions
        //div is set to flex. flex direction column. justify content = space between. set a div to contain the img and adjust size



//display image by calling the name from a drop down menu
//need a button to post
//top 100 meme will be updated thruout time
//we want to grab the top 10. [0,1,2,3,4,5,6,7,8,9]
//make a variable for name and have it display it on the drop down menu
//when we click the name of the meme from the drop down menu, the image displays on page
//then we want to input a text to show up on the image to create a meme
//each image we select the text will reset

//thurs noon. no more editiing. then prepare
//slideshow for a min
//cover the technology. demo the website
//q&a

//randomly choose an image and have a text - second option api









// var url = "https://icanhazdadjoke.com/";
// var options = { 
//   method: 'GET',
//   headers: {
//     "Accept" : "application/json" 
//   }
// };

// // make a GET request to the dad joke API
// var dadJokeJSON = UrlFetchApp.fetch(url, options);