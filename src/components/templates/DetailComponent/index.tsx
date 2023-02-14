import React from "react";
import { Container } from "react-bootstrap";

interface DetailComponentProps {
    title?: string;
    description?: string;
    id: string;
    author?: string;
}

const DetailComponent: React.FC<DetailComponentProps> = ({ title, description, id, author }) => (
    <div className='d-flex flex-direction py-5 text-center'>
        <Container>
            <h2 className='my-3'>
                <div className=''>{title}</div>
            </h2>
            <div className=' d-flex'>
                <div className='me-3'>{id}</div>
                <h5 className=''>{author}</h5>
            </div>
            <p className='my-3'>{description}</p>
        </Container>
    </div>
);

export default DetailComponent;
