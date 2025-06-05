// src/pages/Dashboard.jsx
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

function Dashboard() {
    return (
        <article>
            <title>Dashboard</title>
            <h1 className="text-2xl font-bold mb-4">Monitoring Dashboard</h1>
            <TableFormat data={data} />
        </article>
    )
}

export default Dashboard;