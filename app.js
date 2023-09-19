const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
document.addEventListener('DOMContentLoaded', function () {
	const downloadButton = document.getElementById('download-resume');
	
	if (downloadButton) {
	  downloadButton.addEventListener('click', function (event) {
		event.preventDefault(); // Prevent the default behavior of the anchor tag
  
		// Define the path to your resume file
		const resumeFilePath = 'Nikhil_Cv.pdf'; // Update this with your file's path
  
		// Check if the file exists at the specified path
		fetch(resumeFilePath)
		  .then(response => {
			if (response.status === 200) {
			  // Create a hidden link element to trigger the download
			  const downloadLink = document.createElement('a');
			  downloadLink.href = resumeFilePath;
			  downloadLink.target = '_blank'; // Open the link in a new tab
			  downloadLink.download = 'Nikhil_Cv.pdf'; // Rename the downloaded file
  
			  // Trigger a click event on the link to initiate the download
			  downloadLink.click();
			} else {
			  console.error('File not found or could not be downloaded.');
			}
		  })
		  .catch(error => {
			console.error('An error occurred while trying to download the file:', error);
		  });
      });
    }
  });