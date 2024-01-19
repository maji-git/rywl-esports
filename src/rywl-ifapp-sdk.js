const rywlKey = ""

const sendRYWLParent = () => {
    window.parent.postMessage("rywl_data", "*")
    console.log("SENT")
}

function sendMsg(code,data) {
    window.parent.postMessage({code, data}, "*")
}

export function openLink(url) {
    sendMsg("link_open", {url})
}

export async function requestUserdata(url) {
    sendMsg("get_userdata", {})
}

export function init(metadata) {
    window.parent.postMessage({code: "connect_init", metadata}, "*")

    window.addEventListener(
        "message",
        (event) => {
            console.log("ifapp:", event)
        },
        false,
    );
}