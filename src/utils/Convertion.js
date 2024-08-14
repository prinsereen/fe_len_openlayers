export const convertDMStoDD = (degrees, minutes, seconds, direction) => {
    let dd = parseFloat(degrees) + parseFloat(minutes) / 60 + parseFloat(seconds) / 3600;
    if (direction === 'S' || direction === 'W') {
        dd = dd * -1;
    }
    return dd;
};

export const convertDDtoDMS = (dd) => {
    const degrees = Math.floor(Math.abs(dd)) * Math.sign(dd);
    const minutes = Math.floor((Math.abs(dd) - Math.floor(Math.abs(dd))) * 60);
    const seconds = ((Math.abs(dd) - Math.floor(Math.abs(dd)) - minutes / 60) * 3600).toFixed(2);
    return { degrees, minutes, seconds };
};

