import React from 'react'

import { FC, ReactNode, useEffect,useState} from 'react'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { ClockSt, StAll } from './style';
import { Button } from 'antd';


interface PropTypes {
    children?: ReactNode;
    value?:any
    setValue?:any
    step?:number
  }
const Clock:FC<PropTypes>  = ({value,setValue,step=5}) => {
    const [minutes, setminutes] = useState<any>(value ? parseInt(value?.split(':')[1]) : null)
    const [hours, sethours] = useState<any>(value ? parseInt(value?.split(':')[0]):null)
    
    useEffect(() => {
        setValue(`${hours > 9 ?hours :'0'+ hours }:${minutes > 9 ?minutes : '0' + minutes}`)
    }, [minutes, hours])
    
    const increaseHour = (e: any) => {
        e.preventDefault()
    sethours((prev: any) =>prev + 1)
    setminutes((prev: any) =>prev===null?0:prev)
    if (hours === null || hours > 22){
            sethours(0)
        }
        }
    
    
    const decreaseHour = (e: any) => {
        e.preventDefault()
        setminutes((prev: any) =>prev===null?0:prev)
        if (hours > 0) { sethours((prev: any) => prev - 1) }
        else{
            sethours(23)
        }
    }
    
    const increaseMinute=(e:any)=>{
        e.preventDefault()
        sethours((prev: any) =>prev===null?0
        // :prev===23?0
        :prev)
        setminutes((prev: any) => 60-step - prev < 5 ? prev + 60-step - prev :prev===null?0: prev + step)
        if( minutes===60-step ){
            setminutes(0)
            sethours((prev:any)=>prev===23?0:prev+1)
        }
        // }
    }
    
    const decreaseMinute = (e: any) => {
        e.preventDefault()
        if (minutes > 0) { setminutes((prev: any) => prev - step) }
        else {
            setminutes(60-step)
            sethours((prev: any) =>prev>0? prev - 1:23)
        }
    }
    
    return (
    <StAll>
        <ClockSt>
            <Button 
            onClick={(e: any) => increaseHour(e)}
            // disabled={hours===23}
            ><MdOutlineKeyboardArrowUp /></Button>
            <span className='clockShow'>{hours !== null ? hours > 9 ? hours : '0' + hours:'--'}</span>
            <Button onClick={(e: any) => decreaseHour(e)}
            >
                <MdOutlineKeyboardArrowDown /></Button>
        
        </ClockSt>
        :
        <ClockSt>
            <Button onClick={(e: any) => increaseMinute(e)}
                // disabled={minutes === 55}
            >
                <MdOutlineKeyboardArrowUp /></Button>
            <span className='clockShow'>{minutes !== null ? minutes > 9 ?minutes  : '0' + minutes : '--'}</span>
            <Button 
            onClick={(e: any) => decreaseMinute(e)}
                // disabled={minutes === 0 || minutes === null}
            >
                <MdOutlineKeyboardArrowDown /></Button>
            
        </ClockSt>
    
        </StAll>
    );
}

export default Clock
