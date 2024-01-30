var input = prompt('Enter a number')
var len = input.length
var sum = 0
for (var i = 1; i <= len; i++) {
    sum = sum + input[i - 1] ** len;
}
if (sum == input) {
    document.write('Is a Armstrong number')
}
else {
    document.write('try again')
}
