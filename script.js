const infoBtn = document.getElementById("info-btn")
const closeBtn = document.getElementById("close-btn")
const rightSideBar = document.querySelector(".right")
const chatList = document.querySelectorAll(".chat-list-item")
const textMessage = document.getElementById("msg")
const msgArea = document.querySelector(".center-mid")
const radioBtn = document.getElementById("radio-btn")

const messages = [
  {
    name: "Babe",
    messages: [],
  },

  {
    name: "Mummy",
    messages: ["s:Hello", "r:Hi"],
  },
  {
    name: "Vishakha",
    messages: ["s:Hello", "r:Hi"],
  },
  {
    name: "Prashant",
    messages: ["s:Hello", "r:Hi"],
  },
  {
    name: "Neeraj",
    messages: ["s:Hello", "r:Hi"],
  },
  {
    name: "Abhishek",
    messages: ["s:Hello", "r:Hi"],
  },
]

let currentActiveChat = null

const showChat = (currentActiveChat) => {
  const chat = messages.filter((obj) => obj.name === currentActiveChat)
  while (msgArea.firstChild) {
    msgArea.removeChild(msgArea.firstChild)
  }
  chat[0].messages.map((msg, index, arr) => {
    let bottomValue = (arr.length - index - 1) * 45
    const newMsg = document.createElement("p")
    newMsg.innerHTML = msg.split(":")[1]

    if (msg.split(":")[0] === "s") {
      newMsg.classList.add("msg", "sender")
    } else {
      newMsg.classList.add("msg", "reciver")
    }
    newMsg.style.bottom = `${bottomValue}px`
    msgArea.appendChild(newMsg)
  })
}

chatList.forEach((chat) => {
  chat.addEventListener("click", (e) => {
    if (e.target !== e.currentTarget) return

    currentActiveChat = document.querySelector(
      `.${e.target.classList[1]} > .chat-list-item-right>h4`
    ).innerHTML

    showChat(currentActiveChat)
  })
})

let who = "sender"

radioBtn.addEventListener("click", (e) => {
  if (e.target.checked === true) {
    who = "s"
  } else {
    who = "r"
  }
})

// Putting messeges on chat

let msg = ""
console.log(textMessage)
textMessage.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    msg = e.target.value
    const chat = messages.filter((obj) => obj.name === currentActiveChat)
    // console.log(chat)
    chat[0].messages.push(`${who}:${msg}`)
    showChat(currentActiveChat)
    e.target.value = ""
  }
})

infoBtn.addEventListener("click", (e) => {
  rightSideBar.classList.add("open")
})

closeBtn.addEventListener("click", (e) => {
  rightSideBar.classList.remove("open")
})
