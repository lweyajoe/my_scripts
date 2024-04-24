// Define the function to display the advertisement

function displayAd() {
    // Create the HTML for the advertisement
    var adHTML = `
        <div id="ad-container" style="position: fixed; bottom: 20px; right: 20px; background-color: #ffffff; padding: 10px; border: 1px solid #000000; z-index: 9999;">
            <h3>Need a software developer?</h3>
            <p>Check out <a href="https://datalytika.net/services/index.html">my website</a> to choose the tech services you need or <a href="https://wa.me/254717158091">click here</a> to chat me on <a href="https://wa.me/254717158091">WHATSAPP</a>.</p>
            <button id="close-btn" style="background-color: #ff0000; color: #ffffff; padding: 5px 10px; border: none; cursor: pointer;">Close</button>
        </div>
    `;

    // Append the advertisement HTML to the body of the webpage
    document.body.insertAdjacentHTML('beforeend', adHTML);

    // Add event listener to the close button
    document.getElementById('close-btn').addEventListener('click', function() {
        // Remove the advertisement container when close button is clicked
        document.getElementById('ad-container').remove();
    });
}

// Call the displayAd function after 2 minutes (120000 milliseconds)
setTimeout(displayAd, 60000);
