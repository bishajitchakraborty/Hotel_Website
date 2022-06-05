export function authenticated() {
    if (typeof window !== "undefined") {
        let loggedIn = localStorage.getItem("loggedIn")
        if (loggedIn !== null) {
            if (loggedIn === 'true') {
                return true
            }
        }
        return false
    }
    return false
}