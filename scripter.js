function insert(number){
    var numeros = document.getElementById('container').innerHTML 
    document.getElementById('container').innerHTML = numeros + number

}

function clean(){
    document.getElementById('container').innerHTML = ""
}

function back(){
   var resultado = document.getElementById('container').innerHTML

   document.getElementById('container').innerHTML = resultado.substring(0, resultado.length -1)
}

function calc(){
    
    var calcular = document.getElementById('container').innerHTML;

    if (calcular)
    {
            document.getElementById('container').innerHTML = eval(calcular)
    }
}