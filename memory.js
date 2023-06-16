document.querySelector(".control-botonns span").onclick = function(){
    let timer = document.querySelector(".timer span");
    console.log(timer);
    let yourName = prompt("Whats Your Name?");
    if(yourName == null || yourName == ""){
        document.querySelector(".name span").innerHTML = "UnKnown"
    } else {
    document.querySelector(".name span").innerHTML = yourName;
    }
    document.querySelector(".control-botonns").remove();
    
    function timerr(){
        timer.innerHTML = parseInt(timer.innerHTML)-1;
        if( timer.innerHTML == 0){
        clearInterval(rr);
        document.querySelector("#hidenn").style.display = "block";
        setInterval(()=>{
            document.querySelector("#hidenn span").innerHTML+=".";
        },1000)
        setTimeout(()=>{location.reload()}, 4000)   
    }
    }
    let rr = setInterval(timerr,1000);   
};

let duration = 1000;
let blocksContainer = document.querySelector(".memory-game-bloks");
let blocks = Array.from(document.querySelectorAll(".memory-game-bloks .game-blok"));
let orderRange = [...Array(blocks.length).keys()];

shuffle(orderRange);
blocks.forEach((block, index) => {
  block.style.order = orderRange[index];
      block.addEventListener("click",function(){
      flipBlock(block);
    });

});
function flipBlock(selectedBlock){
    selectedBlock.classList.add("is-flipped");
    let allflippedBlocks = blocks.filter(Block => Block.classList.contains("is-flipped"));
    if(allflippedBlocks.length === 2){
       stopClicking();
       checkMatchedBlooks(allflippedBlocks[0] ,allflippedBlocks[1]);
    }
}

function stopClicking(){
    blocksContainer.classList.add("no-clicking");
    setTimeout(() => {
    blocksContainer.classList.remove("no-clicking");
    },duration);
}

function checkMatchedBlooks(firsBlook, secondBlook){
    let triesElement = document.querySelector(".tries span");
  if(firsBlook.dataset.technology === secondBlook.dataset.technology){
    firsBlook.classList.remove("is-flipped");
    secondBlook.classList.remove("is-flipped");

    firsBlook.classList.add("has-match");
    secondBlook.classList.add("has-match");
  }else{
    triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;
    setTimeout(()=>{
      firsBlook.classList.remove("is-flipped");
      secondBlook.classList.remove("is-flipped");
    }, duration);
  }
}
function shuffle(array){
    let current = array.length;
    let temp;
    let random;
    while(current>0){
        random = Math.floor(Math.random()*current);
        current--;
        temp = array[current];
        array[current] = array[random];
        array[random] = temp;
    }
    return array;
}
