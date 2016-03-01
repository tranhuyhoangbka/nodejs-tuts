function kiem_tra_snt(n)
{
  var flag = true;
  if(n < 2){
    flag = false;
  }else if (n == 2) {
    flag = true;
  }else if (n % 2 == 0) {
    flag = false;
  }else{
    for (var i = 3; i < n - 1; i += 2) {
      if(n % i == 0){
        flag = false;
        break;
      }
    }
  }
  return flag;
}

// main code
var yargs = require("yargs");
var argv = yargs.argv;
if (typeof argv == "undefined") {
  console.log("ban chua nhap n");
}else{
  if (kiem_tra_snt(argv.n)) {
    console.log("La so nguyen to");
  }else{
    console.log("khong la so nguyuen to");
  }
}
