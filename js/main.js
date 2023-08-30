
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


document.querySelector('#chartSearch').addEventListener("change", (e) => {
    if (e.target.value == '') { 
        document.querySelector(".buscador").style.borderRadius = "15px"
        document.querySelector(".recomendacion").style.display = "none"
    }
    else { 
        document.querySelector(".buscador").style.borderRadius = "15px 15px 0 0" .height="300px"
        buscar(e.target.value);
    }
});

 const options = {
 	method: 'GET',
 	headers: {
 		'X-RapidAPI-Key': '169994c251mshf415aae10d6eecap13af92jsn929e0f2fcf8e',
 		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
 	}
 };



const buscar = async (p1) => {
    options.method = 'GET';
    const peticion = await fetch(`https://youtube138.p.rapidapi.com/channel/search/?id=UC8fkwsjcI_MhralEX1g4OBw&q=${p1}&hl=en&gl=US`, options);
    const json = await peticion.json();

    let h = 0, cont = 0;
    let array = json.contents.map((val, id) => {
        if (val.playlist) return undefined;
        else {
            cont++
        }
        if (cont <= 10) h = 30 * cont;
        return `<a href="../playvideo.html" videoDate="${val.video.publishedTimeText}" class='searchElement' videoid='${val.video.videoId}'><li><img src="../images/search.png" alt="" class='lupaSvg'> ${val.video.title}</li></a>`
    })
    document.querySelector(".recomendacion").style.display = "inline"
    document.querySelector("#activado").style.height = `${h}px`
    document.querySelector("#buscar").innerHTML = null 
    document.querySelector("#buscar").insertAdjacentHTML("beforeend", array.join(""))

    const searchElement = document.querySelectorAll('.searchElement');

  
    searchElement.forEach(element => {
        element.addEventListener('click', () => {
            const videoId = element.getAttribute('videoid');
            let videoDate = element.getAttribute('videoDate');
            localStorage.setItem('ID', videoId)
            localStorage.setItem('Date', videoDate)
        });
    })
}



