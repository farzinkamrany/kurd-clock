import { Button,Tabs } from 'antd';
import { FC, ReactNode, useEffect,useState} from 'react'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { ClockSt, Container, StAll } from './style';
import Clock from './Clock';
import type { TabsProps } from 'antd';

interface PropTypes {
    children?: ReactNode;
  }
//created by Farzin,Best Ux Designer Of All Time
const App : FC<PropTypes> = ({children}) => {
    const [time, settime] = useState<any>()
    
const items: TabsProps['items'] = [
  {
    key: '1',
    label:  <h2>Clock</h2>,
    children: 
    <Clock value={time} setValue={settime}/>,
  },
  {
    key: '2',
    label: `Tab 2`,
    children: `Content of Tab Pane 2`,
  },
  {
    key: '3',
    label: `Tab 3`,
    children: `Content of Tab Pane 3`,
  },
];

const onChange = (key: string) => {
  console.log(key);
};

   return (
    <Container>
    <header>
     
{/* <Tabs defaultActiveKey="1" items={items} onChange={onChange} /> */}
 <Clock value={time} setValue={settime}/>
    </header>
   </Container>
   )
}
export default App