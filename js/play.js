

let todo = async() =>{
    const chanel = await fetch("chanel.json");
        let video = await fetch("videos.json");
        let videos = await video.json();
        let canal = await chanel.json();
    
        let nav=document.querySelector(".primero")
        nav.insertAdjacentHTML("beforeend",/*HTML*/`
        <div class="nose primero">
        <a href="../index.html"><img src="${canal.logo}" class="logo"></a>
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

        let viderec=document.querySelector(".derecha")
        viderec.insertAdjacentHTML("beforeend",/*HTML*/`
        ${videos.contents.map((value)=> /*html */`
        <div class="videolista" videoid='${value.video.videoId}'>
            <a href="playvideo.html" class="videopeque"><img src="${value.video.thumbnails[3].url}"></a>
                <div class="contextvideo">
                    <a href="./playvideo.html">${value.video.title}</a>
                    <p>CreativeCode</p>
                    <p>${value.video.stats.views} Views &bull; ${value.video.publishedTimeText}</p>
                </div>
        </div>
    
        `).join("")}
        `)}
        const videoElements = document.querySelectorAll('.videolista');
        videoElements.forEach(video => {
            video.addEventListener('click', () => {
                let videoId = video.getAttribute('videoid');
                localStorage.setItem('ID', videoId)
            });




            
            
    });
todo()

function changingVideo(ids){
    let iframe = document.querySelector('.play-video');
    iframe.insertAdjacentHTML('afterbegin', /*HTML*/`
    <iframe width="100%" height="615" src="https://www.youtube.com/embed/${ids}?si=czx-JXcyfxDxe0lv&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `)
}
    
    let storageElement = localStorage.getItem('ID')
    console.log(storageElement);
    changingVideo(storageElement)
    
    
 
    let context = async() =>{
        const peticion = await fetch("video1.json");
            let response = await peticion.json();

console.log(response);

let context = document.querySelector('#top-info')

context.insertAdjacentHTML('afterend', /*HTML*/`
    <h3>${response.title}</h3>

    <div class="informacionvideo">
        <p>${response.stats.views} Views &bull; Publish Date: ${response.publishedDate}</p>
        <div>
            <a href=""><img src="./images/like.png">${response.stats.likes}</a>
            <a href=""><img src="./images/dislike.png"></a>
            <a href=""><img src="./images/share.png">Share</a>
            <a href=""><img src="./images/save.png">Save</a>
        </div>
    </div>
    <hr>
    <div class="publico">
        <img src="${response.author.avatar[2].url}">
        <div>
            <p>${response.author.title}</p>
            <span>${response.author.stats.subscribersText}</span>
        </div>
        <button type="button">Subscribe</button>
    </div>
    
    <div class="descripvideos" id="descripvideos">
        <p>${response.description}</p>
        <hr>
    </div>
`)
};context();