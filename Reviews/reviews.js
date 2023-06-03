const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumberwood blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony racelle post van de carle on dale, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];


  let image = document.getElementById('image');
  let author = document.getElementById('author');
  let profession = document.getElementById('profession');
  let about = document.getElementById('about');
  let left = document.getElementById('left');
  let right = document.getElementById('right');
  let btn2 = document.getElementById('btn2');
  let count = 2;

  


  window.addEventListener('DOMContentLoaded' , showFace)
  function showFace(){
    console.log('hello')
    let person = reviews[count]
    image.src = person.img
    author.textContent = person.name
    profession.textContent = person.job
    about.textContent = person.text



  }
  left.addEventListener('click' , function(){
    count--
    if(count < 0){
        count = reviews.length - 1
    }
    console.log(count)
    showFace()
  })

  right.addEventListener('click' , function(){
    count++
    if(count > reviews.length - 1){
        count = 0 
    }
    console.log(count)
    showFace()
  })

  btn2.addEventListener('click' , function(){
    let randomNumber = Math.floor(Math.random() * reviews.length)
    count = randomNumber
    showFace()
  }) 