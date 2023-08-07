const ganner_koli = 'tumi bondhu kala pakhi ami jeno ki';
// const serch = 'pafkhi';
// const doesExist = ganner_koli.toLowerCase().includes(serch.toLowerCase());
// console.log(doesExist)
//...............................
// indexOf

// console.log(ganner_koli.indexOf('kala'));//takes start string kala------->k=12
// console.log(ganner_koli.indexOf('Tumi'))//if not found then index num -1
// 

if (ganner_koli.indexOf('pakhi') !== -1) {
    console.log('exists inside the string')
    console.log("index start with", ganner_koli.indexOf('pakhi'))
}
else {
    console.log('cannot find it');
}
