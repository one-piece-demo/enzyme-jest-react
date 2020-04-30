/**
 * jest test before run
 */

import '@babel/polyfill';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

console.log('Hello Jest');
Enzyme.configure({ adapter: new Adapter() });
