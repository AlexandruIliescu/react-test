import { RouteComponentProps } from '@reach/router';
import React from 'react'

interface DetailsProps extends RouteComponentProps {
    gameId ?: string;
    
}

const Details: React.FC<DetailsProps> = ({gameId}) => {
    return (<div>{gameId || "Add new game"}</div>);
}

export default Details