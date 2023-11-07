import AddProfilePage from "@/public/components/template/AddProfilePage";
import Profile from "@/public/models/Profile";
import connectDB from "@/public/utils/connectDB";

async function Edite({ params: { profileId } }) {
    await connectDB();
    const profile = await Profile.findOne({_id: profileId})
    if(!profile) {
        return <h3>مشکلی پیش آمده</h3>
    }
    return <AddProfilePage data={JSON.parse(JSON.stringify(profile))} />;
}

export default Edite;
