const readButton = document.getElementById('read-button') ;
// console.log(readButton);
readButton.addEventListener('click',function(){
     window.open("https://www.prothomalo.com", "_blank");
})

const header1 = document.querySelector('.header1');
const header = document.querySelector('.ty');
const xmark = document.querySelector('.fa-circle-xmark');

xmark.addEventListener('click', function() {
    header1.classList.add('active');

    if (header1.classList.contains('active')) {  // Check if header1 has the 'active' class
        const div = document.createElement('div');
        div.innerHTML = '<button class="btn">again show</button>'; // Use innerHTML to add HTML content
        header.appendChild(div); // Correct way to append the div
        const btn = div.querySelector('.btn');
        btn.addEventListener('click', function() {
            header1.classList.remove('active');
            div.remove(); // Remove the div after clicking the button
        });
    } else {
        header1.classList.add('active');
    }
});

//left menuBars
const closeButton = document.querySelector('.menu-xmark');
const bars = document.querySelector('.fa-bars');
const leftBars = document.querySelector('.left-bars');

console.log(bars);

bars.addEventListener('click', () => {
    leftBars.classList.add('active');
});

closeButton.addEventListener('click', () => {
    leftBars.classList.remove('active');
});

//sign 
document.addEventListener('DOMContentLoaded', function() {
  const inputbord = document.querySelector('.input-bordered');
  const searchIcon = document.querySelector('.fa-magnifying-glass');
  searchIcon.addEventListener('click', function() {
      inputbord.classList.toggle('active');
  });

  const body = document.querySelector('.tt');
  const sign = document.querySelector('.sign');
  sign.addEventListener('click', function() {
      body.classList.add('new');
      document.querySelector('.new').innerHTML = `
          <i class="fa-regular fa-rectangle-xmark close-all"></i>
          <label class="input input-bordered flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70">
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text"  class="grow" placeholder="Email" id = "name" />
          </label>
          <label class="input input-bordered flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input type="text" class="grow" placeholder="Username" id = "number" />
          </label>
          <label class="input input-bordered flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70">
                  <path fill-rule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 1 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clip-rule="evenodd" />
              </svg>
              <input type="password" class="grow"  id="email" />
          </label>
          <button class="btn btn-success">Submit</button>
      `;

      const closeAllIcon = document.querySelector('.close-all');
      closeAllIcon.addEventListener('click', function() {
          document.querySelector('.new').innerHTML = '';
          body.classList.remove('new');
      });
      
      const succ = document.querySelector('.btn-success') ;
     
      succ.addEventListener('click', function(){
        const name = document.getElementById('name').value;
        const number = document.getElementById('number').value;
        const email = document.getElementById('email').value;
        if (name && number && email) {
          const newWindow = window.open('', '_blank');
          newWindow.document.write(`
                 <style>
                    .thank-you-message {
                        
                        text-align: center;
                        margin-top: 50px;
                    }
                        #ss-im{
                            display: flex ;
                            justify-content: center ;
                        }
                       .ss{
                             display: flex ;
                            justify-content: center ;
                            color:#52d93d ;
                            font-size:50px ;
                       }
                      .susses{
                       display: flex;
                        justify-content: center;
                        }
                </style>
            
               <div id="ss-im">
                   <img src="images/success.png" alt="">
               </div>
                <p class='ss'> SUCCESS </p>
                <div class="thank-you-message">
                    <h1>Thank u for submit information</h1>
                    <h2></h2>
                </div>
                <div class='susses'>
                   <button id='lets-continue' style="width: 300px; height: 55.99px; border-radius: 32px; background: #52d93d; color: aliceblue;outline: none; border: none;">Continue</button>
                </div>
                     <script>
                    document.getElementById('lets-continue').addEventListener('click', function() {
                        window.close();
                      
                    });
                    </script>
            `)
        }
      })
  });
});

//search 

const search = document.querySelector('.fa-magnifying-glass') ;
console.log(search);
const input = document.querySelector('.input-bordered') ;
console.log(input) ;
search.addEventListener('click', ()=> {
  search.classList.toggle('active')
})


//checkbox
document.getElementById('legalCheckbox').addEventListener('change', function() {
  if (this.checked) {
      alert('You have accepted all legal rules');
  }
});