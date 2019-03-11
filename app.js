var app = new Vue ({
    el: '#app',
    data: {
        previous: '',
        result: '',
        operator: '',
        operatorClicked: false,
    },
    computed: {
        ShowResult(){
            return result;
        }
    },
    methods: {
        clear(){
            this.result = '';
        },
        sign() {
            if(this.result.charAt(0) === '-'){
                this.result = this.result.slice(1);
            }
            else {
                this.result = '-' + this.result;
            }
        },
        percent() {
            this.result = `${parseFloat(this.result) / 100}`;
        },
        divide() {
            
        },
        append(number) {
            if(number === '.'){
                if(this.result.indexOf('.') === -1){
                    this.result = this.result + number;
                }
            }
            else {
                this.result = `${this.result}` + number;
            }
        },
        divide(){
            this.operator = (a, b) => a / b;
            this.previous = this.result;
            this.result = '';
            this.operatorClicked = true;
        },
        multiply(){
            this.operator = (a, b) => a * b;
            this.previous = this.result;
            this.result = '';
            this.operatorClicked = true;
        },
        subtract(){
            this.operator = (a, b) => a - b;
            this.previous = this.result;
            this.result = '';
            this.operatorClicked = true;
        },
        add(){
            this.operator = (a, b) => a + b;
            this.previous = this.result;
            this.result = '';
            this.operatorClicked = true;
        },
        equal() {
            this.result = `${this.operator(parseFloat(this.previous), parseFloat(this.result))}`;
            this.previous = '';
        }
    }

})