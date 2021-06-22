
// try {
//     function errorshandling() {
//         test = val * 45;
//         console.log("test", val);
//     }
//     errorshandling();
// } catch (err) {
//     console.log(err.message);
// }


const app = Vue.createApp({
    data() {
        return {
            fullName1: '',
            // displayValue: true,
            // enteredText1: ''
            // tableData: [
            //     { "email": "Eliseo@gardner.biz", "id": 1, "name": "id labore ex et quam laborum", "status": "open" },
            //     { "email": "Jayne_Kuhic@sydney.com", "id": 2, "name": "quovero reiciendis velit similique earum", "status": "pending" },
            //     { "email": "Nikita@garfield.biz", "id": 3, "name": "odioadipisci rerum autanimi", "status": "closed" },
            //     { "email": "Lew@alysha.tv", "id": 4, "name": "alias odio sit", "status": "pending" }
            // ],
            // selected: ''
            //             enteredText: '',
            //             countText: 0
        };
    },
    methods: {
        fullName() {
            this.fullName1 = this.$refs.text1.value + ' ' + this.$refs.text2.value;
        }
        // displayInput() {
        //     this.displayValue = false;
        // },

        // enterFunction() {
        //     this.enteredText1 = this.$refs.enteredText.value;
        //     console.log(this.enteredText1);
        //     this.displayValue = true;
        // }
        // Onchange(event) {
        //     // console.log('This is in schedule function');
        //     // console.log(event.target.value, typeof event.target.value);
        //     this.selected = event.target.value;
        // },

        // checkIf(value1) {
        //     return value1 === this.selected;
        // }
    }
});

app.mount('#app');