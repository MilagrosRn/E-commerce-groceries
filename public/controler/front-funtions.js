
window.onload = function () {
    addShoppingCar();
   
}

let addShoppingCar = (status) => {

    // status = false; //false=no elegido , true=elegido
    showBagde_ShoppingCar = 0;
    showContentModel_ShoppingCar = false;
    document.getElementById("buttonAdd-demo").addEventListener('click', () => {
        showBagde_ShoppingCar = 1
        document.getElementById('contentBagde').innerHTML = showBagde_ShoppingCar;
        showContentModel_ShoppingCar = true;
          console.log(showContentModel_ShoppingCar)
    if (showContentModel_ShoppingCar === true) {
        const el = document.getElementById("modalContentEmpty_ShoppingCar");
el.classList.add('hidden');

        const visibility = document.getElementById("modalContent_ShoppingCar");
        visibility.classList.remove('hidden');
        visibility.classList.add('visibility');
    }

    })
   
};