//with condition function
function max_num(jim, dela, chinku) {

    if (jim > dela && jim > chinku) {
        console.log('Jim will get the cake');
    }
    else if (dela > jim && dela > chinku) {
        console.log('Dela will eat cake in this bela');
    }
    else {
        console.log('Chinku will get the cake');
    }
}


console.log(max_num(34, 75, 63))
