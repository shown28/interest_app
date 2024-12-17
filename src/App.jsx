import './App.css'
import {TextField,Button} from '@mui/material';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

function App() {
      const [interest,setInterest] = useState(0)
      const [year,setYear] = useState(0);
      const [rate,setRate] = useState(0);
      const [principle,setPrinciple] = useState(0);

      const [invalidPrinciple,setInvalidPrinciple] = useState(false);
      const [invalidYear,setInvalidYear] = useState(false);
      const [invalidRate,setInvalidRate] = useState(false);

      const validateInput =(inputTag)=>{
        // console.log(inputTag.value); 
        const {name,value} = inputTag
        // console.log(name ,value)
        // console.log(!!value.match(/^\d+(\.\d+)?$/))
        if(name == 'principle')
        {
          setPrinciple(value);
          if(!!value.match(/^\d+(\.\d+)?$/))
          {
            setInvalidPrinciple(false);
          }
          else
          {
            setInvalidPrinciple(true);
          }
        }
        else if(name == 'rate')
          {
            setRate(value);
            if(!!value.match(/^\d+(\.\d+)?$/))
            {
              setInvalidRate(false);
            }
            else
            {
              setInvalidRate(true);
            }
          } 
          else 
            {
              setYear(value);
              if(!!value.match(/^\d+(\.\d+)?$/))
              {
                setInvalidYear(false);
              }
              else
              {
                setInvalidYear(true);
              }
            } 

      }
      const handleCalculate = (e) => {
        e.preventDefault()
        if(principle && rate && year ){
          setInterest(principle*rate*year/100);
        }
        else
        {
            alert('please fill  ') 
        }
      }
      const handleReset = () => {
        setInterest(0);
        setYear(0);
        setPrinciple(0);
        setRate(0);
        setInvalidPrinciple(false);
        setInvalidRate(false);
        setInvalidYear(false);
      }
  return (
    <>
      <div style={{ width: '100%', minHeight: '100vh' }} className='d-flex align-items-center justify-content-center bg-dark'>
        <div style={{ width: '600px' }} className=' bg-light rounded p-5'>
          <h1>Simple Interest calculator</h1>
          <p>calculate your simple interest</p>

          {/* result div */}
          <div className='bg-primary p-3 text-center text-white rounded-1'>
            <h1> ₹ {interest}</h1>
            <h6>Total simple interest</h6>
          </div>
          <form action="  ">
            <div className='mt-3'>
              <TextField value={principle || ''} onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-principle" name="principle" label='principle' placeholder='Principle' variant="outlined" />
            </div>
            {/* invalid principle */}
            {invalidPrinciple && <div className='mb-3 text-danger fw-bolder'>
              Invalid principle !!!
            </div>}
            
            <div className='mt-3'>
              <TextField value={rate || ''} onChange={(e)=>validateInput(e.target)} className='w-100' name='rate' id="outlined-principl" placeholder='Rate' variant="outlined" />
            </div>
              {/* invalid rate */}
              {invalidRate && <div className='mb-3 text-danger fw-bolder'>
              Invalid rate !!!
            </div>}

            <div className='mt-3'>
              <TextField value={year || ''} onChange={(e)=>validateInput(e.target)} className='w-100' name = 'year' id="outlined-princip" placeholder='Year' variant="outlined" />
            </div>
            {/* invalid year */}
            {invalidYear && <div className='mb-3 text-danger fw-bolder'>
              Invalid year !!!
            </div>}
            <Stack className='mt-5' direction="row" spacing={2}>
            <Button type='submit' disabled={invalidPrinciple||invalidRate||invalidYear} onClick={handleCalculate} style={{width:'50%', height:'70px'}} className='bg-dark text-white '>Calculate</Button>
            <Button onClick={handleReset} type="reset" style={{width:'50%'}} className='border text-black' variant="outlined" >Reset</Button>
            </Stack>
          </form>
        </div>


      </div>
    </>
  )
}

export default App
