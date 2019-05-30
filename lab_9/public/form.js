(function () {

    const prime = document.getElementById("prime");
    function isPrime(num){
        {
            for(var i = 2; i < num; i++) {
                if(num % i === 0) {
                    return false;
                }
            }
            return num > 1;
        }
    }
    if (prime) {

        prime.addEventListener("submit", event => {
            event.preventDefault();
            const number = document.getElementById("number");
            let response = number.value;
            let initNumber=response;
    
            if(response.length != 0){
                let error = document.getElementById("error");
                error.className = "error-Container-hidden";
                num = isPrime(initNumber)

                if (num){
                    let li = document.createElement("li");
                    let node = document.createTextNode(initNumber+" is a prime number");
                    li.appendChild(node);
                    li.className = "is-prime";
                    let ol = document.getElementById("attempts");
                    ol.appendChild(li);
                }
                else {
                    let li = document.createElement("li");
                    let node = document.createTextNode(initNumber+" is NOT a prime number");
                    li.appendChild(node);
                    li.className = "not-prime";
                    let ol = document.getElementById("attempts");
                    ol.appendChild(li);
                }
            }
            else{
                let error = document.getElementById("error");
                error.removeChild(error.childNodes[0]);
                error.className = "error-Container-display";
                let node = document.createTextNode("Please Enter some number to check");
                error.appendChild(node);
            }
            
        });
    }
})();