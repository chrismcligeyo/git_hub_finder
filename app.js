//app.js is entry point

//initialize github
const github = new Github();
const ui = new UI();


//search input

const  searchUser = document.querySelector('#searchUser');

//search input event listener
searchUser.addEventListener('keyup', (e) => {
    //get text typed in
    const userText = e.target.value;

    if(userText !== "" ){
        // console.log(userText);
        //Make http call

        github.getUser(userText)
            .then(data => {
               // console.log(data); //we get a reponse of an object with profile:. profile:comes from github class at return. profile: has all the data of the username with login b. i.e name:, login: url:
//when you type in input and get a user that does not exist you will get profile:{message: "Not found"}

          if(data.profile.message === "Not Found"){

              //Show alert. will happen in ui class

          } else {
              //show profile. through ui class
              ui.showProfile(data.profile);//takes in a user and we get that from data.profile
          }

            })

    } else {
        //clear profile, through ui class
        ui.clearProfile();
    }


});