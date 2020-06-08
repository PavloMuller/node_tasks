const path = require('path');
const fs = require('fs');


// fs.mkdir(path.join(__dirname, 'first'),err => {
//         console.log(err);
//     });

// fs.writeFile(path.join(__dirname, 'first', 'dima_first.txt'),
//     'name: dima, \n age: 22'
//
//     ,err => {
//         console.log(err);
// });
//
// fs.writeFile(path.join(__dirname, 'first', 'vova_first.txt'),
//     'name: vova, \n age: 32'
//
//     ,err => {
//         console.log(err);
//     });

// fs.mkdir(path.join(__dirname, 'second'), err => {
//     console.log(err);
// });

// fs.writeFile(path.join(__dirname, 'second', 'ira_second.txt'),
//     'name: ira, \n  age: 44',
//     err => {
//         console.log(err);
//     });
//
// fs.writeFile(path.join(__dirname, 'second', 'ivan_second.txt'),
//     'name: ivan, \n age: 13',
//     err => {
//         console.log(err);
//     });


// function removeFiles(dirFrom, dirTo) {
//     fs.readdir(path.join( dirFrom),  (err, files) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 for (const file of files) {
//                     fs.rename(path.join( dirFrom, file), path.join(dirTo, file), (err) => {
//                         console.log(err);
//                     })
//                 }
//             }
//         }
//     )
// }
//
// const first = path.join(__dirname, "first");
// const second = path.join(__dirname, 'second');
//
// function mainF(dir1, dir2) {
//     removeFiles(dir1, dir2);
//     removeFiles(dir2, dir1);
// }
//
// mainF(first, second);

function changer(dir1, dir2) {
    fs.readdir(path.join(dir1), null, (err, files) => {
            for (const file of files) {
                fs.rename(path.join(dir1, file), path.join(dir2, file), (err) => {
                    console.log(err);
                })
             }
        }
    );

    fs.readdir(path.join(dir2), null, (err, files) => {
        console.log(err);
        for (const file of files) {
            fs.rename(path.join(dir2, file), path.join(dir1, file), (err) => {
                console.log(err);
            })
        }
    })

}

const first = path.join(__dirname, 'first');
const second= path.join(__dirname, 'second');

changer(first, second);
