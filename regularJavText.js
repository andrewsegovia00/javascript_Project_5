document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("checkBTN").addEventListener("click", checkForm);

    document.getElementById("userName").addEventListener("change", removeErrorMessage);

    document.getElementById("userNum").addEventListener("change", removeErrorMessage);

    document.getElementById("userVerb").addEventListener("change", removeErrorMessage);

    document.getElementById("cheesecake").addEventListener("change", removeErrorMessage);

    let poop = decodeURI(document.cookie);

    if(!poop == "")
    {
        console.log("it looks like there's a cookie already made");
        document.getElementById("cookieBaked").append("You have already won a  prize! ");

        let cookieLink = document.createElement('a');
        let linkText = document.createTextNode("Click here");
        cookieLink.classList.add("empty");
        cookieLink.append(linkText);
        // a.title = "my title text";
        cookieLink.href = "cookieData_Saved.htm";
        document.getElementById("cookieBaked").append(cookieLink);
        document.getElementById("cookieBaked").append(" to view your prize.");
    }

}
);

function removeErrorMessage() {
    document.getElementById(this.id + "Error").innerHTML = " ";
}

    let recordedName;
    let recordedNum;
    let recordedVerb;
    let recordedCheesecakeImg;
    let recordedCheesecakeOption;


function checkForm() {

    let mistakes = false;

    recordedName = document.myForm.userName.value;

    if (recordedName == "") {
        document.getElementById("userNameError").innerHTML = "Please enter your name into the text box";
    }

    recordedNum = document.myForm.userNum.value;

    const testNum = /^\d{1}\d*$/;

    if (!testNum.test(recordedNum)) {
        document.getElementById("userNumError").innerHTML = " Please enter valid number into the text box";
        mistakes = true;
    }

    recordedVerb = document.myForm.userVerb.value;

    const testVerb = /^[r][\w]+[i]+[n]+[g]+/

    if (!(testVerb.test(recordedVerb))) {
        document.getElementById("userVerbError").innerHTML = " Invalid verb starting \"r\" and ending in \"ing\"";
        mistakes = true;
    }

    if (document.myForm.cheesecake.selectedIndex == 0) {
        document.getElementById("cheesecakeError").innerHTML = " Invalid choice, please choose a valid option";
        mistakes = true
        console.log(false);
    }
    else 
    {
        recordedCheesecakeOption = document.myForm.cheesecake.value;
        recordedCheesecakeImg = recordedCheesecakeOption;
        let i = 0;
        while(i < recordedCheesecakeImg.length)
        {
            while(recordedCheesecakeImg.charAt(i) == ' ')
            {
                recordedCheesecakeImg = recordedCheesecakeImg.replace(' ', '');
            }
            i++;
        }

        recordedCheesecakeImg = recordedCheesecakeImg.toLowerCase();
        recordedCheesecakeImg += ".jpg";
    }

    if (mistakes == false) {
        makeCookies();
    }
}

function makeCookies() {
    const CookieIngredients = recordedName + "\n" + recordedNum + "\n" + recordedVerb + "\n" + recordedCheesecakeImg + "\n" + recordedCheesecakeOption;

    console.log(CookieIngredients);

    document.cookie = encodeURI(CookieIngredients) + "; sameSite=Strict; expires=" + ["Tuesday, 10-Jan2023 10:00:00 GMT"];

    document.location = "cookieData_Saved.htm";

}

