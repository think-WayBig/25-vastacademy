function generateDynamicComponent1(projectID, clientName, clientURL, category, status, progress, imgSrc) {
    // Create main container div
    var componentDiv = document.createElement('div');
    componentDiv.classList.add('component');

    // Create upper div
    var upperDiv = document.createElement('div');
    upperDiv.classList.add('upper');

    // Create img div
    var imgDiv = document.createElement('div');
    imgDiv.classList.add('img');

    // Create img element
    var imgElement = document.createElement('img');
    imgElement.setAttribute('src', imgSrc);
    imgDiv.appendChild(imgElement);

    // Create right div
    var rightDiv = document.createElement('div');
    rightDiv.classList.add('right');

    // Create p element for project ID
    var projectIDP = document.createElement('p');
    projectIDP.textContent = 'Project ID: ' + projectID;
    rightDiv.appendChild(projectIDP);

    // Create h1 element for client name
    var clientNameH1 = document.createElement('h1');
    clientNameH1.textContent = clientName;
    rightDiv.appendChild(clientNameH1);

    // Create h4 element for client URL
    var clientURLH4 = document.createElement('h4');
    var clientURLAnchor = document.createElement('a');
    clientURLAnchor.setAttribute('href', clientURL);
    clientURLAnchor.textContent = clientURL;
    clientURLH4.appendChild(clientURLAnchor);
    rightDiv.appendChild(clientURLH4);

    // Create div for category
    var categoryDiv = document.createElement('div');
    categoryDiv.setAttribute('id', 'category');
    var categoryP = document.createElement('p');
    categoryP.classList.add('category');
    categoryP.classList.add(category);
    categoryP.textContent = category;
    categoryDiv.appendChild(categoryP);
    rightDiv.appendChild(categoryDiv);

    // Append img div and right div to upper div
    upperDiv.appendChild(imgDiv);
    upperDiv.appendChild(rightDiv);

    // Append upper div to main container
    componentDiv.appendChild(upperDiv);

    // Create hr element
    var hrElement = document.createElement('hr');
    componentDiv.appendChild(hrElement);

    // Create lower div
    var lowerDiv = document.createElement('div');
    lowerDiv.classList.add('lower');

    // Create h3 element for project status
    var projectStatusH3 = document.createElement('h3');
    projectStatusH3.textContent = 'Project Status';
    lowerDiv.appendChild(projectStatusH3);

    // Create p element for status
    var statusP = document.createElement('p');
    statusP.classList.add('status');
    statusP.textContent = status;
    lowerDiv.appendChild(statusP);

    // Create div for progress bar
    var progressBarDiv = document.createElement('div');
    progressBarDiv.classList.add('progress-bar');

    // Create div for progress
    var progressDiv = document.createElement('div');
    progressDiv.classList.add('progress');
    progressDiv.style.width = progress;
    var progressP = document.createElement('p');
    progressP.textContent = progress;
    progressDiv.appendChild(progressP);
    progressBarDiv.appendChild(progressDiv);
    lowerDiv.appendChild(progressBarDiv);

    // Create p element for details
    var detailsP = document.createElement('p');
    detailsP.textContent = 'Check Details';
    detailsP.classList.add('check-details');
    detailsP.setAttribute('onclick', "detailsPopup('" + projectID + "')");
    var arrowIcon = document.createElement('i');
    arrowIcon.classList.add('fa-solid');
    arrowIcon.classList.add('fa-arrow-up-right-from-square');
    arrowIcon.style.marginLeft = '5px';
    detailsP.appendChild(arrowIcon);
    lowerDiv.appendChild(detailsP);

    // Append lower div to main container
    componentDiv.appendChild(lowerDiv);

    let mainContainer = document.getElementById('main-container');
    mainContainer.append(componentDiv);
}

async function dataCall() {
    try {
        let res = await fetch("http://localhost:3000/getProjects");
        let data = await res.json();
        console.log(data);
        data.forEach(client => {
            let { category, pro_id, domain, client_name, pro_status, progress, pro_logo } = client;
            generateDynamicComponent1(pro_id, client_name, domain, category, pro_status, progress, pro_logo);
        });
    } catch (error) {
        console.log(error);
    }
}

dataCall();

// generateDynamicComponent('00002', 'Client Name', 'https://www.hi.com', 'Portfolio', 'Last Testing Stage - Deadline 25th March', '70%', 'https://fakeimg.pl/100x100')


