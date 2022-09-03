setInterval(() =>{
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');
    let day = document.getElementById('day');
    let date = document.getElementById('date');
    let month = document.getElementById('month');
    let year = document.getElementById('year');

    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');

    let hr_dot = document.querySelector('.hr_dot');
    let min_dot = document.querySelector('.min_dot');
    let sec_dot = document.querySelector('.sec_dot');
    
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let dy = new Date().getUTCDay();
    let d = new Date().getDate();
    let mt = new Date().getMonth();
    let y = new Date().getFullYear();

    let am = h >= 12 ? "PM" : "AM";
    
    // Convert 24hr to 12hr clock
    
    // if (h > 12){
    //     h = h - 12;
    // }
    
    // Add zero before single digit number
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    d = (d < 10) ? "0" + d : d;
    mt = (mt < 10) ? "0" + mt : mt;
    
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;
    day.innerHTML = dy;
    date.innerHTML = d;
    month.innerHTML = mt;
    year.innerHTML = y;

    hh.style.strokeDashoffset = 440 - (440 * h) / 12;
    // 12hrs clock
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    // 60 minutes
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;
    // 60 seconds

    hr_dot.style.transform = `rotate(${h * 30}deg)`;
    // 360 / 12hrs = 30
    min_dot.style.transform = `rotate(${m * 6}deg)`;
    // 360 / 60mins = 30
    sec_dot.style.transform = `rotate(${s * 6}deg)`;
    // 360 / 60secs = 30
})
