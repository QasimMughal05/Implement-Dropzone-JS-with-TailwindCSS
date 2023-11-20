// scripts.js

Dropzone.options.myDropzone = {
    init: function () {
        this.on("success", function (file) {
            // Add your success handling code here
            file.previewTemplate.querySelector(".dz-success-mark").style.display = "block";
        });

        this.on("removedfile", function (file) {
            // Add your file removal code here
            file.previewTemplate.querySelector(".dz-success-mark").style.display = "none";
        });
    },
};
