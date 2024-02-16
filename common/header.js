const header =`<div class="nav-left flex-div">
<img src="../images/menu.png" class="menu-icon" />
<img src="../images/logo.png" click="logo" />
</div>
<div class="nav-middle flex-div">
<div class="search-box flex-div">
    <input type="text" placeholder="search Here" />
    <img src="../images/search.png" />
</div>

<img src="../images/voice-search.png" class="mic-icon" />
</div>
<div class="nav-right flex-div">
<img src="../images/upload.png" />
<img src="../images/more.png" />
<img src="../images/notification.png" />
<img src="../images/Jack.png" class="user-icon" />
</div>
`;


document.getElementsByTagName("nav")[0].innerHTML = header;
 




