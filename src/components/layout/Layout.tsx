import React, { FC } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

const cx = cn.bind(styles);

const Layout: FC = ({ children }) => {
  return <div className={cx('layout')}>{children}</div>;
};

export default Layout;
