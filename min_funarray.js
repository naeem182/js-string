function mini(num) {
    let mini = num[0];
    for (const i of num) {
        const current_iteam = i;
        if (current_iteam < mini) {
            mini = current_iteam;
        }
    }
    return mini;
}
const arr = [12, 7, 9, 20, 4, 2, 3];
console.log(mini(arr))