const handleClick = (current) => {
    const allItems = document.getElementsByClassName("search-button");
    for(let item of allItems){
        item.classList.remove("selected")
    }
    current.classList.add("selected")
}

export default handleClick