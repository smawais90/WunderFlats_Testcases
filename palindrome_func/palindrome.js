export var palindrome = (str) => {
    // getting length of the string
    const len = str.length;
    // converting the string to lowercase
    const string = str.toLowerCase()
    // Looping the string to compare the values upto its half 
    for (let i = 0; i < len / 2; i++) {

        if (string[i] !== string[len - 1 - i]) 
        {
            return false;
        }
    }
    return true;
}

