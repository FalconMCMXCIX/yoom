import {Fragment, ReactNode} from 'react';

const RootLayout = ({children} : {children: ReactNode}) => {
    return (
        <Fragment>
            <main>
                {children}
            </main>
        </Fragment>
    );
};

export default RootLayout;
