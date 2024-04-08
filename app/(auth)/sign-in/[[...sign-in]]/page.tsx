import {Fragment} from 'react';
import {SignIn} from "@clerk/nextjs";

const SignInPage = () => {
    return (
        <Fragment>
            <main className="w-full h-screen flex items-center justify-center">
                <SignIn/>
            </main>
        </Fragment>
    );
};

export default SignInPage;
