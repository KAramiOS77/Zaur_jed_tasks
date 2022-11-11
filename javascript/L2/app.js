/*1#### JavaScript-də ədədin kvadrat kökünü tapmaq üçün proqram yazın */

let eded = Number(prompt("Kvadrat kökünü tapmaq istədiyiniz ədədi daxil edin:"))
let kvadratKok= eded**(1/2)
alert(kvadratKok)
console.log(kvadratKok)


/* 2### Selsi dəyərini Fahrenheit-ə çevirin. Düstur: fahrenheit = celsius * 1.8 + 32*/

let unit = prompt("Ölçü vahidini seçin 'C və ya F' :")
let degree = Number(prompt("Dərəcəni daxil edin :"))
if(unit=== "C") 
{console.log(degree*1.8+32+"F")
    alert(degree*1.8+32 +"F")
}
else if (unit==="F")
{ console.log(degree/1.8-17.78+"C") 
alert(degree/1.8-17.78+"C")}
else {alert("Zəhmət olmazsa, ölçü vahidini düzgün qeyd edin!")}

/* 3### Istifadəçinin daxil etdiyi nömrənin müsbət, mənfi və ya sıfır olduğunu təyin edin və göstərin(console.log)(if...else istifadə edin) */

let eded1 = Number (prompt("işarəsini və ya 0 olub-olmadığnı təyin etmək istədiyiniz ədədi daxil edin :"))

if( eded1>0)
{console.log("Bu ədəd müsbətdir")
alert("Bu ədəd müsbətdir")}
else if(eded1<0) 
{console.log("Bu ədəd mənfidir")
alert("Bu ədəd mənfidir")}
else if(eded1===0) 
{console.log("Bu ədəd sıfırdır")
alert("Bu ədəd sıfırdır")}
else {console.log("Bu ədəd deyil!")
alert("Bu ədəd deyil!")}

/* 4### Rəqəmin tək və ya cüt olduğunu yoxlamaq üçün JavaScript proqramı yazın.(if...else istifadə edin)*/

let eded2 = Number(prompt("Tək və ya cüt olduğunu yoxlamaq istədiyiniz ədədi daxil edin:"))

if(eded2%2===0)
{
    console.log("Bu ədəd cütdür")
    alert("Bu ədəd cütdür")
}
else 
{   console.log("Bu ədəd təkdir")
    alert("Bu ədəd təkdir")
}

/* 5### JavaScript-də üç ədəd arasında ən böyüyü tapın.(Həm if else həm də Math.max() )*/

let muqaise1= Number(prompt("Müqaisə etmək istədyiniz ədədlərdən ilkini daxil edin:"))
let muqaise2= Number(prompt("Müqaisə etmək istədyiniz ədədlərdən ikincisini daxil edin:"))
let muqaise3= Number(prompt("Müqaisə etmək istədyiniz ədədlərdən üçüncüsünü daxil edin:"))

if (muqaise1>muqaise2 & muqaise1>muqaise3)
{console.log(muqaise1)}
else if(muqaise2>muqaise1 & muqaise2>muqaise3) 
{console.log(muqaise2)}
else if (muqaise3>muqaise1 & muqaise3>muqaise2) 
{console.log(muqaise3)}

// Math.max ile
let mathMuqaise1= Number(prompt("Müqaisə etmək istədyiniz ədədlərdən ilkini daxil edin:"))
let mathMuqaise2= Number(prompt("Müqaisə etmək istədyiniz ədədlərdən ikincisini daxil edin:"))
let mathMuqaise3= Number(prompt("Müqaisə etmək istədyiniz ədədlərdən üçüncüsünü daxil edin:"))

console.log(Math.max( mathMuqaise1, mathMuqaise2, mathMuqaise3))


/* 6### JavaScript-də sadə kalkulyator hazırlayın.(if else və switch case istifadə edin) */

let ed1= Number (prompt("Ədədi daxil edin:"))
let ed2= Number (prompt("Ədədi daxil edin:"))
let operator=prompt("Operatoru daxil edin:")

if ( operator==="*")
{
    console.log(ed1*ed2)
}
else if( operator==="/")
{
    console.log(ed1/ed2)
}
else if ( operator==="+")
{
    console.log(ed1+ed2)
}
else if ( operator==="-")
{
    console.log(ed1-ed2)
}
else {console.log("Operatoru duzgun daxil edin!")}

//switch case ile
let ede1= Number (prompt("Ədədi daxil edin:"))
let ede2= Number (prompt("Ədədi daxil edin:"))
let oprtr=prompt("Operatoru daxil edin:")

switch (oprtr) {
    case "*":
        console.log(ede1*ede2)
        break
    case "/":
        console.log(ede1/ede2)
        break
    case "+":
        console.log(ede1+ede2)
        break        
    case "-":
        console.log(ede1-ede2)
        break
        default : console.log("Bu operator desteklenmir")
}
