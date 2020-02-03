export default{
    total(state) {
        let number = 0, price = 0
        for(let index = 0; index < state.selected.length; index++) {
            number += state.selected[index].selectAmount
            price += state.selected[index].selectAmount * state.selected[index].price
        }
        return {'totalNum':number, 'totalPrice':price}
    }
}