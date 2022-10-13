var color = ["yellow", "agua", "black", "blue", "azure", "brown", "beige"];
function colorpick(string, array){
     for(let i = 0; i < array.length; i++){
        if(string === array[i]){
            return console.log(array[i], 'найден');
        }
     }
}
console.log(color[0]);
