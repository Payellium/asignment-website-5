
const historyData = []
let count = 0;
document.getElementById("heart-icon-1").addEventListener("click", function(){
    
    const heartCount = document.getElementById("heart-count")
    count++;
    heartCount.innerText = count;
    
})

document.getElementById("call-btn-1").addEventListener("click", function(){
    alert("Calling National Emergency Service 999...")
    const historyContainer = document.getElementById("history-container")
    for(const data of historyData){
        const div = document.createElement('div')
        div.innerHTML = `
                <div class="flex justify-between items-center mx-4 mt-8">
                    <div>
                        <h1 class="font-bold">${data.name}</h1>
                        <p>${data.number}</p>
                    </div>
                    <p>${data.date}</p>
                </div>
        `
        historyContainer.appendChild(div)
    }


    const data = {
    name: "National Emergency Number",
    number: 999,
    date: new Date().toLocaleTimeString()
    }
    historyData.push(data)
    console.log(historyData)
})
document.getElementById("call-btn-2").addEventListener("click", function(){
    alert("Calling Police Helpline Number 999...")
    const historyContainer = document.getElementById("history-container")
    for(const data of historyData){
        const div = document.createElement('div')
        div.innerHTML = `
                <div class="flex justify-between items-center mx-4 mt-8">
                    <div>
                        <h1 class="font-bold">${data.name}</h1>
                        <p>${data.number}</p>
                    </div>
                    <p>${data.date}</p>
                </div>
        `
        historyContainer.appendChild(div)
    }


    const data = {
    name: "Police Helpline Number",
    number: 999,
    date: new Date().toLocaleTimeString()
    }
    historyData.push(data)
    console.log(historyData)
})

