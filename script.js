const wrappper=document.querySelector('.wrapper');
const signUpLink=document.querySelector('.signUp-link');
const signInLink=document.querySelector('.signIn-link');
const toggleLogin=document.querySelector('.toggle-login');
const signUp=document.querySelector('.sign-up');
const signIn=document.querySelector('.sign-in');
const close=document.querySelector('.close');
const btn1=document.getElementById("btn1");
const btn2=document.getElementById("btn2");

wrappper.classList.toggle('active');
signUpLink.addEventListener('click',()=>{
wrappper.classList.toggle('show-sign');
wrappper.classList.add('show-bg');

});
signUpLink.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    wrapper.classList.add('active'); // Show sign-up form
});
signInLink.addEventListener('click',()=>{
    wrappper.classList.toggle('show-sign'); 
    wrappper.classList.add('show-bg');
    
});
btn1.addEventListener('click', (e) => {
    e.preventDefault(); 
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    if (username && password) {
        alert(`Login successful: ${username}`);
        document.querySelector('.form-wrapper.sign-in form').reset();
    } else {
        alert('Please fill in all fields');
    }
});
btn2.addEventListener('click', (e) => {
    e.preventDefault(); 
    const username1 = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password1 = document.getElementById('signup-password').value;
    if (username1 && email && password1) {
        alert(`Sign up successful: ${username1}`);
        document.querySelector('.form-wrapper.sign-up form').reset();
    } else {
        alert('Please fill in all fields');
    }
});

document.querySelector('.signUp-link').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.wrapper').classList.add('active');
    
    // Force a repaint
    setTimeout(() => {
        document.querySelector('.wrapper').style.display = 'none';
        document.querySelector('.wrapper').offsetHeight; // Trigger a reflow
        document.querySelector('.wrapper').style.display = 'block';
    }, 0);
});

document.querySelector('.signIn-link').addEventListener('click', function(e) {
    e.preventDefault();
    // document.querySelector('.wrapper').classList.remove('active');

    // Force a repaint
    setTimeout(() => {
        document.querySelector('.wrapper').style.display = 'none';
        document.querySelector('.wrapper').offsetHeight; // Trigger a reflow
        document.querySelector('.wrapper').style.display = 'block';
    }, 0);
});

document.querySelectorAll('.signUp-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetForm = this.classList.contains('signUp-link') ? 'active' : '';
        
        document.querySelector('.wrapper').classList.toggle('active', targetForm);
        
        // Ensure the layout is recalculated
        setTimeout(() => {
            document.querySelector('.wrapper').style.display = 'none';
            document.querySelector('.wrapper').offsetHeight; // Trigger reflow
            document.querySelector('.wrapper').style.display = 'block';
        }, 0);
    });
});
