
var animation;
var pass="";
var burger="";
// 記錄故事的流程：GIF → GIF 或 Lottie → Lottie / GIF
const storyFlow = {
  index: { type: "gifToGif", next: "./ani/gif/op1.gif", nextClass: "op1" },
  op1: { type: "gifToGif", next: "./ani/gif/op2.gif", nextClass: "op2" },
  op2: { type: "gifToLottie", next: "./ani/lotties/Q0.json", nextClass: "Q0" },

  q0_a: {type: "lottieToLottie",next: "./ani/lotties/Q1.json",nextClass: "Q1"},
  q0_b: {type: "lottieToLottie",next: "./ani/lotties/Q1.json",nextClass: "Q1"},

 q1_a: {type: "lottieToLottie",next: "./ani/lotties/Q2.json",nextClass: "Q2"},
  q1_b: {type: "lottieToLottie",next: "./ani/lotties/Q1_5.json",nextClass: "Q1_5"},

  q1_5_a: {type: "lottieToLottie",next: "./ani/lotties/Q3-3.json",nextClass: "Q3-3"},
  q1_5_b: {type: "lottieToLottie",next: "./ani/lotties/Q3-3.json",nextClass: "Q3-3"},


  q2_a: {type: "lottieToLottie",next: "./ani/lotties/Q3-1.json",nextClass: "Q3-1",},
  q2_b: {type: "lottieToLottie",next: "./ani/lotties/Q3-2.json",nextClass: "Q3-2",},

  q3_a: {type: "lottieToGif",next: "./ani/gif/p5Dance.gif",nextClass: "p5Dance",pass:"Q4-1set1"},
  q3_b: {type: "lottieToGif",next: "./ani/gif/p5Dance.gif",nextClass: "p5Dance",pass:"Q4-1set2"},
  q3_2_a: {type: "lottieToGif",next: "./ani/gif/p5Dance.gif",nextClass: "p5Dance",pass:"Q4-1set3"},
  q3_2_b: {type: "lottieToGif",next: "./ani/gif/p5Dance.gif",nextClass: "p5Dance",pass:"Q4-1set4"},
  q3_3_a: {type: "lottieToGif",next: "./ani/gif/p5Dance.gif",nextClass: "p5Dance",pass:"Q4-1set5"},
  q3_3_b: {type: "lottieToGif",next: "./ani/gif/p5Dance.gif",nextClass: "p5Dance",pass:"Q4-1set6"},


  p5Dance:{type: "gifToLottie"},
  q4_1set1_a: {type: "lottieToLottie",next: "./ani/lotties/Q4-2set1.json",nextClass: "Q4-2set1"},
  q4_1set1_b: {type: "lottieToLottie",next: "./ani/lotties/Q4-2set1.json",nextClass: "Q4-2set1"},
  q4_1set1_c: {type: "lottieToLottie",next: "./ani/lotties/Q4-2set1.json",nextClass: "Q4-2set1"},
  q4_1set2_a: {type: "lottieToLottie",next: "./ani/lotties/Q4-2set2.json",nextClass: "Q4-2set2"},
  q4_1set2_b: {type: "lottieToLottie",next: "./ani/lotties/Q4-2set2.json",nextClass: "Q4-2set2"},
  q4_1set2_b_word: {type: "lottieToLottie",next: "./ani/lotties/Q4-2set2.json",nextClass: "Q4-2set2"},
  q4_1set2_b2: {type: "lottieToLottie",next: "./ani/lotties/Q4-2set2.json",nextClass: "Q4-2set2"},
  q4_1set3_a: {type: "lottieToLottie",next: "./ani/lotties/Q4-2set3.json",nextClass: "Q4-2set3"},
  q4_1set3_b: {type: "lottieToLottie",next: "./ani/lotties/Q4-2set3.json",nextClass: "Q4-2set3"},
  q4_1set4_a: {type: "lottieToLottie",next: "./ani/lotties/Q4-2set4.json",nextClass: "Q4-2set4"},
  q4_1set4_b: {type: "lottieToLottie",next: "./ani/lotties/Q4-2set4.json",nextClass: "Q4-2set4"},
  q4_1set5_a: {type: "lottieToLottie",next: "./ani/lotties/Q4-2set5.json",nextClass: "Q4-2set5"},
  q4_1set5_b: {type: "lottieToLottie",next: "./ani/lotties/Q4-2set5.json",nextClass: "Q4-2set5"},
  q4_1set6_a: {type: "lottieToLottie",next: "./ani/lotties/Q4-2set6.json",nextClass: "Q4-2set6"},
  q4_1set6_b: {type: "lottieToLottie",next: "./ani/lotties/Q4-2set6.json",nextClass: "Q4-2set6"},


  q4_2_2_a: {type: "lottieToGif",next: "./ani/gif/end1.gif",nextClass: "end1",burger:"french"},
  q4_2_2_b: {type: "lottieToLottie",next: "./ani/lotties/Q5-1.json",nextClass: "Q5-1"},
  q4_2_3_a: {type: "lottieToLottie",next: "./ani/lotties/Q5-2.json",nextClass: "Q5-2"},
  q4_2_3_b: {type: "lottieToLottie",next: "./ani/lotties/Q5-3.json",nextClass: "Q5-3"},
  q4_2_4_a: {type: "lottieToGif",next: "./ani/gif/end1.gif",nextClass: "end1",burger:"full"},
  q4_2_4_b: {type: "lottieToGif",next: "./ani/gif/end1.gif",nextClass: "end1",burger:"fantasy"},
  q4_2_5_a: {type: "lottieToGif",next: "./ani/gif/end1.gif",nextClass: "end1",burger:"levelup"},
  q4_2_5_b: {type: "lottieToLottie",next: "./ani/lotties/Q5-4.json",nextClass: "Q5-4"},
  q4_2_6_a: {type: "lottieToGif",next: "./ani/gif/end1.gif",nextClass: "end1",burger:"hero"},
  q4_2_6_b: {type: "lottieToLottie",next: "./ani/lotties/Q5-5.json",nextClass: "Q5-5"},


  q5set1_a: {type: "lottieToGif",next: "./ani/gif/end2.gif",nextClass: "end2",burger:"friend"},
  q5set1_b: {type: "lottieToGif",next: "./ani/gif/end2.gif",nextClass: "end2",burger:"huge"},
  q5set2_a: {type: "lottieToGif",next: "./ani/gif/end2.gif",nextClass: "end2",burger:"sausage"},
  q5set2_b: {type: "lottieToGif",next: "./ani/gif/end2.gif",nextClass: "end2",burger:"oshi"},
  q5set3_a: {type: "lottieToGif",next: "./ani/gif/end2.gif",nextClass: "end2",burger:"dog"},
  q5set3_b: {type: "lottieToGif",next: "./ani/gif/end2.gif",nextClass: "end2",burger:"flower"},
  q5set4_a: {type: "lottieToGif",next: "./ani/gif/end2.gif",nextClass: "end2",burger:"soft"},
  q5set4_b: {type: "lottieToGif",next: "./ani/gif/end2.gif",nextClass: "end2",burger:"universe"},
  q5set5_a: {type: "lottieToGif",next: "./ani/gif/end2.gif",nextClass: "end2",burger:"vege"},
  q5set5_b: {type: "lottieToLottie",next: "./ani/lotties/Q6.json",nextClass: "Q6"},

  q6_a: {type: "lottieToGif",next: "./ani/gif/end3.gif",nextClass: "end3",burger:"ham"},
  q6_b: {type: "lottieToGif",next: "./ani/gif/end3.gif",nextClass: "end3",burger:"me"},

  q4_2_a: {type: "lottieToGif",next: "./ani/gif/end1.gif",nextClass: "end1",burger:"pink"},
  q4_2_b: {type: "lottieToGif",next: "./ani/gif/end1.gif",nextClass: "end1",burger:"spicy"},
  q4_2_c: {type: "lottieToGif",next: "./ani/gif/end1.gif",nextClass: "end1",burger:"charm"},
  end1: { type: "gifToLottie", next: "./ani/lotties/loading.json", nextClass: "loading" },
  end2: { type: "gifToLottie", next: "./ani/lotties/loading.json", nextClass: "loading" },
  end3: { type: "gifToLottie", next: "./ani/lotties/loading.json", nextClass: "loading" },
};
$(document).ready(function () {
  // var $indexAudio = $("#indexAudio")[0];
  var $bgmAudio = $("#bgmAudio")[0];
  var $loadingAudio = $("#loadingAudio")[0];

  // 【首頁】播放 `indexAudio`
  // $indexAudio.play().catch(() => {
  //   console.log("瀏覽器阻擋自動播放，等待用戶互動");
  // });
//  監聽 GIF 點擊事件
$(document).on("click", "#gifBlock", function () {
  var currentClass = $(this).attr("class"); // 取得 GIF 當前 class

  if (storyFlow[currentClass]) {
    var nextStep = storyFlow[currentClass];

 // **當進入一般 BGM 場景，播放 `bgm.mp3`**
 if (nextStep.type === "gifToGif" || nextStep.type === "gifToLottie") {
  switchToBGM();
}

if (nextStep.type === "gifToLottie" && nextStep.nextClass === "loading") {
  switchToLoading();
}


    if (nextStep.pass) {
      console.log(`記錄 pass: ${nextStep.pass}`);
      pass = nextStep.pass;
    }

    if (nextStep.type === "gifToGif") {
      gifToNext(nextStep.next, nextStep.nextClass);
    } else if (nextStep.type === "gifToLottie") {
      gifToLottie(nextStep.next, nextStep.nextClass);
    }
  }
});
 //  切換至 BGM（停止 index 音樂）
 function switchToBGM() {
  console.log(" 切換到 BGM");
  // $indexAudio.pause();
  // $indexAudio.currentTime = 0;
  $loadingAudio.pause();
  $loadingAudio.currentTime = 0;

  if ($bgmAudio.paused) {
    $bgmAudio.play().catch(() => {
      console.log("瀏覽器阻擋 BGM 播放，等待用戶互動");
    });
  }
}

//  切換至 Loading（停止所有音樂）
function switchToLoading() {
  console.log(" 切換到 Loading 音樂");
  // $indexAudio.pause();
  // $indexAudio.currentTime = 0;
  $bgmAudio.pause();
  $bgmAudio.currentTime = 0;

  if ($loadingAudio.paused) {
    $loadingAudio.play().catch(() => {
      console.log("瀏覽器阻擋 Loading 音樂播放，等待用戶互動");
    });
  }
}
});

