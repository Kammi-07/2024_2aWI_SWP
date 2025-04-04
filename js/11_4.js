let input = [20, 100, 600];
function canheaffortrent(numbers) {
    let P = numbers[0];
    let H = numbers[1];
    let R = numbers[2];
    if (P * H >= R) {
        console.log("yes");
    } else {
        console.log("NO");

    }
}
canheaffortrent(input);
