document.getElementById('shortenBtn').addEventListener('click', function() {
    const urlInput = document.getElementById('urlInput').value;
    const resultDiv = document.getElementById('result');

    // Basic validation
    if (!urlInput) {
        resultDiv.textContent = 'Please enter a URL.';
        return;
    }

    // Simulate URL shortening (this is where you would normally call your backend)
    const shortenedUrl = 'https://short.ly/' + btoa(urlInput).substring(0, 6); // Simple encoding for demo purposes

    // Display the result
    resultDiv.innerHTML = `<a href="${urlInput}" target="_blank">${shortenedUrl}</a>`;
});