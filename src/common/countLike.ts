export function likeToCount (value: string) {
  let likes = Number(value);
  let likesStr:string;

  if(value){
    if (likes<1000) return `${likes}`;
  else if(likes < 10000) {
    likes = Math.floor(likes/100);
    likesStr = likes + "";
    return `${likesStr.charAt(0)}.${likesStr.charAt(likesStr.length-1)}천`;
  }
  else if(likes <100000) {
    likes = Math.floor(likes/1000);
    likesStr = likes + "";
    return `${likesStr.charAt(0)}.${likesStr.charAt(likesStr.length-1)}만`;
  }
  else {
    likes = Math.floor(likes/10000);
    return `${likes}만`;
  }
  }
  else return '0';
  
}