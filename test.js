function vowel_count(str) {
    var vowel_list = 'aeiou';
    var vcount = 0;

    for (var x = 0; x < str.length; x++) {
        if (vowel_list.indexOf(str[x]) !== -1) {
            vcount += 1;
        }

    }

    return vcount;
}
console.log(vowel_count("The quick brown fox"));