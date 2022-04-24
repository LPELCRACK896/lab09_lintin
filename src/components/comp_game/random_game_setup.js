//const struct = require("./src/components/comp_game/cards_info")
const memory_cards_to_use = []
const order_cards_setup = []

const random_memory_setup = ()=>{
    while (memory_cards_to_use.length!=12){
        let num = Math.floor(Math.random() * (16 - 2) + 2)
        let random = num%2==0?num:num-1;
        if (!memory_cards_to_use.includes(random)) {
            memory_cards_to_use.push(random)
            memory_cards_to_use.push(random-1)
        }
    }
    while (order_cards_setup.length!=memory_cards_to_use.length) {
        let random = Math.floor(Math.random() * 12)
        if (!order_cards_setup.includes(memory_cards_to_use[random]))
            order_cards_setup.push(memory_cards_to_use[random])
    }
    return order_cards_setup 
}

module.exports = random_memory_setup