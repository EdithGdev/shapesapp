import './App.css';

// Why didnt this work?
// let inputValue = document.getElementsByClassName('searchinput').value
// console.log(inputValue)

//empty array w/ each input change it adds the value to array

let colorList= [
  "pink",
  "blue",
  "red", 
  "yellow",
  "purple", 
  "orange",
  "grey",
  "aqua",
  "cyan",
  "gold",
  "pink",
  "blue",
  "red", 
  "yellow",
  "purple", 
  "orange",
  "grey",
  "aqua",
  "cyan",
  "gold"

]
let colorSearch = [];

function getInput(e){
  // store value
  let inputValue= e.target.value
  // push value into array 
  colorSearch.push(inputValue)
  // do div class names contain the string?
      for(let i= 0; i < colorList.length; i++){
      if(colorList[i].includes(colorSearch)){
        document.querySelector('.triContainer').innerHTML+= `
                    <div class ="square-shape" style="background-color:${colorList[i]};">
                        <span class = 'square-text' ><h1>${colorList[i]}</h1></span>
                    </div>
                
                `;
        
  }
  console.log(i)
  
    }
}
//new function that filters out the divs that match or include string
function App() {

  return (
    <div className="app">
      <div className='triContainer'>
        {/* <div className='red'></div>
        <div className='green'></div>
        <div className='blue'></div>
        <div className='purple'></div>
        <div className='orange'></div>
        <div className='red'></div>
        <div className='green'></div>
        <div className='blue'></div>
        <div className='purple'></div>
        <div className='orange'></div>
        <div className='red'></div>
        <div className='green'></div>
        <div className='blue'></div>
        <div className='purple'></div>
        <div className='orange'></div>
        <div className='red'></div>
        <div className='green'></div>
        <div className='blue'></div>
        <div className='purple'></div>
        <div className='orange'></div> */}
      </div>
      <div className='searchContainer'>
        <input className='searchinput' 
        type='text' 
        placeholder='red, green, or blue' 
        onChange= {getInput}
        />
      </div>




    </div>
  );
}

export default App;
