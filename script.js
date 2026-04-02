let generatedOTP = 0;

function generateOTP() {
    generatedOTP = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
    document.getElementById("otpBox").innerHTML = "Your OTP: <b>" + generatedOTP + "</b>";
}

function verifyOTP() {
    let enteredOTP = document.getElementById("otpInput").value;

    if (enteredOTP == generatedOTP) {
        document.getElementById("result").style.color = "lightgreen";
        document.getElementById("result").innerHTML = "✔ Login Successful";
    } else {
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML = "✘ Wrong OTP";
    }
}
