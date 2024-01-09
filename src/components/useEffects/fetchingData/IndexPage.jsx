import React,{useState, useEffect} from 'react'
import { fetchBio } from './api.js';

const IndexPage = () => {
    const [ person, setPerson ] = useState('Alice');
    const [bio, setBio] = useState(null);

    useEffect(()=>{
        let ignore = false;
        setBio(null);
        fetchBio(person).then(result => {
            if(!ignore){
                setBio(result);
            }
        });
        return ()=>{
            ignore = true;
        }
    },[person])
  return (
    <>
    <select value={person} onChange={ e=>{
        setPerson(e.target.value);
    }}>
        <option value='Alice'>Alice</option>
        <option value='Bob'>Bob</option>
        <option value='Taylor'>Taylor</option>
    <hr />
    <p><i>{bio ?? 'Loading...'}</i></p>
    </select>
    </>
  )
}

export default IndexPage