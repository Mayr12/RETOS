function calcular(){
    var cantidad_euro = document.getElementById("Cantidad_euros").value
    var num_cuotas=document.getElementById("n_cuotas").value
    var tipo_interes = document.getElementById("tipo_interes").value
    var resultado_final=document.getElementById("resultado")
    
    var resultado = (cantidad_euro/num_cuotas)+((tipo_interes/100)*cantidad_euro) 
    
    resultado_final.innerHTML=resultado
}