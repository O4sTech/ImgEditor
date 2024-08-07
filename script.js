document.getElementById('fileUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const img = new Image();
            img.onload = function() {
                const canvas = document.getElementById('userLogo');
                const context = canvas.getContext('2d');
                
                // Set canvas size to image size
                canvas.width = img.width;
                canvas.height = img.height;
                
                // Draw image on canvas
                context.drawImage(img, 0, 0);

                // Show the canvas
                canvas.style.display = 'block';
            };

            img.src = e.target.result;
        };

        reader.readAsDataURL(file);
    }
});
