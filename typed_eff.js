/*getting paragraph to add this eff*/
const text = document.getElementsByClassName("typing");

/*custom title which we want to display*/
let custom = ["web developer", "creative mind", "problem solver"];

/*getting size of each title for mathematical timimg calculations*/
let total_font = new Array();
for (let i = 0; i < custom.length; i++) {
  total_font.push(custom[i].length);
}

//setting default paragraph at null
text[0].innerHTML = '';


/*for style blinking cursur creating style*/
const style = document.createElement("style");
style.innerHTML = `
  .cursor {
    font-size:25px;
    font-weight: bolder;
    display: inline-block;
    animation: blink 0.3s step-end infinite;
  }
  @keyframes blink {
    50% { color:transparent; }
  }
`;
document.head.appendChild(style);//appending that at appropriate position in html documents unde head tag



const speed = 200;//speed to appending and deleting a text

let time = 0;//initial time of main interval
let fl = 0;//flag used to reset and control main interval
let i = 0;//used to index of custom[] title array 
let ne = 0;//uses to index of each font of title
let grow = 1, j = 0;//uses to set initial condition for main and child interval
let font;


function typing() {
  let s1 = setInterval(() => {

    i++;
    if (j == 0) {
      j++;
      i = 0;
    }
    if (i >= custom.length) {
      i = 0;
      time = 0;
      fl = 0;
      ne = 0;
      grow = 1;
    }
    if (fl == 0) {
      fl = 1;
      time = total_font[i] * (2 * speed);
      ne = 0;
      clearInterval(s1);
      typing();
    }
    fl = 0;

    font = custom[i].length;
    let s2 = setInterval(() => {
      if (ne <= font && grow == 1) {
        text[0].innerHTML = custom[i].substring(0, ne);
        text[0].innerHTML += '<span class="cursor">|</span>';
        ne++;
        //await wait(2000);
      } else {
        ne--;
        grow = 0;
        text[0].innerHTML = custom[i].substring(0, ne);
        text[0].innerHTML += '<span class="cursor">|</span>';
        //console.log("oops",ne);
        if (ne == 0) {
          grow = 1;
          clearInterval(s2);
        }
      }

    }, speed - 30);

  }, time);
}

typing();