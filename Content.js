const generateSTYLES = () => {
  return `<style>@import url(https://fonts.googleapis.com/css?family=opensans:500);
  body {
    background: #33cc99;
    color: #fff;
    font-family: "Open Sans", sans-serif;
    max-height: 700px;
    overflow: hidden;
  }
  .c {
    text-align: center;
    display: block;
    position: relative;
    width: 80%;
    margin: 100px auto;
  }
  ._404 {
    font-size: 220px;
    position: relative;
    display: inline-block;
    z-index: 2;
    height: 250px;
    letter-spacing: 15px;
  }
  ._1 {
    text-align: center;
    display: block;
    position: relative;
    letter-spacing: 12px;
    font-size: 4em;
    line-height: 80%;
  }
  ._2 {
    text-align: center;
    display: block;
    position: relative;
    font-size: 20px;
  }
  .text {
    font-size: 70px;
    text-align: center;
    position: relative;
    display: inline-block;
    margin: 19px 0px 0px 0px;
    /* top: 256.301px; */
    z-index: 3;
    width: 100%;
    line-height: 1.2em;
    display: inline-block;
  }
  
 
  .right {
    float: right;
    width: 60%;
  }
  
  hr {
    padding: 0;
    border: none;
    border-top: 5px solid #fff;
    color: #fff;
    text-align: center;
    margin: 0px auto;
    width: 420px;
    height: 10px;
    z-index: -10;
  }
  
  hr:after {
    display: inline-block;
    position: relative;
    top: -0.75em;
    font-size: 2em;
    padding: 0 0.2em;
    background: #33cc99;
  }
  
  .cloud {
    width: 350px;
    height: 120px;
  
    background: #fff;
    background: linear-gradient(top, #fff 100%);
    background: -webkit-linear-gradient(top, #fff 100%);
    background: -moz-linear-gradient(top, #fff 100%);
    background: -ms-linear-gradient(top, #fff 100%);
    background: -o-linear-gradient(top, #fff 100%);
  
    border-radius: 100px;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
  
    position: absolute;
    margin: 120px auto 20px;
    z-index: -1;
    transition: ease 1s;
  }
  
  .cloud:after,
  .cloud:before {
    content: "";
    position: absolute;
    background: #fff;
    z-index: -1;
  }
  
  .cloud:after {
    width: 100px;
    height: 100px;
    top: -50px;
    left: 50px;
  
    border-radius: 100px;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
  }
  
  .cloud:before {
    width: 180px;
    height: 180px;
    top: -90px;
    right: 50px;
  
    border-radius: 200px;
    -webkit-border-radius: 200px;
    -moz-border-radius: 200px;
  }
  
  .x1 {
    top: -50px;
    left: 100px;
    -webkit-transform: scale(0.3);
    -moz-transform: scale(0.3);
    transform: scale(0.3);
    opacity: 0.9;
    -webkit-animation: moveclouds 15s linear infinite;
    -moz-animation: moveclouds 15s linear infinite;
    -o-animation: moveclouds 15s linear infinite;
  }
  
  .x1_5 {
    top: -80px;
    left: 250px;
    -webkit-transform: scale(0.3);
    -moz-transform: scale(0.3);
    transform: scale(0.3);
    -webkit-animation: moveclouds 17s linear infinite;
    -moz-animation: moveclouds 17s linear infinite;
    -o-animation: moveclouds 17s linear infinite;
  }
  
  .x2 {
    left: 250px;
    top: 30px;
    -webkit-transform: scale(0.6);
    -moz-transform: scale(0.6);
    transform: scale(0.6);
    opacity: 0.6;
    -webkit-animation: moveclouds 25s linear infinite;
    -moz-animation: moveclouds 25s linear infinite;
    -o-animation: moveclouds 25s linear infinite;
  }
  
  .x3 {
    left: 250px;
    bottom: -70px;
  
    -webkit-transform: scale(0.6);
    -moz-transform: scale(0.6);
    transform: scale(0.6);
    opacity: 0.8;
  
    -webkit-animation: moveclouds 25s linear infinite;
    -moz-animation: moveclouds 25s linear infinite;
    -o-animation: moveclouds 25s linear infinite;
  }
  
  .x4 {
    left: 470px;
    botttom: 20px;
  
    -webkit-transform: scale(0.75);
    -moz-transform: scale(0.75);
    transform: scale(0.75);
    opacity: 0.75;
  
    -webkit-animation: moveclouds 18s linear infinite;
    -moz-animation: moveclouds 18s linear infinite;
    -o-animation: moveclouds 18s linear infinite;
  }
  
  .x5 {
    left: 200px;
    top: 300px;
  
    -webkit-transform: scale(0.5);
    -moz-transform: scale(0.5);
    transform: scale(0.5);
    opacity: 0.8;
  
    -webkit-animation: moveclouds 20s linear infinite;
    -moz-animation: moveclouds 20s linear infinite;
    -o-animation: moveclouds 20s linear infinite;
  }
  
  @-webkit-keyframes moveclouds {
    0% {
      margin-left: 1000px;
    }
    100% {
      margin-left: -1000px;
    }
  }
  @-moz-keyframes moveclouds {
    0% {
      margin-left: 1000px;
    }
    100% {
      margin-left: -1000px;
    }
  }
  @-o-keyframes moveclouds {
    0% {
      margin-left: 1000px;
    }
    100% {
      margin-left: -1000px;
    }
  }

  content {
    width: 270px; 
    height: 90px;
    font-family: 'Lato', sans-serif;
    text-align: center;
  }
  .content .title {
    width: 100%;
    height: 50px;
    border-bottom: 1px solid rgba(0,0,0,0.06);
    display: table;
  }
  .content .title p {
    font-size: 18px;
    vertical-align: middle;
    display: table-cell;
  }
  .content .header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex: 1 1 0;
    width: 100%;
    height: 40px;
  }
  .content .header img {
    height: 100%;
    width: 40px;
    margin-right: 5px;
    position: relative;
    top: 2px;
    left: -5px;
  }
  .content .header .name {
    display: table-cell;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    color: white;
    vertical-align: middle;
  }
  .content .header .leetcode {
    color: #ECA23E;
  }
  .content .detail {
    display: inline-flex;
    flex: 1 1 0;
    align-items: baseline;
    margin-top: 10px;
    width: 100%;
    height: 40px;
  }
  
  .content .detail .diff {
    width: 50%;
    height: 100%;
    display: table-cell;
    text-align: center;
    font-size: 12px;
    vertical-align: middle;
  }
  .content .detail .btn {
    height: 100%;
    width: 50%;
  }
  .content .detail .btn #doit {
    width: 100%
    height: 50%;
    border: 2px solid #6b778d; 
    border-radius: 12px;
    text-align: center;
    vertical-align: middle;
    font-size: 12px; 
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
  }
  .content .detail #doit:hover {
    background-color: #6b778d; 
    color: white;
  }

  ._3 {
    font-weight: bold;
    font-size: 24px;
  }
  
  #countdown {
    font-weight: bold;
    font-size: 24px;
    color: #1171ba;
  }
  
  .quote {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin-top: -70px;
  }
   </style>`;
};

