const thing = document.querySelector("#thing")
const store = document.querySelector("#store")
const wishlistButton = document.querySelector(".wishlistButton")
const wishlistContainer = document.querySelector(".wishlistContainer")


const wishlistFactory = () => `
    <h3>I can purchase ${thing.value} at ${store.value}</h3>
`

const putInDOM = () => wishlistContainer.innerHTML += wishlistFactory()

wishlistButton.addEventListener("click", () => {
    if (thing.value !== "" && store.value !== ""){
        putInDOM()
        thing.value = ""
        store.value = ""
        thing.focus()
    } else {
        window.alert("You must fill out both input fields")
    }
})