const beforeTwentyWord = {
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
    '0': '',
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'thirteen',
    '14': 'fourteen',
    '15': 'fifteen',
    '16': 'sixteen',
    '17': 'seventeen',
    '18': 'eighteen',
    '19': 'nineteen'
}

const afterTenWord = {
    '20': 'twenty',
    '30':'thirty',
    '40': 'forty',
    '50': 'fifty',
    '60': 'sixty',
    '70': 'seventy',
    '80': 'eighty',
    '90': 'ninety'
}
module.exports = function toReadable (number) {
    if(!number) return 'zero';
    let rank=1;
    let stringNumber = '';
    let currNumber = number;
    let addRank;

    do{
        let twoRank = currNumber % 100;
        if( (rank===1 || (rank-3)%3 === 1) && twoRank < 20 &&  twoRank > 9){
            stringNumber = beforeTwentyWord[twoRank] +' '+ stringNumber;
            rank = rank+2;
            currNumber = Math.trunc(currNumber / 100);
        }else{
            const digit = currNumber % 10;
            currNumber = Math.trunc(currNumber / 10);
            if(digit>0){
                if((rank-3)%3 === 0){
                    addRank =' hundred ';
                }else if((rank-3)%3 === 1){
                    addRank =' thousand ';
                }else if((rank-6)%3 === 1){
                    addRank =' million ';
                }else{
                    addRank = ' ';
                }
               if((rank-2)%3 === 0){
                    stringNumber = afterTenWord[digit*10] +' '+ stringNumber;
                }else{
                    stringNumber = beforeTwentyWord[digit]+ addRank + stringNumber;
                }
            }
            number = currNumber;
            rank++;
        }
    }while(currNumber>0);

    return stringNumber.trim();
  
}