// GIF → GIF
function gifToNext(nextGif, nextClass) {
  var $img = $("#gifBlock");
  $img.fadeOut(300, "easeOutQuad", function () {
    $img
      .attr("src", nextGif)
      .removeClass()
      .addClass(nextClass)
      .fadeIn(300, "easeOutQuad");
  });
}

//  GIF → Lottie //若到loading時直接跑最後幾張
function gifToLottie(nextLottie, nextClass) {
  var $img = $("#gifBlock");
  var $lotties = $("#anim");
if(nextClass==="loading")
{
  console.log("切換到 loading 頁面");
      // 先銷毀舊動畫

      if (animation) {
        animation.destroy();
      }

    animation = bodymovin.loadAnimation({
      container: document.getElementById("anim"),
      renderer: "svg",
      loop: false,
      autoplay: true,
      path: "./ani/lotties/loading.json",
    });
    $img.fadeOut(300, "easeOutQuad", function () {
      $img.hide();
      $lotties.show().fadeIn(300, "easeOutQuad");
      $lotties.removeClass().addClass("loading");
    });
    $(document).on("click", "#videoBlock", function () {
      console.log("影片被點擊，回首頁");
      window.location.href = "index.html"; //  設定首頁連結
    });
    //Loading => Box
    // 當動畫播放完畢，切換到 Box.gif
    animation.addEventListener("complete", function () {
      if ($("#anim").hasClass("loading")) {
        var $lotties = $("#anim");
        var $img = $("#gifBlock");
  
        // 先淡出 Lottie，然後顯示 Box.gif
        $lotties.fadeOut(300, "easeOutQuad", function () {
            // ** 先暫時隱藏 GIF，確保舊 GIF 不會瞬間出現**
  $img.hide().removeClass().addClass("box");

  // **確保新 GIF 加載完畢後再顯示**
  $img.attr("src", "./ani/gif/box.gif").on("load", function () {
    $(this).fadeIn(300, "easeOutQuad"); // 淡入新 GIF
  });
          
        });
      }
    });

  //Box => PinkA
  $(document).on("click", "#gifBlock.box", function () {
    var $img = $(this);
    var $lotties = $("#anim");
    $lotties.hide();
    //替換為 <video>
    var $video = $("<video>", {
      id: "videoBlock",
      src: "./ani/gif/"+burger+".mp4",
      width: $img.width(), // 繼承原本圖片的寬度
      autoplay: true,
      playsinline: true,
      muted: false, // 如果要靜音播放可設為 true
    }).addClass(burger).attr('disablePictureInPicture', 'true').css({pointerEvents: "none"});
    // 移除圖片，加入影片
    $img.replaceWith($video);
    setTimeout(function(){
      $video.css({pointerEvents: "auto"});
      $(document).on("click", "#videoBlock", function () {
        console.log("回首頁");
        window.location.href = "index.html"; //  設定首頁連結
      });
    },6000)
  
    burger="";
  });
}
else{


  if (pass) {    
    nextLottie = "./ani/lotties/" + pass + ".json"; // 這裡動態設定 Lottie 路徑
    nextClass = pass;
  }
  console.log(`載入 Lottie: ${nextLottie}`);

  $img.fadeOut(300, "easeOutQuad", function () {
    $img.hide();
    // **先銷毀舊動畫**
    if (animation) {
      animation.destroy();
    }
    animation = bodymovin.loadAnimation({
      container: document.getElementById("anim"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: nextLottie,
    });
    initializeLottieClickEvents();
    $lotties
      .show()
      .removeClass() // 移除舊 class
      .addClass(nextClass) // 新 class
      .fadeIn(300, "easeOutQuad");
      pass="";
  });

}
}

// 監聽 Lottie 載入事件，並綁定點擊事件
function initializeLottieClickEvents() {
  if (!animation) return; // 確保 animation 存在

  animation.addEventListener("DOMLoaded", function () {
    console.log("Lottie 動畫已載入，綁定選項點擊事件");

    $("#anim svg image").each(function () {
      let imgHref = $(this).attr("href") || $(this).attr("xlink:href");
      let imgName = imgHref.split("/").pop().split(".")[0]; // 取得圖片名稱 (去除路徑與副檔名)
   
      if (storyFlow[imgName]) {
        var nextStep = storyFlow[imgName];
       
    
        // 先移除舊的點擊事件，避免多次綁定
        $(this).off("click").css("cursor", "pointer");

        // 綁定新的點擊事件
        $(this).on("click", function () {
          console.log(`點擊了 ${imgName}`);
    //  記錄選擇的 `pass` 值
    if (storyFlow[imgName].pass) {
      console.log(`記錄 pass: ${storyFlow[imgName].pass}`);
      pass = storyFlow[imgName].pass;
    }
    if (storyFlow[imgName].burger) {
      console.log(`記錄 burger: ${storyFlow[imgName].burger}`);
      burger = storyFlow[imgName].burger;
    }
          if (nextStep.type === "lottieToLottie") {
            lottieToNext(nextStep.next, nextStep.nextClass);
          } else if (nextStep.type === "lottieToGif") {
            lottieToGif(nextStep.next, nextStep.nextClass);
          }
        });
      }
    });
  });
}

//  Lottie → Lottie
function lottieToNext(nextLottie, nextClass) {
  var $lotties = $("#anim");
  $lotties.fadeOut(300, "easeOutQuad", function () {
       //  **先銷毀舊動畫**
       if (animation) {
        animation.destroy();
      }
    animation = bodymovin.loadAnimation({
      container: document.getElementById("anim"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: nextLottie,
    });
    initializeLottieClickEvents();
    $lotties
      .show()
      .removeClass() // 移除舊 class
      .addClass(nextClass) // 新 class
      .fadeIn(300, "easeOutQuad");
  });
}
//  Lottie → GIF
function lottieToGif(nextGif, nextClass) {
  var $lotties = $("#anim");
  var $img = $("#gifBlock");
  $lotties.fadeOut(300, "easeOutQuad", function () {
  
  // ** 先暫時隱藏 GIF，確保舊 GIF 不會瞬間出現**
  $img.hide().removeClass().addClass(nextClass);

  // **確保新 GIF 加載完畢後再顯示**
  $img.attr("src", nextGif).on("load", function () {
    $(this).fadeIn(300, "easeOutQuad"); // 淡入新 GIF
  });
});
};