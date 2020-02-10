import Vue from 'vue'
export default{
    initGoods(state, goods){
        state.goods = goods
    },
    addGoods(state, good){
        let outIndex1 = 0, index1 = 0
        outer:
        for (; outIndex1 < state.goods.length; outIndex1++) {
            for(index1 = 0; index1 < state.goods[outIndex1].foods.length; index1++){
                if(state.goods[outIndex1].foods[index1].name == good.name){
                    if(!state.goods[outIndex1].foods[index1].selectAmount){
                        Vue.set(state.goods[outIndex1].foods[index1], 'selectAmount', 1)
                        // console.log(good.name+"修改selectAmount"+state.goods[outIndex1].foods[index1].selectAmount)                
                        Vue.set(state.goods[outIndex1].foods[index1], 'id', state.selected.length)
                        state.selected.push(state.goods[outIndex1].foods[index1]);
                    }else{
                        state.goods[outIndex1].foods[index1].selectAmount++
                        // console.log(good.name+"修改selectAmount"+state.goods[outIndex1].foods[index1].selectAmount)
                    }
                    break outer;
                }
            }
        }
        // try {
        //     localStorage.setItem('selected', JSON.stringify(state.selected))
        // } catch (error) {
            
        // }
    },
    minusGoods(state, good){
        let outIndex1 = 0, index1 = 0, index2 = 0
        for (; outIndex1 < state.goods.length; outIndex1++) {
<<<<<<< Updated upstream
            for(index1=0; index1 < state.goods[outIndex1].foods.length; index1++){
=======
            for(index1 = 0; index1 < state.goods[outIndex1].foods.length; index1++){
                // console.log(state.goods[outIndex1].foods[index1].name, good.name);
>>>>>>> Stashed changes
                if(state.goods[outIndex1].foods[index1].name == good.name){
                    state.goods[outIndex1].foods[index1].selectAmount--
                    if(state.goods[outIndex1].foods[index1].selectAmount == 0){
                        for (; index2 < state.selected.length; index2++){
                            if(state.selected[index2].name == good.name){
                                state.selected.splice(index2, 1)
                            }
                        }
                    }
                }
            }
        }
        // try {
        //     localStorage.setItem('selected', JSON.stringify(state.selected))
        // } catch (error) {
            
        // }
    },
}