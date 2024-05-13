// function generateDynamicComponent1(projectID, clientName, clientURL, category, status, progress, imgSrc) {

//     var componentDiv = document.createElement('div');
//     componentDiv.classList.add('component');


//     var upperDiv = document.createElement('div');
//     upperDiv.classList.add('upper');


//     var imgDiv = document.createElement('div');
//     imgDiv.classList.add('img');


//     var imgElement = document.createElement('img');
//     imgElement.setAttribute('src', imgSrc);
//     imgDiv.appendChild(imgElement);


//     var rightDiv = document.createElement('div');
//     rightDiv.classList.add('right');


//     var projectIDP = document.createElement('p');
//     projectIDP.textContent = 'Project ID: ' + projectID;
//     rightDiv.appendChild(projectIDP);


//     var clientNameH1 = document.createElement('h1');
//     clientNameH1.textContent = clientName;
//     rightDiv.appendChild(clientNameH1);


//     var clientURLH4 = document.createElement('h4');
//     var clientURLAnchor = document.createElement('a');
//     clientURLAnchor.setAttribute('href', clientURL);
//     clientURLAnchor.textContent = clientURL;
//     clientURLH4.appendChild(clientURLAnchor);
//     rightDiv.appendChild(clientURLH4);


//     var categoryDiv = document.createElement('div');
//     categoryDiv.setAttribute('id', 'category');
//     var categoryP = document.createElement('p');
//     categoryP.classList.add('category');
//     categoryP.classList.add(category);
//     categoryP.textContent = category;
//     categoryDiv.appendChild(categoryP);
//     rightDiv.appendChild(categoryDiv);


//     upperDiv.appendChild(imgDiv);
//     upperDiv.appendChild(rightDiv);


//     componentDiv.appendChild(upperDiv);


//     var hrElement = document.createElement('hr');
//     componentDiv.appendChild(hrElement);


//     var lowerDiv = document.createElement('div');
//     lowerDiv.classList.add('lower');


//     var projectStatusH3 = document.createElement('h3');
//     projectStatusH3.textContent = 'Project Status';
//     lowerDiv.appendChild(projectStatusH3);


//     var statusP = document.createElement('p');
//     statusP.classList.add('status');
//     statusP.textContent = status;
//     lowerDiv.appendChild(statusP);


//     var progressBarDiv = document.createElement('div');
//     progressBarDiv.classList.add('progress-bar');


//     var progressDiv = document.createElement('div');
//     progressDiv.classList.add('progress');
//     progressDiv.style.width = progress;
//     var progressP = document.createElement('p');
//     progressP.textContent = progress;
//     progressDiv.appendChild(progressP);
//     progressBarDiv.appendChild(progressDiv);
//     lowerDiv.appendChild(progressBarDiv);


//     var detailsP = document.createElement('p');
//     detailsP.textContent = 'Check Details';
//     detailsP.classList.add('check-details');
//     detailsP.setAttribute('onclick', "detailsPopup('" + projectID + "')");
//     var arrowIcon = document.createElement('i');
//     arrowIcon.classList.add('fa-solid');
//     arrowIcon.classList.add('fa-arrow-up-right-from-square');
//     arrowIcon.style.marginLeft = '5px';
//     detailsP.appendChild(arrowIcon);
//     lowerDiv.appendChild(detailsP);

//     componentDiv.appendChild(lowerDiv);

//     let mainContainer = document.getElementById('main-container');
//     mainContainer.append(componentDiv);
// }

// async function dataCall() {
//     try {
//         let res = await fetch("http://localhost:3000/getProjects");
//         let data = await res.json();
//         console.log(data);
//         data.forEach(client => {
//             let { category, pro_id, domain, client_name, pro_status, progress, pro_logo } = client;
//             generateDynamicComponent1(pro_id, client_name, domain, category, pro_status, progress, pro_logo);
//         });
//     } catch (error) {
//         console.log(error);
//     }
// }

