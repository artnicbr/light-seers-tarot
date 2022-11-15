$(document).ready(function(){
    container = $("#all-cards")
    for(i=0; i < 78; i++){
        cardNumber = String(i).padStart(2, "0")
        card = $('<div class="col-3 d-flex justify-content-center mb-2"><img src="deck/' + cardNumber + '.png" class="img-fluid"></div>')
        container.append(card)
    }
})