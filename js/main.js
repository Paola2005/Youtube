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
                <img src="${value.log2}" ><br>`)}
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

    `)
    let banner = document.querySelector(".cotainer")
    console.log(videos.contents[0].video.movingThumbnails[0].url);
        banner.insertAdjacentHTML("beforeend", /*HTML*/`
        <div class="banner">
            <img src="${canal.banner.desktop[3].url}" class="bannerlar">
        </div>
        <div class="listacontenedor">
            ${videos.contents.map((value) => 
                /*HTML*/`
                <div class="videos">
                    <img href="" src="${value.video.thumbnails[3].url}" class="imagenprin">
                        <div class="primero">
                            <div class=vid>
                                <img src="${canal.avatar[1].url}">
                            </div>

                            <div class="infovideo">
                                <a href="">${value.video.title}</a>
                                <p>${value.video.stats.views} views ·${value.video.publishedTimeText}</p>
                            </div>
                        </div>
                    </div>
                    `).join("")}
        </div>
    `);
    
}
todo()
