console.log("check")


var buttonEl = $('button')
// function generateHandler() {
//     // console.log()
//     var topTextEl = $('#toptext').val()
//     var bottomTextEl = $('#bottomtext').val()
//     // var url = "https://apimeme.com/meme?meme=Bad-Advice-Cat&top=Top+text&bottom=Bottom+text"
//     var url = "https://apimeme.com/meme?meme=Bad-Advice-Cat&top=" + topTextEl + "&bottom=" + bottomTextEl
//     fetch(url).then(function (response) {
//         return response.json()
//     }).then(function(data) {
//     })
// }
// buttonEl.on("click", generateHandler)





// function generateHandler() {
    
//     var memeUrl = 'https://api.imgflip.com/get_memes'
    
//     fetch(memeUrl).then(function(response) {
//         return response.json()
//     }).then(function(data) {
//         console.log(data)
//         for (var i = 0; i < data.length; i++) {
//             var listItem = $('li')
//             listItem.val() = data[i].html_url
//         }
//     })
// }
    
    
   
    // var memeUrl = 'https://api.imgflip.com/get_memes'
    
    // fetch(memeUrl).then(function(response) {
    //     return response.json()
    // }).then(function(data) {
    //     console.log(data)
        
    //     data.results.forEach(photo => {
    //         var result = `
    //             <img src="${photo.urls.regular}">
    //         `;
    //         $('result').append(result)
    //     })
    // })




var memeUrl = 'https://api.imgflip.com/get_memes'
    
fetch(memeUrl).then(function(response) {
    return response.json()
}).then(function(data) {
    console.log(data.data.memes[0].url)
    for (var i = 0; i < 10; i++) {
        var buttonInfo = data.data.memes[0].name
        var 
        console.log(buttonInfo)
    }
    // imgSrc.meme(function(url)) {
    //     let 
    // }
})


//display image by calling the name from a drop down menu
<<<<<<< HEAD
//need a button to post
=======
//top 100 meme will be updated thruout time
//we want to grab the top 10. [0,1,2,3,4,5,6,7,8,9]
//make a variable for name and have it display it on the drop down menu
//when we click the name of the meme from the drop down menu, the image displays on page
//then we want to input a text to show up on the image to create a meme
//each image we select the text will reset

>>>>>>> dev
