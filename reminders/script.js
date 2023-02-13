let boxes = document.createElement("main")
let inp = document.querySelector("input")
let form = document.forms.reminders
let remindersName = [
    {
        id: Math.random(),
        isDone: false,
        time: "10:22",
        task: "some task"
    },
    {
        id: Math.random(),
        isDone: false,
        time: "10:22",
        task: "hello world"
    },
]

function reminders(arr, name) {
    boxes.innerHTML = ""

    for (let item of arr) {
        // if (/\w/.test(name.value)) {
        name.classList.remove("false", "fade")
        name.classList.add("true")

        let box = document.createElement("div")
        let header = document.createElement("h3")
        let price = document.createElement("p")
        let del = document.createElement("div")
        let edit = document.createElement("button")

        box.id = item.id
        header.innerHTML = item.task
        price.innerHTML = item.time
        edit.innerHTML = "edit"
        del.innerHTML = "X"

        if (item.isDone) {
            box.classList.add("done")
        }

        box.classList.add("box")
        price.classList.add("blue")
        del.classList.add("delete")
        edit.classList.add('open')

        boxes.append(box)
        box.append(header, price, del, edit)

        box.onclick = () => {
            item.isDone = !item.isDone
            if (item.isDone) {
                box.classList.add('done')
            } else {
                box.classList.remove('done')
            }
        }

        del.onclick = () => {
            remindersName = remindersName.filter(el => el.id !== item.id)
            reminders(remindersName, inp)
        }

        edit.onclick = () => {
            let text_h = document.querySelector('text')

            if (text_h.length !== 0) {
                item.task = changeTask
                reminders(remindersName, inp)
            }
        }

        // } else {
        //     name.classList.remove("true")
        //     name.classList.add("false", "fade")
        // }
    }
}

document.querySelector("hr").after(boxes)


form.onsubmit = (event) => {
    event.preventDefault()



    let hours = new Date().getHours().toString()
    let minut = new Date().getMinutes().toString()

    if (minut.length == 1) {
        minut = "0" + minut
    } else {
        minut = minut
    }

    let task = {
        id: Math.random(),
        isDone: false,
        time: hours + ":" + minut,
        task: inp.value
    }

    remindersName.push(task)

    reminders(remindersName, inp)
}

reminders(remindersName, inp)

function openModa(params) {

}
openModa()

let openBtn = document.querySelector(".open")
let closeBtn = document.querySelector(".close")
let modal = document.querySelector('.modal')
let modalBg = document.querySelector(".modal-bg")

openBtn.onclick = () => {
    modal.style.display = 'flex'
    modalBg.style.display = "block"

    setTimeout(() => {
        modal.style.opacity = '1'
        modalBg.style.opacity = "1"
    }, 200)
}

closeBtn.onclick = () => {
     modal.style.opacity = '0'
        modalBg.style.opacity = "0"

    setTimeout(() => {
        modal.style.display = 'none'
        modalBg.style.display = "none"
    }, 200)
}

let openBtn_del = document.querySelector(".delete")
let closeBtn_del = document.querySelector(".close_bg")
let modal_del = document.querySelector('.modal_del')
let modalBg_del= document.querySelector(".modal_del_bg")

openBtn_del.onclick = () => {
    modal_del.style.display = 'flex'
    modal_del_bg.style.display = "block"

    setTimeout(() => {
        modal_del.style.opacity = '1'
        modal_del_bg.style.opacity = "1"
    }, 200)
}

closeBtn_del.onclick = () => {
    modal_del.style.opacity = '0'
    modal_del_bg.style.opacity = "0"

    setTimeout(() => {
        modal_del.style.display = 'none'
        modal_del_bg.style.display = "none"
    }, 200)
}


