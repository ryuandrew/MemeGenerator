
var memeUrl = 'https://api.imgflip.com/get_memes'
var dropDownContainer = $('#dropDownContainer')
var submitButton = $('#submit')

//fetching data from api
fetch(memeUrl).then(function(response) {
    return response.json()
}).then(function(data) {
    var memeList = $('#memeList')
    
    console.log(data.data.memes[0].url)

    //grabbing the name and url of the image. 
    for (var i = 0; i < 10; i++) {
        var buttonInfo = data.data.memes[i].name  //image name from api
        var buttonUrl = data.data.memes[i].url  //image url from api
        var optionEl = $('<option>')  //create a new tag
        optionEl.attr('value', buttonInfo)  //create an attribute for image name
        optionEl.attr('data-url', buttonUrl)  //create an attribute for image url
        optionEl.text(buttonInfo)  //text content for the dropdown
        memeList.append(optionEl)  //append to the select tag in html
            //call a function with parameters with meme name and url

        console.log(buttonInfo)
    }
})

//event handler 
function submitButtonHandler(event) {
    event.preventDefault()
    var memeUrl = $('#memeUrl')

    console.log($(this).find(':selected').text()) //part of the form. what was selected.
    memeUrl.attr('src', $(this).find(':selected').attr('data-url')) //grabbing the attribute from the selected
}

submitButton.on("submit", submitButtonHandler)





//button and handler






//create function to pass thru arguments (name and url)
    //this fcn will change the image on the page
    //grab the image display (current meme.src="html") so the src changes and display on top


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