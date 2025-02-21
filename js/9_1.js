console.log("console funktioniert");
for (let x = 1; x <= 222; x++) {
    if (x % 5 == 0 && x % 7 == 0) {
        console.log("FooBar");
    } else if (x % 5 == 0) {
        console.log("Foo");
    } else if (x % 7 == 0) {
        console.log("Bar");
    } else {
        console.log(x);
    }
}