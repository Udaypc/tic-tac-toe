
import './App.css';
import { Component } from 'react';
class App extends Component {
  state={defaultValue:"X",First:"",Second:"",Third:"",Fourth:"",Fifth:"",Sixth:"",Seventh:"",Eight:"",Nineth:"",win:"",X:0,O:0}
  check=()=>{
    const{First,Second,Third,Fifth,Fourth,Sixth,Seventh,Eight,Nineth}=this.state
    console.log(First)
      if((First==="X"&&Second==="X"&&Third==="X")||(Fourth==="X"&&Fifth==='X'&&Sixth==='X')||(Seventh==='X'&&Eight==='X'&&Nineth==="X")||(First==='X'&&Fifth==='X'&&Nineth==="X")||(Third==="X"&&Fifth==='X'&&Seventh==='X')||(First==='X'&&Fourth==='X'&&Seventh==='X')||(Second==='X'&&Fifth==="X"&&Eight==='X')||(Third==='X'&&Sixth==='X'&&Nineth==="X")){
        this.setState({win:"X"})
      }else if((First==="O"&&Second==="O"&&Third==="O")||(Fourth==="O"&&Fifth==='O'&&Sixth==='O')||(Seventh==='O'&&Eight==='O'&&Nineth==="O")||(First==='O'&&Fifth==='O'&&Nineth==="O")||(Third==="O"&&Fifth==='O'&&Seventh==='O')||(First==='O'&&Fourth==='O'&&Seventh==='O')||(Second==='O'&&Fifth==="O"&&Eight==='O')||(Third==='O'&&Sixth==='O'&&Nineth==="O")){
        this.setState({win:"O"})
      }
      
  }
  
  first=async ()=>{
    const{defaultValue,First,win}=this.state
    if(First===""&&win===""){
      if(defaultValue==="X"){
        await this.setState({"First":defaultValue,defaultValue:"O"})
        this.check()
      }else{
        await this.setState({"First":defaultValue,defaultValue:"X"})
        this.check()
      }
    }
  }
  second= async ()=>{
    const{defaultValue,Second,win}=this.state
    if(Second===""&&win===""){
      if(defaultValue==="X"){
        await this.setState({"Second":defaultValue,defaultValue:"O"})
        this.check()
      }else{
        await this.setState({"Second":defaultValue,defaultValue:"X"})
        this.check()
      }
    }
  }
  third= async ()=>{
    const{defaultValue,Third,win}=this.state
    if(Third===""&&win===""){
      if(defaultValue==="X"){
        await this.setState({"Third":defaultValue,defaultValue:"O"})
        this.check()
      }else{
        await this.setState({"Third":defaultValue,defaultValue:"X"})
        this.check()
      }
    }
  }
  fourth= async ()=>{
    const{defaultValue,Fourth,win}=this.state
    if(Fourth===""&&win===""){
      if(defaultValue==="X"){
        await this.setState({"Fourth":defaultValue,defaultValue:"O"})
        this.check()
      }else{
        await this.setState({"Fourth":defaultValue,defaultValue:"X"})
        this.check()
      }
    }
  }
  fifth=async ()=>{
    const{defaultValue,Fifth,win}=this.state
    if(Fifth===""&&win===""){
      if(defaultValue==="X"){
        await this.setState({"Fifth":defaultValue,defaultValue:"O"})
        this.check()
      }else{
        await this.setState({"Fifth":defaultValue,defaultValue:"X"})
        this.check()
      }
    }
  }
  sixth= async ()=>{
    const{defaultValue,Sixth,win}=this.state
    if(Sixth===""&&win===""){
      if(defaultValue==="X"){
        await this.setState({"Sixth":defaultValue,defaultValue:"O"})
        this.check()
      }else{
        await this.setState({"Sixth":defaultValue,defaultValue:"X"})
        this.check()
      }
    }
  }
  seventh= async ()=>{
    const{defaultValue,Seventh,win}=this.state
    if(Seventh===""&&win===""){
      if(defaultValue==="X"){
        await this.setState({"Seventh":defaultValue,defaultValue:"O"})
        this.check()
      }else{
        await this.setState({"Seventh":defaultValue,defaultValue:"X"})
        this.check()
      }
    }
  }
  eight= async ()=>{
    const{defaultValue,Eight,win}=this.state
    if(Eight===""&&win===""){
      if(defaultValue==="X"){
        await this.setState({"Eight":defaultValue,defaultValue:"O"})
        this.check()
      }else{
        await this.setState({"Eight":defaultValue,defaultValue:"X"})
        this.check()
      }
    }
  }
  nineth= async ()=>{
    const{defaultValue,Nineth,win}=this.state
    if(Nineth===""&&win===""){
      if(defaultValue==="X"){
        await this.setState({"Nineth":defaultValue,defaultValue:"O"})
        this.check()
      }else{
        await this.setState({"Nineth":defaultValue,defaultValue:"X"})
        this.check()
      }
    }
  }
  replay=()=>{
    const{win,X,O}=this.state
    if(win==="X"){
      this.setState({X:X+1})
    }else{
      this.setState({O:O+1})
    }
    this.setState({defaultValue:"X",First:"",Second:"",Third:"",Fourth:"",Fifth:"",Sixth:"",Seventh:"",Eight:"",Nineth:"",win:""})
  }
  restart=()=>{
    this.setState({defaultValue:"X",First:"",Second:"",Third:"",Fourth:"",Fifth:"",Sixth:"",Seventh:"",Eight:"",Nineth:"",win:"",X:0,O:0})
  }
  
  
  render(){
    const{First,Second,Third,Fifth,Fourth,Sixth,Seventh,Eight,Nineth,win,X,O,defaultValue}=this.state
    const checkWin=win===""?false:true
      
    return (
      <>
      <header className='header'> 
        <div className='flex'>
          <img  className="img" src={'https://cdn1.vectorstock.com/i/1000x1000/47/65/glowing-neon-line-tic-tac-toe-game-icon-isolated-vector-39414765.jpg'} alt="Logo"/>
          <h1 className='Name'>Tic Tac Toe</h1>
        </div>
        <div className='flex'>
          <div>
            <p className='score'>X - Score: {X}</p>
            <p className='score'>O - Score: {O}</p>
          </div>
          
        </div>
      </header>
      <div className="App">
        <table>
          <tr>
            <td className='tableColumn first' onClick={this.first}>{First}</td>
            <td className='tableColumn second' onClick={this.second}>{Second}</td>
            <td className='tableColumn third' onClick={this.third}>{Third}</td>
          </tr>
          <tr>
            <td className='tableColumn fourth' onClick={this.fourth}>{Fourth}</td>
            <td className='tableColumn fifth' onClick={this.fifth}>{Fifth}</td>
            <td className='tableColumn sixth' onClick={this.sixth}>{Sixth}</td>
          </tr>
          <tr>
            <td className='tableColumn seventh' onClick={this.seventh}>{Seventh}</td>
            <td className='tableColumn eight' onClick={this.eight}>{Eight}</td>
            <td className='tableColumn nineth' onClick={this.nineth}>{Nineth}</td>
          </tr>
        </table>
        {checkWin&&<p className='winText'>{win} is win</p>}
        {checkWin&&
          <button type="button" class="btn" onClick={this.replay}>
              <strong>REPLAY</strong>
                  <div id="container-stars">
                    <div id="stars"></div>
                  </div>

                  <div id="glow">
                    <div class="circle"></div>
                    <div class="circle"></div>
                  </div>
            </button>
          }
          <button class="button2 button" onClick={this.restart}>Restart</button>
      </div>
      </>  
    );
  
  }
}

export default App;
