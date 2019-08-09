class Github {
    constructor(){
        this.clientId = "b05381dce518209a5a10";
        this.clientSecret = "88c0abbbe090d131fa32a28ea32638ef662d8518";
    }

    async getUser(user){
  //get response
        const profileResponse = await fetch(`https://api.github.com/users/${user}?clientId=${this.clientId}&clientSecret=${this.clientSecret}`);// add on clientid an client secret right after user
      //get data
        const profileData = await profileResponse.json(); //gives s json data

        //we will not just return profile data. we will return an object, because we wi;; return profile data together wtih repo
        return {
            profile: profileData
        }

    }
}