const navBar = document.getElementById("navbar");
const aboutMeImg = document.getElementById("about_me_img");
const workSection =document.querySelector(".work_section");
const educationSection =document.querySelector(".education_section");

const workExperience =document.querySelector(".work_experience");

const darkmodeButton = document.getElementById("darkmode");
const darkmodeButtonButton = document.querySelector(".darkmode_button");

const selfie = document.querySelector(".home_img");
const homeText = document.querySelector(".home_text");

const speechBubble = document.querySelector(".speech_bubble");

cvFile()

async function cvFile() {
  const response = await fetch('./cv.json');
  const data = await response.json();

  data.jobs.forEach(job => {
    const work = document.createElement("div");
    work.innerHTML = ` <div class="work_experience">
                          <div class="work_experience_top">
                          <div class="left_side">
                            <h3>${job.title}</h3>
                            <p>${job.companyName}</p>
                            <p>${job.location}</p>
                          </div>
                          <div class="right_side">
                            <p class="work_button">${job.fulltime}</p>
                            <p>${job.time}</p>
                          </div>
                          </div>
                          <div class="work_experience_bottom">
                          <p class="work_experience_description">${job.description}</p>
                          <button class="show_more_btn">&#10095</button>
                          </div>
                        </div>`;
          
    workSection.appendChild(work);
  });

  data.education.forEach(item => {
    const education = document.createElement("div");
    education.innerHTML = ` <div class="education_experience">
                              <div class="education_experience_top">
                                <div class="left_side">
                                  <h3>${item.title}</h3>
                                  <p>${item.schoolName}</p>
                                  <p>${item.location}</p>
                                </div>
                                <div class="right_side">
                                  <p class="education_button">${item.educationLevel}</p>
                                  <p>${item.time}</p>
                                </div>
                             </div>
                          <div class="education_experience_bottom">
                          <p class="education_description">${item.description}</p>
                          <button class="show_more_btn">&#10095</button>
                          </div>
                        </div>`;
          
    educationSection.appendChild(education);
  });

  const showMoreBtn = document.querySelectorAll(".show_more_btn");

  showMoreBtn.forEach(btn => {
    btn.addEventListener("click", function(){
      btn.previousElementSibling.classList.toggle("displayDescription");
      btn.classList.toggle("displayDescription_btn");
    });
});
};


window.addEventListener("scroll", function () {
  if (document.documentElement.clientWidth >= 700) {
    if (window.scrollY > 50) {
      navBar.classList.add("navbarScroll");
    }
    else if (window.scrollY < 50) {
        navBar.classList.remove("navbarScroll");
      }
  }
});

window.addEventListener("scroll", function() {
  if (window.scrollY > 400) {
    workSection.classList.add("work_section_animation");
  }
  if (window.scrollY < 400) {
    workSection.classList.remove("work_section_animation");
  }
});

window.addEventListener("scroll", function() {
  if (window.scrollY > 700) {
    educationSection.classList.add("education_section_animation");
  }
  if (window.scrollY < 700) {
    educationSection.classList.remove("education_section_animation");
  }
});

selfie.addEventListener("mouseover", function () {
  if (document.documentElement.clientWidth >= 700) {
    homeText.classList.add("home_animation");
    speechBubble.style.display = "none";
    console.log("aaaa");
  }
  
});

darkmodeButton.addEventListener("click", function () {
  console.log("hej");
  darkmodeButton.style.justifyContent = "flex-end";
});

