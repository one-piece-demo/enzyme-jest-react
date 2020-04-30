/**
 * @file test Calculator component
 *
 */

import React from 'react';
import TestRenderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';

import Calculator, { getSum } from '../../src/components/Calculator';

describe('Calculator component test', () => {
  it('should render snapshot', () => {
    const component = TestRenderer.create(<Calculator />); // 创建TestRenderer实例
    const tree = component.toJSON(); // 返回一个已渲染的的树对象。该树仅包含特定平台的节点
    expect(tree).toMatchSnapshot(); // 断言
  });

  it('should return the correct sum', () => {
    const sum = getSum(3, 5);
    expect(sum).toEqual(8);
  });

  // 浅渲染检查元素
  it('should render required form elements', () => {
    const calculator = shallow(<Calculator />);

    const form = calculator.find('form');
    expect(form.length).toBe(1);
    expect(form.find('input').length).toBe(2); // find 选择器
    expect(form.find('button').length).toBe(1);
    expect(form.find('p.result').length).toBe(1);
  });

  // 真实加载测试
  it('should display the result on add', () => {
    const calculator = mount(<Calculator />);

    const form = calculator.find('form');

    form.childAt(0).instance().value = 3;
    form.childAt(1).instance().value = 5;
    form.find('button').simulate('click');

    const result = calculator.find('.result');
    expect(result.text()).toEqual('8');
  });
});
