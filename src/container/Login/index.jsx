import React from 'react'
import { Cell, Input, Button, Checkbox } from 'zarm'
import CustomIcon from '@/components/CustomIcon'

import s from './style.module.less'

const Login = () => {
  return <div className={s.auth}>
    <div className={s.head} />
    <div className={s.tab}>
      <span>注册</span>
    </div>
    <div className={s.form}>
      <Cell icon={<CustomIcon type="zhanghao" />}>
        <Input
          clearable
          type="text"
          placeholder="请输入账号"
        />
      </Cell>
      <Cell icon={<CustomIcon type="mima" />}>
        <Input
          clearable
          type="password"
          placeholder="请输入密码"
        />
      </Cell>
      <Cell icon={<CustomIcon type="mima" />}>
        <Input
          clearable
          type="text"
          placeholder="请输入验证码"
        />
      </Cell>
    </div>
    <div className={s.operation}>
      <div className={s.agree}>
        <Checkbox />
        <label className="text-light">阅读并同意<a>《掘掘手札条款》</a></label>
      </div>
      <Button block theme="primary">注册</Button>
    </div>
  </div>
}

export default Login
