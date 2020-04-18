export default{
    total(state) {
        let number = 0, price = 0
        for(let index = 0; index < state.selected.length; index++) {
            number += state.selected[index].selectAmount
            price += state.selected[index].selectAmount * state.selected[index].price
        }
        return {'totalNum':number, 'totalPrice':price}
    },
    computedFoods(state){
      let computedFoods = [];
      for(let index = 0; index < state.goods.length; index++) {
        if(state.goods[index].type > 0) {
            let thisFoods = [];
            for(let idx = 0; idx < state.goods[index].foods.length; idx++) {
                // 对于热销榜的第idx件商品，遍历所有goods找到同一件商品，加入thisFoods
                outer:
                for (let outIndex1 = 0; outIndex1 < state.goods.length; outIndex1++) {
                    if(outIndex1 == index) {
                        continue;
                    }
                    for(let index1 = 0; index1 < state.goods[outIndex1].foods.length; index1++){
                        if(state.goods[outIndex1].foods[index1].name == state.goods[index].foods[idx].name) {
                            thisFoods.push(state.goods[outIndex1].foods[index1]);
                            break outer;
                        }
                    }
                }
            }
            computedFoods[state.goods[index].type] = thisFoods;
        }else {
            break;
        }
      }
      return computedFoods;
    },
}