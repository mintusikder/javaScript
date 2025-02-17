function masBazar(totalMoney, alu,moris,lobon){
        const bazar = alu + moris + lobon 
        const sum = totalMoney - bazar 
        return sum
}

const totalMoney = 500;
const alu = 30;
const moris = 60;
const lobon = 35;

const restMoney = masBazar(totalMoney, alu,moris,lobon)
console.log(restMoney)