document.getElementById("call-btn-3").addEventListener("click", function(){
    alert("Calling Fire Service Number 999...")
    const historyContainer = document.getElementById("history-container")
    for(const data of historyData){
        const div = document.createElement('div')
        div.innerHTML = `
                <div class="flex justify-between items-center mx-4 mt-8">
                    <div>
                        <h1 class="font-bold">${data.name}</h1>
                        <p>${data.number}</p>
                    </div>
                    <p>${data.date}</p>
                </div>
        `
        historyContainer.appendChild(div)
    }


    const data = {
    name: "Fire Service Number",
    number: 999,
    date: new Date().toLocaleTimeString()
    }
    historyData.push(data)
    console.log(historyData)
})
document.getElementById("call-btn-4").addEventListener("click", function(){
    alert("Calling Ambulance Service Number 1994-999999...")
    const historyContainer = document.getElementById("history-container")
    for(const data of historyData){
        const div = document.createElement('div')
        div.innerHTML = `
                <div class="flex justify-between items-center mx-4 mt-8">
                    <div>
                        <h1 class="font-bold">${data.name}</h1>
                        <p>${data.number}</p>
                    </div>
                    <p>${data.date}</p>
                </div>
        `
        historyContainer.appendChild(div)
    }


    const data = {
    name: "Ambulance Service Number",
    number: '1994-999999',
    date: new Date().toLocaleTimeString()
    }
    historyData.push(data)
    console.log(historyData)
})
document.getElementById("call-btn-5").addEventListener("click", function(){
    alert("Calling Women & Child Helpline Number 109...")
    const historyContainer = document.getElementById("history-container")
    for(const data of historyData){
        const div = document.createElement('div')
        div.innerHTML = `
                <div class="flex justify-between items-center mx-4 mt-8">
                    <div>
                        <h1 class="font-bold">${data.name}</h1>
                        <p>${data.number}</p>
                    </div>
                    <p>${data.date}</p>
                </div>
        `
        historyContainer.appendChild(div)
    }


    const data = {
    name: "Women & Child Helpline Number",
    number: '109',
    date: new Date().toLocaleTimeString()
    }
    historyData.push(data)
    console.log(historyData)
})
document.getElementById("call-btn-6").addEventListener("click", function(){
    alert("Calling Anti-Corruption Helpline Number 106...")
    const historyContainer = document.getElementById("history-container")
    for(const data of historyData){
        const div = document.createElement('div')
        div.innerHTML = `
                <div class="flex justify-between items-center mx-4 mt-8">
                    <div>
                        <h1 class="font-bold">${data.name}</h1>
                        <p>${data.number}</p>
                    </div>
                    <p>${data.date}</p>
                </div>
        `
        historyContainer.appendChild(div)
    }


    const data = {
    name: "Anti-Corruption Helpline Number",
    number: '106',
    date: new Date().toLocaleTimeString()
    }
    historyData.push(data)
    console.log(historyData)
})
document.getElementById("call-btn-7").addEventListener("click", function(){
    alert("Calling Electricity Helpline Number 16216...")
    const historyContainer = document.getElementById("history-container")
    for(const data of historyData){
        const div = document.createElement('div')
        div.innerHTML = `
                <div class="flex justify-between items-center mx-4 mt-8">
                    <div>
                        <h1 class="font-bold">${data.name}</h1>
                        <p>${data.number}</p>
                    </div>
                    <p>${data.date}</p>
                </div>
        `
        historyContainer.appendChild(div)
    }


    const data = {
    name: "Electricity Helpline Number",
    number: '16216',
    date: new Date().toLocaleTimeString()
    }
    historyData.push(data)
    console.log(historyData)
})
document.getElementById("call-btn-8").addEventListener("click", function(){
    alert("Calling Brac Helpline Number 16445...")
    const historyContainer = document.getElementById("history-container")
    for(const data of historyData){
        const div = document.createElement('div')
        div.innerHTML = `
                <div class="flex justify-between items-center mx-4 mt-8">
                    <div>
                        <h1 class="font-bold">${data.name}</h1>
                        <p>${data.number}</p>
                    </div>
                    <p>${data.date}</p>
                </div>
        `
        historyContainer.appendChild(div)
    }


    const data = {
    name: "Brac Helpline Number",
    number: '16445',
    date: new Date().toLocaleTimeString()
    }
    historyData.push(data)
    console.log(historyData)
})
document.getElementById("call-btn-9").addEventListener("click", function(){
    alert("Calling Bangladesh Railway Helpline Number 163...")
    const historyContainer = document.getElementById("history-container")
    for(const data of historyData){
        const div = document.createElement('div')
        div.innerHTML = `
                <div class="flex justify-between items-center mx-4 mt-8">
                    <div>
                        <h1 class="font-bold">${data.name}</h1>
                        <p>${data.number}</p>
                    </div>
                    <p>${data.date}</p>
                </div>
        `
        historyContainer.appendChild(div)
    }


    const data = {
    name: "Bangladesh Railway Helpline Number",
    number: '163',
    date: new Date().toLocaleTimeString()
    }
    historyData.push(data)
    console.log(historyData)
})


document.getElementById("heart-icon-2").addEventListener("click", function(){
    
    const heartCount = document.getElementById("heart-count")
    count++;
    heartCount.innerText = count;
})
document.getElementById("heart-icon-3").addEventListener("click", function(){
    
    const heartCount = document.getElementById("heart-count")
    count++;
    heartCount.innerText = count;
})
document.getElementById("heart-icon-4").addEventListener("click", function(){
    
    const heartCount = document.getElementById("heart-count")
    count++;
    heartCount.innerText = count;
})
document.getElementById("heart-icon-5").addEventListener("click", function(){
    
    const heartCount = document.getElementById("heart-count")
    count++;
    heartCount.innerText = count;
})
document.getElementById("heart-icon-6").addEventListener("click", function(){
    
    const heartCount = document.getElementById("heart-count")
    count++;
    heartCount.innerText = count;
})
document.getElementById("heart-icon-7").addEventListener("click", function(){
    
    const heartCount = document.getElementById("heart-count")
    count++;
    heartCount.innerText = count;
})
document.getElementById("heart-icon-8").addEventListener("click", function(){
    
    const heartCount = document.getElementById("heart-count")
    count++;
    heartCount.innerText = count;
})
document.getElementById("heart-icon-9").addEventListener("click", function(){
    
    const heartCount = document.getElementById("heart-count")
    count++;
    heartCount.innerText = count;
})


document.getElementById("clear-btn").addEventListener("click", function(){
    document.getElementById("history-container").innerHTML = "";
})
