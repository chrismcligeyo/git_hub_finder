class UI {
    constructor(){
        this.profile = document.querySelector("#profile")
    }

    showProfile(user){
        this.profile.innerHTML = `
        
        <div class ="card card-body mb-3">
            <div class="row">
                <div class="col-md-6">
                <img class="image-fluid mb-2"width="500" src="${user.avatar_url}" alt="">
                <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
                </div>
                    <div class="col-md-6">
                    <span class="badge badge-pill badge-info">Type: ${user.type}</span>
                    <span class="badge  badge-pill badge-primary">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-pill badge-secondary">Public Gists: ${user.public_gists}</span>
                    <span class="badge badge-pill badge-primary">Followers: ${user.followers}</span>
                    <span class="badge badge-pill badge-primary">Following: ${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                    <li class="list-group-item">Company: ${user.company}</li>
                    <li class="list-group-item">Blog/Website: ${user.blog}</li>
                    <li class="list-group-item">User Url: ${user.html_url}</li>
                    <li class="list-group-item">Joined: ${user.created_at}</li>
                    </ul>
                    </div>
            </div>
        
        
        </div> 
        
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>     
        
        
         
        `;

    }

    //Show user repos

    showRepos(repos){ //repos stored as array, sowe ave to loop through to display each

        let output = "";
        repos.forEach(function(repo) {

            output += `
            
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-6">
                    
                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    
                    </div>
                    
                    <div class="col-md-6">
                    <span class="badge badge-pill badge-info">Forks: ${repo.forks_count}</span>
                    <span class="badge  badge-pill badge-primary">Stars: ${repo.stargazers_count}</span>
                    <span class="badge badge-pill badge-secondary">Language: ${repo.language}</span>
                    <span class="badge badge-pill badge-primary">Watchers: ${repo.watchers_count}</span>
                    <span class="badge badge-pill badge-primary">Size: ${repo.size}</span>
                    <br><br> 
                    </div>
                </div>
            </div>   
                    
            
            
            
            
            `
        });
        //output repositories

        document.getElementById('repos').innerHTML = output;

    }

    //show alert
    showAlert(message, className) {
        //clear any remaining alerts
        this.clearAlert();
        //create div
        const div = document.createElement('div');
        //add classes
        div.className = className;
        //Add text
        div.appendChild(document.createTextNode(message));

        //get paarent element to add div to
        const container = document.querySelector(".searchContainer");

        //get searchbox
        const search = document.querySelector(".search");
        //insert alert
        container.insertBefore(div, search); //insert alert msg(div) before search in container(parent). search is the card

        //alert dissapper after 2seconds
        setTimeout( () =>{
            this.clearAlert();
        },2000 ); //clear alert msg after 2seconds
    }



    //clear alert message
        clearAlert(){
            //get alert
            const currentAlert = document.querySelector(".alert");
            if(currentAlert){
                currentAlert.remove()

            }
        }



    //clear profile
    clearProfile(){
        this.profile.innerHTML = "";

    }

}