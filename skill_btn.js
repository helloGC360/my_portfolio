
const btn = document.querySelectorAll(".skill .cont .btn-box .btn");
const box = document.querySelectorAll(".skill .cont .slidebox .c");



for (let i=0;i<btn.length;i++) {
  btn[i].addEventListener("click", function (){
    anim(i);
  });
}

function anim(x) {
  if(x==0){
    shrink(x);
  }else if(x==1){
    shrink(x);
  }else if(x==2){
    shrink(x);
  }
}


function shrink(x){
if(x==0){
  box[0].style=cbox;
  box[1].style=antibox;
  box[2].style=antibox;
}else if(x==1){
  box[0].style=antibox;
  box[1].style=cbox;
  box[2].style=antibox;
}else if(x==2){
  box[0].style =antibox;
  box[1].style = antibox;
  box[2].style=cbox;
}
}

let antibox="min-width:0px;width:0px;height:0px;min-height:0px;border:none;padding:0px 0px;overflow:hidden";
let cbox= "width:90%;height:auto;min-height:400px;border: 2px solid var(--clr); ";

shrink(0);