function generateDynamicComponent2(id, client, url, category, dev, status) {
    // Create main container element
    var componentDiv = document.createElement('div');
    componentDiv.classList.add('component');

    // Create upper section
    var upperDiv = document.createElement('div');
    upperDiv.classList.add('upper');

    // Create image container
    var imgDiv = document.createElement('div');
    imgDiv.classList.add('img');
    var img = document.createElement('img');
    img.src = 'https://fakeimg.pl/100x100';
    img.alt = '';
    imgDiv.appendChild(img);

    // Create client name container
    var clientNameDiv = document.createElement('div');
    clientNameDiv.classList.add('client-name');
    var h1 = document.createElement('h1');
    h1.textContent = client;
    var h4 = document.createElement('h4');
    var a = document.createElement('a');
    a.href = url;
    a.textContent = url;
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
    projectIDParagraph.innerHTML = '<b>ID:</b> ' + id;
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
        progressBarDiv.innerHTML = `
        <h3>Project Status</h3>
        <section class="all-nodes">
            <div class="nodes">
            <div class="nodes">
            <div id="node1" class="node">
                <img src="./assets/tick.png" alt="">
            </div>
            <div id="node2" class="node">
                <img src="./assets/tick.png" alt="">
            </div>
            <div id="node3" class="node">
                <img src="./assets/tick.png" alt="">
            </div>
            <div id="node4" class="node">
                <img src="./assets/tick.png" alt="">
            </div>
            <div id="node5" class="node current">
                <img style="position: absolute;z-index: 9999;width: 20px!important;"
                    src="./assets/ball.png" alt="">
                <div class="sonar-wave sonar-wave1">
                    <div class="sonar-wave sonar-wave2"></div>
                    <div class="sonar-wave sonar-wave3"></div>
                    <div class="sonar-wave sonar-wave4"></div>
                </div>
            </div>
            <div id="node6" class="node">
            </div>
            <div id="node7" class="node"></div>
            </div>
            </div>
            <div class="text">
                <p>Client Added</p>
                <p>Model Selection</p>
                <p>Getting Data From Client</p>
                <p>Updating Text & Media</p>
                <p>Adding Dynamic Features</p>
                <p>Approval</p>
                <p>Completed</p>
            </div>
        </section>`;
    } else if (category == "Static Website") {
        progressBarDiv.innerHTML = `
        <h3>Project Status</h3>
        <section class="all-nodes">
            <div class="nodes">
            <div id="node1" class="node">
                <img src="./assets/tick.png" alt="">
            </div>
            <div id="node2" class="node">
                <img src="./assets/tick.png" alt="">
            </div>
            <div id="node3" class="node">
                <img src="./assets/tick.png" alt="">
            </div>
            <div id="node4" class="node">
                <img src="./assets/tick.png" alt="">
            </div>
            <div id="node5" class="node current">
                <img style="position: absolute;z-index: 9999;width: 20px!important;"
                    src="./assets/ball.png" alt="">
                <div class="sonar-wave sonar-wave1">
                    <div class="sonar-wave sonar-wave2"></div>
                    <div class="sonar-wave sonar-wave3"></div>
                    <div class="sonar-wave sonar-wave4"></div>
                </div>
            </div>
            <div id="node6" class="node">
            </div>
            <div id="node7" class="node"></div>
            </div>
            <div class="text">
                <p>User Added</p>
                <p>Model Selection</p>
                <p>Getting Data From Client</p>
                <p>Updating Text/Media</p>
                <p>Adding Dynamic Features</p>
                <p>Approval</p>
                <p>Completed</p>
            </div>
        </section>`;
    }

    // Append progress bar section to lower section
    lowerDiv.appendChild(progressBarDiv);

    // Create right work section
    var rightWorkDiv = document.createElement('div');
    rightWorkDiv.classList.add('right-work');
    rightWorkDiv.innerHTML = `
        <div class="developer-img">
            <img src="https://fakeimg.pl/100x100" alt="">
        </div>
        <p class="title">Developer</p>
        <h2 class="developer-name">${dev}</h2>
        <div class="msg">
            <h2>Notification</h2>
            <p>${status}</p>
        </div>
        <div class="btn">
            <button class="more-detail">More Details</button>
            <button class="check-website">Check Website</button>
        </div>`;

    // Append right work section to lower section
    lowerDiv.appendChild(rightWorkDiv);

    // Append lower section to main container
    componentDiv.appendChild(lowerDiv);

    // Append generated component to body or any other parent element
    document.querySelector("#main-container").appendChild(componentDiv);
}

// Call the function with dynamic data values
generateDynamicComponent2('00001', '3G-Digital', 'https://www.clientname.com', 'Static Website', 'Sandeep Singh', 'Client must choose a model within 3 days, or this account will be removed');
generateDynamicComponent2('00001', '3G-Digital', 'https://www.clientname.com', 'Portfolio Website', 'Sandeep Singh', 'Client must choose a model within 3 days, or this account will be removed');
generateDynamicComponent2('00001', '3G-Digital', 'https://www.clientname.com', 'Portfolio Website', 'Sandeep Singh', 'Client must choose a model within 3 days, or this account will be removed');
