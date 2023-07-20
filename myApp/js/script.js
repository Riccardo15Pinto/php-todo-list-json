const {createApp} = Vue;
const app = createApp({
    data(){
        return{
            skills:[],
            newSkill:'',
        }
    },
    methods:{

        isTrue(target){
        
            const data = { isUse : target.id}
            const config = { headers: {'Content-Type' : 'multipart/form-data'}}
            axios.post('http://localhost/php-todo-list-json/api/', data, config )
            .then(res => {
                this.skills = res.data;
            });
               
        },  

        addNewSkill(){
            const data = { skill: this.newSkill}
            const config = { headers: {'Content-Type' : 'multipart/form-data'}}
            axios.post('http://localhost/php-todo-list-json/api/', data, config )
            .then(res => {
                this.skills = res.data;
            });
            this.newSkill = '';
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