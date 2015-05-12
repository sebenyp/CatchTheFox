/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


window.onload = function () {
    
    document.getElementById("back0").addEventListener("click", function(){
       console.log("valami");
       window.location.href = "index.html";
    });
    
    document.getElementById("exit").addEventListener("click", function(){
       window.close() ;
    });

};