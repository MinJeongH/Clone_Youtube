export function viewToCount (value: string) {
  let views = +value;
  let viewsStr:string;

  if (views<1000) return `조회수 ${views}회`;
  else if(views < 10000) {
    views = Math.floor(views/100);
    viewsStr = views + "";
    return `조회수 ${viewsStr.charAt(0)}.${viewsStr.charAt(viewsStr.length-1)}천회`;
  }
  else if(views <100000) {
    views = Math.floor(views/1000);
    viewsStr = views + "";
    return `조회수 ${viewsStr.charAt(0)}.${viewsStr.charAt(viewsStr.length-1)}만회`;
  }
  else {
    views = Math.floor(views/10000);
    return `조회수 ${views}만회`;
  }
}