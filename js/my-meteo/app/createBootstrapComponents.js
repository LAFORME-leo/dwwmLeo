{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}
function createCardWithList(pImageSRC,pTitle,pText,pListInfo)
{
    const card = document.createElement('div');
    card.classList.add('card');
    const img = document.createElement('img')
    img.setAttribute('src',pImageSRC)
    img.classList.add('card-img-top')
    const body = document.createElement('div')
    body.classList.add('card-body')
    const title = document.createElement('h5')
    title.classList.add('card-text')
    title.textContent = pTitle;
    const p = document.createElement('p')
    p.textContent=pText
    console.log('plist');
    console.log(pListInfo);
    const ul = document.createElement('ul')
    let li = document.createElement('li')
    li.textContent = ` feels_like: ${pListInfo.feels_like}` 
    ul.appendChild(li) 
    li = document.createElement('li')
    li.textContent = ` humidity: ${pListInfo.humidity}` 
    ul.appendChild(li) 
    li = document.createElement('li')
    li.textContent = ` pressure: ${pListInfo.pressure}` 
    ul.appendChild(li)  
    li = document.createElement('li')
    li.textContent = ` temp: ${pListInfo.temp}` 
    ul.appendChild(li)  
    li = document.createElement('li')
    li.textContent = ` temp_max: ${pListInfo.temp_max}` 
    ul.appendChild(li)  
    li = document.createElement('li')
    li.textContent = ` temp_min: ${pListInfo.temp_min}` 
    ul.appendChild(li)     
    body.appendChild(title)
    body.appendChild(p)
    body.appendChild(ul)
    card.appendChild(img)
    card.appendChild(body)
    return card;
}