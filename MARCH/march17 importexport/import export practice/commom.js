function navbar(){
    return `
    <div id="navbar">
    <h3><a href="home.html">Home</a></h3>
    <div class="option">
    <h3><a href="signin.html">Signin</a></h3>
    <h3><a href="login.html">Login</a></h3>
    </div>
    </div>
    `
}

function test(){
    console.log("im test")
}

// export default navbar //for single function 

// but for multiple function export 
export { navbar , test }