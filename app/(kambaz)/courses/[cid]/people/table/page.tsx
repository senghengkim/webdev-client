import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
    return (
        <div id="wd-people-table" className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
                <thead>
                <tr className="border-b border-neutral-300">
                    <th className="p-2">Name</th>
                    <th className="p-2">Login ID</th>
                    <th className="p-2">Section</th>
                    <th className="p-2">Role</th>
                    <th className="p-2">Last Activity</th>
                    <th className="p-2">Total Activity</th>
                </tr>
                </thead>
                <tbody>
                <tr className="odd:bg-neutral-50">
                    <td className="p-2 text-nowrap">
                        <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
                        Tony Stark
                    </td>
                    <td className="p-2">001234561S</td>
                    <td className="p-2">S101</td>
                    <td className="p-2">STUDENT</td>
                    <td className="p-2">2020-10-01</td>
                    <td className="p-2">10:21:32</td>
                </tr>
                <tr className="odd:bg-neutral-50">
                    <td className="p-2 text-nowrap">
                        <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
                        Bruce Wayne
                    </td>
                    <td className="p-2">001234562S</td>
                    <td className="p-2">S101</td>
                    <td className="p-2">STUDENT</td>
                    <td className="p-2">2020-11-02</td>
                    <td className="p-2">23:32:23</td>
                </tr>
                <tr className="odd:bg-neutral-50">
                    <td className="p-2 text-nowrap">
                        <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
                        Steve Rogers
                    </td>
                    <td className="p-2">001234563S</td>
                    <td className="p-2">S101</td>
                    <td className="p-2">STUDENT</td>
                    <td className="p-2">2020-10-02</td>
                    <td className="p-2">13:21:32</td>
                </tr>
                <tr className="odd:bg-neutral-50">
                    <td className="p-2 text-nowrap">
                        <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
                        Natasha Romanoff
                    </td>
                    <td className="p-2">001234564S</td>
                    <td className="p-2">S101</td>
                    <td className="p-2">TA</td>
                    <td className="p-2">2020-11-05</td>
                    <td className="p-2">11:22:33</td>
                </tr>
                <tr className="odd:bg-neutral-50">
                    <td className="p-2 text-nowrap">
                        <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
                        Peter Parker
                    </td>
                    <td className="p-2">001234565S</td>
                    <td className="p-2">S101</td>
                    <td className="p-2">STUDENT</td>
                    <td className="p-2">2020-11-06</td>
                    <td className="p-2">08:14:27</td>
                </tr>
                <tr className="odd:bg-neutral-50">
                    <td className="p-2 text-nowrap">
                        <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
                        Diana Prince
                    </td>
                    <td className="p-2">001234566S</td>
                    <td className="p-2">S101</td>
                    <td className="p-2">STUDENT</td>
                    <td className="p-2">2020-11-07</td>
                    <td className="p-2">17:45:10</td>
                </tr>
                <tr className="odd:bg-neutral-50">
                    <td className="p-2 text-nowrap">
                        <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
                        Clark Kent
                    </td>
                    <td className="p-2">001234567S</td>
                    <td className="p-2">S101</td>
                    <td className="p-2">STUDENT</td>
                    <td className="p-2">2020-11-08</td>
                    <td className="p-2">19:03:44</td>
                </tr>
                <tr className="odd:bg-neutral-50">
                    <td className="p-2 text-nowrap">
                        <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
                        Jane Sample
                    </td>
                    <td className="p-2">001234568S</td>
                    <td className="p-2">S101</td>
                    <td className="p-2">STUDENT</td>
                    <td className="p-2">2020-11-09</td>
                    <td className="p-2">09:12:35</td>
                </tr>
                <tr className="odd:bg-neutral-50">
                    <td className="p-2 text-nowrap">
                        <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
                        Alex Sample
                    </td>
                    <td className="p-2">001234569S</td>
                    <td className="p-2">S101</td>
                    <td className="p-2">STUDENT</td>
                    <td className="p-2">2020-11-10</td>
                    <td className="p-2">14:26:48</td>
                </tr>
                <tr className="odd:bg-neutral-50">
                    <td className="p-2 text-nowrap">
                        <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
                        Sam Sample
                    </td>
                    <td className="p-2">001234570S</td>
                    <td className="p-2">S101</td>
                    <td className="p-2">STUDENT</td>
                    <td className="p-2">2020-11-11</td>
                    <td className="p-2">16:08:19</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}