const generateHTML = (pageName) => {
  return `
  <html>
  <head>
    <title>${pageName}</title>
  </head>
  <body>
   <div id="clouds">
      <div class="cloud x1"></div>
      <div class="cloud x1_5"></div>
      <div class="cloud x2"></div>
      <div class="cloud x3"></div>
      <div class="cloud x4"></div>
      <div class="cloud x5"></div>
  </div>
  <div class='c'>
      <div class='_404'>404</div>
      <hr>
      <div class='_1'>GET BACK TO WORK</div>
      <div class='_2'>STUDYING > ${pageName}</div>
      <div class='_3'>This website is blocked for 20 minute</div>
      <div class='_4' id='countdown'>01:00</div>
  </div>
  <div class='quote'>
  <p>"Leetcode every day keeps unemployment away."</p>
  <p>What are you waiting for? Click on extension icon and start solving!</p>
</div>

</div>
</body>
</html>`;
};

let blocked = false;
let timeLeft = 20 * 60;

function disableExtension() {
  chrome.management.getSelf((self) => {
    chrome.management.setEnabled(self.id, false);
  });
}

function updateCountdown() {
  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, "0");
  const seconds = (timeLeft % 60).toString().padStart(2, "0");
  document.getElementById("countdown").innerHTML = `${minutes}:${seconds}`;

  if (timeLeft === 0) {
    disableExtension();
    clearInterval(timerId);
  }

  timeLeft--;
}

let timerId;

switch (window.location.hostname) {
  case "www.youtube.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("YOUTUBE");
    blocked = true;
    timerId = setInterval(updateCountdown, 1000);
    break;
  case "www.facebook.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("FACEBOOK");
    blocked = true;
    timerId = setInterval(updateCountdown, 1000);
    break;
  case "www.netflix.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("NETFLIX");
    blocked = true;
    timerId = setInterval(updateCountdown, 1000);
    break;
  case "www.roblox.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("ROBLOX");
    blocked = true;
    timerId = setInterval(updateCountdown, 1000);
    break;
  case "discord.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("DISCORD");
    blocked = true;
    timerId = setInterval(updateCountdown, 1000);
    break;
  case "www.spotify.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("SPOTIFY");
    blocked = true;
    timerId = setInterval(updateCountdown, 1000);
    break;
}

if (blocked) {
  setTimeout(() => {
    blocked = false;
    clearInterval(timerId);
    location.reload();
  }, timeLeft * 1000);
}


//popup button