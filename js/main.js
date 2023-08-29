let todo = async() =>{
const chanel = await fetch("chanel.json");
    let video = await fetch("videos.json");
    let videos = await video.json();
    let canal = await chanel.json();
    const creativeCodeURL = 'UC8fkwsjcI_MhralEX1g4OBw';
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
                <div class="videos" idvideo="21">
                    <a href="playvideo.html"><img src="${value.video.thumbnails[3].url}" class="imagenprin"></a>
                        <div class="primero">
                            <div class=vid>
                                <img src="${canal.avatar[1].url}">
                            </div>

                            <div class="infovideo">
                                <a href="playvideo.html">${value.video.title}</a>
                                <p>${canal.title}</p>
                                <p>${value.video.stats.views} views ·${value.video.publishedTimeText}</p>
                            </div>
                        </div>
                    </div>
                    `).join("")}
        </div>
    `);
    
}
todo()

const path= "videos";
(async(ids)=>{ 
        let peticion = await fetch (`${ids}.json`) 
        let response = await peticion.json()
        console.log(response);


        let myVideos = document.querySelector('#contenedorvids');

        myVideos.insertAdjacentHTML("beforeend", `
            ${response.contents.map((value)=>`
                <div class="videos" videoid='${value.video.videoId}'>
                    <a href="playvideo.html"><img src="${value.video.thumbnails[3].url}" class="thumbnail"></a>
                    <div class="primero">
                        <div class="vid">
                            <a href="playvideo.html">${value.video.title}</a>
                            <p>CreativeCode</p>
                            <p>${value.video.stats.views} Views &bull; ${value.video.publishedTimeText}</p>
                        </div>
                    </div>
                </div>
                `).join("")}
        `)


         
        const videoElements = document.querySelectorAll('.videos');

        videoElements.forEach(video => {
            video.addEventListener('click', () => {
            let videoId = video.getAttribute('videoid');

           
                localStorage.setItem('ID', videoId)
                });
        });
})(path);
