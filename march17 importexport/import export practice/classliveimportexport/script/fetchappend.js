const getData = async (url)=>{
    try{
        let res = await fetch(url);
        let data = await res.json();
        return data ;

    }
    catch(err){
        console.log(err);
    }
};

const append = (data,parent)=>{
    parent.innerHTML = "";

    data.forEach((elem)=>{
        let div = document.createElement("div");
        let title = document.createElement("h3");
        title.innerText = elem.title;
        let image = document.createElement("img");
        image.src = elem.image;
        let price = document.createElement("p");
        price.innerText = elem.price;
        div.append(image , title , price);
        parent.append(div);
    });
};

export {getData , append}; // for multiple functions
