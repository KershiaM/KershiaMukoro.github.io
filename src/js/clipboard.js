

function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        navigator.clipboard.writeText(element.textContent).then(() => {
            alert('Text copied to clipboard!');
        }).catch(err => {
            alert('Failed to copy text: ' + err);
        });
    } else {
        alert('Element not found: ' + elementId);
    }
}

export default copyToClipboard
