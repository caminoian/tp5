let num=0;

num = prompt("ingrese un numero");

if(Esdefectivo(num)){
	document.write("Esdefectivo")
}else{
	document.write("no es defectivo")
}

function Esdefectivo(num) {
let numerito =0;
	
for (let i = 1 ; i < num; i++) {

if (num%i == 0) {


	numerito += i;
}


}
console.log(numerito);
console.log(num);

	return numerito<num;

}
