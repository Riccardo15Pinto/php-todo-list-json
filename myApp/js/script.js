const {createApp} = Vue;
const app = createApp({
    data(){
        return{
            skills:[],
        }
    },
    created(){
        axios.get('http://localhost/php-todo-list-json/api/')
        .then(res => {
            this.skills = res.data
        });
    }
})

app.mount('#root')