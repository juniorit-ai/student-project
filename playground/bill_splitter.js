function splitBill(totalAmount, numberOfFriends) {
    let share = Math.floor(totalAmount / numberOfFriends);
    let remainder = totalAmount % numberOfFriends;
    return { share: share, remainder: remainder };
}

console.log(splitBill(120, 5));