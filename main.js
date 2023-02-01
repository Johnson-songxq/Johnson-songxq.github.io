function createHeaderBtn() {
  const iconBtns = document.querySelectorAll(".iconBoxBtn");
  const iconPages = document.querySelectorAll(".tabPane");

  let current = "home";

  //add Event listener on each header button
  iconBtns.forEach(function (iconBtn) {
    function clickHandler(buttonName) {
      current = buttonName;
      updateButtonActive();
      updatePageActive();
    }

    iconBtn.addEventListener("click", () => clickHandler(iconBtn.name));
  });

  //update button status
  function updateButtonActive() {
    iconBtns.forEach((iconBtn) => {
      const className = "active";

      if (iconBtn.name === current) {
        iconBtn.classList.add(className);
      } else {
        iconBtn.classList.remove(className);
      }
    });
  }

  //update page status
  function updatePageActive() {
    iconPages.forEach((iconPage) => {
      const className = "pageActive";

      if (iconPage.id === current) {
        iconPage.classList.add(className);
      } else {
        iconPage.classList.remove(className);
      }
    });
  }
}

//data for the portfolio pictures
const portfolioData = [
  {
    raceTitle: "2023 THE OVERLAND TRACK",
    raceDate: "28/01/2023",
    raceLocation: "Tasmania, AU",
    raceType: "Trail Running",
    raceDistance: "85km",
    racePicture: "race-1_2023TAS.jpg",
  },
  {
    raceTitle: "2022 UTA 100",
    raceDate: "29/10/2022",
    raceLocation: "Blue Mountain, AU",
    raceType: "Trail Running",
    raceDistance: "100km",
    racePicture: "race-2.UTA.JPG",
  },
  {
    raceTitle: "2022 Blackmores Sydney Marathon",
    raceDate: "18/9/2022",
    raceLocation: "Sydney, AU",
    raceType: "Road Running",
    raceDistance: "42.195km",
    racePicture: "race-3.SYD2022.JPG",
  },
  {
    raceTitle: "2022 Glow Worm Tunnel Marathon",
    raceDate: "16/6/2022",
    raceLocation: "NSW NEWNES, AU",
    raceType: "Trail Running",
    raceDistance: "43km",
    racePicture: "race-4.2022GWT.JPG",
  },
  {
    raceTitle: "2022 CANBERRA MARATHON",
    raceDate: "10/4/2022",
    raceLocation: "Canberra, AU",
    raceType: "Road Running",
    raceDistance: "42.195km",
    racePicture: "race-5.CAB2022.JPG",
  },
  {
    raceTitle: "2019 BRISBANE MARATHON",
    raceDate: "2/6/2019",
    raceLocation: "Brisbane , AU ",
    raceType: "Road Running",
    raceDistance: "42.195km",
    racePicture: "race-6.2019BNE.JPG",
  },
  {
    raceTitle: "2018 SYDNEY MARATHON",
    raceDate: "16/9/2018",
    raceLocation: "Sydney , AU ",
    raceType: "Road Running",
    raceDistance: "42.195km",
    racePicture: "race-7.2018SYD.JPG",
  },
  {
    raceTitle: "2018 HONGKONG MARATHON",
    raceDate: "21/1/2018",
    raceLocation: "Hongkong, China",
    raceType: "Road Running",
    raceDistance: "42.195km",
    racePicture: "race-8.2018HK.JPG",
  },
  {
    raceTitle: "2017 Shenzhen Half MARATHON",
    raceDate: "19/11/2017",
    raceLocation: "Shenzhen, China",
    raceType: "Road Running",
    raceDistance: "21.0975km",
    racePicture: "race-9.2017SZ.jpg",
  },
];

function createPortfolioModal() {
  const portfolioModalPage = document.querySelector(".portfolioModal");
  const portfolioPictures = document.querySelectorAll(".PortfolioPicture");
  const closeModalBtn = document.querySelector(".closeModal");
  const raceTitle = document.getElementById("raceTitle");
  const raceDate = document.getElementById("raceDate");
  const raceLocation = document.getElementById("raceLocation");
  const raceType = document.getElementById("raceType");
  const raceDistance = document.getElementById("raceDistance");
  const racePicture = document.getElementById("racePicture");

  portfolioPictures.forEach((element, index) => {
    element.onclick = function () {
      const className = "pageActive";

      raceTitle.innerText = portfolioData[index].raceTitle;
      raceDate.innerText = portfolioData[index].raceDate;
      raceType.innerText = portfolioData[index].raceType;
      raceDistance.innerText = portfolioData[index].raceDistance;
      raceLocation.innerText = portfolioData[index].raceLocation;
      racePicture.src = "./img/" + portfolioData[index].racePicture;

      portfolioModalPage.classList.add(className);

      //click outside the dialoge, close the page.
      portfolioModalPage.onclick = function (e) {
        if (e.target === portfolioModalPage) {
          const className = "pageActive";
          portfolioModalPage.classList.remove(className);
        }
      };
    };
  });

  closeModalBtn.onclick = () => {
    const className = "pageActive";
    portfolioModalPage.classList.remove(className);
  };
}

function main() {
  //for the headers button interaction
  createHeaderBtn();

  //for the Portfolio Page
  createPortfolioModal();
}

main();
