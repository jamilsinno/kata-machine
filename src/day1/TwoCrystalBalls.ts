export default function two_crystal_balls(breaks: boolean[]): number {

    let jumpDist = Math.floor(Math.sqrt(breaks.length));

    let i = jumpDist;
    for (; i < breaks.length; i += jumpDist) {
        if (breaks[i]){
            break;
        }
    }

    i -= jumpDist;

    for (let j = 0; j < jumpDist && i < breaks.length; ++j, ++i) {
        if (breaks[i]){
            return i;
        }
    }
    return -1;
}