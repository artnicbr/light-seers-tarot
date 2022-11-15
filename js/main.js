let cards = Array()
let arcanesOnly = false
let numberOfCards = null
let setUps = Object()

let turnBackAllCards = function(){
    for(i = 1; i <= numberOfCards; i++){
        $("#card" + i).attr("src", "deck/cardback.jpg")
    }
}

let drawCards = function(){

    total = (arcanesOnly) ? 21 : 78
    cards = Array()

    while(cards.length < numberOfCards){
        newCard = Math.floor((Math.random() * 100) % total)
        if(cards.indexOf(newCard) == -1)
            cards.push(newCard)
    }

    return true
}

let showCard = function(n){
    path = "deck/" + String(cards[n-1]).padStart(2, "0") + ".png"
    $("#card" + n).animate({opacity: 0}, 500, function() {
        $("#card" + n).attr("src", path)
    })    
    $("#card" + n).animate({opacity: 1}, 1000)
}

let showDrawedCards = function(){
    turnBackAllCards()
    drawCards()
    for(i = 0; i < numberOfCards; i++){
        setTimeout(showCard, 1500 * i, i + 1)
    }
}

$(document).ready(function(){
    numberOfCards = Number($("#numberOfCards").val())
    setUps[1] = 12
    setUps[3] = 4
    setUps[5] = 4
    setUps[7] = 3

    $("#draw-btn").click(showDrawedCards)

    $("#arcanesSelector").change(function(){
        arcanesOnly = ($(this).val() == "true") ? true : false
    })

    $("#numberOfCards").change(function(){
        table = $("#table")
        table.empty()
        numberOfCards = Number($(this).val())
        cols = setUps[numberOfCards]
        for(i = 0; i < numberOfCards; i++){
            newElement = $('<div class="col-' + cols + ' d-flex justify-content-center mb-2"><img src="deck/cardback.jpg" id="card' + (i+1) + '" class="img-fluid"></div>')
            table.append(newElement)
        }
    })
})