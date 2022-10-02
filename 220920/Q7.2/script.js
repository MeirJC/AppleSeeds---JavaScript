// you have this string:
// const string = "The more you know, the more you
// know that you don't know";
// We want to get the index of the last occurrence of the word
// “you”. It should give you 42.
// You can solve this problem without the method indexOf. But
// if you can manage to do it also with indexOf you will get a
// cookie.

const string = "The more you know, the more you know that you don't know";
function lastOfYou(str){
  for (let i = str.length - 1; i >=0 ; i--) {
    if (-1 !== str.indexOf("you", i)){
      return i;
    }
  }
}
console.log(lastOfYou(string));