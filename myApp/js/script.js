const {createApp} = Vue;
const app = createApp({
    data(){
        return{
            skills:[],
            newSkill:'',
        }
    },
    methods:{

        getTime(){
            const  today = new Date();
            const  date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
            const  time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            return dateTime = date+' '+time;
        },

        // isTrue(target, object){

        //     if(this.skills)

        //     // if(this.skills[target][id]){
        //     //   return this.skills[target][id] = false;
        //     // }else{
        //     //     return this.skills[target][id] = true;
        //     // }
        // },  

        addNewSkill(){
            const data = { skill: this.newSkill}
            const config = { headers: {'Content-Type' : 'multipart/form-data'}}
            axios.post('http://localhost/php-todo-list-json/api/', data, config )
            .then(res => {
                this.skills.push(res.data);
                this.newSkill = '';
            });
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