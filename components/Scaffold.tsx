import React, { FC } from 'react';

type Props = { children?: React.ReactNode };
const Scaffold: FC<Props> = ({ children }): JSX.Element => {
  return <div>{children}</div>;
};

export default Scaffold;
