AOS.init({
    duration: 1200,
  });


  
let spans = document.querySelectorAll(".sentence");
let sentencesArray= Array.from(spans);

let i=0;


 const addAnimClass = (sentence) => {
    if (i === sentence.length){
       i=0;
       sentence[i].classList.remove("hidden");
       sentence[i].classList.add("sentence-anim");

    }else{
      sentence[i].classList.remove("hidden");
      sentence[i].classList.add("sentence-anim");
      
    }
   
 };

const removeAnimClass = (sentence) => {
         sentence[i].classList.add("hidden");
         sentence[i].classList.remove("sentence-anim");
         i++;
};


  function move() {
  setTimeout(() => addAnimClass(sentencesArray), 0);
  setTimeout(() => removeAnimClass(sentencesArray), 3000);
  setTimeout(move, 3000);
  
 }

move();



