function generateDynamicComponent(projectID, clientName, clientURL, category, status, progress, imgSrc) {
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
        data.forEach(client => {
            let { category, pro_id, domain, client_name, pro_status, progress, pro_logo } = client;
            generateDynamicComponent(pro_id, client_name, domain, category, pro_status, progress, pro_logo);
        });
    } catch (error) {
        console.log(error);
    }
}

dataCall();

// generateDynamicComponent('00002', 'Client Name', 'https://www.hi.com', 'Portfolio', 'Last Testing Stage - Deadline 25th March', '70%', 'https://fakeimg.pl/100x100')
