
function pattern(n){
  var str = "";
  // rule 
  if (n<1) {
    return str;
  } else {
  for (var j=n; j>0; j--) {
    for (var i=n; i>(n-j); i--) {
      str = str.concat(i.toString());
    }
    str = str.concat("\n");
  }
  str = str.slice(0, -1);
  return str;
  }
}
