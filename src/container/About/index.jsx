import React from 'react';
import { Button } from 'zarm';
import s from './style.module.less'

const About = () => {
  return (
    <div className={s.about}>
      <span>样式</span>
      <Button theme="primary">Hello!</Button>
    </div>
  );
};

export default About;
