

export const toCapitalize = (str: string) => {
    str = str.toLowerCase();
    const pieces = str.split(' ');
    const returner: string[] = [];
    for (const piece of pieces) {
        if (piece.length < 2) {
            returner.push(piece);
            continue;
        }
        returner.push(piece[0].toUpperCase() + piece.substr(1));
    }
    return returner.join(' ');
};