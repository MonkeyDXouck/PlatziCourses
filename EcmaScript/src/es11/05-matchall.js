const fruit = "Banana, Apple, Cherry, Kiwi, Orange, Graves";

for (const match of fruit.matchAll("Apple")) {
    console.log(match);
}
