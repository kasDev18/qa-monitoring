const qmrNp = document.querySelector('.qmr-np');
const nonPaper = document.getElementById('qmr-np');
const qmrHolder = document.querySelector('.qmr-holder');
const paper = document.getElementById('qmr-paper');
const corrReport = document.querySelector('.corr-report');
const car = document.getElementById('car');
const labels = document.getElementById('labels');
const calSticker = document.getElementById('cal-sticker');
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
let i = 0;
const spans = document.querySelectorAll('#ink-color');
const print = document.getElementById('print');
const submit = document.getElementById('submit')
const colorInput = document.getElementById('exampleColorInput');
colorInput.value = ''
const colorBox = document.querySelector('.color-box');
const labelsTag = document.querySelector('.labels');
const navlist = document.querySelector('.user-navlist');
const container = document.querySelectorAll('#work-cont');
const userLog = document.getElementById('user-log');
const userNavlist = document.querySelector('.user-navlist')

container.forEach(function(contmenu){
    contmenu.addEventListener('click', function(e){
        userLog.style.display = 'none'
    })
})
userNavlist.addEventListener('click', function(e){
    userLog.style.display = 'block'
    userLog.style.transition = '1s'
})
paper.addEventListener('click', function(e){
    if(qmrHolder.style.display === 'none')
    {
        submit.style.display = 'block'
        paper.style.paddingBottom = '25px'
        qmrHolder.style.display = 'block'
        paper.style.backgroundColor = '#2e5806'
        paper.style.color = 'white'
        qmrNp.style.display = 'none'
        nonPaper.style.backgroundColor = '#dfe2df'
        nonPaper.style.color = '#2be225'
        corrReport.style.display = 'none'
        car.style.backgroundColor = '#dfe2df'
        car.style.color = '#2be225'
        labelsTag.style.display = 'none'
        labels.style.backgroundColor = '#dfe2df'
        labels.style.color = '#2be225'
    }
    else if (qmrHolder.style.display === 'block')
    {
        qmrHolder.style.display = 'block'
        paper.style.backgroundColor = '#2e5806'
        paper.style.color = 'white'
    }
    else
    {
        qmrHolder.style.display = 'block'
        paper.style.backgroundColor = '#2e5806'
        paper.style.color = 'white'
        qmrNp.style.display = 'none'
        // nonPaper.style.backgroundColor = '#dfe2df'
        // nonPaper.style.color = '#2be225'
        corrReport.style.display = 'none'
        labelsTag.style.display = 'none'
        // car.style.backgroundColor = '#dfe2df'
        // car.style.color = '#2be225'
    }
})
nonPaper.addEventListener('click', function(e){
    if (qmrNp.style.display === 'none')
    {
        submit.style.display = 'block'
        nonPaper.style.paddingBottom = '20px'
        nonPaper.style.paddingLeft = '15px'
        qmrNp.style.display = 'block'
        nonPaper.style.backgroundColor = '#2e5806'
        nonPaper.style.color = 'white'
        qmrHolder.style.display = 'none'
        paper.style.backgroundColor = '#dfe2df'
        paper.style.color = '#2be225'
        corrReport.style.display = 'none'
        car.style.backgroundColor = '#dfe2df'
        car.style.color = '#2be225'
        corrReport.style.display = 'none'
        car.style.backgroundColor = '#dfe2df'
        car.style.color = '#2be225'
        labelsTag.style.display = 'none'
        labels.style.backgroundColor = '#dfe2df'
        labels.style.color = '#2be225'
    }
    else if  (qmrNp.style.display === 'block')
    {
        qmrNp.style.display = 'block'
        nonPaper.style.backgroundColor = '#2e5806'
        nonPaper.style.color = 'white'
        colorInput.value.style.height = '200px'
    } 
    else
    {
        labelsTag.style.display = 'none'
        qmrHolder.style.display = 'none'
        qmrNp.style.display = 'block'
        nonPaper.style.backgroundColor = '#2e5806'
        nonPaper.style.color = 'white'
    }
})
colorInput.addEventListener('click', function (e) {
    colorBox.style.backgroundColor = colorInput.value
})
for (let span of spans) {
    span.style.color = colors[i]
    i++
}
car.addEventListener('click', function (e){
    if (corrReport.style.display === 'none')
    {
        print.style.display = 'block'
        submit.style.display = 'block'
        car.style.paddingLeft = '9px'
        corrReport.style.display = 'block'
        car.style.backgroundColor = '#2e5806'
        car.style.color = 'white'
        qmrHolder.style.display = 'none'
        paper.style.backgroundColor = '#dfe2df'
        paper.style.color = '#2be225'
        qmrNp.style.display = 'none'
        nonPaper.style.backgroundColor = '#dfe2df'
        nonPaper.style.color = '#2be225'
        labelsTag.style.display = 'none'
        labels.style.backgroundColor = '#dfe2df'
        labels.style.color = '#2be225'
    }
    else if (corrReport.style.display === 'block')
    {
        corrReport.style.display = 'block'
        car.style.backgroundColor = '#2e5806'
        car.style.color = 'white'
    }
    else
    {
        labelsTag.style.display = 'none'
        qmrHolder.style.display = 'none'
        qmrNp.style.display = 'none'
        corrReport.style.display = 'block'
        car.style.backgroundColor = '#2e5806'
        car.style.color = 'white'
    }
})
labels.addEventListener('click' , function(e){
    if(labelsTag.style.display = 'none')
    {
        print.style.display = 'none'
        submit.style.display = 'none'
        labels.style.paddingLeft = '5px'
        labelsTag.style.display = 'block'
        labels.style.backgroundColor = '#2e5806'
        labels.style.color = 'white'
        qmrHolder.style.display = 'none'
        paper.style.backgroundColor = '#dfe2df'
        paper.style.color = '#2be225'
        qmrNp.style.display = 'none'
        nonPaper.style.backgroundColor = '#dfe2df'
        nonPaper.style.color = '#2be225'
        corrReport.style.display = 'none'
        car.style.backgroundColor = '#dfe2df'
        car.style.color = '#2be225'
    }
    else if (labelsTag.style.display === 'block') 
    {
        labelsTag.style.display = 'block'
        labels.style.backgroundColor = '#2e5806'
        labels.style.color = 'white'
    }
    else 
    {
        qmrHolder.style.display = 'none'
        qmrNp.style.display = 'none'
        corrReport.style.display = 'none'
        labelsTag.style.display = 'block'
        labels.style.backgroundColor = '#2e5806'
        labels.style.color = 'white'
    }
    
})
