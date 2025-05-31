// src/pages/Home.jsx
// --------------------------------------------------------
import TableFormat from '../components/Table.jsx'

const data = [
    {
        "id": "1",
        "po": "abc",
        "asn": "1223"
    },
    {
        "id": "2",
        "po": "def",
        "asn": "456"
    },
    {
        "id": "3",
        "po": "cdnlsan",
        "asn": "dsabk"
    }
]

function Home() {
    return (
        <>
            <TableFormat data={data} />
        </>
    )
}

export default Home;