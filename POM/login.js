class user_Login{
constructor(page){
    this.page = page;
this.signinbtn = page.locator('[id="login"]');
        this.user_Email = page.locator('[id="userEmail"]');
	        this.user_Password = page.locator('[id="userPassword"]');
}

	async valid_login(user_Email,user_Password){
	    await this.user_Email.fill(user_Email);
	    await this.user_Password.fill(user_Password)
	    await this.signinbtn.click();

    }
}
module.exports = {user_Login};