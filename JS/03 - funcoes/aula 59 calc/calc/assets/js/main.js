function Calculadora(){
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    }

    this.capturaEnter = () => {
        document.addEventListener('keyup', (e) => {
            if(e.keycode === 13) {
                this.realizaConta();
            }
        });
    };

    this.pressionaBackSpace = () => {
        this.display.addEventListener('keydown', e => {
          if (e.keyCode === 8) {
            e.preventDefault();
            this.clearDisplay();
          }
        });
      }

    this.capturaCliques = () =>{
        document.addEventListener('click', (e) => {
            const element = e.target;
            if(element.classList.contains('btn-num')) this.addNumDisplay(element);
            if(element.classList.contains('btn-clear')) this.clear();
            if(element.classList.contains('btn-del')) this.del();
            if(element.classList.contains('btn-eq')) this.realizaConta();
        })
    }
    this.realizaConta = () => {
        try{    
            const conta = eval(this.display.value);

            if(!conta){
                alert('conta inválida');
                return;
            }

            this.display.value = conta;
        } catch(error){
            alert('Conta inválida');
            return;
        }
    }
    this.addNumDisplay = (element) => {
        this.display.value += element.innerText;
        this.display.focus();
    }
    this.clear = () => this.display.value = '';
    this.del = () => this.display.valeu = this.display.value.slice(0, -1);
}

const calculadora = new Calculadora();
calculadora.inicia();