import '../css/Users.css'
function Users() {

    const rows = [
        {
            user: "abdul",
            website: "www.abdulalmas.com ",
            country: "India"
        },
        {
            user: "abhishek",
            website: "www.abhishek.com ",
            country: "India"
        },
        {
            user: "ajay",
            website: "www.ajaysunny.com",
            country: "India"
        }
    ]
    return (
        <div>
            <div className="content-ctn">
                <h1 id="challenges">Users</h1>
                <section>
                    <div class="tbl-header">
                        <table cellpadding="0" cellspacing="0" border="0">
                            <thead>
                                <tr>
                                    <th>User</th>
                                    <th>Website</th>
                                    <th>Country</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div class="tbl-content">
                        <table cellpadding="0" cellspacing="0" border="0">
                            <tbody>

                                {
                                    rows.map(x => (
                                        <tr>
                                            <td href='#'>{x.user}</td>
                                            <td>{x.website}</td>
                                            <td>{x.country}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </section>

            </div>
        </div>
    )
}
export default Users