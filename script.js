const modelFile = document.getElementById('modelFile');
const materialType = document.getElementById('materialType');
const filamentCost = document.getElementById('filamentCost');
const infillPercentage = document.getElementById('infillPercentage');
const layerHeight = document.getElementById('layerHeight');
const calculateButton = document.getElementById('calculateButton');
const filamentUsage = document.getElementById('filamentUsage');
const estimatedCost = document.getElementById('estimatedCost');
const visualization = document.getElementById('visualization');

// Update infill percentage output
function updateInfillOutput() {
    const output = document.querySelector('output[for="infillPercentage"]');
    if (output && infillPercentage) {
        output.textContent = `${infillPercentage.value}%`;
    }
}

// Initialize infill percentage output
updateInfillOutput();

// Add event listener for infill percentage change
if (infillPercentage) {
    infillPercentage.addEventListener('input', updateInfillOutput);
}

calculateButton.addEventListener('click', () => {
    const file = modelFile.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            // Simulated filament usage calculation (replace with actual implementation)
            const estimatedUsage = calculateFilamentUsage(event.target.result);
            filamentUsage.textContent = `${estimatedUsage.toFixed(2)} kg`;
            
            const cost = estimatedUsage * parseFloat(filamentCost.value);
            estimatedCost.textContent = `₹ ${cost.toFixed(2)}`;
            
            // Simulated visualization (replace with actual implementation)
            visualize(estimatedUsage);
        };
        reader.readAsArrayBuffer(file);
    } else {
        alert('Please upload a 3D model file.');
    }
});

// Placeholder function for filament usage calculation
function calculateFilamentUsage(modelData) {
    // Implement your logic here based on the model data and print settings
    // For this example, we'll use a simple random number
    return Math.random() * 0.5 + 0.1;
}

// Placeholder function for visualization
function visualize(usage) {
    // Implement your visualization logic here
    // For this example, we'll just change the background color based on usage
    const hue = Math.min(120, 120 - usage * 100);
    visualization.style.backgroundColor = `hsl(${hue}, 80%, 60%)`;
}

// File name display
modelFile.addEventListener('change', (event) => {
    const fileName = event.target.files[0]?.name || 'No file selected';
    const fileLabel = document.querySelector('.file-label');
    if (fileLabel) {
        fileLabel.textContent = fileName;
    }
});

