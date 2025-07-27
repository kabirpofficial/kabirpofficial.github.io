document.getElementById("print-resume").addEventListener("click", function () {

    const element = document.querySelector("#site-content");
    html2pdf().set({
        margin: 0,
        filename: 'Resume_Muhammad_Kabir_Hassan.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    }).from(element).save();
});