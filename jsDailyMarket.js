
function tion(){
   var a = document.getElementById("p1").value.toLowerCase(); // Convertir en minuscules pour uniformiser les entrées
   if(a ==='food' || a === 'nourriture' || a === 'aliment' || a === 'manger' || a === 'pizza'|| a === 'alimentation'){
       window.location.hash = "h1"; // Redirige vers la div #h1
   }
   else if(a ==='habit' || a === 'vetement' || a === 'mode' || a === 'fashion' || a === 'chemise' || a === 'jean' || a === 'cloth') {
       window.location.hash = "h2"; // Redirige vers la div #h2
   } 
   else if(a === 'telephone' || a === 'outils' || a === 'fournitures' || a === 'utile' || a === 'machine' || a === 'divers'){
       window.location.hash = "h3"; // Redirige vers la div #h3
   } 
   else {
       alert("Oups! Pas disponible en magasin.");
       alert("Cependant, vous pouvez aller visiter nos rayons. Plein de produits sont à votre disposition.");
       alert("Vous y trouverez sûrement un article pour vous.");
   }
}