document.addEventListener("DOMContentLoaded", function(event){
  $(".menu").on("click", function(event){
    if ($(".dropdown")[0].style.display == "none"){
      $(".dropdown")[0].style.display = "block";
    }
    else{
      $(".dropdown")[0].style.display = "none";
    }
  });

});
