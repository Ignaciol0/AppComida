macarrones_tomate = {'name':'macarrones_tomate','plato_unico': false,'type':'pasta','weight':1}
arroz_tomate = {'name':'arroz_tomate','plato_unico': false,'type':'pasta','weight':1}
arroz_albondigas = {'name':'arroz_albondigas','plato_unico': true,'type':'pasta','weight':1}
macarrones_chorizo = {'name':'macarrones_chorizo','plato_unico': true,'type':'pasta','weight':1}
pure_calabaza = {'name':'pure_calabaza','plato_unico': false,'type':'pasta','weight':1}
pure_calabazin = {'name':'pure_calabazin','plato_unico': false,'type':'pasta','weight':1}
pure_puerro = {'name':'pure_puerro','plato_unico': false,'type':'pasta','weight':1}
spagetti = {'name':'spagetti','plato_unico': false,'type':'pasta','weight':1}
arroz_curry = {'name':'arroz_curry','plato_unico': true,'type':'pasta','weight':2}
ensaladilla_rusa = {'name':'ensaladilla_rusa','plato_unico': true,'type':'pasta','weight':1}
judias_verdes = {'name':'judias_verdes','plato_unico': false,'type':'pasta','weight':1}
coliflor = {'name':'coliflor','plato_unico': false,'type':'pasta','weight':1}
huevos_rellenos = {'name':'huevos_rellenos','plato_unico': false,'type':'pasta','weight':1}
garbanzos = {'name':'garbanzos','plato_unico': false,'type':'pasta','weight':1}
cocido = {'name':'cocido','plato_unico': true,'type':'pasta','weight':1}
ensalada_pasta = {'name':'ensalada_pasta','plato_unico': false,'type':'pasta','weight':1}
patatas_costilla = {'name':"patatas_costilla",'plato_unico': true,'type':'pasta','weight':1}
lentejas = {'name':'lentejas','plato_unico': false,'type':'pasta','weight':1}
alubias = {'name':'alubias','plato_unico': false,'type':'pasta','weight':1}
primeros_platos = [macarrones_tomate,arroz_tomate,arroz_albondigas,macarrones_chorizo,pure_calabaza,pure_calabazin,pure_puerro,spagetti, arroz_curry,ensaladilla_rusa,ensalada_pasta,judias_verdes,coliflor,cocido,huevos_rellenos,garbanzos,patatas_costilla,lentejas,alubias]
atun = {'name':'atun','plato_unico': false,'type':'pescado','weight':1}
salmon = {'name':'salmon','plato_unico': false,'type':'pescado','weight':1}
merluza = {'name':'merluza','plato_unico': false,'type':'pescado','weight':1}
panga = {'name':'panga','plato_unico': false,'type':'pescado','weight':1}
filetes_pollo = {'name':'filetes_pollo','plato_unico': false,'type':'carne','weight':1}
cinta_lomo = {'name':'cinta_lomo','plato_unico': false,'type':'carne','weight':1}
filete_ternera = {'name':'filete_ternera','plato_unico': false,'type':'carne','weight':1}
carne_picada = {'name':'carne_picada','plato_unico': false,'type':'carne','weight':1}
pechuga_pavo = {'name':'pechuga_pavo','plato_unico': false,'type':'carne','weight':1}
chuleta_sajonia = {'name':"chuleta_sajonia",'plato_unico': false,'type':'carne','weight':1}
tortilla_patatas = {'name':'tortilla_patatas','plato_unico': false,'type':'carne','weight':1}
solomillo_tomate = {'name':'solomillo_tomate','plato_unico': false,'type':'carne','weight':1}
croquetas = {'name':'croquetas','plato_unico': false,'type':'carne','weight':1}
empanadillas = {'name':'empanadillas','plato_unico': false,'type':'carne','weight':1}
pechuga_tomate = {'name':'pechuga_tomate','plato_unico': false,'type':'carne','weight':1}
fingers_pollo = {'name':'fingers_pollo','plato_unico': false,'type':'carne','weight':1}
carne_gisada = {'name':'carne_gisada','plato_unico': false,'type':'carne','weight':1}
segundos_platos = [atun,salmon,merluza,panga,fingers_pollo,fingers_pollo,filete_ternera,cinta_lomo,carne_gisada,carne_picada,pechuga_tomate,pechuga_tomate,chuleta_sajonia,tortilla_patatas,solomillo_tomate,croquetas,empanadillas]

//Adds all the weights of the dishes
function countweight(primeros_platos) {
    let weight = 0;
    let num = 0;
    for(let x in primeros_platos)
        weight += primeros_platos[num]['weight']
        num += 1
    return weight
}

// Gets a random number from [min,max) to get the weight random numbers
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

//Define the function that chooses the food looping for every day of the week.
function elegir_platos(primeros_platos){
    primeros_platos = [macarrones_tomate,arroz_tomate,arroz_albondigas,macarrones_chorizo,pure_calabaza,pure_calabazin,pure_puerro,spagetti, arroz_curry,ensaladilla_rusa,ensalada_pasta,judias_verdes,coliflor,cocido,huevos_rellenos,garbanzos,patatas_costilla,lentejas,alubias]
    segundos_platos = [atun,salmon,merluza,panga,fingers_pollo,fingers_pollo,filete_ternera,cinta_lomo,carne_gisada,carne_picada,pechuga_tomate,pechuga_tomate,chuleta_sajonia,tortilla_patatas,solomillo_tomate,croquetas,empanadillas]
    let platos = [primeros_platos,segundos_platos]
    let text_list = []
    let text = ''
    let day = []
    for (let x=0;x<7;x++){
        for(i in platos){
            let weight = countweight(platos[i])
            rannum = getRandomArbitrary(0,weight)
            let  num = 0;
            for(e in platos[i]){
                let e = platos[i][num]['weight']
                if (e<rannum){
                    rannum -= e
                    num += 1
                } else {
                    break;
                }
            }
            if (platos[i][num]['plato_unico'] === true){
                day.push(platos[i][num]['name'])
                platos[i].splice(num, 1)
                break;
            }else{
                if( i == 0){
                    text += platos[i][num]['name']
                    day.push(platos[i][num]['name'])
                    platos[i].splice(num, 1)
                }else{
                    text += platos[i][num]['name']
                    day.push(platos[i][num]['name'])
                    platos[i].splice(num, 1)
                }
            }
        }
        text_list.push(day)
        day = []
    }    
    return text_list
}
//console.log(elegir_platos(),elegir_platos())//,elegir_platos(platos),elegir_platos(platos))
//Function to make the text appear on the screen and console 
document.querySelector('#GenerateButton').onclick = function(){
    text_list = elegir_platos()
    day1 = document.querySelectorAll('.primer-plato-div')
    day1comida = document.querySelectorAll(".primeros-comida-div")
    day2 = document.querySelectorAll(".segundo-plato-div")
    day2comida = document.querySelectorAll(".segundos-comida-div")
    vector = document.querySelectorAll(".vector-icon-second")
    //vector.splice(1,0,document.querySelector(".vector-icon15"))
    console.log(vector)
    for(i in text_list){
        if(text_list[i].length === 1){
            day1[i].innerText = "Plato Único"
            day1comida[i].innerText = text_list[i][0]
            day2[i].innerText = ' '
            day2comida[i].innerText = ' '
            //vector.style.display = 'none'
        }else{
            day1comida[i].innerText = text_list[i][0]
            day2comida[i].innerText = text_list[i][1]
        }
    }
}