// dataCall();

// generateDynamicComponent('00002', 'Client Name', 'https://www.hi.com', 'Portfolio', 'Last Testing Stage - Deadline 25th March', '70%', 'https://fakeimg.pl/100x100')

// Create theme divs




async function generateDynamicComponent2(pro_logo, pro_id, client_name, domain, category, dev_logo, dev_name, pro_status, progress, themes, websiteBtn) {
    // Create main container element
    var componentDiv = document.createElement('div');
    componentDiv.classList.add('component');

    // Create upper section
    var upperDiv = document.createElement('div');
    upperDiv.classList.add('upper');

    // Create img div
    var imgDiv = document.createElement('div');
    imgDiv.classList.add('img');

    // Create img element
    var imgElement = document.createElement('img');
    imgElement.setAttribute('src', pro_logo);
    imgDiv.appendChild(imgElement);

    // Create client name container
    var clientNameDiv = document.createElement('div');
    clientNameDiv.classList.add('client-name');
    var h1 = document.createElement('h1');
    h1.textContent = client_name;
    var h4 = document.createElement('h4');
    var a = document.createElement('a');
    a.href = domain;
    a.textContent = domain;
    h4.appendChild(a);
    clientNameDiv.appendChild(h1);
    clientNameDiv.appendChild(h4);

    // Append image and client name to upper section
    upperDiv.appendChild(imgDiv);
    upperDiv.appendChild(clientNameDiv);

    // Append upper section to main container
    componentDiv.appendChild(upperDiv);

    // Create project ID paragraph
    var projectIDParagraph = document.createElement('p');
    projectIDParagraph.classList.add('project-id');
    projectIDParagraph.innerHTML = '<b>ID:</b> ' + pro_id;
    componentDiv.appendChild(projectIDParagraph);

    // Create category heading
    var categoryHeading = document.createElement('h1');
    categoryHeading.classList.add('category');
    categoryHeading.textContent = category;
    componentDiv.appendChild(categoryHeading);

    // Create lower section
    var lowerDiv = document.createElement('div');
    lowerDiv.classList.add('lower');

    // Create progress bar section
    var progressBarDiv = document.createElement('div');
    progressBarDiv.classList.add('progress-bar');
    if (category == "Portfolio Website") {
        // Define the progress ball and tick elements
        const progressBall = `<img style="position: absolute;z-index: 9999;width: 20px!important;" src="./assets/ball.png" alt="">
            <div class="sonar-wave sonar-wave1">
                <div class="sonar-wave sonar-wave2"></div>
                <div class="sonar-wave sonar-wave3"></div>
                <div class="sonar-wave sonar-wave4"></div>
            </div>`;
        const progressTick = `<img src="./assets/tick.png" alt="">`;

        // Create project status elements
        const h3 = document.createElement('h3');
        h3.textContent = 'Project Status';

        const section = document.createElement('section');
        section.classList.add('all-nodes');

        const divNodes = document.createElement('div');
        divNodes.classList.add('nodes');

        const divTextPortfolio = document.createElement('div');
        divTextPortfolio.classList.add('text-portfolio');

        // Define project statuses and create nodes and text
        const statuses = ['Client Added', 'Model Selection', 'Getting Data From Client', 'Updating Text & Media', 'Approval', 'Completed'];
        statuses.forEach((status, index) => {
            const divNode = document.createElement('div');
            divNode.id = 'node' + (index + 1);
            divNode.classList.add('node');

            const p = document.createElement('p');
            p.textContent = status;

            divNodes.appendChild(divNode);
            divTextPortfolio.appendChild(p);
        });

        // Append nodes and text to the section
        section.appendChild(divNodes);
        section.appendChild(divTextPortfolio);

        // Append the section to the progressBarDiv
        progressBarDiv.appendChild(h3);
        progressBarDiv.appendChild(section);

        // Update progress status
        const nodes = divNodes.querySelectorAll('.node');
        if (progress >= 1 && progress <= nodes.length) {
            for (let i = 0; i < progress; i++) {
                nodes[i].innerHTML = (i === progress - 1) ? progressBall : progressTick;
                nodes[i].classList.add('current');
            }
        }
    } else if (category == "Static Website") {
        // Define the progress ball and tick elements
        const progressBall = `<img style="position: absolute;z-index: 9999;width: 20px!important;" src="./assets/ball.png" alt="">
            <div class="sonar-wave sonar-wave1">
                <div class="sonar-wave sonar-wave2"></div>
                <div class="sonar-wave sonar-wave3"></div>
                <div class="sonar-wave sonar-wave4"></div>
            </div>`;
        const progressTick = `<img src="./assets/tick.png" alt="">`;

        // Create project status elements
        const h3 = document.createElement('h3');
        h3.textContent = 'Project Status';

        const section = document.createElement('section');
        section.classList.add('all-nodes');

        const divNodes = document.createElement('div');
        divNodes.classList.add('nodes');

        const divTextStatic = document.createElement('div');
        divTextStatic.classList.add('text-static');

        // Define project statuses and create nodes and text
        const statuses = ['Client Added', 'Model Selection', 'Getting Data From Client', 'Updating Text & Media', 'Adding Pages ', 'Approval', 'Completed'];
        statuses.forEach((status, index) => {
            const divNode = document.createElement('div');
            divNode.id = 'node' + (index + 1);
            divNode.classList.add('node');

            const p = document.createElement('p');
            p.textContent = status;

            divNodes.appendChild(divNode);
            divTextStatic.appendChild(p);
        });

        // Append nodes and text to the section
        section.appendChild(divNodes);
        section.appendChild(divTextStatic);

        // Append the section to the progressBarDiv
        progressBarDiv.appendChild(h3);
        progressBarDiv.appendChild(section);

        // Update progress status
        const nodes = divNodes.querySelectorAll('.node');
        if (progress >= 1 && progress <= nodes.length) {
            for (let i = 0; i < progress; i++) {
                nodes[i].innerHTML = (i === progress - 1) ? progressBall : progressTick;
                nodes[i].classList.add('current');
            }
        }
    } else if (category == "Dynamic Website") {
        // Define the progress ball and tick elements
        const progressBall = `<img style="position: absolute;z-index: 9999;width: 20px!important;" src="./assets/ball.png" alt="">
            <div class="sonar-wave sonar-wave1">
                <div class="sonar-wave sonar-wave2"></div>
                <div class="sonar-wave sonar-wave3"></div>
                <div class="sonar-wave sonar-wave4"></div>
            </div>`;
        const progressTick = `<img src="./assets/tick.png" alt="">`;

        // Create project status elements
        const h3 = document.createElement('h3');
        h3.textContent = 'Project Status';

        const section = document.createElement('section');
        section.classList.add('all-nodes');

        const divNodes = document.createElement('div');
        divNodes.classList.add('nodes');

        const divTextDynamic = document.createElement('div');
        divTextDynamic.classList.add('text-dynamic');

        // Define project statuses and create nodes and text
        const statuses = ['Client Added', 'Model Selection', 'Getting Data From Client', 'Uploading Text & Media', 'Adding Pages ', 'Creating Admin Panel ', 'Adding Dynamic Features ', 'Approval', 'Completed'];
        statuses.forEach((status, index) => {
            const divNode = document.createElement('div');
            divNode.id = 'node' + (index + 1);
            divNode.classList.add('node');

            const p = document.createElement('p');
            p.textContent = status;

            divNodes.appendChild(divNode);
            divTextDynamic.appendChild(p);
        });

        // Append nodes and text to the section
        section.appendChild(divNodes);
        section.appendChild(divTextDynamic);

        // Append the section to the progressBarDiv
        progressBarDiv.appendChild(h3);
        progressBarDiv.appendChild(section);

        // Update progress status
        const nodes = divNodes.querySelectorAll('.node');
        if (progress >= 1 && progress <= nodes.length) {
            for (let i = 0; i < progress; i++) {
                nodes[i].innerHTML = (i === progress - 1) ? progressBall : progressTick;
                nodes[i].classList.add('current');
            }
        }
    }

    // Append progress bar section to lower section
    lowerDiv.appendChild(progressBarDiv);

    // Create right work section
    var rightWorkDiv = document.createElement('div');
    rightWorkDiv.classList.add('right-work');

    var imgDiv2 = document.createElement('div');
    imgDiv2.classList.add('developer-img');

    // Create img element
    var imgElement2 = document.createElement('img');
    imgElement2.setAttribute('src', dev_logo);
    imgDiv2.appendChild(imgElement2);

    rightWorkDiv.appendChild(imgDiv2);

    var titleElement = document.createElement('p');
    titleElement.classList.add('title');
    titleElement.textContent = 'Developer';
    rightWorkDiv.appendChild(titleElement);

    // Developer name element
    var nameElement = document.createElement('h2');
    nameElement.classList.add('developer-name');
    nameElement.textContent = dev_name;
    rightWorkDiv.appendChild(nameElement);

    // Notification message elements
    var msgDiv = document.createElement('div');
    msgDiv.classList.add('msg');

    var notificationTitle = document.createElement('h2');
    notificationTitle.textContent = 'Notification';
    msgDiv.appendChild(notificationTitle);

    var notificationContent = document.createElement('p');
    notificationContent.textContent = pro_status;
    msgDiv.appendChild(notificationContent);

    rightWorkDiv.appendChild(msgDiv);

    // Button container
    var btnDiv = document.createElement('div');
    btnDiv.classList.add('btn');

    // More Details button
    // var moreDetailButton = document.createElement('button');
    // moreDetailButton.classList.add('more-detail');
    // moreDetailButton.textContent = 'More Details';
    // btnDiv.appendChild(moreDetailButton);

    // Check Website button
    var checkWebsiteButton = document.createElement('button');
    checkWebsiteButton.classList.add('more-detail');
    checkWebsiteButton.textContent = websiteBtn.text;
    btnDiv.appendChild(checkWebsiteButton);

    rightWorkDiv.appendChild(btnDiv);

    lowerDiv.appendChild(rightWorkDiv);
    // Append lower section to main container
    componentDiv.appendChild(lowerDiv);

    if (websiteBtn.state == 0) {
        checkWebsiteButton.onclick = () => {
            generatePopup('../1/');
        };
    } else {
        let selectedThemeId;
        themes.forEach(theme => {
            if (theme.selected === 1) {
                selectedThemeId = theme.themeId;
            }
        });
        checkWebsiteButton.onclick = () => {
            location.href = "https://library-va.vercel.app/" + selectedThemeId + "/";
        };
    }

    async function generatePopup(initialThemeURL) {
        // Create the outer section
        const outerSection = document.createElement('section');
        outerSection.classList.add('outer');
        outerSection.setAttribute('id', 'popupContainer');

        // Create the div for all themes
        const allThemesDiv = document.createElement('div');
        allThemesDiv.classList.add('all-themes');

        // Create the div for cross icon
        const crossIconDiv = document.createElement('div');
        crossIconDiv.classList.add('cross-icon');
        crossIconDiv.innerHTML = '<i class="fa fa-times" id="closePopup" aria-hidden="true"></i>';
        allThemesDiv.appendChild(crossIconDiv);
        crossIconDiv.onclick = () => {
            document.body.removeChild(containerDiv);
        }

        let themesData = [];

        for (let i = 1; i <= themes.length; i++) {
            let dataCall = await fetch('https://api-library-va.vercel.app/getTheme/' + i);
            let data = await dataCall.json();
            themesData.push(data.data);
        }
        console.log(themesData);

        for (let i = 0; i < themesData.length; i++) {
            const themeData = themesData[i];
            const buttonContainer = document.createElement('div');
            buttonContainer.classList.add('fixed-buttons');
            buttonContainer.setAttribute('id', 'buttonContainer');

            // Create buttons for each theme
            const button1 = document.createElement('button');
            button1.textContent = 'Theme 1';
            button1.addEventListener('click', () => {
                openThemeInPopup('../1/');
            });

            const button2 = document.createElement('button');
            button2.textContent = 'Theme 2';
            button2.addEventListener('click', () => {
                openThemeInPopup('../2/');
            });

            const button3 = document.createElement('button');
            button3.textContent = 'Theme 3';
            button3.addEventListener('click', () => {
                openThemeInPopup('../3/');
            });

            // Append buttons to the button container
            buttonContainer.appendChild(button1);
            buttonContainer.appendChild(button2);
            buttonContainer.appendChild(button3);

            const selectBtn = document.createElement('button');
            selectBtn.setAttribute('id', 'selectModel');
            selectBtn.textContent = 'Select This Model';
            selectBtn.addEventListener('click', () => {
                const model = document.createElement('div');
                model.classList.add('modal');
                model.setAttribute('id', 'modal');

                const para = document.createElement('p');
                para.textContent = 'Are you sure you want to select this model?';

                let yesBtn = document.createElement('button');
                yesBtn.setAttribute('id', 'yesButton');
                yesBtn.textContent = 'Yes';
                yesBtn.onclick = async () => {
                    try {
                        themes[i].selected = 1;
                        const updatedTheme = await fetch('http://localhost:3000/updateTheme/' + pro_id, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ themes })
                        });

                        await fetch('http://localhost:3000/updateBtnState/' + pro_id, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        });

                        setTimeout(() => {
                            window.location.reload();
                        }, 1000);
                    } catch (error) {
                        console.error(error);
                    }
                };

                let noBtn = document.createElement('button');
                noBtn.setAttribute('id', 'noButton');
                noBtn.textContent = 'No';
                noBtn
                    .addEventListener('click', () => {
                        model.remove();
                    });

                model.appendChild(para);
                model.appendChild(yesBtn);
                model.appendChild(noBtn);

                document.body.appendChild(model);
            });

            buttonContainer.appendChild(selectBtn);

            if (i < 1) {
                // Create iframe for displaying themes
                const themeDiv = document.createElement('iframe');
                themeDiv.setAttribute('frameborder', '0');
                themeDiv.setAttribute('width', '100%');
                themeDiv.setAttribute('height', '100%');
                themeDiv.setAttribute('src', initialThemeURL);
                allThemesDiv.appendChild(themeDiv);

                // Function to open a theme in the popup
                openThemeInPopup = (themeURL) => {
                    themeDiv.setAttribute('src', themeURL);
                };
            }

            allThemesDiv.appendChild(buttonContainer);
        };

        outerSection.appendChild(allThemesDiv);

        const containerDiv = document.createElement('div');
        containerDiv.appendChild(outerSection);

        document.body.appendChild(containerDiv);
    }


    // async function generatePopup() {

    //     const outerSection = document.createElement('section');
    //     outerSection.classList.add('outer');
    //     outerSection.setAttribute('id', 'popupContainer');

    //     const allThemesDiv = document.createElement('div');
    //     allThemesDiv.classList.add('all-themes');

    //     const crossIconDiv = document.createElement('div');
    //     crossIconDiv.classList.add('cross-icon');
    //     crossIconDiv.innerHTML = '<i class="fa fa-times" id="closePopup" aria-hidden="true"></i>';
    //     allThemesDiv.appendChild(crossIconDiv);
    //     crossIconDiv.onclick = () => {
    //         document.body.removeChild(containerDiv);
    //     }

    //     let themesData = [];

    //     for (let i = 1; i <= themes.length; i++) {
    //         let dataCall = await fetch('https://api-library-va.vercel.app/getTheme/' + i);
    //         let data = await dataCall.json();
    //         themesData.push(data.data);
    //     }
    //     console.log(themesData);

    //     for (let i = 0; i < themesData.length; i++) {
    //         const themeData = themesData[i];
    //         const themeDiv = document.createElement('div');
    //         themeDiv.classList.add('theme');

    //         const h1 = document.createElement('h1');
    //         h1.textContent = themeData.name;
    //         themeDiv.appendChild(h1);

    //         const btnsDiv = document.createElement('div');
    //         btnsDiv.classList.add('btns');
    //         for (let j = 0; j < themeData.category.length; j++) {
    //             const buttonText = themeData.category[j];
    //             const button = document.createElement('button');
    //             button.textContent = buttonText.replace(/-/g, ' ');
    //             btnsDiv.appendChild(button);
    //         }
    //         themeDiv.appendChild(btnsDiv);

    //         let isDragging = false;
    //         let startX;

    //         btnsDiv.onmousedown = (event) => {
    //             isDragging = true;
    //             startX = event.clientX;
    //         };

    //         document.addEventListener('mousemove', (event) => {
    //             if (isDragging) {
    //                 const deltaX = startX - event.clientX;
    //                 btnsDiv.scrollLeft += deltaX;
    //                 startX = event.clientX;
    //             }
    //         });

    //         document.addEventListener('mouseup', () => {
    //             isDragging = false;
    //         });

    //         const p = document.createElement('p');
    //         p.textContent = themeData.description;
    //         themeDiv.appendChild(p);

    //         const selectBtnsDiv = document.createElement('div');
    //         selectBtnsDiv.classList.add('select-btns');
    //         const previewBtn = document.createElement('button');
    //         previewBtn.textContent = 'Preview';
    //         previewBtn.onclick = () => {
    //             window.location.href = 'https://library-va.vercel.app/' + themesData[i].id + '/';
    //         }
    //         const selectBtn = document.createElement('button');
    //         selectBtn.textContent = 'Select';
    //         selectBtn.onclick = async () => {
    //             try {
    //                 themes[i].selected = 1;
    //                 const updatedTheme = await fetch('http://localhost:3000/updateTheme/' + pro_id, {
    //                     method: 'PUT',
    //                     headers: {
    //                         'Content-Type': 'application/json'
    //                     },
    //                     body: JSON.stringify({ themes }) 
    //                 });

    //                 await fetch('http://localhost:3000/updateBtnState/' + pro_id, {
    //                     method: 'PUT',
    //                     headers: {
    //                         'Content-Type': 'application/json'
    //                     }
    //                 });

    //                 setTimeout(() => {
    //                     window.location.reload();
    //                 }, 1000);
    //             } catch (error) {
    //                 console.error(error);
    //             }
    //         };

    //         selectBtnsDiv.appendChild(previewBtn);
    //         selectBtnsDiv.appendChild(selectBtn);
    //         themeDiv.appendChild(selectBtnsDiv);

    //         allThemesDiv.appendChild(themeDiv);
    //     }

    //     outerSection.appendChild(allThemesDiv);

    //     const containerDiv = document.createElement('div');
    //     containerDiv.appendChild(outerSection);

    //     document.body.appendChild(containerDiv);
    // }
    // Append generated component to body or any other parent element
    document.querySelector("#main-container").append(componentDiv);
};

async function dataCall() {
    try {
        let res = await fetch("http://localhost:3000/getProjects");
        let data = await res.json();
        console.log(data);
        data.forEach(client => {
            let { pro_logo, pro_id, client_name, domain, category, dev_logo, dev_name, pro_status, progress, themes, websiteBtn } = client;
            generateDynamicComponent2(pro_logo, pro_id, client_name, domain, category, dev_logo, dev_name, pro_status, progress, themes, websiteBtn);
        });
    } catch (error) {
        console.log(error);
    }
}

dataCall();

let websiteBtn = {
    text: 'Select Theme', state: "0"
};
