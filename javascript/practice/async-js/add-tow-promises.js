promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)), 
promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))

var addTwoPromises = async function(promise1, promise2) {
    function sum(x,y){
        return x+y;
    }
    const [val1, val2] = await Promise.all([promise1, promise2]);
    return sum(val1, val2);
};

addTwoPromises(promise1, promise2).then(result => console.log(result));