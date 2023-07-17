const { createApp } = Vue
createApp({
    data() {
        return {
            row1: [7, 8, 9],
            row2: [4, 5, 6],
            row3: [1, 2, 3],
            val: '',
            opeClass: 'ope',
            multible:'*',
        }
    },
    methods: {
        eval(evnt) {
            var value = this.val;
            // alert(typeof(this.val));
            var targBtn = evnt.target.innerText;
            var last = value[value.length - 1];
            vwl = value.slice(0, value.length - 1);
         if(targBtn=='X'){
                    targBtn=this.multible;
                }
            if (value == '') {
                if (targBtn == '+' || targBtn == '-' || targBtn == '*' || targBtn == '/' || targBtn=='del' || targBtn=='c'|| targBtn=='=') {
                    this.val = '';
                } else {
                    this.val = targBtn;
                }

            } else {
               
                if (targBtn == '+' || targBtn == '-' || targBtn == '*' || targBtn == '/') {
                    if (last == '+' || last == '-' || last == '*' || last == '/') {
                        this.val = vwl + targBtn;
                    } else {
                        this.val = value + targBtn;
                        // alert(typeof(value));
                        // alert(typeof(targBtn));
                        // alert(typeof(this.val));

                    }
                }else if (targBtn == 'del'){
                    if(value == 'ERROR!'){
                        this.val='';
                    }else{
                     this.val=vwl;
                      
                    }
                }else if (targBtn == 'c'){
                    this.val='';
                } else if (targBtn == '='){
                    if(last == '+' || last == '-' || last == '*' || last == '/'){
                        this.val='ERROR!';
                    }else{
                        // this.val = '5';                
                        this.val = eval(value).toString(); 
                        // alert(typeof(eval(value)))  ;             
                    }
                }else {
                    this.val = value + targBtn;
                }

            }
        },
        clear(){
            this.val='';
        },
      
        equal(){
            var value = this.val;
            var last = value[value.length - 1];
            if(last == '+' || last == '-' || last == '*' || last == '/'){
                this.val='ERROR!';
            }else{
                this.val=eval(value).toString();

            }
        },submit(){
            return 0;
        },
        del(){
            var value = this.val;
            value=='ERROR' ? this.val='' : console.log('1');
            
        }
    }
}).mount('#app')