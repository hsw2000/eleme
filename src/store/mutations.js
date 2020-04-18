import Vue from 'vue'
export default{
    initGoods(state, goods){
        state.goods = goods
    },
    initSeller(state, seller){
        state.seller = seller
    },
    initRatings(state, ratings){
        state.ratings = ratings
    },
    initMenu(state, menu){
        state.menu = menu
    },
    initMenuHeight(state, menuHeight){
        state.menuHeight = menuHeight
    },
    addGoods(state, good){
        let outIndex1 = 0, index1 = 0
        outer:
        for (; outIndex1 < state.goods.length; outIndex1++) {
            if(state.goods[outIndex1].type > 0) {
                continue;
            }
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
            if(state.goods[outIndex1].type > 0) {
                continue;
            }
            for(index1 = 0; index1 < state.goods[outIndex1].foods.length; index1++){
                // console.log(state.goods[outIndex1].foods[index1].name, good.name);
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
    minusAllGoods(state, good){
        let outIndex1 = 0, index1 = 0, index2 = 0
        for (; outIndex1 < state.goods.length; outIndex1++) {
            if(state.goods[outIndex1].type > 0) {
                continue;
            }
            for(index1 = 0; index1 < state.goods[outIndex1].foods.length; index1++){
                // console.log(state.goods[outIndex1].foods[index1].name, good.name);
                if(state.goods[outIndex1].foods[index1].name == good.name){
                    state.goods[outIndex1].foods[index1].selectAmount = 0;{
                    for (; index2 < state.selected.length; index2++){
                        if(state.selected[index2].name == good.name){
                            state.selected.splice(index2, 1)
                        }
                    }
                }
            }
        }
        }
    },
    clearAll(state) {
        const length = state.selected.length
        for(let i = 0; i < length; i++){
            const good = state.selected[0];
            this.commit('minusAllGoods', good)
        }
    }
}