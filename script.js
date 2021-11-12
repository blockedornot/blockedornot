const URL = "https://yts.mx/api"


function get(url, onGet) {

    const timer = new Promise((resolve) => {
        setTimeout(resolve, 5000, {
        timeout: true,
        });
    });

    
    return Promise.race([
        fetch(url),
        timer
    ]).then(response => {
        if (response.timeout) {
            blocked();
        }
        if (response.status == 200) {
            working();
        } else {
            blocked();
        }    });
}

function waiting() {
    document.body.classList.remove("bg-danger", "bg-success");
    document.body.classList.add("bg-warning");
    document.getElementById("loading").classList.remove("d-none");
    document.getElementById("blocked").classList.add("d-none");
    document.getElementById("working").classList.add("d-none");
}

function working() {
    document.body.classList.remove("bg-danger", "bg-warning");
    document.body.classList.add("bg-success");
    document.getElementById("loading").classList.add("d-none");
    document.getElementById("blocked").classList.add("d-none");
    document.getElementById("working").classList.remove("d-none");
}

function blocked() {
    document.body.classList.remove("bg-success", "bg-warning");
    document.body.classList.add("bg-danger");
    document.getElementById("loading").classList.add("d-none");
    document.getElementById("blocked").classList.remove("d-none");
    document.getElementById("working").classList.add("d-none");
}



function check() {

    let onGet = (e) => {
        console.log(Http.responseText)
    }
    
    get(URL, onGet);
}

waiting();
check();
