// 10,10,5,6,6,9
// noteJP=10;
// noteNolan=10;
let notes = [10, 5, 6, 9];
console.log(notes);
// console.log(notes[0]);
// console.log(notes[5]);
notes[10] = notes[5] + 1;
console.log(notes[10]);
console.log(notes);
// for (let index = 0; index < notes.length; index++) {
//     let element = notes[index];
//     console.log(element);
// }
console.log('en avant les push');
notes.push(7);
notes.push(8);
notes.push(9);
notes.forEach
    (
        note => {
            console.log(note);
        }
    );
console.log('en avant un pop');
notes.pop();
notes.forEach
    (
        note => {
            console.log(note);
        }
    );
    nombres.sort((a, b) => a - b); 
