const container = document.getElementById('container');

const width = container.clientWidth;
const height = container.clientHeight;

console.log(`Width: ${width}px, Height: ${height}px`);

function downloadPdf() {
    console.log('savePdf clicked');

    html2pdf(container, {
        margin: 16,
        filename: `jordan-resume ${getCurrentDate()}.pdf`,
        image: { type: 'png', quality: 0.98 },
        html2canvas: { scale: 1 },
        jsPDF: { unit: 'px', format: [width, height], orientation: 'landscape' }
    });
}

function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}