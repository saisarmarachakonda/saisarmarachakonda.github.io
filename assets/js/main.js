/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'), 
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = "skills__content skills__open"
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
            tabContent.style.display = "none";
        })
        target.classList.add('qualificiation__active')
        target.style.display = "block";

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*==================== QUALIFICATION MODAL ====================*/
const qmodalViews = document.querySelectorAll('.qualification__modal'),
      qmodalBtns = document.querySelectorAll('.qualification__button-modal'),
      qmodalCloses = document.querySelectorAll('.qualification__modal-close')

let qmodal = function(modalCLick){
    qmodalViews[modalCLick].classList.add('active-modal')
}

qmodalBtns.forEach((qmodalBtn,i) =>{
    qmodalBtn.addEventListener('click', () =>{
        qmodal(i)
    })
})

qmodalCloses.forEach((qmodalClose,i) =>{
    qmodalClose.addEventListener('click', () =>{
        qmodalViews.forEach((qmodalView) => {
            qmodalView.classList.remove('active-modal')
        })
    })
})

/*==================== PORTFOLIO / BLOG SWIPER  ====================*/
let swiper = new Swiper('.swiper-container', {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      mousewheel: false,
      preventInteractionOnTransition: true,
    },
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})





function toggleChat() {
    var chatContent = document.getElementById('chat-content');
    if (chatContent.classList.contains('hidden')) {
        chatContent.classList.remove('hidden');
        chatContent.style.display = 'block';
    } else {
        chatContent.classList.add('hidden');
        chatContent.style.display = 'none';
    }
}


