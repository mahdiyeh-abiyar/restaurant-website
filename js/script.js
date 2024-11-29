function Dark(){
    document.body.style.backgroundColor='#0b0320';
    bannerAd.style.backgroundColor='#ffbe00';
    sectionTitle.style.color='#ffbe00';
    sectionTitle1.style.color='#ffbe00';
    sectionTitle2.style.color='#ffbe00';
    sectionTitle3.style.color='#ffbe00';
    sectionTitle4.style.color='#ffbe00';
    sectionTitle5.style.color='#ffbe00';
    link.style.color='#ffbe00';
    link1.style.color='#ffbe00';
    link2.style.color='#ffbe00';
    link3.style.color='#ffbe00';
    link4.style.color='#ffbe00';
    link5.style.color='#ffbe00';
    link6.style.color='#ffbe00';
    link7.style.color='#ffbe00';




}




document.getElementById('contactForm').addEventListener('submit',function(event){
    event.preventDefault();

    var Name=document.getElementById('name').value;
    var lastname=document.getElementById('lastName').value;
    var email=document.getElementById('Email').value;
    var Phone=document.getElementById('phone').value;
    var message=document.getElementById('message').value;

    const successMessage = 'عزیزم' +Name+ ',با شماره  تلفن :' +Phone+ 'and email : ' +email+ ',ممنون از پیام شما.';

    if(Name==''){
        alert('please fill the name fild');
    }
    else if(Phone==''){
        alert('please fill the phone number fild');
    }
    else if(email==''){
        alert('please fill the email fild');
    }
    else if(message==''){
        alert('please fill the massage fild');
    }
    else{
        alert(successMessage);
    }
})

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
window.onscroll = function() {
    let scrollButton = document.getElementById("scrollButton");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }
};








