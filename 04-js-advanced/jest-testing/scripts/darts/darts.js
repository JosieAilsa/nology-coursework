export const findScore= (x,y) => {
    const distanceToDart = Math.sqrt((x * x) + (y * y ));
    if((!(typeof(x)=== "number")) || (!(typeof(y)=== "number")))return null;

    //If distance is far away giev poor score 
    if (distanceToDart > 10) return 0;
    if (distanceToDart > 5) return 1; 
    if (distanceToDart > 1) return 5; 
    //If none of the above has broken out, return out and give 10 as hit bullseye. 
    return 10; 
}