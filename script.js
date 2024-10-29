document.getElementById('calculationType').addEventListener('change', function() {
    const type = this.value;
    const formInputs = document.getElementById('formInputs');
    formInputs.innerHTML = ''; // Clear previous inputs

    let html = '';

    if (type === 'simpleInterest') {
        html += `
            <h2>Bunga Tunggal</h2>
            <div class="form-group">
                <label for="principal">Jumlah Pinjaman (Principal):</label>
                <input type="number" id="principal" placeholder="Masukkan jumlah pinjaman" required>
            </div>
            <div class="form-group">
                <label for="rate">Suku Bunga (%):</label>
                <input type="number" id="rate" placeholder="Masukkan suku bunga" required>
            </div>
            <div class="form-group">
                <label for="time">Lama Pinjaman (tahun):</label>
                <input type="number" id="time" placeholder="Masukkan lama pinjaman" required>
            </div>
        `;
    } else if (type === 'compoundInitial') {
        html += `
            <h2>Bunga Majemuk (Modal Awal)</h2>
            <div class="form-group">
                <label for="principalCompound">Modal Awal:</label>
                <input type="number" id="principalCompound" placeholder="Masukkan modal awal" required>
            </div>
            <div class="form-group">
                <label for="compoundRate">Suku Bunga (%):</label>
                <input type="number" id="compoundRate" placeholder="Masukkan suku bunga" required>
            </div>
            <div class="form-group">
                <label for="compoundTime">Lama Investasi (tahun):</label>
                <input type="number" id="compoundTime" placeholder="Masukkan lama investasi" required>
            </div>
        `;
    } else if (type === 'compoundFinal') {
        html += `
            <h2>Bunga Majemuk (Modal Akhir)</h2>
            <div class="form-group">
                <label for="finalAmount">Modal Akhir:</label>
                <input type="number" id="finalAmount" placeholder="Masukkan modal akhir" required>
            </div>
            <div class="form-group">
                <label for="finalRate">Suku Bunga (%):</label>
                <input type="number" id="finalRate" placeholder="Masukkan suku bunga" required>
            </div>
            <div class="form-group">
                <label for="finalTime">Lama Investasi (tahun):</label>
                <input type="number" id="finalTime" placeholder="Masukkan lama investasi" required>
            </div>
        `;
    } else if (type === 'annuity') {
        html += `
            <h2>Anuitas</h2>
            <div class="form-group">
                <label for="annuityPrincipal">Jumlah Pinjaman (Principal):</label>
                <input type="number" id="annuityPrincipal" placeholder="Masukkan jumlah pinjaman" required>
            </div>
            <div class="form-group">
                <label for="annuityRate">Suku Bunga (%):</label>
                <input type="number" id="annuityRate" placeholder="Masukkan suku bunga" required>
            </div>
            <div class="form-group">
                <label for="annuityTime">Lama Pinjaman (tahun):</label>
                <input type="number" id="annuityTime" placeholder="Masukkan lama pinjaman" required>
            </div>
        `;
    }

    formInputs.innerHTML = html;
    document.getElementById('calculateButton').style.display = 'block';
});

document.getElementById('calculateButton').addEventListener('click', function() {
    const type = document.getElementById('calculationType').value;
    let resultText = '';

    if (type === 'simpleInterest') {
        const principal = parseFloat(document.getElementById('principal').value);
        const rate = parseFloat(document.getElementById('rate').value) / 100;
        const time = parseFloat(document.getElementById('time').value);

        const interest = principal * rate * time;
        const total = principal + interest;
        resultText = `Bunga: Rp ${interest.toFixed(2)}, Total: Rp ${total.toFixed(2)}`;
    } else if (type === 'compoundInitial') {
        const principal = parseFloat(document.getElementById('principalCompound').value);
        const rate = parseFloat(document.getElementById('compoundRate').value) / 100;
        const time = parseFloat(document.getElementById('compoundTime').value);

        const total = principal * Math.pow((1 + rate), time);
        const interest = total - principal;
        resultText = `Bunga: Rp ${interest.toFixed(2)}, Total: Rp ${total.toFixed(2)}`;
    } else if (type === 'compoundFinal') {
        const finalAmount = parseFloat(document.getElementById('finalAmount').value);
        const rate = parseFloat(document.getElementById('finalRate').value) / 100;
        const time = parseFloat(document.getElementById('finalTime').value);

        const principal = finalAmount / Math.pow((1 + rate), time);
        const interest = finalAmount - principal;
        resultText = `Bunga: Rp ${interest.toFixed(2)}, Modal Awal: Rp ${principal.toFixed(2)}`;
    } else if (type === 'annuity') {
        const principal = parseFloat(document.getElementById('annuityPrincipal').value);
        const rate = parseFloat(document.getElementById('annuityRate').value) / 100;
        const time = parseFloat(document.getElementById('annuityTime').value);

        const annuity = principal * (rate / (1 - Math.pow((1 + rate), -time)));
        resultText = `Angsuran per periode: Rp ${annuity.toFixed(2)}`;
    }

    document.getElementById('result').innerText = resultText;
});
