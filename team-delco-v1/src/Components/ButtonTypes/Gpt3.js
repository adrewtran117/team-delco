import React from 'react'
import '../styles.css';
import { Input } from 'antd';
import {useState} from 'react'

const { TextArea } = Input;
async function gpt3(input) {
    const query = `${input}`;
    const res = await fetch(`http://127.0.0.1:5000/generateBox`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: query }),
    }).then(response => response.json());
    return res;
  }

function GenerateText() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    async function getGPT3() {
        const res = await gpt3(input);
        setOutput(res.choices[0].text.trim());
    }
    return (
        <div>
            <TextArea
              onChange={e => setInput(e.target.value)}
              value={input}
              style={{
                width: '50%',
                height: '200px',
                resize: 'none',
                border: '2px solid',
                padding: '10px'
              }}
            />

            <button onClick={getGPT3}>Generate me Text!</button>

            <h2>Your response:</h2>
            <div>
                <p>{output ? output : "Click 'Generate Text' to receive text!"}</p>
            </div>
        </div>
        )
    }


export default GenerateText;