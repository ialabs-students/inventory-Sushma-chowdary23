
interface department {
    productNumber: string;
    productName: string;
    count: string;
}
class Waffle implements department{
    productNumber: string;
    productName: string;
    count: string;
    constructor(productNumber: string, productName: string, count: string) {
        this.productNumber = productNumber; 
        this.productName = productName;
        this.count = count;
    }
    
    brand: string = 'waffle';
}

class juice implements department {
    productNumber: string;
    productName: string;
    count: string;
    constructor(productNumber: string, productName: string, count: string) {
        this.productNumber = productNumber; 
        this.productName = productName;
        this.count = count;
    }
    brand: string = 'juice';
    
}

var waffle1 = new waffle('1', 'vanila','20');

var waffle2 = new waffle('2', 'belgium','21');

var  juice1 = new juice('1','lays','23');
var juice2 = new juice('2','bingo','13');
var juice3 = new juice('3','kurkure','10');

 delete juice3['productNumber'];
 
 console.log("-----------------------");
 var waffle4 = [{brand:"waffle", productNumber:"2",productName:"butterscotch",count:"23"},
 {brand:"waffle", productNumber:"3",productName:"strawberry",count:"21"}];
console.log("Department dataset");

console.log(waffle1,waffle2,juice1,juice2);
console.log("--------------------------------");
console.log("delete");

console.log(juice3);

console.log("-----------------------");
console.log("addional");
console.log(waffle4);
console.log("-----------------------");
console.log("threshold");

// console.log(getThres);
