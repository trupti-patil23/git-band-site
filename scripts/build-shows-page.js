// Added function to load header
function loadHeader() {
    fetch('../pages/header.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('include-header').innerHTML = html;
        });
}

function loadFooter() {
    fetch('../pages/footer.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('include-footer').innerHTML = html;
        });
}

//  call to load the header
loadHeader();

//  call to load the header
loadFooter();