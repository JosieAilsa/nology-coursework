// //Arrays of Arrays are often referred

// const table = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];

// for (let row = 0; row < table.length; row ++){

// for (let column = 0; column < table.length; column ++) {
//     // console.log(table[row][column]);
//     //If you wanted to read the column first 
//     console.log(table[column][row]);

// }
// }

const grid = [
    ["X", "X","X"],
    ["X", "0","X"],
    ["0", "X","0"],
];


    //Incrament the row
for (let row = 0; row < grid.length; row ++) {
    let rowString = grid[row].join("");
    let columnString = "";
    for (let column = 0; column < grid.length; column ++ ) {
        columnString += grid [column][row]; //XXO
    }
    console.log(row, rowString, columnString);

    if (rowString === "XXX" || columnString === "XXX") {
        console.log("X wins");
        break;
    }
}