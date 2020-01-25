// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios 
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {

        const newArticle = (response) => {
            const articleCatagory = [response.data.articles]
            // console.log('article catagories: ', articleCatagory)
            articleCatagory.forEach(catagoryList => {
                // console.log('catagory list: ', [catagoryList])
                let newArticleCatagory = [catagoryList]

                newArticleCatagory.forEach(articleItem => {
                    // console.log('article item', articleItem)
                    let name = Object.keys(articleItem)

                    name.forEach(item1 => {
                        let newArticleItem = articleItem[item1]
                        // console.log(item1)

                        let testVar = item1
                        // console.log(testVar)
                        for(let i = 0; i < newArticleItem.length; i++) {
                            // console.log('item: ', item)
                            let newTestVar = [testVar, newArticleItem[i]]
                            cardsPOE.appendChild(createCards(newTestVar))
                        }
                    })
                })
            })
        }
        newArticle(response)
        


    }).catch((error) => {
        console.log('error: ', error)
    });


const createCards = (cardInfo) => {
    const newCard = document.createElement('div')
    const cardHeadline = document.createElement('div')
    const cardAuthor = document.createElement('div')
    const cardImgContainer = document.createElement('div')
    const cardImg = document.createElement('img')
    const cardSpan = document.createElement('span')
    const cardCatagory = document.createElement('div')

    newCard.appendChild(cardHeadline)
    newCard.appendChild(cardAuthor)
    cardImgContainer.appendChild(cardImg)
    cardAuthor.appendChild(cardImgContainer)
    cardAuthor.appendChild(cardSpan)
    newCard.appendChild(cardCatagory)

    newCard.classList.add('card')
    cardHeadline.classList.add('headline')
    cardAuthor.classList.add('author')
    cardImgContainer.classList.add('img-container')

    cardHeadline.textContent = cardInfo[1].headline
    cardImg.src = cardInfo[1].authorPhoto
    cardSpan.textContent = cardInfo[1].authorName
    cardCatagory.id = cardInfo[0]

    // console.log(cardInfo)
    

    return newCard
}

const cardsPOE = document.querySelector('.cards-container')