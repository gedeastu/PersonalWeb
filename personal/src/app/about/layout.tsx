import React, {ReactNode} from 'react';

interface AboutLayoutType{
  children : ReactNode;
}
const AboutLayout: React.FC<AboutLayoutType> = ({children}) => {
  return (
    <>
     <div>AboutLayout</div>
    {children}
    </>
  )
}
export default AboutLayout;
