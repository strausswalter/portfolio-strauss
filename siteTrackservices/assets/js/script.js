
// Monitorar evento scroll da tela + ao chegar em 50px acrecenta classe .changeNavbar ao elemento nav:
    window.addEventListener("scroll", function(){
        // console.log("Ativado o scroll da tela!!!!!")
      if (document.documentElement.scrollTop > 50) {
        document.querySelector('nav').classList.add('changeNavbar');
      } else {
        document.querySelector('nav').classList.remove('changeNavbar');
      }
    });





