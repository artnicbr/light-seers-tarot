let cards = null
var arcanesOnly = false

let turnBackAllCards = function(){
    $("#card1").attr("src", "deck/cardback.jpg")
    $("#card2").attr("src", "deck/cardback.jpg")
    $("#card3").attr("src", "deck/cardback.jpg")
}

let drawCards = function(){
    
    card1 = card2 = card3 = null    
    total = (arcanesOnly) ? 21 : 78

    while(card1 == card2 || card1 == card3 || card2 == card3){
        card1 = Math.floor((Math.random() * 100) % total)
        card2 = Math.floor((Math.random() * 100) % total)
        card3 = Math.floor((Math.random() * 100) % total)
    }    

    cards = [card1, card2, card3]

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
    setTimeout(showCard, 1500, 1)
    setTimeout(showCard, 3000, 2)
    setTimeout(showCard, 4500, 3)
}

$(document).ready(function(){
    $("#draw-btn").click(showDrawedCards)
    $("#arcanesSelector").change(function(){
        arcanesOnly = $(this).val()
    })
})