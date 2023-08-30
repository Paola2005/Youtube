
var menuicon=document.querySelector(".iconom");
var sidebar=document.querySelector(".segundo");
var container=document.querySelector(".cotainer");

menuicon.onclick=function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}


        // let viderec=document.querySelector(".derecha")
        // viderec.insertAdjacentHTML("beforeend",/*HTML*/`
        // ${videos.contents.map((value)=> /*html */`
        // <div class="videolista" videoid='${value.video.videoId}'>
        //     <a href="playvideo.html" class="videopeque"><img src="${value.video.thumbnails[3].url}"></a>
        //         <div class="contextvideo">
        //             <a href="./playvideo.html">${value.video.title}</a>
        //             <p>CreativeCode</p>
        //             <p>${value.video.stats.views} Views &bull; ${value.video.publishedTimeText}</p>
        //         </div>
        // </div>

        // `).join("")}
        // `)}
        // const videoElements = document.querySelectorAll('.videolista');
        // videoElements.forEach(video => {
        //     video.addEventListener('click', () => {
        //         let videoId = video.getAttribute('videoid');
        //         localStorage.setItem('ID', videoId)
        //     });






function changingVideo(ids){
    let iframe = document.querySelector('.play-video');
    iframe.insertAdjacentHTML('afterbegin', /*HTML*/`
    <iframe width="100%" height="615" src="https://www.youtube.com/embed/${ids}?si=czx-JXcyfxDxe0lv&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `)
}



let storageElement = localStorage.getItem('ID')
console.log(storageElement);
changingVideo(storageElement)

  const url = `https://youtube138.p.rapidapi.com/video/details/?id=${storageElement}&hl=en&gl=US`;
  const options = {
  	method: 'GET',
  	headers: {
  		'X-RapidAPI-Key': '8d4ea1262emsh0a75b7b794875fep194623jsne505c027c4e1',
  		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  	}
  };

let info = async() =>{
let peticion = await fetch (url,options)
let response = await peticion.json()
console.log(response);

let infoVid = document.querySelector('#top-info')

if (response.description == null){
    infoVid.insertAdjacentHTML('afterend',
`
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

    <div class="vid-description" id="vid-description">
    <p>The author doesn't put a description</p>
    <hr>
    </div>
`)
}
else{
    infoVid.insertAdjacentHTML('afterend',
    `
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
}
}
info(url,options);

  const urln = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UC8fkwsjcI_MhralEX1g4OBw&hl=en&gl=US';
  const optionse = {
  	method: 'GET',
  	headers: {
  		'X-RapidAPI-Key': '8d4ea1262emsh0a75b7b794875fep194623jsne505c027c4e1',
  		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  	}
  };



         (async(parameters,videos) => {
            let petic = await fetch (parameters,videos)
            let repon = await petic.json()
            console.log(repon);

            let rightSide = document.querySelector('.derecha')
            rightSide.insertAdjacentHTML('beforeend', `
                ${repon.contents.map((value)=>`
                <div class="videolista" videoid='${value.video.videoId}'>
                        <a href="./playvideo.html" class="videopeque"><img src="${value.video.thumbnails[3].url}"></a>
                        <div class="contextvideo">
                            <a href="./playvideo.html">${value.video.title}</a>
                            <p>CreativeCode</p>
                            <p>${value.video.stats.views} Views &bull; ${value.video.publishedTimeText}</p>
                        </div>
                </div>
                `).join("")}
            `)

            const videoElements = document.querySelectorAll('.videolista');
     
            videoElements.forEach(video => {
                video.addEventListener('click', () => {
                    let videoId = video.getAttribute('videoid');
                   
                    localStorage.setItem('ID', videoId)
                    });
            });
        })(urln,optionse)



