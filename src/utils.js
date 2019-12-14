const dateObj = {
    1: 'st',
    2: 'nd',
    3: 'rd',
    21:'st',
    22:'nd',
    23:'rd'
}

const monthObj = {
    0:'Jan',
    1:'Feb',
    2:'Mar',
    3:'Apr',
    4:'May',
    5:'Jun',
    6:'Jul',
    7:'Aug',
    8:'Sep',
    9:'Oct',
    10:'Nov',
    11:'Dec'
}
export const getDate = () => {
    const date = new Date();
    const dateVal = date.getDate();
    const month = date.getMonth();
    const dateStr = dateObj[dateVal] ? dateVal + dateObj[dateVal] :  dateVal + 'th';
    return dateStr + ' '+ monthObj[month];
}

export const disabled = (time) => {
     const date = new Date();
     time = time.split(',');
     time = time.map(el => el.split('-'));
     time = time.map(el => el.map(el1 => {
         el1 = el1.split(':')
         return new Date(date.getFullYear(),date.getMonth(),date.getDate(),parseInt(el1[0]),parseInt(el1[1])).getTime()
     }))

     const dateNum = date.getTime();
     if((dateNum >= time[0][0] && dateNum <= time[0][1]) || (dateNum >= time[1][0] && dateNum <= time[1][1])){
         return false;
     }
     return true;
}