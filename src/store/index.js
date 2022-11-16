import {createStore} from 'vuex'

export default createStore({
    strict: true,

    state: {
        postsList: [
            {id: 1, avatar: "person.png", name: "Andre", date: "25.09.2021", text: "Just trying out this new webpage I found", image: "mountains.jpg"},
            
            {id: 2, avatar: "person.png", name: "Jens", date: "01.10.2021", text: "This seems like a nice website, wonder who's designed it!", image: "forest.jpg"},

            {id: 3, avatar: "person.png", name: "Julia", date: "05.10.2021", text: "I wouldn't know. But writing example text like this is kind of exhausting.", image: "Burjkhalifa.jpg"},

            {id: 4, avatar: "person.png", name: "Pia", date: "12.10.2021", text: "Yeah that's right, maybe you should use Lorem ipsum?", image: ""},
            
            {id: 5, avatar: "person.png",name: "Amelie", date: "29.10.2021", text: "Lorem ipsum?", image: "Tartu.jpg"},

            {id: 6, avatar: "person.png", name: "Nicklas", date: "01.11.2021", text : "Yeah just like this: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image: "scorpion.jpg"},

            {id: 7, avatar: "person.png", name: "Dennis", date: "04.11.2021", text : "Damn. I like the way you speak, boy.", image: "tree.jpg"},

            {id: 8, avatar: "person.png", name: "Jana", date: "19.11.2021", text: "Seems like a bunch of gibberish to me.", image: "dog.jpg"},

            {id: 9, avatar: "person.png", name: "Lara", date: "25.11.2021", text : "Yeah guys, let's maybe not?", image: "cat.jpg"},

            {id: 10, avatar: "person.png", name: "Torsten", date: "30.11.2021", text : "That was such a weird exchange.", image: "pool.jpg"}
            ]
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