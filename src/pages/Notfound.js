import { Link } from 'react-router-dom';

export default function Home(){
    return (
        <div className='flex flex-col gap 2'>
            404 NOT FOUND!
            <Link to="/" > Home from link !</Link>
        </div>
    )
}