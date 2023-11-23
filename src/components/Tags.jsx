import Badge from 'react-bootstrap/Badge';

const MyTag = ({breed, color}) =>{
    console.log('tag info', breed, color);
    return (
        <>
            <h4>
                <Badge bg={color}>{breed}</Badge>
            </h4>
        </>
    )
}

export default MyTag