function appendMessage(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const newMessage = document.createElement('div');
    newMessage.textContent = `${sender}: ${message}`;
    chatBox.appendChild(newMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
}
function getQuestionText(questionKey) {
    switch (questionKey) {
        case 'inspiration':
            return 'What inspired you to specialize in Data Science and Artificial Intelligence?';
        case 'evolution':
            return 'With your extensive experience, how have you seen data science evolve in the industries you\'ve worked in?';
        case 'tools':
            return 'Can you detail how you\'ve utilized Python and R in your data science projects?';
        case 'methods':
            return 'What kind of quantitative methods do you employ most frequently in your models?';
        case 'aiHubProject':
            return 'What project at AI Hub are you most proud of, and why?';
        case 'modelApplication':
            return 'How have you applied your modeling skills to improve processes in the industries you\'ve worked in?';
        case 'deploymentChallenges':
            return 'What are some challenges you\'ve faced in deploying models, and how did you overcome them?';
        case 'dataVisualization':
            return 'How do you ensure the reliability of your data visualizations?';
        case 'efficiencyImprovement':
            return 'Can you explain a time when your work significantly increased efficiency or profitability for a business?';
        case 'trends':
            return 'How do you stay up-to-date with the latest trends and technologies in AI?';
        case 'mentoring':
            return 'What\'s your strategy for mentoring emerging talents in the field of data science?';
        case 'mlDemandForecasting':
            return 'Can you give an example of a successful project where you used machine learning for demand forecasting?';
        case 'innovativeContribution':
            return 'What has been your most innovative contribution to the field of AI?';
        case 'timeSeriesEnergy':
            return 'How have you used time series forecasting in the energy sector?';
        case 'eCommerceAI':
            return 'What has been your role in developing AI solutions for e-commerce?';
        case 'cloudDeployment':
            return 'How do you approach the deployment of models using cloud services like AWS and Azure?';
        default:
            return 'Unknown question';
    }
}





function getAnswer(questionKey) {
    switch (questionKey) {
        case 'inspiration':
            return "I've always been fascinated by the ability of data science and AI to transform raw data into actionable insights and drive innovation across various sectors. This passion, combined with my academic background, has propelled me to pursue this field.";

        case 'evolution':
            return "Data science has become more integral to decision-making processes, with advancements in technologies and methodologies. In sectors like consumer packaged goods, insurance, and e-commerce, I've seen a shift towards predictive analytics and AI-driven strategies that enhance efficiency and customer experiences.";

        case 'tools':
            return "Python and R have been essential tools for data manipulation, statistical analysis, and machine learning model development. I've used Python's rich ecosystem for building end-to-end data science pipelines and R for in-depth statistical analyses.";

        case 'methods':
            return 'I frequently use a range of methods including regression, statistical modeling, classification, clustering, and time series forecasting. These methods allow me to extract patterns and predict trends from complex datasets.';

        case 'aiHubProject':
            return 'I am particularly proud of crafting LLM reports that helped our clients enhance their business solutions. This work also contributed to securing a $1.75 million grant, which was a significant achievement for our company.';

        case 'modelApplication':
            return 'I have applied my skills to develop various models like demand forecasting, customer segmentation, and fraud analytics, which have optimized and automated key processes, leading to substantial efficiency and profitability gains.';

        case 'deploymentChallenges':
            return 'Challenges often arise due to scalability and compatibility issues. I tackle these by thorough testing and by leveraging cloud services like AWS and Azure, which offer robust and scalable deployment options.';

        case 'dataVisualization':
            return 'Reliability in data visualization comes from accuracy and clarity. I make sure to use clean data and choose the right type of visualization for the dataset, often using Tableau for its robust and interactive capabilities.';

        case 'efficiencyImprovement':
            return 'At Tiger Analytics, I revamped retail demand forecasting by automating over 40 models, which led to enhanced sales and workforce management across 450 stores, significantly increasing profitability.';

        case 'trends':
            return 'I regularly attend professional development courses, participate in coding workshops, and engage with the AI research community to ensure I am at the forefront of emerging technologies and methodologies.';

        case 'mentoring':
            return 'My strategy for mentoring involves hands-on training, collaborative coding sessions, and imparting practical knowledge that I have gained from my industry experience to bridge the gap between theory and application.';

        case 'mlDemandForecasting':
            return 'At Tiger Analytics, I developed comprehensive labor forecasting models for a consumer packaged goods client that enhanced inventory and sales strategy planning, which was a great success in terms of operational efficiency.';

        case 'innovativeContribution':
            return 'One of my most innovative contributions was developing an augmented reality application for a retail client that significantly enhanced the customer experience by providing detailed guidance for a seamless in-store journey.';

        case 'timeSeriesEnergy':
            return 'At Open Access Technology India, I enhanced forecasting accuracy by 30% for an energy company using time series forecasting to predict energy demand and production.';

        case 'eCommerceAI':
            return 'I have re-engineered real-time demand and response models for the retail sector, enhancing catalog management and adaptability to market trends, which directly impacted e-commerce strategies.';

        case 'cloudDeployment':
            return 'My approach to deployment involves creating scalable, robust models and using cloud services for their flexibility and the wide range of ML tools they offer, like AWS Sagemaker, to ensure seamless deployment.';

        default:
            return 'Sorry, I do not have an answer for that question.';
    }
}





document.getElementById('submit-question').addEventListener('click', function() {
    const userInputField = document.getElementById('user-input');
    const userInput = userInputField.value; // Removed trimming

    if (userInput) {
        appendMessage('You', userInput);
        // Process the user input here
        // For now, it just echoes a default response
        appendMessage('AI', getResponse(userInput));
        userInputField.value = ''; // Clear the input field after submitting
    }

    userInputField.focus(); // Set focus back to the input field
});

function getResponse(input) {
    // Example: Process the input to generate a response
    // Replace this logic with your actual response generation
    switch (input.toLowerCase()) {
        case 'hello':
            return 'Hello! How can I assist you today?';
        // Add more cases or logic as needed
        default:
            return 'I am sorry, I do not have an answer for that question.';
    }
}


function askQuestion(questionKey) {
    appendMessage('You', getQuestionText(questionKey));
    appendMessage('Sai', getAnswer(questionKey));

    const chatBox = document.getElementById('chat-content');
    chatBox.scrollTop = 0; // Sets the scroll position to the top
}




var userMove;
        var computerMove;
        var result;

        // Function to open the popup and start the game
        function startGame() {
            var popup = document.getElementById('popup');
            popup.style.display = 'flex';
            document.getElementById('result').innerHTML = '';
        }

        // Function to close the popup
        function closePopup() {
            var popup = document.getElementById('popup');
            popup.style.display = 'none';
        }

        // Function to play the game
        function play(move) {
            userMove = move;
            var moves = ['rock', 'paper', 'scissors'];
            computerMove = moves[Math.floor(Math.random() * moves.length)];
            
            // Determine the result
            if (userMove === computerMove) {
                result = "It's a tie!";
            } else if (
                (userMove === 'rock' && computerMove === 'scissors') ||
                (userMove === 'paper' && computerMove === 'rock') ||
                (userMove === 'scissors' && computerMove === 'paper')
            ) {
                result = 'You win!';
            } else {
                result = 'Computer wins!';
            }

            // Display the result
            document.getElementById('result').innerHTML = 'You chose ' + userMove + ', sai chose ' + computerMove + '. ' + result;
        }


