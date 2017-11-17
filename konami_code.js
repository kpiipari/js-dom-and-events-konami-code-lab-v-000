const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
    let index = 0;

    document.body.addEventListener("keydown", function(e) {
        const keyName = parseInt(e.which || e.detail || e.location);

        if (code[index] === keyName) {
            index++;
            if (index === code.length - 1) {
                alert("You unlocked the Konami code!");
                index = 0;
            }
        } else {
            index = 0;
        }
    });
}
