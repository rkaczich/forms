function fakult(value){
  if(value > 1){
    return (value * fakult(value-1))
  }
  else{
    return 1;
  }
}
