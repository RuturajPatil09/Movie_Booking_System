let user ={
    username: "admin",
    email: "securityboat@gmail.com",
    password: "securityboat"
};

var moviesList = [
{
    movieName: "IronMan",
    price: 270
},
{
    movieName: "Tumbaad",
    price: 210
},
{
    movieName: "Intestellar",
    price: 200
}
];

function verifyUser(){
mailid = document.getElementById('email').value;
pass = document.getElementById('psw').value;
console.log("aaya password",user.email,user.password);

if(mailid == user.email && pass == user.password)
{
    window.location.assign("user.html");
    alert(' Welcome Admin ');
}
else{
    alert(' Invalid Credentials   ');
}

}


document.querySelectorAll('.movie img').forEach(img => {
img.addEventListener('click', function() {
    const movie = this.dataset.movie;
    const screen = this.dataset.screen;
    cost = document.getElementById('price');

    document.getElementById('movie').innerText = movie;
    document.getElementById('screen').innerText = screen;
    
    if(movie == moviesList[0].movieName)
    {
        document.getElementById('price').innerText = moviesList[0].price;
    }
    else if(movie == moviesList[1].movieName)
    {
        document.getElementById('price').innerText = moviesList[1].price;
    }
    else if(movie == moviesList[2].movieName)
    {
        document.getElementById('price').innerText = moviesList[2].price;
    }

    box = document.getElementById('gridBox');
    box.style.display = "grid";


});
});


document.querySelectorAll('input[name="seats"]').forEach(seat => {
seat.addEventListener('click', function() {
    const cost = parseInt(document.getElementById('price').innerText, 10);
    const selectedSeats = document.querySelectorAll('input[name="seats"]:checked').length;
    movieName = document.getElementById('movie');
    screenNum = document.getElementById('screen');
    date = document.getElementById('date');
    totalCost = cost*selectedSeats;

    if(movieName.innerText != '---')
    {
        document.getElementById('finalData').innerHTML = `
        <h4> Movie Name is : ${movieName.innerText} <br>
        Screen Number : ${screenNum.innerText} <br> 
        Booking Date : ${date.value} <br> 
        Seats Booked : ${selectedSeats} <br> 
        Total Ticket Price : ${totalCost}
        </h4>
        `;
    }
    else
    {
        alert(' Please select the necessary details first');
    }

});
});


function bookTicket(){
const selectedSeats = document.querySelectorAll('input[name="seats"]:checked').length;

if(selectedSeats==0)
{
    alert(' You need to select the seats for booking !!!!!!!!!!!!!!  ');
    return false;
}
else{
    alert(' Movie ticket booked');
    window.location.reload();
    return true;
}
}