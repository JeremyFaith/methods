function reverse(str) { 

    return str.split("").reverse().join("");
           
}
// this is for simple strings that do contain characters made of two symbols or surrogate pairs
// reverse("hello") returns "olleh"