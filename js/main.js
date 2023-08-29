
var menuicon=document.querySelector(".iconom");
var sidebar=document.querySelector(".segundo");
var container=document.querySelector(".cotainer");

menuicon.onclick=function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}




const path= "videos";
(async(ids)=>{ 
        let peticion = await fetch (`${ids}.json`) 
        let response = await peticion.json()
        console.log(response);


        let myVideos = document.querySelector('.listacontenedor');

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
