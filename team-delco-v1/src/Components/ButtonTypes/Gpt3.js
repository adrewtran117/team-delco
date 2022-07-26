import React from 'react'
import '../styles.css';
import { Input } from 'antd';
import {useState} from 'react'
import { axisLeft } from 'd3';

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
        <div className='container'>
            <div>
              <div className='item'>
                <h2 className='item'>Your response:</h2>
              </div>

              <div className='item'>
                <p>{output ? output : "Click 'Generate Text' below to receive text!"}</p>
              </div>
              <TextArea
                onChange={e => setInput(e.target.value)}
                value={input}
                style={{
                  width: '500px',
                  height: '35px',
                  resize: 'none',
                  border: '2px solid'
                }}
              />
            </div>

            <div className='item'>
              <button  onClick={getGPT3}>Generate me Text!</button>
            </div>
        </div>
        )
    }


export default GenerateText;