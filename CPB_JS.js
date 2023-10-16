function selectType(type) {
    // Display the correct data entry form based on type
    const form = document.getElementById("dataForm");

    let fields = '';
    if (type === 'B2C') {
        fields = `
            <label>Demographics: <input type="text"></label>
            <!-- Other B2C fields -->
        `;
    } else {
        fields = `
            <label>Company Demographics: <input type="text"></label>
            <!-- Other B2B fields -->
        `;
    }

    form.innerHTML = fields;
    document.getElementById("dataEntry").style.display = "block";
}

function submitData() {
    // Logic to validate and send data for processing
    alert("Data submitted!");
}
