import {Fragment, ReactNode} from 'react';
import StreamVideoProvider from "@/providers/StreamClientProvider";

const RootLayout = ({children} : {children: ReactNode}) => {
    return (
        <Fragment>
            <main>
                <StreamVideoProvider>
                    {children}
                </StreamVideoProvider>
            </main>
        </Fragment>
    );
};

export default RootLayout;
