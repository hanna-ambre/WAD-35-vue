import {createStore} from 'vuex'

export default createStore({
    strict: true,

    state: {
        postsList: [
            {id: 1, avatar: "person.png", name: "Andre", date: "25.09.2021", text: "Just trying out this new webpage I found", image: "mountains.jpg", likes: 0},            
            {id: 2, avatar: "person.png", name: "Jens", date: "01.10.2021", text: "This seems like a nice website, wonder who's designed it!", image: "forest.jpg", likes: 0},
            {id: 3, avatar: "person.png", name: "Julia", date: "05.10.2021", text: "I wouldn't know. But writing example text like this is kind of exhausting.", image: "Burjkhalifa.jpg", likes: 0},
            {id: 4, avatar: "person.png", name: "Pia", date: "12.10.2021", text: "Yeah that's right, maybe you should use Lorem ipsum?", image: "", likes: 0},
            {id: 5, avatar: "person.png",name: "Amelie", date: "29.10.2021", text: "Lorem ipsum?", image: "Tartu.jpg", likes: 0},
            {id: 6, avatar: "person.png", name: "Nicklas", date: "01.11.2021", text : "Yeah just like this: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image: "scorpion.jpg", likes: 0},
            {id: 7, avatar: "person.png", name: "Dennis", date: "04.11.2021", text : "Damn. I like the way you speak, boy.", image: "tree.jpg", likes: 0},
            {id: 8, avatar: "person.png", name: "Jana", date: "19.11.2021", text: "Seems like a bunch of gibberish to me.", image: "dog.jpg", likes: 0},
            {id: 9, avatar: "person.png", name: "Lara", date: "25.11.2021", text : "Yeah guys, let's maybe not?", image: "cat.jpg", likes: 0},
            {id: 10, avatar: "person.png", name: "Torsten", date: "30.11.2021", text : "That was such a weird exchange.", image: "pool.jpg", likes: 0}
            ]
    },
    getters: {
        postsList: state => {
            var postsList = state.postsList.map(post => {
                return {
                    id: post.id,
                    avatar: post.avatar,
                    name: post.name,
                    date: post.date,
                    text: post.text,
                    image: post.image,
                    likes: post.likes
                }
            })
            return postsList
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
        },
        like_post: (state, {id}) => {
                state.postsList.forEach (post => {
                    if(post.id == id){
                        post.likes += 1
                    }
                })
        },
        reset_likes: state => {
            state.postsList.forEach (post => {
                post.likes = 0;
            })
        }
    },
    actions: {}
})