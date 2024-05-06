const gs = [
    {
        name: 'Vishesh Rawal',
        instagramId: 'irwlvishesh',
        linkedinId: 'visheshrawal',
        githubId: 'visheshrwl',
        imageLink: 'https://res.cloudinary.com/dargl7he8/image/upload/v1714909583/ewoilovwtudltexn3kat.png',
        designation: 'BACKEND DEVELOPER'
    },
    {
        name: "Vanshaj Raghuvanshi",
        instagramId: "vanshajr_0410",
        linkedinId: 'vanshaj-raghuvanshi-328aa024b',
        githubId: 'VanshajR',
        imageLink: 'https://res.cloudinary.com/dnciaoigz/image/upload/v1707856611/upload_gtp9wd.jpg',
        designation: 'DATABASE ADMINISTRATOR'
    },
    {
        name: 'Ridham Uppal',
        instagramId: 'https://www.instagram.com/hey.ridham/',
        linkedinId: 'ridham-uppal-107936268',
        githubId: 'ridham-uppal',
        imageLink: 'https://res.cloudinary.com/dnciaoigz/image/upload/v1707892470/image_50779393_deufew.jpg',
        designation: 'FRONTEND DEVELOPER'
    },
    {
        name: 'Palak Mahajan',
        instagramId: 'https://www.instagram.com/hey.ridham/',
        linkedinId: 'ridham-uppal-107936268',
        githubId: 'ridham-uppal',
        imageLink: 'https://res.cloudinary.com/dargl7he8/image/upload/v1714909556/nwvjcemuj5sjijlac0t4.jpg',
        designation: 'FRONTEND DEVELOPER'
    }
];

const gs_container = document.getElementById('Cardsgs');
const teamHtmlgs = gs.map(member => `
    <div class="gs" id="${member.name}">
        <div class="card_container">
            <div class="card_details">
                <img src="${member.imageLink}"
                        alt="${member.name}" class="details" id="profilepicture">
                <h2><span class="nme" id="nme">${member.name}
                <h5 class="designation">${member.designation}</h5></span></h2>
                <div class="data">
                    <br>
                    <li>
                        <h4><a href="https://instagram.com/${member.instagramId}" target="_blank"><i class="fa-brands fa-instagram" id="instagram"></i></a></h4>
                    </li>
                    <li>
                        <h4><a href="https://github.com/${member.githubId}" target="_blank"><i class="fa-brands fa-github" id="github"></i></a></h4>
                    </li>
                    <li>
                        <h4><a href="https://www.linkedin.com/in/${member.linkedinId}" target="_blank"><i class="fa-brands fa-linkedin-in" id="linkedin"></i></a></h4>
                    </li>
                </div>
            </div>
        </div>
    </div>
`).join('');

gs_container.innerHTML = teamHtmlgs;

const heads = [
    {
        name: 'Shabnam Thakur',
        instagramId: '',
        linkedinId: '',
        githubId: '',
        imageLink: '',
        designation: 'Mentor',
    },
    {
        name: 'Dr. Shruti Aggarwal',
        instagramId: '',
        linkedinId: '',
        githubId: '',
        imageLink: 'https://i.postimg.cc/tTkYhXb4/image.png',
        designation: 'Mentor',
    },
]

const heads_container = document.getElementById('Cardsheads');
const teamHtmlheads = heads.map(member => `
    <div class="he" id="${member.name}">
        <div class="card_container">
            <div class="card_details">
                <img src="${member.imageLink}"
                        alt="${member.name}" class="details" id="profilepicture">
                <h2><span class="nme" id="nme">${member.name}
                <h6 class="designation">${member.designation}</h6></span></h2>
                <div class="data">
                    <br>
                    <li>
                        <h4><a href="https://instagram.com/${member.instagramId}" target="_blank"><i class="fa-brands fa-instagram" id="instagram"></i></a></h4>
                    </li>
                    <li>
                        <h4><a href="https://github.com/${member.githubId}" target="_blank"><i class="fa-brands fa-github" id="github"></i></a></h4>
                    </li>
                    <li>
                        <h4><a href="https://www.linkedin.com/in/${member.linkedinId}" target="_blank"><i class="fa-brands fa-linkedin-in" id="linkedin"></i></a></h4>
                    </li>
                </div>
            </div>
        </div>
    </div>
`).join('');

heads_container.innerHTML = teamHtmlheads;

const logout = document.querySelector("#logout");
logout.addEventListener("click",async(e)=>{
  e.preventDefault();
  try{
      const response = await fetch("/logout",{
          method:"POST",
          headers:{
              "Content-type":"application/json"
          }
      })
      const result = await response.json();
    //   console.log(result);
      if(result.message === "Logout successful"){
          window.location.href = "/";

      }else(
          console.log("err")
      )

  }catch(err){
      console.log(err);
  }
  
});