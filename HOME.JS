// var menuIcon=document.querySelector(".menu-icon")
// var sidebar=document.querySelector(".sidebar")
// var container=document.querySelector(".container")
// menuIcon.onclick=function(){
//     sidebar.classList.toggle("small-sidebar")
//     container.classList.toggle("large-container")
// }

const API_KEY = 'AIzaSyBb6IGMRDG3bLPKS7gmWfse21iIVRp8PMk';
const videoListApi = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+API_KEY;

const getVideoList = async()=>{
    const fetchData = await fetch(videoListApi);
    const videoData = await fetchData.json();
    console.log(videoData);
    createVideoList(videoData.items);
   
}
getVideoList();






const createVideoList = (items)=>{
    items.forEach((obj)=>{
       const element = `<div class="vid-list">
        <a href="play-video.html?v=${obj.id}"><img src="${obj.snippet.thumbnails.medium.url}" class="thumbnail" /></a>
        <div class="flex-div">
            <img src="images/Jack.png" />
            <div class="vid-info">
                <a href="play-video.html?v=${obj.id}">${obj.snippet.localized.title}</a>
                <p>${obj.snippet.channelTitle}</p>
                <p>${obj.statistics.viewCount} &bull; in 1 days</p>
            </div>
        </div>
    </div>`


    document.getElementsByClassName("list-container")[0].innerHTML +=element;
    });
}

// const playVideoInfo=`<div class="tags">
//     <a href="">  </a>
// </div>
// <h3>EMINEM</h3>
// <div class="play-video-info">
//     <p>1 Lakh views &bull; 1 days ago</p>
//     <div>
//         <a href=""><img src="images/like.png">1M</a>
//         <a href=""><img src="images/dislike.png">2</a>
//         <a href=""><img src="images/share.png">Share</a>
//         <a href=""><img src="images/save.png">Save</a>
//     </div>
// </div>
// <hr>


// <div class="publisher">
//     <img src="images/Jack.png">
//     <div>
//         <p>LM10</p>
//         <span>7M Subscribers</span>
//     </div>
//     <button type="button">
//         Subscribe
//     </button>
// </div>



// <div class="vid-description">
//     <p>FootBall is World</p>
//     <p>Subscribe to get more videos</p>
//     <hr>
//     <h4>1000 Comments</h4>


//     <div class="add-comment">
//         <img src="images/Jack.png">
//         <input type="text" placeholder="write Comments">
//     </div>

//     <div class="old-comment">
//         <img src="images/Jack.png">
//         <div>
//             <h3>Jack <span>2 days ago</span></h3>
//             <p>These Video is awesome</p>
//             <div class="comment-action">
//                 <img src="images/like.png">
//                 <span>20K</span>
//                 <img src="images/dislike.png">
//                 <span>100</span>
//                 <span>Reply</span>
//                 <a href="">All Replies</a>
//             </div>
//         </div>
//     </div>



//     <div class="old-comment">
//         <img src="images/Jack.png">
//         <div>
//             <h3>Jack <span>2 days ago</span></h3>
//             <p>These Video is awesome</p>
//             <div class="comment-action">
//                 <img src="images/like.png">
//                 <span>20K</span>
//                 <img src="images/dislike.png">
//                 <span>100</span>
//                 <span>Reply</span>
//                 <a href="">All Replies</a>
//             </div>
//         </div>
//     </div>




// </div>
// </div>`




