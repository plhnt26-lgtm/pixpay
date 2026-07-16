/* =========================
   PIX PAY UI - Part 1
========================= */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, Helvetica, sans-serif;
}

body{
    background:#0b0b0f;
    color:#fff;
}

/* Sidebar */

.sidebar{
    position:fixed;
    left:0;
    top:0;
    width:260px;
    height:100%;
    background:linear-gradient(180deg,#2b1055,#111);
    border-right:2px solid #d4af37;
    overflow:auto;
}

.sidebar h2{
    text-align:center;
    color:#d4af37;
    padding:30px 0;
    font-size:30px;
    letter-spacing:2px;
}

.sidebar a{
    display:block;
    padding:18px 30px;
    color:#fff;
    text-decoration:none;
    transition:.3s;
    font-size:18px;
}

.sidebar a:hover{
    background:#5b21b6;
    color:#d4af37;
    padding-left:40px;
}

/* Main */

.main-content{
    margin-left:260px;
    padding:30px;
}

/* Topbar */

.topbar{
    background:#161616;
    border:2px solid #d4af37;
    border-radius:18px;
    padding:20px 30px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:30px;
}

.topbar h2{
    color:#d4af37;
}

.user-box{
    background:#5b21b6;
    padding:12px 22px;
    border-radius:12px;
    font-weight:bold;
}

/* Buttons */

button{
    background:#5b21b6;
    color:#fff;
    border:none;
    padding:15px 30px;
    border-radius:10px;
    cursor:pointer;
    font-size:16px;
    transition:.3s;
}

button:hover{
    background:#d4af37;
    color:#000;
}

/* Inputs */

input{
    width:100%;
    padding:15px;
    border:none;
    border-radius:10px;
    background:#222;
    color:#fff;
    outline:none;
    margin-top:10px;
}

input:focus{
    border:2px solid #d4af37;
}

/* Scrollbar */

::-webkit-scrollbar{
    width:8px;
}

::-webkit-scrollbar-thumb{
    background:#5b21b6;
    border-radius:10px;
}
/* =========================
   PIX PAY UI - Part 2
========================= */

/* Dashboard */

.dashboard{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
    gap:25px;
}

/* Cards */

.card{
    background:linear-gradient(145deg,#1a1a1a,#2b1055);
    border:2px solid #d4af37;
    border-radius:18px;
    padding:30px;
    transition:.35s;
    box-shadow:0 0 20px rgba(91,33,182,.25);
}

.card:hover{
    transform:translateY(-8px);
    box-shadow:0 0 30px rgba(212,175,55,.45);
}

.card h3{
    color:#d4af37;
    margin-bottom:15px;
}

.card h1{
    font-size:40px;
    margin-top:10px;
}

/* Quick Actions */

.quick-actions{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
    gap:20px;
    margin-top:35px;
}

.quick-actions button{
    width:100%;
    height:60px;
    font-size:18px;
}

/* Investment Plans */

.plans{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
    gap:25px;
    margin-top:40px;
}

.plan-card{
    background:#181818;
    border:2px solid #5b21b6;
    border-radius:20px;
    padding:25px;
    text-align:center;
    transition:.3s;
}

.plan-card:hover{
    transform:scale(1.03);
    border-color:#d4af37;
}

.plan-card h3{
    color:#d4af37;
    margin-bottom:15px;
}

.plan-card p{
    margin:8px 0;
    color:#ddd;
}

/* Footer */

footer{
    text-align:center;
    margin-top:60px;
    padding:25px;
    border-top:2px solid #d4af37;
    color:#bbb;
        }
/* =========================
   PIX PAY UI - Part 3
========================= */

/* Login & Register */

.login-box{
    width:420px;
    max-width:95%;
    margin:80px auto;
    background:#161616;
    border:2px solid #d4af37;
    border-radius:20px;
    padding:40px;
    box-shadow:0 0 30px rgba(91,33,182,.35);
}

.login-box h2{
    text-align:center;
    color:#d4af37;
    margin-bottom:25px;
}

.login-box input{
    margin-bottom:18px;
}

.login-box button{
    width:100%;
}

.login-box p{
    text-align:center;
    margin-top:20px;
}

.login-box a{
    color:#d4af37;
    text-decoration:none;
}

.login-box a:hover{
    color:#fff;
}

/* Form Card */
/* =========================
   PIX PAY UI - Part 4
========================= */

/* Fade Animation */
@keyframes fadeIn{
    from{
        opacity:0;
        transform:translateY(20px);
    }
    to{
        opacity:1;
        transform:translateY(0);
    }
}

.card,
.plan-card,
.login-box,
.topbar{
    animation:fadeIn .6s ease;
}

/* Hero */

.hero{
    padding:120px 30px;
    text-align:center;
    background:linear-gradient(135deg,#2b1055,#111,#000);
}

.hero h2{
    font-size:60px;
    color:#d4af37;
    margin-bottom:20px;
}

.hero p{
    font-size:22px;
    color:#ddd;
    margin-bottom:30px;
}

/* About */

.about{
    padding:80px 20px;
    text-align:center;
}

.about h2{
    color:#d4af37;
    margin-bottom:20px;
    font-size:40px;
}

.about p{
    max-width:900px;
    margin:auto;
    color:#ccc;
    line-height:1.8;
}

/* Responsive */

@media(max-width:900px){

.sidebar{
    width:100%;
    height:auto;
    position:relative;
}

.main-content{
    margin-left:0;
    padding:20px;
}

.topbar{
    flex-direction:column
    
function register(){

    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if(fullname==="" || email==="" || password===""){
        alert("Please fill all fields.");
        return;
    }

    const user={
        fullname:fullname,
        email:email,
        password:password
    };

    localStorage.setItem("user",JSON.stringify(user));

    alert("Registration Successful!");

    window.location.href="login.html";
   }
function login(){

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = JSON.parse(localStorage.getItem("user"));

    if(!user){
        alert("No account found. Please register first.");
        return;
    }

    if(email === user.email && password === user.password){

        alert("Login Successful!");

        localStorage.setItem("loggedIn","true");

        window.location.href = "dashboard.html";

    }else{

        alert("Invalid Email or Password");

    }

       }
