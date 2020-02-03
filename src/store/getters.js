export default{
    total(state) {
        let number = 0, price = 0
        for(let index = 0; index < state.selected.length; index++) {
            number += state.selected[index].amount
            price += state.selected[index].amount * state.selected[index].price
        }
        return {'totalNum':number, 'totalPrice':price}
    }
}