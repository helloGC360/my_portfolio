const nav_line = document.getElementsByClassName("l");
const nav = document.getElementById("nav");
const nav_box = document.getElementById("nav_box");
const nav_a = document.querySelectorAll(".nav_box a");


let flag = 1;
nav.addEventListener("click", () => {
  if (flag == 1) {
    nav_line[0].style = "transform:rotate(-40deg);margin:-3px 2px;";
    nav_line[1].style.display = "none";
    nav_line[2].style = "transform:rotate(40deg);margin:-3px 2px;";
    nav_box.style = "left: 00%";
    flag = 0;

  } else {
    nav_line[0].style = "transform:rotate(0deg);margin:3px 0px;";
    nav_line[1].style.display = "block";
    nav_line[2].style = "transform:rotate(0deg);margin:3px 0px;";
    nav_box.style = "left: 100%;";
    flag = 1;


  }
});


for (let i = 0; i < nav_a.length; i++) {
  nav_a[i].addEventListener("click", () => {
    nav_line[0].style = "transform:rotate(0deg);margin:3px 0px;";
    nav_line[1].style.display = "block";
    nav_line[2].style = "transform:rotate(0deg);margin:3px 0px;";
    nav_box.style = "left: 100%;";
    flag = 1;
  }
  )
}




const hireme = document.getElementById("hireme");
const contactme = document.getElementById("contactme");
const contactus = document.getElementById("contactus");
const hform = document.getElementById("hform");
const goBack = document.getElementById("goBack");


hireme.addEventListener("click", () => {
  document.querySelectorAll(".form-field").forEach(el => {
    el.style.zIndex = 2;
    el.style.opacity = 1;
  });
  document.querySelectorAll(".ab").forEach(el => {
    el.style.zIndex = 0;
    el.style.opacity = 0;
  });
});

contactme.addEventListener("click", () => {
  document.querySelectorAll(".form-field").forEach(el => {
    el.style.zIndex = 2;
    el.style.opacity = 1;
  });
  document.querySelectorAll(".ab").forEach(el => {
    el.style.zIndex = 0;
    el.style.opacity = 0;
  });
});
contactus.addEventListener("click", () => {
  document.querySelectorAll(".form-field").forEach(el => {
    el.style.zIndex = 2;
    el.style.opacity = 1;
  });
  document.querySelectorAll(".ab").forEach(el => {
    el.style.zIndex = 0;
    el.style.opacity = 0;
  });
});


goBack.addEventListener("click", () => {
  document.querySelectorAll(".form-field").forEach(el => {
    el.style.zIndex = 0;
    el.style.opacity = 0;
  });

  document.querySelectorAll(".ab").forEach(el => {
    el.style.zIndex = 1;
    el.style.opacity = 1;
  });
});







const download_resume = document.getElementById("download_resume");

download_resume.addEventListener("click", async () => {
    const resume = document.getElementById("resume");

    resume.style.display = "block";

    await document.fonts.ready;
    await new Promise(resolve => setTimeout(resolve, 100));

    const opt = {
        margin: 0,
        filename: "Gulabchandra_Mistri_Resume.pdf",

        image: {
            type: "png",
            quality: 1
        },

        html2canvas: {
            scale: 4,
            useCORS: true,
            backgroundColor: "#fff"
        },

        jsPDF: {
            unit: "mm",
            format: "a4",
            orientation: "portrait"
        }
    };

    await html2pdf().set(opt).from(resume).save();

   resume.style.display = "none";
});