// var one = document.getElementById('one');
// var two = document.getElementById('two');
// var three = document.getElementById('three');
// var four = document.getElementById('four');
// var five = document.getElementById('five');
// var submit = document.getElementById('submit');

// one.addEventListener('click', one_func()) 

// function one_func(){
//     alert(1);

// }


window.addEventListener("load", ()=>{

    const feedbackCard = document.querySelector(".rating-container");



    // This Code Section is for when the user wants to choose within any of the given choices

    let feedbackNumberContainer = feedbackCard.querySelector(".numbers");
    let feedbackNumbers = feedbackNumberContainer.querySelectorAll(".number");
    let numberChosenContainer = document.querySelector("#numberChosen");
    let numberChosenValue = null;

    feedbackNumbers.forEach( (feedbackNumber, index)=>
    {

        feedbackNumber.addEventListener("click", ()=>
        {
            let num = index +1;
            numberChosen = feedbackNumber.innerHTML;
            feedbackNumber.classList.add("active");
            numberChosenContainer.setAttribute("value", num);
            numberChosenValue = numberChosenContainer.getAttribute("value");

            if ( numberChosen === "1" )
            {

                if ( feedbackNumbers[1].classList.contains("active") || feedbackNumbers[2].classList.contains("active") || feedbackNumbers[3].classList.contains("active") || feedbackNumbers[4].classList.contains("active") )
                {
                    feedbackNumbers[1].classList.remove("active");
                    feedbackNumbers[2].classList.remove("active");
                    feedbackNumbers[3].classList.remove("active");
                    feedbackNumbers[4].classList.remove("active");
                }

            }

            else if ( numberChosen === "2" )
            {
                feedbackNumbers[0].classList.add("active");

                if ( feedbackNumbers[2].classList.contains("active") || feedbackNumbers[3].classList.contains("active") || feedbackNumbers[4].classList.contains("active") )
                {
                    feedbackNumbers[2].classList.remove("active");
                    feedbackNumbers[3].classList.remove("active");
                    feedbackNumbers[4].classList.remove("active");
                }

            }

            else if ( numberChosen === "3" )
            {
                feedbackNumbers[0].classList.add("active");
                feedbackNumbers[1].classList.add("active");

                if ( feedbackNumbers[3].classList.contains("active") || feedbackNumbers[4].classList.contains("active") )
                {
                    feedbackNumbers[3].classList.remove("active");
                    feedbackNumbers[4].classList.remove("active");
                }


            }

            else if ( numberChosen === "4" )
            {
                feedbackNumbers[0].classList.add("active");
                feedbackNumbers[1].classList.add("active");
                feedbackNumbers[2].classList.add("active");

                if ( feedbackNumbers[4].classList.contains("active") )
                {
                    feedbackNumbers[4].classList.remove("active");
                }


            }

            else if ( numberChosen === "5" )
            {
                feedbackNumbers[0].classList.add("active");
                feedbackNumbers[1].classList.add("active");
                feedbackNumbers[2].classList.add("active");
                feedbackNumbers[3].classList.add("active");
            }

        });

    } );

    // END OF This Code Section is for when the user wants to choose within any of the given choices

    // This Code Section is for when the Submit Button ic clicked
    // What happens here is the Thank You Modal will be displayed after a counple of seconds

    let submitButton = feedbackCard.querySelector("#submit");
    let loadingButton = feedbackCard.querySelector("#loading");
    
    const thankYouModal = document.querySelector(".thank-you-container");




    submitButton.addEventListener("click", ()=>
    {

        if ( numberChosenValue != null )
        {

            submitButton.classList.add("display-none");
            loadingButton.classList.add("display-block");

            setTimeout( ()=>
            {

                submitButton.classList.remove("display-none");
                loadingButton.classList.remove("display-block");

                feedbackNumbers.forEach( (feedbackNumber, index)=>
                {
            
                    if ( feedbackNumbers[index].classList.contains("active") )
                    {
                        feedbackNumbers[index].classList.remove("active");
                    }

                } );

                

            }, 3000 );


            function loadAndCloseThankYouModal(numberChosenValue)
            {
                thankYouModal.classList.add("thank-you-container-slide-in");
                console.log(numberChosenValue);
                thankYouModal.querySelector("#numberSelected").innerHTML = numberChosenValue;
                closeThankYouModal(thankYouModal);
            }

            setTimeout( loadAndCloseThankYouModal(numberChosenValue) , 2900 );


        }
        else
        {
            
            feedbackCard.querySelector(".error-container").classList.add("display-block");

            feedbackCard.querySelector(".close-button").addEventListener("click", ()=>
            {

                feedbackCard.querySelector(".error-container").classList.remove("display-block");

            });


            setTimeout( ()=>
            {

               
                feedbackCard.querySelector(".error-container").classList.remove("display-block");
                

            }, 2000 );

        }

    });


    function closeThankYouModal(container) 
    {
    
        container.querySelector("#closeBtn").addEventListener("click", ()=>
        {

            container.classList.add("thank-you-container-slide-out");

            document.querySelector("#numberChosen").setAttribute("value", "null");

            setTimeout( ()=>
            {

                container.classList.remove("thank-you-container-slide-out");
                container.classList.remove("thank-you-container-slide-in");

            }, 1000 );


        });
        
    }
    

});