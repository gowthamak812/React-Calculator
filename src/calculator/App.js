import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

function App() {
  return(
      <div className='Main'>
              <h1>Calculator</h1>
      <div className='color'>
      <div><input className='inp' type={Text}></input></div>
      <Buttons />
      </div>
      </div>
  );
}


function Buttons() {
  return(
        <>
          <div>
          <Button variant="outline-success" className="rounded-circle" size="lg" active>AC</Button>{' '}
          <Button variant="outline-success" className="rounded-circle" size="lg" active>%</Button>{' '}
          <Button variant="outline-success" className="rounded-circle" size="lg" active>⌫</Button>{' '}
          <Button variant="outline-secondary" className="rounded-circle" size="lg" active>÷</Button>{' '}
          </div>
          <div>
          <Button variant="outline-primary" className="rounded-circle" size="lg" active>7</Button>{' '}
          <Button variant="outline-primary" className="rounded-circle" size="lg" active>8</Button>{' '}
          <Button variant="outline-primary" className="rounded-circle" size="lg" active>9</Button>{' '}
          <Button variant="outline-secondary" className="rounded-circle" size="lg" active>x</Button>{' '}
          </div>
          <div>
          <Button variant="outline-primary" className="rounded-circle" size="lg" active>4</Button>{' '}
          <Button variant="outline-primary" className="rounded-circle" size="lg" active>5</Button>{' '}
          <Button variant="outline-primary" className="rounded-circle" size="lg" active>6</Button>{' '}
          <Button variant="outline-secondary" className="rounded-circle" size="lg" active>-</Button>{' '}
          </div>
          <div>
          <Button variant="outline-primary" className="rounded-circle" size="lg" active>1</Button>{' '}
          <Button variant="outline-primary" className="rounded-circle" size="lg" active>2</Button>{' '}
          <Button variant="outline-primary" className="rounded-circle" size="lg" active>3</Button>{' '}
          <Button variant="outline-secondary" className="rounded-circle" size="lg" active>+</Button>{' '}
          </div>
          <div>
          <Button variant="outline-primary" className="btn-1" size="lg" active>0</Button>{' '}
          <Button variant="outline-primary" className="rounded-circle" size="lg" active>,</Button>{' '}
          <Button variant="outline-danger" className="rounded-circle" size="lg" active>=</Button>{' '}
          </div>
        </>
  );
}

export default  App;
