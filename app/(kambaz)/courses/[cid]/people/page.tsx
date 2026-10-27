import PeopleTable from "./table/page";

export default function People({
    params,
}: {
    params: Promise<{ cid: string }>;
}) {
    return (
        <div id="wd-people">
            <h2>People</h2>
            <PeopleTable params={params} />
        </div>
    );
}
