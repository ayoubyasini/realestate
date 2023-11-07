import DetailsPage from "@/public/components/template/DetailsPage";
import Profile from "@/public/models/Profile";
import connectDB from "@/public/utils/connectDB";

async function ProfileDetail({params: {profileId}}) {
  await connectDB();
  const profile = await Profile.findOne({ _id: profileId });
  return <DetailsPage data={profile} />;
}

export default ProfileDetail;
