const inventors = [
    {first: 'Albert', last: 'Einstein', year: 1879, passed:1955},
    {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
    {first: 'galileo', last: 'galillei', year: 1564, passed: 1642},
    {first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
    {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
    {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543},
    {first: 'max', last: 'Plank', year: 1858, passed: 1947},

]

const people = ['Beck, Glenn', 'Becker, Carl', 'Becket, Samuel', 'Beddoes, Mic','Beecher, Henry',
'beethoven, ledwig', 'Begin, Menachem', 'Belloc, Hellaire', 'Bellow, Saul', 'Benchley, Robert',
'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 
'Benson, Leana', 'Bent, Silas', 'Bentsen. Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano',
'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle',
'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden , Joseph', 'Bierce, Ambrose',
'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Tony',
'Blake, William'];

//array.prototype.filter()
//1. filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter(inventor => (inventor.year>=1500 && inventor.year<1600));
console.table(fifteen);

//array.prototype.map()
//2. Give us an array of the inventory first and last names
const fullname = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.table(fullname);

//array.prototype.sort()
//3.sort the inventors by birthdate, oldest the youngest 
// const ordered = inventors.sort(function(a,b){
//     if(a.year>b.year){
//         return true;
//     }else{
//         return false;
//     }
// })
const ordered = inventors.sort((a,b) => a.year > b.year ? 1 : -1)
console.table(ordered);

//array.prototype.reduce()
//4.how many years did all the inventors live?
const totalYears = inventors.reduce((total, inventor) => {
return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalYears);

//5. sort inventors by years lived
const oldest = inventors.sort(function(a,b){
    const lastGuy=a.passed - b.year;
    const nextGuy =a.passed - b.year;
    
    return lastGuy > nextGuy ? -1 : 1;
});
console.table(oldest);

//6. Create a List of boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


//7. sort Exercise 
//Sort the people alphabetically by last name
 const alpha = people.sort((lastOne, nextOne) => {
    const [aLast, aFirst] = lastOne.split(', ');
    const [bLast, bFirst] = nextOne.split(', ');
    return aLast > bLast ? 1 : -1;
});
console.log(alpha);

//8. Reduce Exercise
// Sum up the instances of each of these 
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 
'walk', 'car', 'van', 'car', 'truck'];

const transportation = data.reduce(function(obj, item){
    if(!obj[item]){
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});
console.table(transportation);