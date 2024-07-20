const section1 = document.querySelector(".section1");
const submit = document.querySelector(".submit");
const ratingInputs = document.querySelectorAll(".rating input");
const ratingCount = document.querySelector("#Rcount");

let selectedRating = 0;

ratingInputs.forEach((input) => {
  input.addEventListener("change", () => {
    selectedRating = parseInt(input.value);
    updateRatingCount(selectedRating);
  });
});

function updateRatingCount(rating) {

  ratingCount.textContent = rating;
    
}


submit.addEventListener("click", () => {
 if(selectedRating==""){
  alert("Please Enter Your Rating");
 }
 else{
  section1.style.display = "block";
}
});



   
