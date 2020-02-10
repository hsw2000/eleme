let defaultSelected = []
// try {
//     if(localStorage.getItem('selected')){
//         defaultSelected = JSON.parse(localStorage.getItem('selected'))
//     }
//     console.log(defaultSelected)
// } catch (error) {
//     console.error()
// }

export default{
    menuHeight: [],
    menu: [],
    selected: defaultSelected,
    total: {},
    selectedNum: 0,
    goods: [],
    seller: {},
    ratings: []
}