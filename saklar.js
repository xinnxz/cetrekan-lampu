function saklar(action, idLampu) {
    let lampu1 = document.getElementById('lampu1');
    let lampu2 = document.getElementById('lampu2');
    let lampu3 = document.getElementById('lampu3');

    if (action == 'on') {
        if (idLampu == 1) {
            lampu1.src = "assets/images/on.png";
        } else if (idLampu == 2) {
            lampu2.src = "assets/images/on.png";
        } else if (idLampu == 3) {
            lampu3.src = "assets/images/on.png";
        }
    }

    if (action == 'off') {
        if (idLampu == 1) {
            lampu1.src = "assets/images/off.png";
        } else if (idLampu == 2) {
            lampu2.src = "assets/images/off.png";
        } else if (idLampu == 3) {
            lampu3.src = "assets/images/off.png";
        }
    }

}