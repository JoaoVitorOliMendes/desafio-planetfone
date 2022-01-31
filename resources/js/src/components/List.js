import * as React from 'react';
import { Table } from "react-bootstrap"
import * as Axios from 'axios';

const API_URL = "http://127.0.0.1:8000/api"

async function getAll() {
    return await Axios.default.get(`${API_URL}/user`).then((res) => { return res; })
}

export default function List() {
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        getAll().then((res) => {
            setUser(res.data);
        });
    }, [])

    return(
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>#Id</th>
                    <th>Nome</th>
                    <th>Username</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    user ?
                    user.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                            </tr>
                        )
                    }) :
                    <tr>
                        <td colSpan='4'>Nenhum Resultado</td>
                    </tr>
                }
            </tbody>
        </Table>
    )
}