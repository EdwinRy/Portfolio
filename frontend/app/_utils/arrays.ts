export function rotateArrayRight(arr: any, count: any) {
    // Make a copy of the array
    let rotatedArray = arr.slice();

    // Perform the rotation
    for (let i = 0; i < count; i++) {
      // Remove the last element and add it to the beginning
      rotatedArray.unshift(rotatedArray.pop());
    }

    return rotatedArray;
}

export function rotateArrayLeft(arr: any, count: any) {
    // Make a copy of the array
    let rotatedArray = arr.slice();

    // Perform the rotation
    for (let i = 0; i < count; i++) {
      // Remove the first element and add it to the end
      rotatedArray.push(rotatedArray.shift());
    }

    return rotatedArray;
}
