function reverse(string){
    console.log(string.substr(1))
    if(string === "") return ""
    else return reverse(string.substr(1)) + string.charAt(0)

}
console.log(reverse("Hello"))
console.log(reverse("Malayalam"))