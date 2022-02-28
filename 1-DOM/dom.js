function manipulateDom() {
    const domArray = document.getElementsByClassName('quote');
    for (let i=0;i<domArray.length;i++){
        domArray[i].style.borderColor="blue";
        domArray[i].style.backgroundColor = "lightblue";
        domArray[i].style.fontStyle = "italic";
    };
};

export { manipulateDom };