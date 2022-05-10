let floors = document.querySelectorAll(".svgFloor")
let labels = document.querySelectorAll("div.label")
let contentPage = document.querySelectorAll("div.contentPage")
let dynamicsPage = document.querySelector("div.dynamicsPage")
let dot = document.querySelector("div.dot")
let dotLabel = document.querySelector("div.dotLabel")
let border = document.getElementById("svg")

let backButton = document.getElementById("exitButton")
let backButtonCont = document.querySelector("div.exitButtonCont")
let backButtonLabel = document.querySelector("div.exitButtonLabel")

let contentBody = document.querySelector("div.contentBody")
let svg = document.querySelector("svg")

floors.forEach((item, i) => {
  item.addEventListener("mouseover", function(){
    labels[i].style.display = "flex"
    anxietyTime = labels[i].dataset.anxiety
    border.style.animationDuration = (anxietyTime + "s")
    console.log(labels[i].dataset.anxiety);
  })
  item.addEventListener("mouseout", function(){
    labels[i].style.display = "none"
    border.style.animationDuration = "3.5s"

  })

  item.addEventListener("click", function(){
    contentBody.style.display = "flex"
    svg.style.filter = "blur(8px)"
    contentPage[i].style.display = "block"

  })
});

dot.addEventListener("mouseover", function(){
  dotLabel.style.display = "flex"
  anxietyTime = dotLabel.dataset.anxiety
  border.style.animationDuration = (anxietyTime + "s")
})
dot.addEventListener("mouseout", function(){
  dotLabel.style.display = "none"
  border.style.animationDuration = "3.5s"
})
dot.addEventListener("click", function(){
  contentBody.style.display = "flex"
  svg.style.filter = "blur(8px)"
  dynamicsPage.style.display = "block"
})



backButton.addEventListener("mouseover", function(){
  backButtonLabel.style.display = "block"
})
backButton.addEventListener("mouseout", function(){
  backButtonLabel.style.display = "none"
})
backButton.addEventListener("click", function(){
  contentBody.style.display = "none"
  svg.style.filter = "none"
  contentPage.forEach((item, i) => {
    item.style.display = "none"
  });
  dynamicsPage.style.display = "none"

})
