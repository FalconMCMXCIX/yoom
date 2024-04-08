import {Fragment} from 'react';

const Meeting = ({params} : {params: {id: string}}) => {
    return (
        <Fragment>
            <div>Meeting room: #{params.id}</div>
        </Fragment>
    );
};

export default Meeting;
