let wins1= document.querySelector('.wins');
let losses1= document.querySelector('.losses');
let gs_left1= document.querySelector('.gs_left');
let your_gs=document.querySelector('.your_gs');

class PsychicGame{
    wins;
    losses;
    gs_left;
    your_gs;
    your_guess;
  
    constructor(wins1,losses1,gs_left1,your_gs){
        this.wins=Number(wins1.textContent);
        this.losses=Number(losses1.textContent);
        this.gs_left=Number(gs_left1.textContent);
        this.your_gs=your_gs
    }

    CompGuess (){
    const letters = 'abcdefghijklmngopqrstuvwxyz';
    const letterIndex=Math.floor(Math.random()*letters.length);
    return letters[letterIndex];
    }
    comp_gs=this.CompGuess();

    Reset(){
              this.gs_left=9;
                this.comp_gs=this.CompGuess();
                this.your_guess='';
                this.your_gs.textContent=''
    }
    EventListener(e){
            this.your_guess=e.key;
         
            if(this.gs_left<=1 && !this.your_gs.textContent.includes(this.your_guess)){
                this.losses++;
                this.Reset();
            }  if(this.comp_gs!==this.your_guess && !this.your_gs.textContent.includes(this.your_guess)){
                this.gs_left--;
            }
            else if(this.comp_gs===this.your_guess){
                this.wins++;
                this.Reset();         
            }
    }
}

var x=new PsychicGame(wins1,losses1,gs_left1,your_gs);
window.addEventListener('keyup',(e)=>{
    x.EventListener(e); 
    // console.log(x.wins,x.losses,x.gs_left,x.comp_gs,x.your_guess);
    wins1.textContent=x.wins;
    losses1.textContent=x.losses;
    gs_left1.textContent=x.gs_left;
    if(!your_gs.textContent.includes(x.your_guess)){your_gs.textContent+=' '+x.your_guess;}
})