import {createStore} from 'vuex'

export default createStore({
    strict: true,

    state: {
        postsList: [{id: 1, avatar: require('@/assets/person.png') , name: "Andre", date: "25.09.2021",
                text: "Just trying out this new webpage I found", 
                image: require("@/assets/mountains.jpg")},
            
            {id: 2, avatar: require("@/assets/person.png"), name: "Jens", date: "01.10.2021",
                text: "This seems like a nice website, wonder who's designed it!",
                image: require("@/assets/forest.jpg")},

            {id: 3, avatar: require("@/assets/person.png"), name: "Julia", date: "05.10.2021",
                text: "I wouldn't know. But writing example text like this is kind of exhausting.",
                image: require("@/assets/Burjkhalifa.jpg")},

            {id: 4, avatar: require("@/assets/person.png"), name: "Pia", date: "12.10.2021",
                text: "Yeah that's right, maybe you should use Lorem ipsum?",
                image: ""},
            
            {id: 5, avatar: require('@/assets/person.png'),name: "Amelie", date: "29.10.2021",
                text: "Lorem ipsum?", 
                image: require('@/assets/Tartu.jpg')},

            {id: 6, avatar: require('@/assets/person.png'), name: "Nicklas", date: "01.11.2021",
                text : "Yeah just like this: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                image: require("@/assets/scorpion.jpg")},

            {id: 7, avatar: require('@/assets/person.png'), name: "Dennis", date: "04.11.2021",
                text : "Damn. I like the way you speak, boy.",
                image: require("@/assets/tree.jpg")},

            {id: 8, avatar: require('@/assets/person.png'), name: "Jana", date: "19.11.2021",
                text: "Seems like a bunch of gibberish to me.",
                image: require("@/assets/dog.jpg")},

            {id: 9, avatar: require('@/assets/person.png'), name: "Lara", date: "25.11.2021",
                text : "Yeah guys, let's maybe not?",
                image: require("@/assets/cat.jpg")},

            {id: 10, avatar: require('@/assets/person.png'), name: "Torsten", date: "30.11.2021",
                text : "That was such a weird exchange.",
                image: require("@/assets/pool.jpg")}
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