const ReverseWord = (x) => {
    y = x.split(" ")
    t =  y.reverse()
    console.log(t)
}
ReverseWord("Bulan bintang matahari")



const Palindrom = (x) => {
    l = x.length
    if (l%2==0){
        s = l/2
        b = s
    } else {
        s = (l-1)/2
        b = s+1
    }
    e = ""
    k = ""
    for (a = b;a<=l-1;a++){
        e += x[a]
    }
    for (c = 0;c<=s-1;c++) {
        k += x[c]
    }
    // j = k.includes(e)
    j = console.log(k.includes(e))
    if (j) {
        console.log("Palindrom")
    } else {console.log("Tidak")}
}
Palindrom("malam")