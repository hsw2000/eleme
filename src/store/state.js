let defaultSelected = []
try {
    if(localStorage.getItem('selected') ){
        defaultSelected = JSON.parse(localStorage.getItem('selected'))
    }
} catch (error) {
    console.error()
}

export default{
    menuHeight: [1,2,3,4],
    menu: [],
    selected: defaultSelected,
    total: {},
    selectedNum: 0
}