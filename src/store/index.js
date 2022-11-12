import {createStore} from 'vuex'

export default createStore({
    strict: true,

    state: {
        postsList: [{id: 1, avatar: "../../../WAD-35-vue/src/assets/person.png", name: "Andre", date: "25.09.2021",
                text: "Just trying out this new webpage I found", image: "@/assets/mountains.jpg"},
            {id: 2, avatar: "@/assets/person.png", name: "Jens", date: "01.10.2021",
                text: "This seems like a nice website, wonder who's designed it!",
                image: "@/assets/forest.jpg"},
            {id: 3, avatar: "@/assets/person.png", name: "Julia", date: "05.10.2021",
                text: "I wouldn't know. But writing example text like this is kind of exhausting.",
                image: "@/assets/Burjkhalifa.jpg"},
            {id: 4, avatar: "@/assets/person.png", name: "Pia", date: "12.10.2021",
                text: "Yeah that's right, maybe you should use Lorem ipsum?",
                image: ""},]
    },
    getters: {
        postsList: state => {
            return state.postsList.map(post => {
                return {
                    id: post.id,
                    avatar: post.avatar,
                    name: post.name,
                    date: post.date,
                    text: post.text,
                    image: post.image
                }
            })
        },
    },
    mutations: {
        change_dropdown_menu: () => {
            if (document.getElementById("Dropdown").style.display==="table"){
                document.getElementById("Dropdown").style.display="none";
            }
            else{
                document.getElementById("Dropdown").style.display="table";
            }
        }
    },
    actions: {}
})