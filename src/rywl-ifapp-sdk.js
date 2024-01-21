export const PermissionFlag = {
    "PERSONAL_DATA": 0
}

export const ThemeFlag = {
    "LIGHT": 0,
    "DARK": 1,
    "ADAPTIVE": 2
}

const MetadataTemplate = {
     /**
      * Application Name
     * @type {string}
     */
    appName: "default",
    /**
     * Request permissions
     * @type {PermissionFlag}
     */
    permissions: PermissionFlag.PERSONAL_DATA,
    /**
     * Overall theme of the app
     * @type {ThemeFlag}
     */
    theme: ThemeFlag.LIGHT
}

function sendMsg(code,data) {
    window.parent.postMessage({code, data}, "*")
}

export function openLink(url) {
    sendMsg("link_open", {url})
}

export async function requestUserdata() {
    sendMsg("get_userdata", {})
}

/**
 * 
 * @param {MetadataTemplate} metadata 
 */
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