dineroCofla = prompt("¿Cuanto dineros tienes Cofla?");
dineroPedro = prompt("¿Cuanto dineros tienes Pedro?");
dineroRoberto = prompt("¿Cuanto dineros tienes Roberto?");

dineroCofla=parseInt(dineroCofla);
if (dineroCofla >= 0.6 && dineroCofla < 1){
    alert("Te alcanza para un palito de helado de agua");
    alert("Te sobran"+(dineroCofla - 0.6));
}
else if (dineroCofla >= 1 &&  dineroCofla < 1.6){
    alert("Te alcanza para un palito de helado de crema");
    alert("Te sobran"+(dineroCofla - 2));
}
else if (dineroCofla >= 1.6 &&  dineroCofla < 1.7){
    alert("Bombon de helado marca heladix");
    alert("Te sobran"+(dineroCofla - 1.6));
}
else if (dineroCofla >= 1.7 &&  dineroCofla < 1.8){
    alert("Bombon de helado marca heladovich");
    alert("Te sobran"+(dineroCofla - 1.7));
}
else if (dineroCofla >= 1.8 &&  dineroCofla < 2.9){
    alert("Bombon de helado marca helardo");
    alert("Te sobran"+(dineroCofla - 1.8));
}
else if (dineroCofla >= 2.9){
    alert("Potecitode helado con confetis");
    alert("Pote de 1/4  de KG");
    alert("Te sobran"+(dineroCofla - 2.9));
}
else {
    alert("Lo siento pero no te alcanza para nada.");
}


if (dineroPedro >= 0.6 && dineroPedro < 1){
    alert("Te alcanza para un palito de helado de agua")
}
else if (dineroPedro >= 1 &&  dineroPedro < 1.6){
    alert("Te alcanza para un palito de helado de crema")
}
else if (dineroPedro >= 1.6 &&  dineroPedro < 1.7){
    alert("Bombon de helado marca heladix")
}
else if (dineroPedro >= 1.7 &&  dineroPedro < 1.8){
    alert("Bombon de helado marca heladovich")
}
else if (dineroPedro >= 1.8 &&  dineroPedro < 2.9){
    alert("Bombon de helado marca helardo")
}
else if (dineroPedro >= 2.9){
    alert("Potecitode helado con confetis")
    alert("Pote de 1/4  de KG")
}
else {
    alert("Lo siento pero no te alcanza para nada.")
}


if (dineroRoberto >= 0.6 && dineroRoberto < 1){
    alert("Te alcanza para un palito de helado de agua")
}
else if (dineroRoberto >= 1 &&  dineroRoberto < 1.6){
    alert("Te alcanza para un palito de helado de crema")
}
else if (dineroRoberto >= 1.6 &&  dineroRoberto < 1.7){
    alert("Bombon de helado marca heladix")
}
else if (dineroRoberto >= 1.7 &&  dineroRoberto < 1.8){
    alert("Bombon de helado marca heladovich")
}
else if (dineroRoberto >= 1.8 &&  dineroRoberto < 2.9){
    alert("Bombon de helado marca helardo")
}
else if (dineroRoberto >= 2.9){
    alert("Potecitode helado con confetis")
    alert("Pote de 1/4  de KG")
}
else {
    alert("Lo siento pero no te alcanza para nada.")
}

// Oviamente todo esto sepuede compactar y de mejor manera perp vamos  por partes.