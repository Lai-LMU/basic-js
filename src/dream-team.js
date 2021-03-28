const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members) {
  let str = '';
  if( members == null){
    return false;
  }
  for(let i=0; i< members.length; i++){
    if(typeof members[i] == "string"){
      if(members[i] != null){
        members[i] =  members[i].trim();
      }
        str += members[i][0].toUpperCase();
    } 
  }
  if(str == null || str.length == 0){
    return false;
  } else{
    return alphabetize(str);
  }

};

function alphabetize(str) {
  return str.split('').sort().join('');
}
