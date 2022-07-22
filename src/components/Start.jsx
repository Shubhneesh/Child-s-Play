import { useRef } from "react";
import { Wave1} from './examples.js';

export default function Start({ setUsername }) {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
  };

  return (
    <div className="start">
      <div style={styles}>  
        <Wave1 />
      </div>

      <input
        id="inputName"
        className="startInput"
        placeholder="Enter your name"
        ref={inputRef}
      />
      <br></br>
      <select id="themes" name="themes" className="startInput">
        <option value="none" selected disabled hidden>Select a theme</option>
        <option value="Doraemon">Doraemon</option>
        <option value="BenTen">Ben Ten</option>
        <option value="ChotaBheem">Chota Bheem</option>
      </select>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <button className="startButton" onClick={handleClick}>
        Start
      </button>
    </div>
  );
}