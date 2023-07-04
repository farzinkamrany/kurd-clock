import { Button } from 'antd';
import { FC, ReactNode, useEffect,useState} from 'react'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { ClockSt, StAll } from './style';
import Clock from './Clock';

interface PropTypes {
    children?: ReactNode;
  }
//created by Farzin,Best Ux Designer Of All Time
const App : FC<PropTypes> = ({children}) => {
    const [time, settime] = useState<any>()
   return (
   <Clock value={time} setValue={settime}/>
   )
}
export default App