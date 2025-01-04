const arr = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
]

function sortLibrary(arr) {
    return arr.sort((a, b) => a.title.localeCompare(b.title))
    //return arr
}

console.log(sortLibrary(arr))
//console.log(typeof (arr[0].title))
//console.log(arr[0].title.toLowerCase())
