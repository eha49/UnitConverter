import data from './data.js'

const convertBtn = getElement('convert-btn');
const inputValue = getElement('input-value');
const displayResult = getElement('display-result');

function getElement(id) {
    return (document.getElementById(id));
};

function roundNum(num) {
    return Math.round(num * 1000) / 1000
}

function convert() {
    if (+inputValue.value) {
        const htmlString = data.map(qty => {
            return `
            <div class='container-result'>
                <h2>${qty.title}</h2>
                <p>
                    ${+inputValue.value} ${qty.metricUnit} = ${roundNum(+inputValue.value * qty.toImperial)} ${qty.imperialUnit} |
                    ${+inputValue.value} ${qty.imperialUnit} = ${roundNum(+inputValue.value * qty.toMetric)} ${qty.metricUnit}
                </p>
            </div>
            `
        }).join('');

        displayResult.innerHTML = htmlString
    }
}

convertBtn.addEventListener('click', convert)

