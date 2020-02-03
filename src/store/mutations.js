import Vue from 'vue'
export default{
    amountChangeMutations(state, info){
        for (let index = 0; index < state.selected.length; index++) {
            if(state.selected[index].name == info.name){
                if(info.amount != 0){
                    state.selected[index].amount = info.amount
                    Vue.set(state.selected, index, Object.assign({}, state.selected[index]))    
                }else{
                    state.selected.splice(index, 1)
                }
                localStorage.setItem('selected', JSON.stringify(state.selected))
                return
            }
        }
        state.selected.push({'name': info.name, 'amount': info.amount, 'price': info.price, 'id': state.selected.length})
        localStorage.setItem('selected', JSON.stringify(state.selected))
    },
    findSelectedNum(state, name){
        for (let index = 0; index < state.selected.length; index++){
            if(state.selected[index].name == name){
                state.selectedNum = state.selected[index].amount
                return
            }
        }
        state.selectedNum = 0
    }
}