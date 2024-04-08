import {Fragment} from 'react';
import {SignUp} from "@clerk/nextjs";

const SignUpPage = () => {
    return (
        <Fragment>
            <main className="w-full h-screen flex items-center justify-center">
                <SignUp/>
            </main>
        </Fragment>
    );
};

export default SignUpPage;
