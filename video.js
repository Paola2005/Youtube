let todo = async() =>{
    const chanel = await fetch("chanel.json");
        let video = await fetch("videos.json");
        let videos = await video.json();
        let canal = await chanel.json();
    
        let nav=document.querySelector(".primero")
        nav.insertAdjacentHTML("beforeend",/*HTML*/`
        <div class="nose primero">
        <button id="menuIcon"><img src="${canal.ima}" class="iconom"></button>
        <img src="${canal.logo}" class="logo">
            </div>
                <!--nav-middle-->
                <div class="nose2 primero">
                        <div class="buscador primero">
                            <input type="text" placeholder="Search">
                            <img src="${canal.logserch}">
                        </div>
                        <img src="${canal.logmic}" class="micro">
                </div>
                <!--nav-right-->
                <div class="nose3 primero">
                ${canal.logos2.map((value) => /*html */`
                    <img src="${value.log2}" ><br>`).join(" ")}
                    <img src="${canal.log1}" class="usuario">
                </div>
    
        `)
        const menuIcon = document.getElementById('menuIcon');
    const lado = document.querySelector('.segundo');
    const container = document.querySelector('.cotainer');
    let ladoVisible = false;
    
    menuIcon.addEventListener('click', function() {
      if (ladoVisible) {
        lado.style.left = "-300px";
        container.classList.remove('with-sidebar');
      } else {
        lado.style.left = "0px";
        container.classList.add('with-sidebar');
      }
      ladoVisible = !ladoVisible;
    });
    
        let lateral=document.querySelector(".segundo")
        lateral.insertAdjacentHTML("beforeend",/*HTML*/`
        ${canal.textoslate1.map((value) => /*html */`
        <div class="links">
        <a ><img  src="${value.imagenes1}"><p>${value.cosa}</p></a>
                </div>`).join("")}
                <hr>
                <div class="suscriptores">
                <h3>Subscribed</h3>
                <div>
                ${canal.textoslate2.map((value) => /*html */`
                <div class="suscriptores">
                <a href=""><img src="${value.imagenes2}" ><P>${value.cosa2}</P></a>
                    </div>`).join("")}
            
                </div>
    
        `)}
        todo()