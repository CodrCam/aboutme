//test field 

let nums = [2,3,4,5,6];

console.log(nums);
console.table(nums);

let myMixArr = [1,true,'hello', [1,3,5]];
console.table(myMixArr);

let mynum = nums[1];
console.log(mynum);

let foods = ['pizza','ice cream','fondue','yums','burger'];

for(let i = 0; i < foods.length; i++)
{
  console.log(`on this iteration I ate: ${foods[i]}`);
}

let NuNum = [1,3019,38,283,749,20,[3,4,2]]

for(let i = 0; i < NuNum.length; i++){
  console.log(`on this iteration: ${NuNum[i]}`);
}

let students = ['Alex', 'Ryan L','slava','Sarah', 'Nicholas','Cameron'];

for(let i = 0; i < students. length; i++){
if(students[i] === 'Sarah' )
  console. log(('Sarah this is your special greeting!!!! :)");
} else {
    console. log(`Hey ${students[i]}, this is your plain old`)
}

while(condition){
    code run
}