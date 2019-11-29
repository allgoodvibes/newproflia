const handleHome=()=>{
    document.getElementById("home").style.display ="block";
    document.getElementById("experience").style.display ="none";
    document.getElementById("education").style.display ="none";
    document.getElementById("achievement").style.display ="none";
    document.getElementById("skill").style.display ="none";
    };
const handleExperience=()=>{
    document.getElementById("home").style.display ="none";
    document.getElementById("experience").style.display ="block";
    document.getElementById("education").style.display ="none";
    document.getElementById("achievement").style.display ="none";
    document.getElementById("skill").style.display ="none";
    };
const handleEducation=()=>{
    document.getElementById("home").style.display ="none";
    document.getElementById("experience").style.display ="none";
    document.getElementById("education").style.display ="block";
    document.getElementById("achievement").style.display ="none";
    document.getElementById("skill").style.display ="none";
    };
const handleAchievement=()=>{
    document.getElementById("home").style.display ="none";
    document.getElementById("experience").style.display ="none";
    document.getElementById("education").style.display ="none";
    document.getElementById("achievement").style.display ="block";
    document.getElementById("skill").style.display ="none";
    };
const handleSkill=()=>{
    document.getElementById("home").style.display ="none";
    document.getElementById("experience").style.display ="none";
    document.getElementById("education").style.display ="none";
    document.getElementById("achievement").style.display ="none";
    document.getElementById("skill").style.display ="block";
    };

const whatsappclic=()=>{
    window.open("https://api.whatsapp.com/send?phone=085959218454")
    }
const gmailclic=()=>{
    window.open("mailto:nafitriaulia@example.com?Subject=I%2Want%2You")
    }
const linkedclic=()=>{
    window.open("https://www.linkedin.com/in/nafitri-aulia-595893119/")
    }
const whatsappclic1=()=>{
    window.open("https://api.whatsapp.com/send?phone=085959218454")
    }
const gmailclic1=()=>{
    window.open("mailto:nafitriaulia@example.com?Subject=I%2Want%2You")
    }
const linkedclic1=()=>{
    window.open("https://www.linkedin.com/in/nafitri-aulia-595893119/")
    }




document.getElementById("home-button").addEventListener("click", handleHome);
document.getElementById("experience-button").addEventListener("click", handleExperience);
document.getElementById("education-button").addEventListener("click", handleEducation);
document.getElementById("achievement-button").addEventListener("click", handleAchievement);
document.getElementById("skill-button").addEventListener("click", handleSkill);
document.getElementById("Wa-button").addEventListener("click",whatsappclic);
document.getElementById("gmail-button").addEventListener("click",gmailclic);
document.getElementById("linked-button").addEventListener("click",linkedclic);
document.getElementById("Wa1-button").addEventListener("click",whatsappclic1);
document.getElementById("gmail1-button").addEventListener("click",gmailclic1);
document.getElementById("linked1-button").addEventListener("click",linkedclic1);
document.getElementById("home1-button").addEventListener("click", handleHome);
document.getElementById("experience1-button").addEventListener("click", handleExperience);
document.getElementById("education1-button").addEventListener("click", handleEducation);
document.getElementById("achievement1-button").addEventListener("click", handleAchievement);
document.getElementById("skill1-button").addEventListener("click", handleSkill);
function listmenu()
{
    document.getElementById("list-menu").style.display="block";
}

console.log("Started");